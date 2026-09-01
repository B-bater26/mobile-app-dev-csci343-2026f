import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking} from 'react-native';

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
          <Text style={styles.name}>
            Bailey Baxter
          </Text>
          <Text
          style={styles.text}
          onPress={ () => {
            Linking.openURL('mailto:baileysprojectsonline@gmail.com');
          } } >
            baileysprojectsonline@gmail.com
          </Text>
          <Text 
          style={styles.text}
          onPress={ () => {
            Linking.openURL('tel:8435827151');
          } } 
          >
            843-582-7151
          </Text>
          <Text
          style={styles.text}
          onPress={ () => {
            Linking.openURL('https://github.com/B-bater26');
          } } 
          >
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
    backgroundColor: '#000714'
  },
  imageContainer: {
    flex: 2,
    paddingTop: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: 'cover',
    borderColor: 'white',
    borderWidth: 5
  },
  textContainer: {
    flex: 7,
    width: '100%',
    justifyContent: 'center'
  },
  name: {
    fontSize: 55,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 100
  },
  text: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 20
  } 
});
