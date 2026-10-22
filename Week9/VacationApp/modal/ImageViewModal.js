import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function ImageViewModal(props) {
  return (
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{props.stringVal}</Text>
          </View>
          <Button title="Return to Destinations" onPress={props.onClose} />
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8B4513",
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    padding: 5,
    fontWeight: "bold",
    color: Colors.primary300,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center"
    
  }

});
