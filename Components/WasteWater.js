import {
  StyleSheet,
  View,
  LogBox,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import tw from "tailwind-react-native-classnames";
import WasteWaterDisposal from "../BigScreenComponent/WasteWaterDisposal";
import YesNo from "../AllDropDown/YesNo";
import DrainageFailed from "../AllDropDown/DrainageFailed";
import DrainageProblem from "../AllDropDown/DrainageProblem";

const WasteWater = (props) => {
  LogBox.ignoreAllLogs();

  const [KitchenWasteWater, setKitchenWasteWater] = useState("0");
  const [BathingWasteWater, setBathingWasteWater] = useState("0");
  const [CleaningWater, setCleaningWater] = useState("0");
  const [ToiletDischarge, setToiletDischarge] = useState("0");
  const [Others, setOthers] = useState("0");
  const [Overflowing, setOverflowing] = useState("0");
  const [WhichSeason, setWhichSeason] = useState({ value: "-", error: "" });
  const [ExistingDrainage, setExistingDrainage] = useState("0");
  const [FailedDrainage, setFailedDrainage] = useState("0");
  const [SewerOdors, setSewerOdors] = useState("0");
  const [LoggingLongHr, setLoggingLongHr] = useState({ value: "-", error: "" });
  const [LoggingLongMin, setLoggingLongMin] = useState({
    value: "-",
    error: "",
  });
  const [FrequentLogHr, setFrequentLogHr] = useState({ value: "-", error: "" });
  const [FrequentLogMin, setFrequentLogMin] = useState({
    value: "-",
    error: "",
  });
  const [DrainAway, setDrainAway] = useState({ value: "0", error: "" });
  const [MaintenanceGovt, setMaintenanceGovt] = useState("0");
  const [LoggingExpense, setLoggingExpense] = useState("0");
  const [LoggingExpenseMuch, setLoggingExpenseMuch] = useState({ value: "0", error: "" });

  const dataFetch = (data) => {
    setOverflowing(data);
  };
  const dataFetch2 = (data) => {
    setExistingDrainage(data);
  };
  const dataFetch3 = (data) => {
    setFailedDrainage(data);
  };
  const dataFetch4 = (data) => {
    setSewerOdors(data);
  };
  const dataFetch5 = (data) => {
    setMaintenanceGovt(data);
  };
  const dataFetch6 = (data) => {
    setLoggingExpense(data);
  };
  function getWaterDisposalData(
    sKitchenWasteWater,
    sBathingWasteWater,
    sCleaningWater,
    sToiletDischarge,
    sOthers
  ) {
    setKitchenWasteWater(sKitchenWasteWater);
    setBathingWasteWater(sBathingWasteWater);
    setCleaningWater(sCleaningWater);
    setToiletDischarge(sToiletDischarge);
    setOthers(sOthers);
  }

  useEffect(() => {
    dataReady()
  }, [KitchenWasteWater,BathingWasteWater,CleaningWater,ToiletDischarge,Others,Overflowing,WhichSeason.value,ExistingDrainage,
    FailedDrainage,SewerOdors,LoggingLongHr.value,LoggingLongMin.value,FrequentLogHr.value,FrequentLogMin.value,DrainAway.value,
    MaintenanceGovt,LoggingExpense,LoggingExpenseMuch.value])
  const dataReady = () => {
    props.getData(KitchenWasteWater,BathingWasteWater,CleaningWater,ToiletDischarge,Others,Overflowing,WhichSeason.value,ExistingDrainage,
    FailedDrainage,SewerOdors,LoggingLongHr.value,LoggingLongMin.value,FrequentLogHr.value,FrequentLogMin.value,DrainAway.value,
    MaintenanceGovt,LoggingExpense,LoggingExpenseMuch.value);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <WasteWaterDisposal getData={getWaterDisposalData} />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Does overflowing of current drain occur?
        </Text>
        <View
          style={{
            flex: 1,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            justifyContent: "center",
          }}
        >
          <YesNo onChange={dataFetch} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
          In which season it is occurred most?
        </Text>
        <TextInput
          style={[
            tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`,
            styles.DataInputBoxBig,
          ]}
          onChangeText={(text) => setWhichSeason({ value: text, error: "" })}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Any problem faced due to the existing drainage system or maintenance?
        </Text>
        <View
          style={{
            flex: 1,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            justifyContent: "center",
          }}
        >
          <DrainageProblem onChange={dataFetch2} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          The existing drainage system is failed in your area due to{" "}
        </Text>
        <View
          style={{
            flex: 1,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            justifyContent: "center",
          }}
        >
          <DrainageFailed onChange={dataFetch3} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Did you notice any sanitary sewer odors from the storm water?
        </Text>
        <View
          style={{
            flex: 1,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            justifyContent: "center",
          }}
        >
          <YesNo onChange={dataFetch4} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
          How long the water logging exists
        </Text>
        <TextInput
          style={[tw`mt-2.5 ml-1.5 mr-1 text-indigo-700`, styles.DataInputBox]}
          keyboardType="numeric"
          onChangeText={(text) => setLoggingLongHr({ value: text, error: "" })}
        />
        <View
          style={{ marginTop: 10, marginRight: 5, justifyContent: "center" }}
        >
          <Text>hours</Text>
        </View>
        <TextInput
          style={[tw`mt-2.5 ml-1.5 mr-1 text-indigo-700`, styles.DataInputBox]}
          keyboardType="numeric"
          onChangeText={(text) => setLoggingLongMin({ value: text, error: "" })}
        />
        <View
          style={{ marginTop: 10, marginRight: 10, justifyContent: "center" }}
        >
          <Text>mints</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
          How frequently the water logging occurs
        </Text>
        <TextInput
          style={[tw`mt-2.5 ml-1.5 mr-1 text-indigo-700`, styles.DataInputBox]}
          keyboardType="numeric"
          onChangeText={(text) => setFrequentLogHr({ value: text, error: "" })}
        />
        <View
          style={{ marginTop: 10, marginRight: 5, justifyContent: "center" }}
        >
          <Text>hours</Text>
        </View>
        <TextInput
          style={[tw`mt-2.5 ml-1.5 mr-1 text-indigo-700`, styles.DataInputBox]}
          keyboardType="numeric"
          onChangeText={(text) => setFrequentLogMin({ value: text, error: "" })}
        />
        <View
          style={{ marginTop: 10, marginRight: 10, justifyContent: "center" }}
        >
          <Text>Mins</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
          During the worst event, how long did it take for the water to drain
          away?
        </Text>
        <TextInput
          style={[
            tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`,
            styles.DataInputBoxBig,
          ]}
          onChangeText={(text) => setDrainAway({ value: text, error: "" })}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Is there any maintenance done by community/ Govt.?
        </Text>
        <View
          style={{
            flex: 1,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            justifyContent: "center",
          }}
        >
          <YesNo onChange={dataFetch5} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Is there any expense related to water logging/existing drainage,
        </Text>
        <View
          style={{
            flex: 1,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            justifyContent: "center",
          }}
        >
          <YesNo onChange={dataFetch6} />
        </View>
      </View>
      {LoggingExpense == "1" ? (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
            how much?
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`,
              styles.DataInputBoxBig,
            ]}
            onChangeText={(text) => setLoggingExpenseMuch({ value: text, error: "" })}
            keyboardType="numeric"
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

export default WasteWater;

const styles = StyleSheet.create({
  titleBox: {
    backgroundColor: "blue",
    color: "white",
    padding: 5,
    fontSize: 14,
    width: 120,
    textAlignVertical: "center",
  },
  DialogueBox: {
    flex: 1,
    marginLeft: 6,
    marginRight: 4,
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  DataInputBox: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
  },
  DataInputBoxBig: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
  },
});
