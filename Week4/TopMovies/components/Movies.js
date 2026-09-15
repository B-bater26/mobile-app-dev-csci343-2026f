import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function Movie(props) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>#{props.rank} - {props.name}</Text>
            </View>
            <View style={styles.itemPosterContainer}>
                <Image style={styles.itemPoster} source={props.image} />
            </View>
            <View style={styles.itemRatingContainer}>
                <Text style={styles.itemRating}>{props.rating}★</Text>
            </View>
        </View>
    )
}  

const styles = StyleSheet.create({
    itemContainer: {
    marginBottom: 20,
  },
  itemTitleContainer: {
    backgroundColor: "#c4fae8",
    borderWidth: 3,
    borderRadius: 5 
  },
  itemTitle: {
    fontSize: 30,
    textAlign: 'center'
  },
  itemPosterContainer: {
    allignItems: 'center',
    borderWidth: 3,
    borderRadius: 5
  },
  itemPoster: {
    width: '100%',
    height: 500,
    resizeMode: 'cover'
  },
  itemRatingContainer: {
    backgroundColor: "green",
    borderWidth: 3,
    borderRadius: 5
  },
  itemRating: {
    fontSize: 30,
    textAlign: 'center',
    color: 'gold',
  }



})