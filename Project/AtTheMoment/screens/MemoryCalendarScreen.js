// This section was made with help from https://www.npmjs.com/package/react-native-calendars?activeTab=readme, found in resources_used

import { useState } from "react";
import { MEMORIES } from "../data/memoryData";
import { Calendar, LocaleConfige } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

export default function MemoryCalendarScreen() {
  // Screen memories
  const allMemories = MEMORIES;

  // Set up calendar date selector
  const [selected, setSelected] = useState("");

  // Set up navigation
  const navigation = useNavigation();

  // Pressed date to memory handler
  function dateToMemoryHandler(day) {
    console.log(day);
    navigation.navigate("MemoryDetail", {
      date: allMemories.date,
    });
  }


  
  


  return (
    <Calendar
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      onDayLongPress={(day) => {
        dateToMemoryHandler(day.dateString)
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: "red",
        },
      }}
    />
  );
}
