import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import Colors from "./constants/colors";
import MemoryDetailsScreen from "./modals/MemoryDetailModal";
import MemoryCalendarScreen from "./screens/MemoryCalendarScreen";
import MemoryCreationScreen from "./screens/MemoryCreationScreen";
import MemoryListScreen from "./screens/MemoryListScreen";
import CoreMemoriesScreen from "./screens/CoreMemoriesScreen";
import CameraModal from "./modals/CameraModal";
import CoreContextProvider from "./store/context/core-context";

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
        headerStyle: { backgroundColor: Colors.primary800 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "Normal",
          fontSize: 40,
          color: Colors.accent300,
        },
        sceneContainerStyle: { backgroundColor: Colors.accent500 },
        drawerContentStyle: { backgroundColor: Colors.accent500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.primary300,
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
            <Entypo name="heart" color={color} size={size} />
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
          backgroundColor: Colors.primary800,
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
            <Entypo name="pencil" color={color} size={size} />
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
            <Entypo name="calendar" color={color} size={size} />
          ),
          tabBarLabel: "Memory Calendar",
        }}
      />
    </Tabs.Navigator>
  );
}

// Default App Functions
export default function App() {
  const [loaded] = Font.useFonts({
    Normal: require("./assets/fonts/AgravePro-VariableFont_wght.ttf"),
  });

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
      <CoreContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTintColor: Colors.accent500,
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
            <Stack.Group
              navigationKey="Modal"
              screenOptions={{
                presentation: "modal",
              }}
            >
              <Stack.Screen
                name="MemoryDetail"
                component={MemoryDetailsScreen}
              />
            </Stack.Group>
            <Stack.Group
              navigationKey="ModalCam"
              screenOptions={{
                presentation: "modal",
              }}
            >
              <Stack.Screen name="CameraModal" component={CameraModal} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </CoreContextProvider>
    </>
  );
}

