import { StatusBar } from 'expo-status-bar';
import { Modal, TextInput, Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [userQuestion, setUserQuestion] = useState("");
  const [magicAnswer, setMagicAnswer] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  // Functions+

  function startMagic() {
    if (userQuestion != "") {
      const randomAnswerIndex = Math.floor(Math.random() * (responses.length));
      let answer = responses[randomAnswerIndex];
      console.log(answer);
      setMagicAnswer(answer);
      setModalState(true);
    }
  }
  
  function setModalState(setVisible) {
    setModalIsVisible(setVisible);
  }
  
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

          <View style={styles.inputQuestionContainer}>
            <Text style={styles.inputLabel}>Ask Your Question</Text>
            <TextInput
            style={styles.textInput}
            placeholder="Enter your question"
            onChangeText={setUserQuestion}
            value={userQuestion}
            keyboardType="default"
            />
          </View>

        </View>

        <View style={styles.submitButtonContainer}>
          <Pressable
          android_ripple={{color: '#ba9cd8'}}
          onPress={startMagic}
          style = {({pressed}) => pressed && styles.pressedButton}
          >

            <View style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Ask Question</Text>
            </View>

          </Pressable>
        </View>


        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRoot}>
            <View style={styles.youAskedContainer}>
              <Text style={styles.youAskedText}>You asked...</Text>
              <Text style={styles.yourQuestionText}>{userQuestion}</Text>
            </View>
            <View style={styles.answerContainer}>
              <Text style={styles.the8BallSaysText}>The Magic 8 Ball says...</Text>
              <Text style={styles.magicAnswerText}>{magicAnswer}</Text>
            </View>
            <View style={styles.backButtonContainer}>
              <Button title="Ask Another Question" color="#b42ab4" onPress={() => setModalState(false)}/>
            </View>
          </SafeAreaView>
        </Modal>


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
    alignItems: 'center',
    marginHorizontal: 20
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
  modalRoot: {
    flex: 1,
    backgroundColor: '#a068d8',
    alignItems: 'center'
  },
  inputLabel: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  }, 
  textInput: {
    borderWidth: 1,
    borderColor: '#e5cbff',
    backgroundColor: '#e5cbff',
    color: "black",
    borderRadius: 6,
    width: "90%",
    padding: 12,
    marginBottom: 30,
    marginTop: 10

  },
  backButtonContainer : {
    width: "50%",
    marginHorizontal: 0,
    padding: 10,
    marginTop: 25,
  },
  inputQuestionContainer : {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },


  youAskedContainer : {
    width: "100%",
    alignItems: 'center',
    color: 'white',
    marginTop: 50,
    fontSize: 20,
    backgroundColor: '#6b2ba7'
  },
  youAskedText : {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  yourQuestionText : {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
    fontStyle: 'italic',
    color: '#ff7bc8'
  },
  answerContainer : {
    width: "100%",
    alignItems: 'center',
    backgroundColor: '#6b2ba7'
  },
  the8BallSaysText : {
    fontSize: 30,
    color: 'white',
    fontweight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  magicAnswerText : {
    fontSize: 45,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 35,
    backgroundColor: 'rgb(54, 0, 202)',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 3,
    padding: 10
  },
  
});

