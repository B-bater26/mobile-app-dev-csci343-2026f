// This code was created using help from https://docs.expo.dev/versions/latest/sdk/camera/ (Found in /docs/resources_used)

import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function CameraModal() {
  // Set up states for camera
  const [facing, setFace] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  // If permissions are not yet granted, return a blank view until granted
  if (!permission) {
    return <View></View>;
  }

  // If permissions are not allowed, warn the user and offer a button
  if (!permission.granted) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.notifyMessage}>
          Please enable your camera permissions to take a memory picture
        </Text>
        <Button onPress={requestPermission} title="Grant Camera Permissions" />
      </View>
    );
  }

  // Toggle the camera's facing direction
  function toggleCameraFace() {
    setFace(current => (current === "back" ? "front" : "back"));
  }

  // Return the Camera View

  return (
    <View style={styles.rootContainer}>
      <CameraView style={styles.cameraStyle} facing={facing}>
        <View style={styles.flipContainer}>
          <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFace}>
            <Entypo name="cycle" size={30} color="grey" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center"
  },
  notifyMessage: {
    textAlign: "center",
    paddingBottom: 10,
  },
  cameraStyle: {
    flex: 1
  },
  flipContainer: {
    position: "absolute",
    bottom: 64,
    flexDirection: "row",
    backgroundColor: "transparent",
    width: "100%",
    paddingHorizontal: 64
  },
  flipButton: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
  }
})