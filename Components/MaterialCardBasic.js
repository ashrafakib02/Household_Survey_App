import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import "../Tools/global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";

export default function MaterialCardBasic(props) {

  const [latitude, setLatitude] = useState("0");
  const [longitude, setLongitude] = useState("0");

  const navigation = useNavigation();
  //   navigation.navigate("Form");
  useEffect(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
   if (status !== "granted") {
    status = await Location.requestForegroundPermissionsAsync();
    alert(
      "Permission to access location was denied. Please go to settings to reset the permission"
    );
      return;
    } else {  
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
  }
  }, [])
  const GotoForm = () => {
    if(latitude!=="0"){
      navigation.navigate("Form", {
        lat: latitude,
        long: longitude,
      });
    }else{
      alert(
        "Permission to access location was denied. Please go to settings to reset the permissions"
      );
    }
    
  };

 
  return (
    <TouchableOpacity
      onPress={GotoForm}
      style={[styles.container, props.style]}
    >
      <Image
        source={require("../assets/list.png")}
        style={styles.cardItemImagePlace}
      />
      <View
        style={[
          styles.body,
          {
            backgroundColor: props.body || undefined,
          },
        ]}
      >
        <Text style={styles.bodyText}>
          {props.bodyText || "Household Form"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#CCC",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 5,
    overflow: "hidden",
  },
  cardItemImagePlace: {
    backgroundColor: "white",
    resizeMode: "contain",
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  body: {
    flex: 1,
    padding: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  bodyText: {
    fontSize: 21,
    color: "#424242",
    textAlign: "center",
    fontWeight: "bold",
  },
});
