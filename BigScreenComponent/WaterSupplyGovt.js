import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import YesNo from "../AllDropDown/YesNo";

const WaterSupplyGovt = (props) => {
  const [HrMorning, setHrMorning] = useState({ value: "-", error: "" });
  const [HrNoon, setHrNoon] = useState({ value: "-", error: "" });
  const [HrEvening, setHrEvening] = useState({ value: "-", error: "" });
  const [DayMorning, setDayMorning] = useState({ value: "-", error: "" });
  const [DayNoon, setDayNoon] = useState({ value: "-", error: "" });
  const [DayEvening, setDayEvening] = useState({ value: "-", error: "" });
  const [MeteredConn, setMeteredConn] = useState("0");
  const [WaterCharge, setWaterCharge] = useState({ value: "0", error: "" });

  const dataFetch = (data) => {
    setMeteredConn(data);
  };

  useEffect(() => {
    dataReady()
  }, [HrMorning.value,HrNoon.value,HrEvening.value,DayMorning.value,
    DayNoon.value,DayEvening.value,MeteredConn,
    WaterCharge.value])
  const dataReady = () => {
    props.getData(HrMorning.value,HrNoon.value,HrEvening.value,DayMorning.value,
    DayNoon.value,DayEvening.value,MeteredConn,
    WaterCharge.value);
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
        Only if Pipe water supply by the govt./community
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
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <Text style={[tw` mt-2.5 ml-2.5`, styles.titleBox]}>
            Duration of Water supply (mention hrs.)
          </Text>
          <View style={{ flex: 1 }}>
            <TextInput
              style={[
                tw`mt-2.5 ml-1.5 mr-1`,
                styles.DataInputBoxSmall,
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => setHrMorning({ value: text, error: "" })}
            />

            <Text style={styles.DialogueBox}>At Morning</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={[
                tw`mt-2.5 ml-1.5 mr-1`,
                styles.DataInputBoxSmall,
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => setHrNoon({ value: text, error: "" })}
            />
            <Text style={styles.DialogueBox}>At Noon</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={[
                tw`mt-2.5 ml-1.5 mr-1`,
                styles.DataInputBoxSmall,
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => setHrEvening({ value: text, error: "" })}
            />
            <Text style={styles.DialogueBox}>At Evening</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginBottom: 10,
          }}
        >
          <Text style={[tw` ml-2.5`, styles.titleBox]}>
            Number of Days per week
          </Text>
          <View style={{ flex: 1 }}>
            <TextInput
              style={[
                tw` ml-1.5 mr-1`,
                styles.DataInputBoxSmall,
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => setDayMorning({ value: text, error: "" })}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={[
                tw` ml-1.5 mr-1`,
                styles.DataInputBoxSmall,
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => setDayNoon({ value: text, error: "" })}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={[
                tw` ml-1.5 mr-1`,
                styles.DataInputBoxSmall,
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => setDayEvening({ value: text, error: "" })}
            />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row", marginBottom: 10 }}>
          <Text style={[tw` mt-1.5 ml-2.5`, styles.titleBox]}>
            Is there any metered water connection
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
          >
            <YesNo onChange={dataFetch} />
          </View>
        </View>
        {MeteredConn == "1" ? (
          <View style={{ flex: 1, flexDirection: "row", marginBottom: 10 }}>
            <View
              style={{
                marginTop: 10,
                marginLeft: 10,
                justifyContent: "center",
              }}
            >
              <Text>Water Charges Rs. </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TextInput
                style={[
                  tw`mt-2.5 ml-1.5 mr-1`,
                  styles.DataInputBox,
                ]}
                keyboardType="numeric"
                onChangeText={(text) => setWaterCharge({ value: text, error: "" })}
              />
              <View
                style={{
                  marginTop: 10,
                  marginRight: 5,
                  justifyContent: "center",
                }}
              >
                <Text>Per month</Text>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};
export default WaterSupplyGovt;

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
  DataInputBoxSmall: {
    // flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
  },
  DataInputBox: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
  },
});
