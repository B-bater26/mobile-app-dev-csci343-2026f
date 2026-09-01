import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('./assets/images/image_bailey.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>
            Bailey Baxter
          </Text>
          <Text>
            baileysprojectsonline@gmail.com
          </Text>
          <Text>
            843-582-7151
          </Text>
          <Text>
            https://github.com/B-bater26
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b0e0e6'
  },
  imageContainer: {
    flex: 2,
    paddingTop: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: 'cover',
    borderColor: 'black',
    borderWidth: 5
  }
});
