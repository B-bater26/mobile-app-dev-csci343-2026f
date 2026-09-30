import { StyleSheet, Text, View } from 'react-native';
import NavButton from '../components/NavButton';



export default function AddeRecipeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is Add Recipe Screen</Text>

      <View>
        <NavButton onNext={props.onCancel}>Cancel</NavButton>
      </View>
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
