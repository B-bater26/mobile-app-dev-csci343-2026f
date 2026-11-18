import { View, Text, StyleSheet, Image } from "react-native";
import { MEMORIES } from "../data/memoryData";
import { useLayoutEffect, useState } from "react";
import HeartButton from "../components/HeartButton";
import { useContext } from "react";
import { CoreContext } from "../store/context/core-context";

import Colors from "../constants/colors";

export default function MemoryDetailsScreen(props) {
  // Grab context from Cores
  const coreMemoriesCtx = useContext(CoreContext);

  // Set up ID information
  const memoryid = props.route.params.id;
  const selectedMemory = MEMORIES.find((memory) => memory.id === memoryid);

  // Determine if Core
  const memoryIsCore = coreMemoriesCtx.ids.includes(memoryid);

  // Handle changes in core memories
  function changeCoreStatusHandler() {
    if (memoryIsCore) {
      coreMemoriesCtx.removeCore(memoryid);
    } else {
      coreMemoriesCtx.addCore(memoryid);
    }
  }

  // Header and Heart Button Context
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "Return to Memories",
      headerRight: () => {
        return (
          <HeartButton
            isCore={memoryIsCore}
            onPress={changeCoreStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeCoreStatusHandler]);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedMemory.imageUrl }} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.header}>{selectedMemory.header}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.date}>{selectedMemory.date}</Text>
        <Text style={styles.mood}>{selectedMemory.moods}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.body}>{selectedMemory.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 30,
    borderRadius: 7,
    backgroundColor: Colors.accent300,
    flex: 1
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    color: "white",
    backgroundColor: Colors.accent500,
  },
  header: {
    fontSize: 35,
    fontFamily: "Normal",
    paddingBottom: 2,
    color: "white",
  },
  date: {
    fontSize: 30,
    fontFamily: "Normal",
    paddingBottom: 5,
    color: "white",
  },
  mood: {
    fontSize: 25,
    fontFamily: "Normal",
    paddingBottom: 5,
    color: "white",
  },
  body: {
    fontSize: 15,
    fontFamily: "Normal",
    paddingBottom: 5,
    color: "white",
    width: "50%"
  }
});
