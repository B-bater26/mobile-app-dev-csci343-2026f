import { View, StyleSheet, FlatList } from "react-native";
import MemoryItem from "./MemoryItem";
import Colors from "../../constants/colors";

export default function List(props) {
  // Function that renders memories from item data
  function renderMemoryItem(itemData) {
    const memoryItemProps = {
      id: itemData.item.id,
      header: itemData.item.header,
      date: itemData.item.date,
      moods: itemData.item.moods,
      body: itemData.item.body,
      imageUrl: itemData.item.imageUrl,
      listIndex: itemData.index
    };
    return <MemoryItem {...memoryItemProps} />;
  }

  return (
    // REturn a FlatList of memory items
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderMemoryItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.primary500
    }
});