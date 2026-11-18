// This section was made with help from https://www.npmjs.com/package/react-native-calendars?activeTab=readme, found in resources_used

import { useState } from "react";
import { MEMORIES } from "../data/memoryData";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export default function MemoryCalendarScreen() {
  // Set up calendar date selector
  const [selected, setSelected] = useState("");

  // Set up lower screen date text display
  const [dateDisplay, setDateDisplay] = useState("Select a Date");

  // Set up navigation
  const navigation = useNavigation();

  // Function for navigating to day
  function navigateToDay(memory) {
    if (memory) {
      navigation.navigate("MemoryDetail", {
        id: memory.id,
      });
    }
  }

  // Pressed date to memory handler
  function dateToMemoryHandler(day) {
    const memoryOnDay = MEMORIES.find((memoryItem) => {
      return memoryItem.date === day;
    });

    return memoryOnDay;
  }

  return (
    <View>
      <View>
        <Calendar
          onDayPress={(day) => {
            const dayString = day.dateString;
            setSelected(dayString);
            const memoryValidate = dateToMemoryHandler(dayString);
            const phrase = memoryValidate ? "You have a memory on this day!\nHold the Date to Open It" : "You don't have a memory for this day."
            setDateDisplay(`${dayString}: ${phrase}`)
          }}
          onDayLongPress={(day) => {
            const memory = dateToMemoryHandler(day.dateString);
            navigateToDay(memory);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              selectedDotColor: "red",
            },
          }}
        />
      </View>
      <View>
        <Text>{dateDisplay}</Text>
      </View>
    </View>
  );
}
