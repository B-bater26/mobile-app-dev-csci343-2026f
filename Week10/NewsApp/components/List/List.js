import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";
import Colors from "../../constants/colors";

export default function List(props) {
  function renderNewsItem(itemData) {
    const newsItemProps = {
      id: itemData.item.id,
      category: itemData.item.category,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      desc: itemData.item.desc,
      imageUrl: itemData.item.imageUrl,
      listIndex: itemData.index
    };
    return <NewsItem {...newsItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.primary800
    }
});
