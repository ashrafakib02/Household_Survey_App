import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import AllWaterAvailable from "../AllDropDown/AllWaterAvailable";
import WaterSupplyGovt from "../BigScreenComponent/WaterSupplyGovt";
import WaterUsedPart from "../BigScreenComponent/WaterUsedPart";
import AllWaterCare from "../AllDropDown/AllWaterCare";
import AllDistance from "../AllDropDown/AllDistance";
import AllClarity from "../AllDropDown/AllClarity";
import AllOdor from "../AllDropDown/AllOdor";
import YesNo from "../AllDropDown/YesNo";
import AllConnectionPay from "../AllDropDown/AllConnectionPay";
import ChargesMonth from "../AllDropDown/ChargesMonth";
import OneTimeCharge from "../AllDropDown/OneTimeCharge";
import AllBetterWater from "../AllDropDown/AllBetterWater";
import AllDisease from "../AllDropDown/AllDisease";
import AllSourceWater from "../AllMultiSelectDropdown/AllSourceWater";

const WaterSupply = (props) => {
  const [WaterAvailable, setWaterAvailable] = useState("0");
  const [WaterSource, setWaterSource] = useState("-");

  const [Bathing, setBathing] = useState("0");
  const [Drinking, setDrinking] = useState("0");
  const [Cooking, setCooking] = useState("0");
  const [BathingCattle, setBathingCattle] = useState("0");
  const [WateringPlants, setWateringPlants] = useState("0");
  const [WashingUtensils, setWashingUtensils] = useState("0");
  const [WashingClothes, setWashingClothes] = useState("0");
  const [WaterOthers, setWaterOthers] = useState("0");

  const [HrMorning, setHrMorning] = useState("-");
  const [HrNoon, setHrNoon] = useState("-");
  const [HrEvening, setHrEvening] = useState("-");
  const [DayMorning, setDayMorning] = useState("-");
  const [DayNoon, setDayNoon] = useState("-");
  const [DayEvening, setDayEvening] = useState("-");
  const [MeteredConn, setMeteredConn] = useState("0");
  const [WaterCharge, setWaterCharge] = useState("0");

  const [WaterCare, setWaterCare] = useState("0");
  const [FetchWater, setFetchWater] = useState("0");
  const [Distance, setDistance] = useState("0");

  const [Clarity, setClarity] = useState("0");
  const [Odor, setOdor] = useState("0");

  const [MonthSpent, setMonthSpent] = useState({ value: "0", error: "" });
  const [WaterSatisfied, setWaterSatisfied] = useState("0");
  const [GovtConn, setGovtConn] = useState("0");
  const [CleanRegularWater, setCleanRegularWater] = useState("0");
  const [ConnectionType, setConnectionType] = useState("0");
  const [ChargeMonth, setChargeMonth] = useState("0");
  const [OneTimeConn, setOneTimeConn] = useState("0");
  const [ExpectationAuthority, setExpectationAuthority] = useState("0");
  const [DrinkingSeasonal, setDrinkingSeasonal] = useState("0");
  const [DiseasesKind, setDiseasesKind] = useState("0");

  const dataFetch = (data) => {
    setWaterAvailable(data);
  };
  const dataFetch2 = (data) => {
     const dataFormat=data.join(",");
    setWaterSource(dataFormat);
  };

  const dataFetch3 = (data) => {
    setWaterCare(data);
  };

  const dataFetch4 = (data) => {
    setFetchWater(data);
  };
  const dataFetch5 = (data) => {
    setDistance(data);
  };
  const dataFetch6 = (data) => {
    setClarity(data);
  };
  const dataFetch7 = (data) => {
    setOdor(data);
  };
  const dataFetch8 = (data) => {
    setWaterSatisfied(data);
  };
  const dataFetch9 = (data) => {
    setGovtConn(data);
  };
  const dataFetch10 = (data) => {
    setCleanRegularWater(data);
  };
  const dataFetch11 = (data) => {
    setConnectionType(data);
  };
  const dataFetch12 = (data) => {
    setChargeMonth(data);
  };
  const dataFetch13 = (data) => {
    setOneTimeConn(data);
  };
  const dataFetch14 = (data) => {
    setExpectationAuthority(data);
  };
  const dataFetch15 = (data) => {
    setDrinkingSeasonal(data);
  };
  const dataFetch16 = (data) => {
    setDiseasesKind(data);
  };

  function getWaterUsedDataData(
    sBathing,
    sDrinking,
    sCooking,
    sBathingCattle,
    sWateringPlants,
    sWashingUtensils,
    sWashingClothes,
    sWaterOthers
  ) {
    console.log(sBathing,
      sDrinking,
      sCooking,
      sBathingCattle,
      sWateringPlants,
      sWashingUtensils,
      sWashingClothes,
      sWaterOthers)
    setBathing(sBathing);
    setDrinking(sDrinking);
    setCooking(sCooking);
    setBathingCattle(sBathingCattle);
    setWateringPlants(sWateringPlants);
    setWashingUtensils(sWashingUtensils);
    setWashingClothes(sWashingClothes);
    setWaterOthers(sWaterOthers);
  }

  function getWaterGovtData(
    sHrMorning,
    sHrNoon,
    sHrEvening,
    sDayMorning,
    sDayNoon,
    sDayEvening,
    sMeteredConn,
    sWaterCharge
  ) {
    setHrMorning(sHrMorning);
    setHrNoon(sHrNoon);
    setHrEvening(sHrEvening);
    setDayMorning(sDayMorning);
    setDayNoon(sDayNoon);
    setDayEvening(sDayEvening);
    setMeteredConn(sMeteredConn);
    setWaterCharge(sWaterCharge);
  }

  useEffect(() => {
    dataReady();
  }, [
    WaterAvailable,
    WaterSource,
    Bathing,
    Drinking,
    Cooking,
    BathingCattle,
    WateringPlants,
    WashingUtensils,
    WashingClothes,
    WaterOthers,
    HrMorning,
    HrNoon,
    HrEvening,
    DayMorning,
    DayNoon,
    DayEvening,
    MeteredConn,
    WaterCharge,
    WaterCare,
    FetchWater,
    Distance,
    Clarity,
    Odor,
    MonthSpent.value,
    WaterSatisfied,
    GovtConn,
    CleanRegularWater,
    ConnectionType,
    ChargeMonth,
    OneTimeConn,
    ExpectationAuthority,
    DrinkingSeasonal,
    DiseasesKind
  ]);
  const dataReady = () => {
    props.getData(
      WaterAvailable,
      WaterSource,
      Bathing,
      Drinking,
      Cooking,
      BathingCattle,
      WateringPlants,
      WashingUtensils,
      WashingClothes,
      WaterOthers,
      HrMorning,
      HrNoon,
      HrEvening,
      DayMorning,
      DayNoon,
      DayEvening,
      MeteredConn,
      WaterCharge,
      WaterCare,
      FetchWater,
      Distance,
      Clarity,
      Odor,
      MonthSpent.value,
      WaterSatisfied,
      GovtConn,
      CleanRegularWater,
      ConnectionType,
      ChargeMonth,
      OneTimeConn,
      ExpectationAuthority,
      DrinkingSeasonal,
      DiseasesKind
    );
  };
  return (
    <View>
      <ScrollView>
        <AllWaterAvailable onChange={dataFetch} />
        <AllSourceWater onChange={dataFetch2} />
        <WaterUsedPart getData={getWaterUsedDataData} />
        <WaterSupplyGovt getData={getWaterGovtData} />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            Who takes care of water in the family
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 10 }}
          >
            <AllWaterCare onChange={dataFetch3} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            Do you have to fetch Drinking Water
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 10 }}
          >
            <YesNo onChange={dataFetch4} />
          </View>
        </View>
        {FetchWater == "1" ? (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginBottom: 5,
              marginTop: 10,
              marginRight: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ marginLeft: 10, justifyContent: "center" }}>
              The distance{" "}
            </Text>
            <AllDistance onChange={dataFetch5} />
          </View>
        ) : null}

        <View style={{ flex: 1 }}>
          <Text
            style={{
              flex: 1,
              marginTop: 5,
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: "blue",
              color: "white",
              padding: 5,
              fontSize: 14,
              textAlignVertical: "center",
            }}
          >
            How is the water quality, according to your opinion?
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 5,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <AllClarity onChange={dataFetch6} />
            <AllOdor onChange={dataFetch7} />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
              How much per month is spent on water
            </Text>
            <TextInput
              style={[
                tw`mt-2.5 ml-1.5 mr-2.5 `,
                styles.DataInputBoxBig,
              ]}
              onChangeText={(text) => setMonthSpent({ value: text, error: "" })}
              keyboardType="numeric"
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}
            >
              Are you satisfied with present water supply situation?
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
              <YesNo onChange={dataFetch8} />
            </View>
          </View>
          {WaterSatisfied == "2" ? (
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}
              >
                Would like to get house connection from Government?
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
                <YesNo onChange={dataFetch9} />
              </View>
            </View>
          ) : null}

          {GovtConn == "1" ? (
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}
              >
                Will you like to pay for clean & regular supply of water at your
                house?
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
                <YesNo onChange={dataFetch10} />
              </View>
            </View>
          ) : null}

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}
            >
              What type of connection do you want?
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
              <AllConnectionPay onChange={dataFetch11} />
            </View>
          </View>
          {ConnectionType != "0" ? (
            <View>
              {ConnectionType == "1" ? (
                <ChargesMonth onChange={dataFetch12} />
              ) : (
                <OneTimeCharge onChange={dataFetch13} />
              )}
            </View>
          ) : null}
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            What is your expectation from authority for better and quality water
            supply?
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
            <AllBetterWater onChange={dataFetch14} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            Do you think you/ your family member getting sick is due to drinking
            water or seasonal?
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
            <YesNo onChange={dataFetch15} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            What is the kind of diseases do you/your family members get often?
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
            <AllDisease onChange={dataFetch16} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WaterSupply;

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
    // flex: 1,
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
