import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { COUNTRIES, DESTINATIONS } from "../data/dummy-data";
import DestinationItem from "../components/DestinationItem";

export default function VacationOverviewScreen(props) {
  const countryId = props.route.params.countryId;

  useLayoutEffect(() => {
    const country = COUNTRIES.find((country) => country.id === countryId);
    props.navigation.setOptions({ title: country ? country.name : null });
  }, [countryId, props.navigation]);

  const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
    return destinationItem.countryId === countryId;
  });

  function renderDestionationItem(itemData) {
    const destinationItemProps = {
      name: itemData.item.name,
      averageCost: itemData.item.averageCost,
      foundedYear: itemData.item.foundedYear,
      rating: itemData.item.rating,
      description: itemData.item.description,
      imageUrl: itemData.item.imageUrl,
      listIndex: itemData.index,
      stringVal: itemData.item.stringVal
    };
    return <DestinationItem {...destinationItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedDestinations}
        keyExtractor={(item) => item.id}
        renderItem={renderDestionationItem}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})