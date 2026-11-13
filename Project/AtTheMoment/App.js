import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Colors from "./constants/colors";

// Default App Settings
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

// Navigation Elements (Stack)
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// Drawer function for navigation between the Memory Screens and Core Memory Screen
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Memories"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.accent300 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "Text",
          fontSize: 40,
          color: Colors.accent300,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary500 },
        drawerContentStyle: { backgroundColor: Colors.primary300 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent300,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="Memories"
        component={TabsNavigator}
        options={{
          title: "Memories",
          drawerLabel: "Memory Entry",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="CoreMemories"
        component={CoreMemoriesScreen}
        options={{
          title: "Core Memories",
          drawerLabel: "Core Memories",
          drawerIcon: ({ color, size }) => (
            <Entypo name="user" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Tabs Navigation between Memory Screens (List, Create, Calendar)
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "rgba(205, 206, 206, 0.76)",
        tabBarActiveTintColor: Colors.accent300,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          color: "white",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
          color: "white",
        },
      }}
    >
      <Tabs.Screen
        name="MemoryList"
        component={MemoryListScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="list" color={color} size={size} />
          ),
          tabBarLabel: "Memory List",
        }}
      />

      <Tabs.Screen
        name="MemoryCreation"
        component={MemoryCreationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="list" color={color} size={size} />
          ),
          tabBarLabel: "Memory Creation",
        }}
      />

      <Tabs.Screen
        name="MemoryCalendar"
        component={MemoryCalendarScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="list" color={color} size={size} />
          ),
          tabBarLabel: "Memory Calendar",
        }}
      />
    </Tabs.Navigator>
  );
}

// Default App Functions
export default function App() {
  const [loaded] = Font.useFonts({});

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DrawerScreen"
          screenOptions={{
            headerTintColor: Colors.primary300,
            headerStyle: { backgroundColor: Colors.primary500 },
            contentStyle: { backgroundColor: "black" },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MemoryDetails" component={MemoryDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
