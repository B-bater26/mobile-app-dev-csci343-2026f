import { View, StyleSheet, FlatList } from "react-native";
import MemoryItem from "./MemoryItem";
import Colors from "../../constants/colors";

export default function List(props) {
  // Function that renders memories from item data
  function renderMemoryItem(itemData) {
    const newsItemProps = {};
    return <MemoryItem {...newsItemProps} />;
  }

  return (
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