import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckBox from "react-native-bouncy-checkbox";

import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

export default function HomeScreen(props) {
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
                <Title>Bailey's Bike Repair</Title>
            </View>

            <ScrollView style={styles.scrollContainer}>

                
                <View style={styles.radioContainer}>
                    <Text style={styles.radioHeader}>Service Time:</Text>
                    <RadioGroup
                        radioButtons={props.repairTimeRadioButtons}
                        onPress={props.onSetRepairId}
                        selectedId={props.repairTimeId}
                        layout="row"
                        containerStyle={styles.radioGroup}
                        labelStyle={styles.radioGroupLabel}
                    >
                    </RadioGroup>
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Services:</Text>

                        <View style={styles.checkBoxSubContainer}>
                            {
                                props.services.map((item) => (
                                    <BouncyCheckBox
                                    key={item.id}
                                    text={item.name}
                                    onPress={props.onSetServices.bind(this, item.id)}
                                    textStyle={{
                                        textDecorationLine: "none",
                                        color: Colors.primary500,
                                        fontFamily: "Bubble",
                                        fontSize: 18
                                    }}
                                    innerIconStyle={{
                                        borderRadius: 0,
                                        borderColor: Colors.primary500
                                    }}
                                    iconStyle={{borderRadius: 0}}
                                    fillColor={ Colors.primary500 }
                                    style={styles.checkBox}
                                    />
                                ))
                            }
                        </View>
                    </View>
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.signUpContainer}>
                        <View style={styles.switchContainer}>
                            <Text style={styles.switchLabel}>Sign Up for Our News Letter? </Text>
                            <Switch
                                onValueChange={props.onSetNewsletter}
                                value={props.newsletter}
                                thumbColor={
                                    props.newsletter ? Colors.primary500 : Colors.primary800
                                }
                                trackColor={{false: "#767577", true: "#d2ddf0"}}
                            />
                        </View>
                        <View style={styles.switchContainer}>
                            <Text style={styles.switchLabel}>Sign Up for Our Rental Membership? </Text>
                            <Switch
                                onValueChange={props.onSetRentalMembership}
                                value={props.rentalMembership}
                                thumbColor={
                                    props.rentalMembership ? Colors.primary500 : Colors.primary800
                                }
                                trackColor={{false: "#767577", true: "#d2ddf0"}}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <NavButton onPress={props.onNext}>
                        Submit Order
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
    radioContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioHeader: {
        fontSize: 30,
        color: Colors.primary500,
        fontFamily: "Bubble"
    },
    radioGroup: {
        paddingBottom: 20,
    },
    radioGroupLabel: {
        fontSize: 15,
        color: Colors.primary500,
        fontFamily: "Bubble"
    },
    rowContainer: {
        justifyContent: 'space-evenly',
        paddingBottom: 20
    },
    checkBoxContainer: {},
    checkBoxHeader: {
        fontSize: 20,
        color: Colors.primary500,
        fontFamily: "Bubble"
    },
    checkBoxSubContainer: {
        padding: 2
    },
    checkBox: {
        padding: 2
    },
    signUpContainer: {
        justifyContent: "space-between"
    },
    switchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    switchLabel: {
        fontSize: 20,
        color: Colors.primary500,
        fontFamily: "Bubble"
    },
    buttonContainer: {
        alignItems: 'center',
    }


    
})