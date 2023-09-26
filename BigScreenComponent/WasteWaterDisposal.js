import { StyleSheet, View, LogBox, Text, ScrollView } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import tw from "tailwind-react-native-classnames";
import AllHospital from "../AllDropDown/AllHospital";
import AllWastewater from "../AllDropDown/AllWastewater";

const WasteWaterDisposal = (props) => {
 LogBox.ignoreAllLogs();

 const [KitchenWasteWater, setKitchenWasteWater] = useState("0");
 const [BathingWasteWater, setBathingWasteWater] = useState("0");
 const [CleaningWater, setCleaningWater] = useState("0");
 const [ToiletDischarge, setToiletDischarge] = useState("0");
 const [Others, setOthers] = useState("0");

  const dataFetch = (data) => {
    setKitchenWasteWater(data);
    
  };
  const dataFetch2 = (data) => {
    setBathingWasteWater(data);
    
  };
  const dataFetch3 = (data) => {
    setCleaningWater(data);
    
  };
  const dataFetch4 = (data) => {
    setToiletDischarge(data);
    
  };
  const dataFetch5 = (data) => {
    setOthers(data);
    
  };

  useEffect(() => {
    dataReady()
  }, [KitchenWasteWater,BathingWasteWater,CleaningWater,ToiletDischarge,Others])
  const dataReady = () => {
    props.getData(KitchenWasteWater,BathingWasteWater,CleaningWater,ToiletDischarge,Others);
  };
  return (
    <View style={{
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: "black",
        paddingBottom:5,
        borderWidth: 1,
        backgroundColor:'blue'
      }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
        Kitchen wastewater
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
        >
          <AllWastewater onChange={dataFetch} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
        Bathing wastewater
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
        >
          <AllWastewater onChange={dataFetch2} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
        Washing/ Cleaning water
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
        >
          <AllWastewater onChange={dataFetch3} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
        Sewerage/ Toilet discharge
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
        >
          <AllWastewater onChange={dataFetch4} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
        Others
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
        >
          <AllWastewater onChange={dataFetch5} />
        </View>
      </View>
    </View>
  );
};

export default WasteWaterDisposal

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  flexdiv: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "rgba(16, 33, 62, 1)",
  },
  viewdiv: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  text: {
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  header: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleBox: {
    backgroundColor: "blue",
    color: "white",
    padding: 5,
    fontSize: 14,
    width: 120,
    textAlignVertical: "center",
    borderColor:'white',
    borderWidth:1
  },
  DataBox: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
    backgroundColor: "#d0f5e6",
    textAlignVertical: "center",
  },
  dropDown: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 14,
    backgroundColor: "#d0f5e6",
  },
  DataInputBox: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
  },
  DataInputBoxSolid: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
    backgroundColor: "#EBEBEB",
  },
  titleBoxBig: {
    flex: 1,
    backgroundColor: "blue",
    color: "white",
    padding: 5,
    fontSize: 14,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  DataBoxBig: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    flexShrink: 1,
    textAlignVertical: "top",
  },
});
