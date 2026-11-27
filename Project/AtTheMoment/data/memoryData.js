// Made with help from https://stackoverflow.com/questions/48194482/react-native-return-all-json-data-in-asyncstorage in resources_used
import Memories from "../models/memories";
import getData from "../store/storage/get-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

/* Data storage for Memories */

function createMemories(keyList) { 
    for (let i = 0; i < keyList.length; i++) {
        console.log(keyList[i]);
    }
}

export async function keyCollection() {
    try {
      const keyList = await AsyncStorage.getAllKeys();
      const keyListResult = await AsyncStorage.multiGet(keyList);
      console.log(keyListResult);
      createMemories(keyListResult);
    } catch (e) {
        console.error(e);
    }
    console.log("Done")
}

export const MEMORIES = [
  
];

/*
new Memories(
    "2026-10-25",
    "My first job",
    "2026-10-25",
    "Nervous",
    "I got my first job today... it feels fake tbh. I want to suceed, but im scared i wont be able to.",
    "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
  ),
  new Memories(
    "2026-11-08",
    "Lost my Bike Today",
    "2026-11-08",
    "Sad",
    "",
    "https://cdn.pixabay.com/photo/2018/11/26/10/43/ally-3839139_1280.jpg",
  ),
  new Memories(
    "2026-11-09",
    "Saw the Sunrise Today",
    "2026-11-09",
    "Happy",
    "I was off today, but I want to better myself. So I woke up early and walked for 30 minutes. I saw the sunrise.",
    "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg",
  ),

*/