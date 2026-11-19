// This code was made with help from https://docs.expo.dev/versions/latest/sdk/async-storage/ and https://react-native-async-storage.github.io/2.0/Usage/ in resources_used
import AsyncStorage from "@react-native-async-storage/async-storage";

// Reading data (Boilerplate for now)
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("key");
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    console.log(`Error in Finding Saved Data: ${e}`);
  }
};

export default getData;
