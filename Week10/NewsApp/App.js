import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Colors from "./constants/colors";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import USNewsScreen from "./screens/USNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import TechNewsScreen from "./screens/TechNewsScreen";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator(){
  return (
    <Drawer.Navigator
    initialRouteName="News"
    screenOptions={{
      headerStyle: { backgroundColor: Colors.primary500},
      headerTintColor: "white",
      headerTitleStyle: {
        fontFamily: "Normal",
        fontSize: 40,
        color: Colors.accent800
      },
      sceneContainerStyle: { backgroundColor: Colors.primary300 },
      drawerContentStyle: { backgroundColor: Colors.primary500 },
      drawerInactiveTintColor: Colors.primary300,
      drawerActiveTintColor: Colors.accent300,
      drawerActiveBackgroundColor: Colors.primary800
    }}>
      <Drawer.Screen
      name="News"
      component={TabsNavigator}
      />

  
      <Drawer.Screen
      name="BookmarkedList"
      component={BookmarkScreen}
      />

    </Drawer.Navigator>
  )
}

function TabsNavigator(){
  return (
    <Tabs.Navigator>
      <Tabs.Screen 
      name="USNews"
      component={USNewsScreen}/>
      <Tabs.Screen 
      name="WorldNews"
      component={WorldNewsScreen}/>
      <Tabs.Screen 
      name="TechNews"
      component={TechNewsScreen}/>

    </Tabs.Navigator>
  )
}

export default function App() {
  const [loaded] = Font.useFonts({
    Light: require("./assets/fonts/Light.ttf"),
    Normal: require("./assets/fonts/Normal.ttf"),
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
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="DrawerScreen"
        screenOptions={{
          headerTintColor: Colors.primary300,
          headerStyle: { backgroundColor: Colors.primary500 },
          contentStyle: { backgroundColor: "black"}
        }}>
          <Stack.Screen 
          name="DrawerScreen"
          component={DrawerNavigator}
          options={{
            headerShown: false
          }}/>
          <Stack.Screen 
          name="NewsDetail"
          component={NewsDetailScreen}
          options={{
            headerShown: false
          }}/>
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
