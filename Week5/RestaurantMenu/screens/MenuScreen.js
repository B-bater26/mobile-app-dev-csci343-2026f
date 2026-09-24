import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from "../components/Title"
import MenuItem from "../components/MenuItems"

export default function MenuScreen(props) {

    const [menuItems, setMenuItems] = useState([
        {
            name: "Nachos - $14.99",
            image: require("../assets/images/nachos.jpg"),
            desc: "Corn tortilla chip nachos served\nwith queso and cheddar jack cheese.\nYour choice of Grilled Shrimp or Chicken",
            id: 1
        },
        {
            name: "Tacos! - $18.99",
            image: require("../assets/images/tacos.jpg"),
            desc: "Three soft flour shells with Montery\n Cheddar Jack Cheese, Pico de Gallo,\n and Tortilla chips.",
            id: 2
        },
        {
            name: "Jumbo Shrimp - $29.99",
            image: require("../assets/images/shrimp.jpg"),
            desc: "Grilled, Blackened, or Fried Jumbo Shrimp.",
            id: 3
        },
        {
            name: "Chicken Tenders - $21.99",
            image: require("../assets/images/chicken.jpg"),
            desc: "Grilled, Blackened, or Fried Chicken Tenders.",
            id: 4
        },
        {
            name: "Key Lime Pie - $12.99",
            image: require("../assets/images/keylime.jpg"),
            desc: "Key Lime Pie made just like it is in the keys!",
            id: 5
        },
        
        
    ]);
    const insets = useSafeAreaInsets();
  return (
    <View style={[
        styles.rootContainer,
        {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRightL: insets.right
        }
    ]}>
        <View style={styles.titleContainer}>
            <Title>Lulu's Menu</Title>
        </View>

        <View style={styles.listContainer}>
            <FlatList 
            data={menuItems}
            keyExtractor={(item, index) => {
                return item.id;
            }}
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => {
                return (
                    <MenuItem 
                    name={itemData.item.name}
                    image={itemData.item.image}
                    desc={itemData.item.desc}
                    />
                )
            }}/>
        </View>

        <View style={styles.buttonContainer}>
            <Button title="Main Menu" onPress={props.onNext} />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ffb68b',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  listContainer: {
    flex: 7,
    width: 380
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 40,
    alignContent: "center",
    marginRight: 100,
    marginLeft: 100
  },

});