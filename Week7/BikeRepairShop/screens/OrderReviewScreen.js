import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";


export default function OrderReviewScreen(props){
    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.container,
                { 
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right
                }
            ]}
        >
            <View style={styles.titleContainer}>
                <Title>Order Summary</Title>
            </View>


            <ScrollView style={styles.scrollContainer}>
              
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>
                        Your order has been placed with your order details below
                    </Text>

                </View>

                <View style={styles.servicesContainer}>
                    <Text style={styles.service}>Repair Time:</Text>
                    <Text style={styles.serviceItem}>{props.repairTime}</Text>

                    <Text style={styles.service}>Services:</Text>
                    
                    {props.services.map((item) => {
                        if (item.value) {
                            return (
                                <Text key={item.id} style={styles.serviceItem}>
                                    {item.name}
                                </Text>
                            )
                        }
                    })} 

                    <Text style={styles.service}>Sign-ups:</Text>
                    <Text style={styles.serviceItem}>Newsletter - 
                        {props.newsletter ? "Yes!" : "Maybe Next Time!"}
                    </Text>
                    <Text style={styles.serviceItem}>Membership -
                        {props.rentalMembership ? "Yes!" : "Maybe Next Time!"}
                    </Text>

                    
                    

                </View>

                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)}</Text>

                    <Text style={styles.subTitle}>Sales Tax: ${(props.price * 0.06).toFixed(2)}</Text>

                    <Text style={styles.subTitle}>Total: ${(props.price + (props.price * 0.06)).toFixed(2)}</Text>

                </View>

                <View style={styles.buttonContainer}>
                    <NavButton onNext={props.onNext}>
                        Return Home
                    </NavButton>
                </View>






            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.accent500,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        margin: 15,
        marginBottom: 10,
        borderWidth: 5,
        borderRadius: 5,
        paddingHorizontal: 30,
        borderColor: Colors.primary500,
        
    },
    scrollContainer: {
        flex: 1
    }, 
    subTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        padding: 15
    },
    subTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.primary500
    },
    servicesContainer: {
        flex: 3
    },
    service: {
        fontSize: 20,
        fontFamily: "Bubble",
        color: Colors.primary500
    },
    serviceItem: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.primary500
    },
    buttonContainer: {
        alignItems: 'center',
    }
});