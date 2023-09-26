import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import AllWaterUsed from "../AllMultiSelectDropdown/AllWaterUsed";

const WaterUsedPart = (props) => {
    const [Bathing, setBathing] = useState("0");
    const [Drinking, setDrinking] = useState("0");
    const [Cooking, setCooking] = useState("0");
    const [BathingCattle, setBathingCattle] = useState("0");
    const [WateringPlants, setWateringPlants] = useState("0");
    const [WashingUtensils, setWashingUtensils] = useState("0");
    const [WashingClothes, setWashingClothes] = useState("0");
    const [Others, setOthers] = useState("0");

    useEffect(() => {
      dataReady()
    }, [Bathing,Drinking,Cooking,BathingCattle,WateringPlants,WashingUtensils,
      WashingClothes,Others])
    const dataReady = () => {
      props.getData(Bathing,Drinking,Cooking,BathingCattle,WateringPlants,WashingUtensils,
        WashingClothes,Others);
    };

    const dataFetch = (data) => {
      const dataFormat=data.join(",");
      setBathing(dataFormat);
    };
    const dataFetch2 = (data) => {
      const dataFormat=data.join(",");
      setDrinking(dataFormat);
    };
    const dataFetch3 = (data) => {
      const dataFormat=data.join(",");
      setCooking(dataFormat);
    };
    const dataFetch4 = (data) => {
     const dataFormat=data.join(",");
      setBathingCattle(dataFormat);
    };
    const dataFetch5 = (data) => {
   const dataFormat=data.join(",");
      setWateringPlants(dataFormat);
    };
    const dataFetch6 = (data) => {
     const dataFormat=data.join(",");
      setWashingUtensils(dataFormat);
    };
    const dataFetch7 = (data) => {
      const dataFormat=data.join(",");
      setWashingClothes(dataFormat);
    };
    const dataFetch8 = (data) => {
      const dataFormat=data.join(",");
      setOthers(dataFormat);
    };
    return (
      
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
              What water sources are usually used for the following purposes? [√
              on relevant answers]
            </Text>
            <View
              style={{
                borderColor: "black",
                borderWidth: 1,
                flex: 1,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                // backgroundColor:'#8a61b1'
              }}
            >
              <Text
                style={{
                  flex: 1,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: "#8a61b1",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}
              >
                Bathing
              </Text>
              <AllWaterUsed onChange={dataFetch} />
              <Text
                style={{
                  flex: 1,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: "#8a61b1",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}
              >
                Drinking
              </Text>
              <AllWaterUsed onChange={dataFetch2} />
              <Text
                style={{
                  flex: 1,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: "#8a61b1",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}
              >
                Water for cooking
              </Text>
              <AllWaterUsed onChange={dataFetch3} />
              <Text
                style={{
                  flex: 1,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: "#8a61b1",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}
              >
                Bathing cattle
              </Text>
              <AllWaterUsed onChange={dataFetch4} />
              <Text
                style={{
                  flex: 1,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: "#8a61b1",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}
              >
                Watering plants
              </Text>
              <AllWaterUsed onChange={dataFetch5} />
              <Text
                style={{
                  flex: 1,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: "#8a61b1",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}
              >
                Washing Utensils
              </Text>
              <AllWaterUsed onChange={dataFetch6} />
              <Text
                style={{
                  flex: 1,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: "#8a61b1",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}
              >
                Washing clothes
              </Text>
              <AllWaterUsed onChange={dataFetch7} />
              <Text
                style={{
                  flex: 1,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: "#8a61b1",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}
              >
                Other
              </Text>
              <AllWaterUsed onChange={dataFetch8} />
            </View>
          </View>    );
  };
  
export default WaterUsedPart

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
      flex:1,
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
  });
  