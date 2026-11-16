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
      <View>
        <Text>
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
    <View>
      <CameraView facing={facing}>
        <View>
          <TouchableOpacity onPress={toggleCameraFace}>
            <Entypo name="cycle" color="grey" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
