import { StyleSheet, Text, View, Image } from "react-native";
import { NEWS } from "../data/dummy_data";
import { useLayoutEffect, useState } from "react";
import Colors from "../constants/colors";
import BookmarkButton from "../components/BookmarkButton";

export default function NewsDetailScreen(props) {
  const newsid = props.route.params.id;
  const selectedNews = NEWS.find((news) => news.id === newsid);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "Back to News",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedNews.imageUrl }} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>
          {selectedNews.headline.toLocaleString()}
        </Text>
        <Text style={styles.space}>{selectedNews.date.toLocaleString()}</Text>
        <Text style={styles.sources}>
          {selectedNews.author.toLocaleString()} |{" "}
          {selectedNews.agency.toLocaleString()}
        </Text>
        <Text style={styles.desc}>{selectedNews.desc.toLocaleString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
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
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  headline: {
    color: Colors.primary300,
    fontSize: 35,
    fontFamily: "Normal",
    paddingBottom: 5,
  },
  space: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "Light",
    paddingBottom: 5,
  },
  sources: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "Light",
    paddingBottom: 5,
  },
  desc: {
    color: Colors.primary300,
    width: "90%",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "Light",
  },
});
