import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [restaurantItems, setRestaurantItems] = useState([
    {
      name: "Buffalo Wild Wings",
      image: require("./assets/images/bww.jpg"),
      rating: "8.7",
    },
    {
      name: "Moe's Southwest Grill",
      image: require("./assets/images/moes.jpg"),
      rating: "8.5",
    },
    {
      name: "Gino's New York Pizza",
      image: require("./assets/images/ginos.jpg"),
      rating: "8",
    },
    {
      name: "Yamato's Japanese Steakhouse",
      image: require("./assets/images/yamatos.jpg"),
      rating: "7.5",
    },
    {
      name: "Five Guys:\n Burgers and Fries",
      image: require("./assets/images/fiveguys.jpg"),
      rating: "7",
    },
  ]);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
