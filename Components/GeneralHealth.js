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
import AllTreatDepend from "../AllDropDown/AllTreatDepend";
import AllHospital from "../AllDropDown/AllHospital";
import HospitalTable from "../BigScreenComponent/HospitalTable";

const GeneralHealth = (props) => {
  LogBox.ignoreAllLogs();

  const [MaleDeath, setMaleDeath] = useState({ value: "-", error: "" });
  const [FemaleDeath, setFemaleDeath] = useState({ value: "-", error: "" });
  const [NeoNatalDeath, setNeoNatalDeath] = useState({ value: "-", error: "" });
  const [MajorCause, setMajorCause] = useState({ value: "-", error: "" });
  const [TreatDepend, setTreatDepend] = useState("0");
  const [Hospital, setHospital] = useState("0");
  const [Home, setHome] = useState("0");
  const [PvtDoc, setPvtDoc] = useState("0");
  const [Homeo, setHomeo] = useState("0");
  const [Ayurved, setAyurved] = useState("0");
  const [Quack, setQuack] = useState("0");
  const [Ojha, setOjha] = useState("0");

  const dataFetch = (data) => {
    setTreatDepend(data);
  };

  useEffect(() => {
    dataReady();
  }, [
    MaleDeath.value,
    FemaleDeath.value,
    NeoNatalDeath.value,
    MajorCause.value,
    TreatDepend,
    Hospital,
    Home,
    PvtDoc,
    Homeo,
    Ayurved,
    Quack,
    Ojha,
  ]);
  const dataReady = () => {
    props.getData(
      MaleDeath.value,
      FemaleDeath.value,
      NeoNatalDeath.value,
      MajorCause.value,
      TreatDepend,
      Hospital,
      Home,
      PvtDoc,
      Homeo,
      Ayurved,
      Quack,
      Ojha
    );
  };

  function getHospitalData(
    sHospital,
    sHome,
    sPvtDoc,
    sHomeo,
    sAyurved,
    sQuack,
    sOjha
  ) {
    setHospital(sHospital);
    setHome(sHome);
    setPvtDoc(sPvtDoc);
    setHomeo(sHomeo);
    setAyurved(sAyurved);
    setQuack(sQuack);
    setOjha(sOjha);
  }
  return (
    <View>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
            Any deaths in your family in last 5 yrs.
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-1 text-indigo-700`,
              styles.DataInputBox,
            ]}
            keyboardType="numeric"
            maxLength={3}
            onChangeText={(text) => setMaleDeath({ value: text, error: "" })}
          />
          <View
            style={{ marginTop: 10, marginRight: 5, justifyContent: "center" }}
          >
            <Text>Male</Text>
          </View>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-1 text-indigo-700`,
              styles.DataInputBox,
            ]}
            keyboardType="numeric"
            maxLength={3}
            onChangeText={(text) => setFemaleDeath({ value: text, error: "" })}
          />
          <View
            style={{ marginTop: 10, marginRight: 5, justifyContent: "center" }}
          >
            <Text>Female</Text>
          </View>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-1 text-indigo-700`,
              styles.DataInputBox,
            ]}
            keyboardType="numeric"
            maxLength={3}
            onChangeText={(text) =>
              setNeoNatalDeath({ value: text, error: "" })
            }
          />
          <View
            style={{ marginTop: 10, marginRight: 10, justifyContent: "center" }}
          >
            <Text>Neo-natal</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
            Major Causes of Death
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`,
              styles.DataInputBox,
            ]}
            onChangeText={(text) => setMajorCause({ value: text, error: "" })}
          />
        </View>
        <AllTreatDepend onChange={dataFetch} />
        <View>
          <Text
            style={{
              flex: 1,
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: "blue",
              color: "white",
              padding: 5,
              fontSize: 14,
              textAlignVertical: "center",
            }}
          >
            How often do you go to hospital
          </Text>
        </View>
        <HospitalTable getData={getHospitalData} />
      </ScrollView>
    </View>
  );
};

export default GeneralHealth;

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
