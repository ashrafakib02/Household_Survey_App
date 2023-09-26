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

export default function  MaterialCardBasic3(props) {
    const [latitude, setLatitude] = useState("0");
    const [longitude, setLongitude] = useState("0");
  
    const navigation = useNavigation();
    //   navigation.navigate("Form");
    const GoToList = () => {
    
          navigation.navigate("SurveyList");
      
      }
  
   
    return (
      <TouchableOpacity
        onPress={GoToList}
        style={[styles.container, props.style]}
      >
        <Image
          source={require("../assets/diary.png")}
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
            {props.bodyText || "Household Survey Details"}
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
  