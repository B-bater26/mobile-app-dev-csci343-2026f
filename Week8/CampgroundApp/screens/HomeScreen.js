import {
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import WheelPicker from "react-native-wheely";

import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckInPicker();
    }
    setCheckIn(currentDate);
  }

  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckOutPicker();
    }
    setCheckOut(currentDate);
  }

  // Guest Count

  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [numGuests, setNumGuests] = useState(0);
  const [showNumGuests, setShowNumGuests] = useState(false);

  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }

  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }

  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  // Campground Count

  const campgrounds = [1, 2, 3, 4, 5];
  const [numCampgrounds, setNumCampgrounds] = useState(0);
  const [showNumCampgrounds, setShowNumCampgrounds] = useState(false);

  function showNumCampgroundsPicker() {
    setShowNumCampgrounds(true);
  }

  function hideNumCampgroundsPicker() {
    setShowNumCampgrounds(false);
  }

  function onChangeNumCamp(index) {
    setNumCampgrounds(index);
  }

  // Results state and functions

  const [results, setResults] = useState("");

  function onReserveHandler() {
    let res = `Check in:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check out:\t\t${checkOut.toDateString()}\n`;
    res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`;
    res = res + `Number of Campgrounds:\t\t${campgrounds[numCampgrounds]}\n`;
    setResults(res);
  }

  const { width, height } = useWindowDimensions();

  const dateLabelFlex = {
    fontSize: width * 0.08,
  };

  const dateTextFlex = {
    fontSize: width * 0.05,
  };

  return (
    <ImageBackground
      source={require("../assets/images/camping.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.scrollCenterContainer}>
            <View style={styles.titleContainer}>
              <Title>Lakeside Campgrounds</Title>
            </View>

            <View style={styles.rowContainer}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
                <Pressable onPress={showCheckInPicker}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {checkIn.toDateString()}
                  </Text>
                </Pressable>
              </View>

              <View style={styles.dateContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>
                  Check Out:
                </Text>
                <Pressable onPress={showCheckOutPicker}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {checkOut.toDateString()}
                  </Text>
                </Pressable>
              </View>

              <View>
                {showCheckIn && Platform.OS === "android" && (
                  <DateTimePicker
                    testID="dateTimePicker1"
                    value={checkIn}
                    mode={"date"}
                    display="spinner"
                    onChange={onChangeCheckIn}
                  />
                )}

                {showCheckIn && Platform.OS === "ios" && (
                  <Modal
                    animationType="slide"
                    transparent={true}
                    supportedOrientations={["portrait", "landscape"]}
                  >
                    <View style={styles.centerModalView}>
                      <View style={styles.modalView}>
                        <DateTimePicker
                          testID="dateTimePicker2"
                          value={checkIn}
                          mode={"date"}
                          display="spinner"
                          onChange={onChangeCheckIn}
                        />

                        <Button title="confirm" onPress={hideCheckInPicker} />
                      </View>
                    </View>
                  </Modal>
                )}
              </View>

              <View>
                {showCheckOut && Platform.OS === "android" && (
                  <DateTimePicker
                    testID="dateTimePicker3"
                    value={checkOut}
                    mode={"date"}
                    display="spinner"
                    onChange={onChangeCheckOut}
                  />
                )}

                {showCheckOut && Platform.OS === "ios" && (
                  <Modal
                    animationType="slide"
                    transparent={true}
                    supportedOrientations={["portrait", "landscape"]}
                  >
                    <View style={styles.centerModalView}>
                      <View style={styles.modalView}>
                        <DateTimePicker
                          testID="dateTimePicker4"
                          value={checkOut}
                          mode={"date"}
                          display="spinner"
                          onChange={onChangeCheckOut}
                        />

                        <Button title="confirm" onPress={hideCheckOutPicker} />
                      </View>
                    </View>
                  </Modal>
                )}
              </View>
            </View>

            <View style={styles.rowContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>
                Number of Guests:
              </Text>
              <Pressable onPress={showNumGuestsPicker}>
                <View style={styles.dateTextContainer}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {guestCounts[numGuests]}
                  </Text>
                </View>
              </Pressable>

              <Modal
                animationType="slide"
                transparent={true}
                visible={showNumGuests}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centerModalView}>
                  <View style={styles.modalView}>
                    <Text style={[styles.dateLabel, dateLabelFlex]}>
                      Enter Number of Guests
                    </Text>
                    <WheelPicker
                      selectedIndex={numGuests}
                      options={guestCounts}
                      onChange={onChangeNumGuests}
                      containerStyle={{ width: 200 }}
                    />

                    <Button title="confirm" onPress={hideNumGuestsPicker} />
                  </View>
                </View>
              </Modal>
            </View>

            <View style={styles.rowContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>
                Number of Campgrounds:
              </Text>
              <Pressable onPress={showNumCampgroundsPicker}>
                <View style={styles.dateTextContainer}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {campgrounds[numCampgrounds]}
                  </Text>
                </View>
              </Pressable>

              <Modal
                animationType="slide"
                transparent={true}
                visible={showNumCampgrounds}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centerModalView}>
                  <View style={styles.modalView}>
                    <Text style={[styles.dateLabel, dateLabelFlex]}>
                      Enter Number of Campgrounds
                    </Text>
                    <WheelPicker
                      selectedIndex={numCampgrounds}
                      options={campgrounds}
                      onChange={onChangeNumCamp}
                      containerStyle={{ width: 200 }}
                    />

                    <Button
                      title="confirm"
                      onPress={hideNumCampgroundsPicker}
                    />
                  </View>
                </View>
              </Modal>
            </View>

            <View style={styles.buttonContainer}>
              <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
            </View>
            <View style={styles.resultsContainer}>
              <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.3,
  },
  titleContainer: {
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary800,
    backgroundColor: Colors.primary500,
    width: 750,
    maxWidth: "90%",
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "100%",
  },
  scrollCenterContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
    marginHorizontal: 10
  },
  dateLabel: {
    color: Colors.primary500,
    fontFamily: "Text",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontSize: 15,
  },
  dateTextContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
  },
  dateText: {
    color: Colors.primary800,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 5
  },
  centerModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary300,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    alignItems: "center",
  },
  resultsContainer: {},
  results: {
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "Text",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});
