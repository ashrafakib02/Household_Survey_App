import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// import { Center } from 'native-base'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { NavigationActions } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "./Footer";
import MaterialCardBasic from "../Components/MaterialCardBasic";
import MaterialCardBasic2 from "../Components/MaterialCardBasic2";
import MaterialCardBasic3 from "../Components/MaterialCardBasic3";

export default function MainDashboard({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/untitled.png")}
          style={{
            flex: 1,
            width: "100%",
            resizeMode: "contain",
            height: "100%",
          }}
        >
          <View style={styles.container}>
            <Text style={styles.moduleDashboard}>Nagaland </Text>
            <Text style={styles.moduleDashboard2}>Household Survey</Text>
          </View>

          <MaterialCardBasic
            style={styles.materialCardBasic}
          ></MaterialCardBasic>

          <MaterialCardBasic2
            style={styles.materialCardBasic3}
          ></MaterialCardBasic2>

          <MaterialCardBasic3
            style={styles.materialCardBasic2}
          ></MaterialCardBasic3>

        </ImageBackground>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    top: -378,
    width: "100%",
    position: "absolute",
    bottom: -208,
    left: 0,
  },
  materialCardBasic2: {
    height: 186,
    width: 146,
    position: "absolute",
    right: 25,
    top: 220,
    shadowColor: "rgba(0,0,1,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 15,
    shadowOpacity: 0.45,
    shadowRadius: 5,
  },
  materialCardBasic: {
    height: 186,
    width: 146,
    position: "absolute",
    left: 25,
    top: 220,
    shadowColor: "rgba(0,0,1,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 15,
    shadowOpacity: 0.45,
    shadowRadius: 5,
  },
  materialCardBasic3: {
    height: 186,
    width: 146,
    position: "absolute",
    left: 25,
    top: 420,
    shadowColor: "rgba(0,0,1,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 15,
    shadowOpacity: 0.45,
    shadowRadius: 5,
  },
  moduleDashboard: {
    top: 60,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "serif",
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    textAlign: "center",
  },
  moduleDashboard2: {
    top: 60,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "serif",
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    textAlign: "center",
  },
  container2: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    marginTop: 10,
    marginRight: 10,
  },
  caption: {
    color: "white",
    fontSize: 24,
  },
});
