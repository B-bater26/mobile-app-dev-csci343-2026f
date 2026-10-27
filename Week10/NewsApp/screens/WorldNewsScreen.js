import { StyleSheet, Text, View } from 'react-native';

export default function WorldNewsScreen() {
  return (
    <View style={styles.container}>
      <Text>World News Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
