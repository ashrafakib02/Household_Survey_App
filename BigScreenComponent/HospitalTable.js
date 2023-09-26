import { StyleSheet, View, LogBox, Text, ScrollView } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import tw from "tailwind-react-native-classnames";
import AllHospital from "../AllDropDown/AllHospital";

const HospitalTable = (props) => {
  LogBox.ignoreAllLogs();

  const [Hospital, setHospital] = useState("0");
  const [Home, setHome] = useState("0");
  const [PvtDoc, setPvtDoc] = useState("0");
  const [Homeo, setHomeo] = useState("0");
  const [Ayurved, setAyurved] = useState("0");
  const [Quack, setQuack] =useState("0");
  const [Ojha, setOjha] = useState("0");

  const dataFetch = (data) => {
    setHospital(data);
  };
  const dataFetch2 = (data) => {
    setHome(data);
  };
  const dataFetch3 = (data) => {
    setPvtDoc(data);
  };
  const dataFetch4 = (data) => {
    setHomeo(data);
  };
  const dataFetch5 = (data) => {
    setAyurved(data);
  };
  const dataFetch6 = (data) => {
    setQuack(data);
  };
  const dataFetch7 = (data) => {
    setOjha(data);
  };

  useEffect(() => {
    dataReady();
    
  }, [Hospital,Home,PvtDoc,Homeo,
    Ayurved,Quack,Ojha])
  const dataReady = () => {
    props.getData(Hospital,Home,PvtDoc,Homeo,
      Ayurved,Quack,Ojha);
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
          PHC/ Hospital
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
        >
          <AllHospital onChange={dataFetch} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
        N/ Home
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
        >
          <AllHospital onChange={dataFetch2} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
        Pvt. Doc.
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
        >
          <AllHospital onChange={dataFetch3} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
        Homeo
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
        >
          <AllHospital onChange={dataFetch4} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
        Ayurved
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
        >
          <AllHospital onChange={dataFetch5} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
        Quack
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
        >
          <AllHospital onChange={dataFetch6} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
        Ojha/ Gunin
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
        >
          <AllHospital onChange={dataFetch7} />
        </View>
      </View>
    </View>
  );
};

export default HospitalTable;

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
