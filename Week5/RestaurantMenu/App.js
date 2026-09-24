import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MenuScreen from './screens/MenuScreen';
import BaseScreen from './screens/BaseScreen';


export default function App() {
  const [currentScreen, setCurrentScreen] = useState("base");

  function menuScreenHandler() {
    setCurrentScreen("menu")
  }

  function baseScreenHandler() {
    setCurrentScreen("base")
  }

  let screen = <BaseScreen onNext={menuScreenHandler}/>;

  if (currentScreen == "menu") {
    screen = <MenuScreen onNext={baseScreenHandler}/>
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb68b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
