import { View, Text } from "react-native";

export default function HomeScreen(props) {
  function renderCountryItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("VacationOverview", {
        countryId: itemData.item.id,
      });
    }

    return (
        <CountryGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
        />
    )
  }
  return (
    <View>
        
    </View>
  );
}
