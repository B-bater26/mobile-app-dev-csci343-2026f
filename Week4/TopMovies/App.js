import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { useState } from 'react';
import Movie from './components/Movies';

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "The Princess\nand the Frog",
      image: require("./assets/images/movie1.jpg"),
      rating: "10",
      id: 1
    },
    {
      name: "Up",
      image: require("./assets/images/movie2.jpg"),
      rating: "9.7",
      id: 2
    },
    {
      name: "Cars",
      image: require("./assets/images/movie3.jpg"),
      rating: "9.5",
      id: 3
    },
    {
      name: "The Wild Robot",
      image: require("./assets/images/movie4.jpg"),
      rating: "9.4",
      id: 4
    },
    {
      name: "The Emperor's\nNew Groove",
      image: require("./assets/images/movie5.jpg"),
      rating: "9.2",
      id: 5
    },
    {
      name: "Coco",
      image: require("./assets/images/movie6.jpg"),
      rating: "9",
      id: 6
    },
    {
      name: "Encanto",
      image: require("./assets/images/movie7.jpg"),
      rating: "8.9",
      id: 7
    },
    {
      name: "Toy Story",
      image: require("./assets/images/movie8.jpg"),
      rating: "8.7",
      id: 8
    },
    {
      name: "Moana",
      image: require("./assets/images/movie9.jpg"),
      rating: "8.5",
      id: 9
    },
    {
      name: "Lion King",
      image: require("./assets/images/movie10.jpg"),
      rating: "8.4",
      id: 10
    },
  ]);
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>
        
        <View style={styles.listContainer}>

          <FlatList
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}

            keyExtractor={(item, index) => (item.id)}

            data={movieItems}
            renderItem={(itemData) => {
              return (
                <Movie
                  rank={itemData.item.id}
                  name={itemData.item.name}
                  image={itemData.item.image}
                  rating={itemData.item.rating}
                />
              );
            }}
          
          />
        </View>
        
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#85affc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    justifytContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
    marginTop: 50
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  listContainer: {
    flex: 8,
    width: '90%'
  }

  

});
