import { StyleSheet, Text, View } from "react-native";
import { CoreContext } from "../store/context/core-context";
import { useContext } from "react";
import List from "../components/List/List";
import { MEMORIES } from "../data/memoryData";
import Colors from "../constants/colors";

export default function CoreMemoriesScreen() {
  // Declare Context for Cores
  const coreMemoriesCtx = useContext(CoreContext);
  const coreMemories = MEMORIES.filter((memoryItem) => {
    return coreMemoriesCtx.ids.includes(memoryItem.id);
  });

  // Without Core Memories, let use know they can Select Core Memories
  if (coreMemories.length === 0) {
    return (
      <View>
        <Text>You can save Core Memories using the Heart Button!</Text>
      </View>
    );
  } else {
    return <List items={coreMemories} />;
  }
}
