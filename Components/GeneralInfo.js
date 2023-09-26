import {
  StyleSheet,
  View,
  useWindowDimensions,
  LogBox,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import tw from "tailwind-react-native-classnames";
import AllDistrict from "../AllDropDown/AllDistrict";

const GeneralInfo = (props) => {
  LogBox.ignoreAllLogs();
  const investigator = global.full_name;
  const supervisor = global.supervisor_name;

  const [currentDate, setCurrentDate] = useState("");
  const [distHq, setDistHq] = useState("-");
  const [colony, setColony] = useState({ value: "-", error: "" });
  const [ward, setWard] = useState({ value: "0", error: "" });
  const [HouseNo, setHouseNo] = useState({ value: "-", error: "" });

  useEffect(() => {
    var curDate = new Date().getDate();
    var curMonth = new Date().getMonth() + 1;
    var curYear = new Date().getFullYear();
    setCurrentDate(curYear + "-" + curMonth + "-" + curDate);
    dataReady();
  }, [distHq, colony.value, ward.value, HouseNo.value]);
  const dataReady = () => {
    //console.log(currentDate,investigator,supervisor,distHq.value,colony.value,ward.value)
    props.getData(currentDate, distHq, colony.value, ward.value, HouseNo.value);
  };
  const dataFetch = (data) => {
    setDistHq(data);
  };
  return (
    <View>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
            Date of Census/Survey
          </Text>
          <Text
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`,
              styles.DataInputBox,
            ]}
          >
            {currentDate}
          </Text>
        </View>
        {/* <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
          GPS Location 
          </Text>
          <Text
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`,
              styles.DataInputBox,
            ]}
          >
            {latitude}, {longitude}
          </Text>
        </View> */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
            Name of Investigator
          </Text>
          <Text
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`,
              styles.DataInputBox,
            ]}
          >
            {investigator}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
            Name of Supervisor
          </Text>
          <Text
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`,
              styles.DataInputBox,
            ]}
          >
            {supervisor}
          </Text>
        </View>

        <AllDistrict onChange={dataFetch} />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
            Colony Name
          </Text>
          <TextInput
            style={[tw`mt-2.5 ml-1.5 mr-2.5 `, styles.DataInputBox]}
            onChangeText={(text) => setColony({ value: text, error: "" })}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
            Ward Number
          </Text>
          <TextInput
            style={[tw`mt-2.5 ml-1.5 mr-2.5 `, styles.DataInputBox]}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(text) => setWard({ value: text, error: "" })}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
            House Number
          </Text>
          <TextInput
            style={[tw`mt-2.5 ml-1.5 mr-2.5 `, styles.DataInputBox]}
            maxLength={8}
            onChangeText={(text) => setHouseNo({ value: text, error: "" })}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default GeneralInfo;

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
    borderRadius: 5,
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
    borderRadius: 5,
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
