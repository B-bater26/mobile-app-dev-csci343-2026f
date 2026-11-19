// The alert hook was made with help from https://reactnative.dev/docs/alert, found is docs

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Switch,
} from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import Colors from "../constants/colors";

export default function MemoryCreationScreen(props) {
  // Selection handlers
  const [memoryTitle, setMemoryTitle] = useState("");
  const [memoryText, setMemoryText] = useState("");
  const [selectedMood, setSelectedMood] = useState("0");

  // Switch Handler
  const [entry, onSetEntry] = useState(false);

  // Set up Mood Selectors
  const moodSelectors = useMemo(
    () => [
      {
        id: "0",
        label: "Neutral",
        value: "Neutral",
        borderColor: Colors.accent800,
        color: "grey",
      },
      {
        id: "1",
        label: "Happy",
        value: "Happy",
        borderColor: Colors.accent800,
        color: "yellow",
      },
      {
        id: "2",
        label: "Angry",
        value: "Angry",
        borderColor: Colors.accent800,
        color: "red",
      },
      {
        id: "3",
        label: "Sad",
        value: "Sad",
        borderColor: Colors.accent800,
        color: "blue",
      },
      {
        id: "4",
        label: "Nervous",
        value: "Nervous",
        borderColor: Colors.accent800,
        color: "purple",
      },
    ],
    [],
  );

  // Create Alert Button
  const alertEmpty = () =>
    Alert.alert(
      "Could Not Save Memory",
      "Your memory must have a title to be saved.",
      [
        {
          text: "Ok",
        },
      ],
    );

  // Camera Modal and Return Handlers for Navigation
  const navigation = useNavigation();

  function cameraHandler() {
    navigation.navigate("CameraModal");
  }

  function returnHandler() {
    if (memoryTitle.trim().length > 0) {
      navigation.navigate("MemoryList");
    } else {
      alertEmpty();
    }
  }

  // Return input areas for screen
  return (
    <View style={styles.rootContainer}>
      <View style={styles.itemContainer}>
        <TextInput
          onChangeText={setMemoryTitle}
          placeholder="Title Your Memory"
          style={styles.memoryTitle}
        />
      </View>
      <View style={styles.itemContainer}>
        <RadioGroup
          radioButtons={moodSelectors}
          onPress={setSelectedMood}
          selectedId={selectedMood}
          layout="row"
        ></RadioGroup>
      </View>
      <View style={styles.itemContainer}>
        <Switch
          onValueChange={onSetEntry}
          value={entry}
          thumbColor={entry ? Colors.primary300 : Colors.primary500}
          trackColor={{ false: "#767577", true: "#d2ddf0" }}
        />
      </View>
      <View style={styles.itemContainer}>
        <TextInput
          onChangeText={setMemoryText}
          placeholder="Describe Your Memory"
          style={styles.memoryText}
          readOnly={!entry}
          editable={!entry}
        />
      </View>
      <View style={styles.itemContainer}>
        <Pressable
          android_ripple={{ color: Colors.accent800 }}
          onPress={cameraHandler}
        >
          <Text>Take Memory Picture</Text>
        </Pressable>
      </View>

      <View style={styles.itemContainer}>
        <Pressable
          android_ripple={{ color: Colors.accent800 }}
          onPress={returnHandler}
        >
          <Text>Create Memory</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
  },
  memoryTitle: {
    color: Colors.primary300,
    fontWeight: "bold",
    fontSize: 30,
  },
  memoryText: {
    color: Colors.primary800,
  },
});
