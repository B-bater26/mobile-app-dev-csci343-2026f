import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import Colors from "./constants/colors";

export default function App() {
  const [fontsLoaded] = useFonts ({
    cursive1: require("./assets/fonts/Cursive1.ttf"),
    fuzzy: require("./assets/fonts/Fuzzy.ttf")
  });

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentID, setCurrentID] = useState(4);
  const [currentRecipe, setCurrentRecipe] = useState([
    {
      id: 1,
      title: "Pizza Recipe",
      text: "\nIngredients:\nDough\nCheese\nSauce\n\nInstructions:\nKneed Dough\nBake dough briefly\nPut sauce on dough\nPut cheese on dough\nBake until complete"
    },
    {
      id: 2,
      title: "Toast",
      text: "\nIngredients:\nSlice of Bread\nButter\nToaster\n\nInstructions:\nPut bread in toaster\nTurn on toaster\nWait for toast\nPut butter on toast"
    },
    {
      id: 3,
      title: "Baked Potato",
      text: "\nIngredients:\nPotato\nSalt\nGround Pepper\n\nInstructions:\nBake potato\nSalt potato\nPepper potato"
    },
  ])

  function homeScreenHandler() {
    setCurrentScreen("")
  }

  function recipeScreenHandler() {
    setCurrentScreen("recipes")
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add")
  }

  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText){
    setCurrentRecipe((currentRecipe) => [
      ...currentRecipe,
      {id: currentID, title: enteredRecipeTitle, text: enteredRecipeText}
    ]);
    setCurrentID(currentID + 1)
    recipeScreenHandler();
  }

  function deleteRecipeHandler(id){
    setCurrentRecipe((currentRecipe) => {
      return currentRecipe.filter((item) => item.id != id);
    })
  }
  
  let screen = <HomeScreen onNext={recipeScreenHandler} />

  if (currentScreen === "recipes") {
    screen = <RecipeScreen 
    onHome={homeScreenHandler}
    onAdd={addRecipeScreenHandler}
    onDelete={deleteRecipeHandler} 
    currentRecipe={currentRecipe}
    />
  }

  if (currentScreen === "add") {
    screen = <AddRecipeScreen 
    onCancel={recipeScreenHandler}
    onAdd={addRecipeHandler}
    />
  }

  return (
    <>
      <StatusBar style="auto"/>
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
