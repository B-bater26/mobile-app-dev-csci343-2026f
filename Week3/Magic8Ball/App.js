import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.root}>

        <View style={styles.titleContainer}>

          <Text style={styles.title}>Magic 8 Ball</Text>

        </View>

        <View style={styles.m8bContainer}>

          <View style={styles.magic8Ball}>
            <Text style={styles.magic8BallText}>8</Text>
          </View>

          <View>

          </View>

        </View>

        <View style={styles.submitButtonContainer}>
          <Pressable
          android_ripple={{color: '#ba9cd8'}}
          onPress={ () => {} }
          style = {({pressed}) => pressed && styles.pressedButton}
          >

            <View style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Ask Question</Text>
            </View>

          </Pressable>
        </View>


      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#67438a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    backgroundColor: 'black',
    width: '90%',
    justifyContent: 'center',
    margin: 20,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 20,
    marginTop: 50
  },
  title: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center'
  },
  submitButtonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  submitButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10
  
  },
  submitButtonText: {
    color: 'black',
    padding: 8,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  
  },
  pressedButton: {
    opacity: 0.5,
  },
  m8bContainer: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'

  },
  magic8Ball: {
    borderWidth: 5,
    margin: 20,
    width: "85%",
    padding: 100,
    backgroundColor: 'black',
    borderRadius: 360,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  magic8BallText: {
    fontSize: 30,
    fontWWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 360,
    padding: 20,
    width: '100%',
    backgroundColor: 'white'

  },
});

//<Button onPress={ () => {} } title="Ask Question" color="red"/>
