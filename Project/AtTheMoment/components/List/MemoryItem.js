import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Colors from "../../constants/colors";

export default function MemoryItem(props) {
  // Navigation Object for navigating
  const navigation = useNavigation();

  // Selected memory handling for navigating
  function selectedListHandler() {
    navigation.navigate("MemoryDetail", {
      id: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#4d4d4d" : "#b1b1b1" },
      ]}
    >
      <Pressable onPress={selectedListHandler}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: props.imageUrl,
            }}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.header}>{props.header}</Text>
            <Text style={styles.date}>{props.date}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
