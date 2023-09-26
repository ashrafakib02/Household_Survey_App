import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import PitTankEmpty from "../AllDropDown/PitTankEmpty";
import LastEmptyBy from "../AllDropDown/LastEmptyBy";
import EmptyEmplied from "../AllDropDown/EmptyEmplied";


const PitSepticTankUser = (props) => {
    const [TankOld, setTankOld] = useState({ value: "0", error: "" });
    const [HowFrequentEmptied, setHowFrequentEmptied] = useState({ value: "0", error: "" });
    const [HowEmptied, setHowEmptied] = useState("0");
    const [HowEmptiedOther, setHowEmptiedOther] = useState({ value: "-", error: "" });
    const [WhoEmptied, setWhoEmptied] = useState("0");
    const [WhoEmptiedOther, setWhoEmptiedOther] = useState({ value: "-", error: "" });
    const [LastEmptied, setLastEmptied] = useState("0");
    const [LastEmptiedOther, setLastEmptiedOther] = useState({ value: "-", error: "" });
    
      const dataFetch = (data) => {
        setHowEmptied(data);
      };
      const dataFetch2 = (data) => {
        setWhoEmptied(data);
      };
      const dataFetch3 = (data) => {
        setLastEmptied(data);
      };
      useEffect(() => {
        dataReady()
      }, [TankOld.value,HowFrequentEmptied.value,HowEmptied,
        HowEmptiedOther.value,WhoEmptied,WhoEmptiedOther.value,
        LastEmptied,LastEmptiedOther.value])
      const dataReady = () => {
        props.getData(TankOld.value,HowFrequentEmptied.value,HowEmptied,
          HowEmptiedOther.value,WhoEmptied,WhoEmptiedOther.value,
          LastEmptied,LastEmptiedOther.value);
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
          <Text style={[tw` mt-2.5 ml-1.5 text-indigo-700`, styles.titleBox]}>
          How many years old is the currently used pit/tank of the latrine?
          </Text>
          <TextInput
          keyboardType="numeric"
            style={[
              tw`mt-2.5 ml-1.5 mr-1.5 text-indigo-700`,
              styles.DataInputBox,
            ]}
           
            onChangeText={(text) => setTankOld({ value: text, error: "" })}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-1.5 text-indigo-700`, styles.titleBox]}>
          How frequently that pit/tank of the latrine was emptied?
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-1.5 text-indigo-700`,
              styles.DataInputBox,
            ]}
            onChangeText={(text) => setHowFrequentEmptied({ value: text, error: "" })}
          />
        </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
            How your pit/tank was last emptied (if emptied)?
            </Text>
            <View
              style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
            >
              <PitTankEmpty onChange={dataFetch} />
            </View>
          </View>
          {HowEmptied=='3' ?
        <View style={{ flex: 1,flexDirection:'row'}}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
          Please Specify
          </Text>
        <TextInput
          style={[
            tw`mt-2.5 ml-2.5 mr-2.5 `,
            styles.DataInputBox,
          ]}
          onChangeText={(text) => setHowEmptiedOther({ value: text, error: "" })}
        />
      </View>
          :null
       }
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
            By whom was it last emptied?
            </Text>
            <View
              style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
            >
              <LastEmptyBy onChange={dataFetch2} />
            </View>
          </View>
          {WhoEmptied=='5' ?
        <View style={{ flex: 1,flexDirection:'row'}}>
        <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
          Please Specify
          </Text>
        <TextInput
          style={[
            tw`mt-2.5 ml-2.5 mr-2.5 `,
            styles.DataInputBox,
          ]}
          onChangeText={(text) => setWhoEmptiedOther({ value: text, error: "" })}
        />
      </View>
          :null
       }
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
            The last time it was emptied, where were the contents emptied to?
            </Text>
            <View
              style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
            >
              <EmptyEmplied onChange={dataFetch3} />
            </View>
          </View>
          {LastEmptied=='99' ?
        <View style={{ flex: 1,flexDirection:'row'}}>
          <Text style={[tw` mt-1.5 ml-1.5  text-indigo-700`, styles.titleBox]}>
            Please Specify
            </Text>
        <TextInput
          style={[
            tw`mt-2.5 ml-2.5 mr-2.5 `,
            styles.DataInputBox,
          ]}
          onChangeText={(text) => setLastEmptiedOther({ value: text, error: "" })}
        />
      </View>
          :null
       }
        
        </View>
       
      );
    };
export default PitSepticTankUser

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
      backgroundColor:'white'
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
  