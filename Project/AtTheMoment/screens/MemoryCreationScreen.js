import { StyleSheet, View, Text, Image, ScrollView, TextInput } from "react-native";
import List from "../components/List/List";
import { MEMORIES } from "../data/memoryData";
import { useState } from "react";
import Colors from "../constants/colors";

export default function MemoryCreationScreen(props) {
  // Selection handlers
  const [memoryTitle, setMemoryTitle] = useState("");
  const [memoryText, setMemoryText] = useState("");
  // Return input areas for screen
  return (
    <View>
      <View>
        <TextInput
          onChangeText={setMemoryTitle}
          placeholder="Title Your Memory"
          style={styles.memoryTitle}
        />
      </View>
      <View>
        <TextInput
          onChangeText={setMemoryText}
          placeholder="Describe Your Memory"
          style={styles.memoryText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  memoryTitle: {
    color: Colors.primary300,
    fontWeight: "bold",
    fontSize: 30
  },
  memoryText: {
    color: Colors.primary800
  }
})
