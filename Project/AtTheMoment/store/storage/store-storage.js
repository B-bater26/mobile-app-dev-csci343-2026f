// This code was made with help from https://docs.expo.dev/versions/latest/sdk/async-storage/ and https://react-native-async-storage.github.io/2.0/Usage/ in resources_used
import AsyncStorage from "@react-native-async-storage/async-storage";


// Saving data (Boilerplate for now)
const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('key', value)
    } catch (e) {
        console.log(`Error in Saving: ${e}`);
    }
}

export default storeData;