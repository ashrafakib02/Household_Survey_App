import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { ScrollView } from "react-native-gesture-handler";

const GeneralEco = (props) => {
  const [agriculture, setAgriculture] = useState({ value: "0", error: "" });
  const [allied, setAllied] = useState({ value: "0", error: "" });
  const [houseHoldInd, setHouseHoldInd] = useState({ value: "0", error: "" });
  const [rentOutAgr, setRentOutAgr] = useState({ value: "0", error: "" });
  const [rentOutRes, setRentOutRes] = useState({ value: "0", error: "" });
  const [SaleFire, setSaleFire] = useState({ value: "0", error: "" });
  const [other, setOther] = useState({ value: "0", error: "" });

  const [agricultureRemark, setAgricultureRemark] = useState({
    value: "-",
    error: "",
  });
  const [alliedRemark, setAlliedRemark] = useState({ 
    value: "-", 
    error: "" 
  });
  const [houseHoldIndRemark, setHouseHoldIndRemark] = useState({
    value: "-",
    error: "",
  });
  const [rentOutAgrRemark, setRentOutAgrRemark] = useState({
    value: "-",
    error: "",
  });
  const [rentOutResRemark, setRentOutResRemark] = useState({
    value: "-",
    error: "",
  });
  const [SaleFireRemark, setSaleFireRemark] = useState({
    value: "-",
    error: "",
  });

  const [otherRemark, setOtherRemark] = useState({
    value: "-", 
    error: "" 
  });
  const [total, setTotal] = useState("0");
  const [totalRemark, setTotalRemark] = useState({ value: "-", error: "" });

  useEffect(() => {
    var add =
      Number(agriculture.value) +
      Number(allied.value) +
      Number(houseHoldInd.value) +
      Number(rentOutAgr.value) +
      Number(rentOutRes.value) +
      Number(SaleFire.value) +
      Number(other.value);
    setTotal(String(add));
    dataReady()
  }, [
    agriculture.value,
    allied.value,
    houseHoldInd.value,
    rentOutAgr.value,
    rentOutRes.value,
    SaleFire.value,
    other.value,
    agricultureRemark.value,
    alliedRemark.value,
    houseHoldIndRemark.value,
    rentOutAgrRemark.value,
    rentOutResRemark.value,
    SaleFireRemark.value,
    otherRemark.value
  ]);
  const dataReady = () => {
  
    props.getData(agriculture.value,
      allied.value,
      houseHoldInd.value,
      rentOutAgr.value,
      rentOutRes.value,
      SaleFire.value,
      other.value,
      agricultureRemark.value,
      alliedRemark.value,
      houseHoldIndRemark.value,
      rentOutAgrRemark.value,
      rentOutResRemark.value,
      SaleFireRemark.value,
      otherRemark.value);
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-2.5 ml-1.5 text-indigo-700`, styles.titleBox]}>
          Source of Income
        </Text>
        <Text style={[tw` mt-2.5 text-indigo-700`, styles.titleBox]}>
          Annual HH Income (Rs.)
        </Text>
        <Text style={[tw` mt-2.5 mr-1.5 text-indigo-700`, styles.titleBox]}>
          Remarks
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` ml-1.5 text-indigo-700`, styles.titleBox]}>
          Agriculture
        </Text>
        <TextInput
          style={[tw` text-indigo-700 text-right`, styles.DataInputBox]}
          keyboardType="numeric"
          onChangeText={(text) => setAgriculture({ value: text, error: "" })}
        />
        <TextInput
          style={[tw` mr-1.5`, styles.DataInputBox]}
          onChangeText={(text) =>
            setAgricultureRemark({ value: text, error: "" })
          }
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` ml-1.5 text-indigo-700`, styles.titleBox]}>
          Allied Agricultural Activities (Dairy/ Poultry/ Piggery/Fishing etc.)
        </Text>
        <TextInput
          style={[tw` text-indigo-700 text-right`, styles.DataInputBox]}
          keyboardType="numeric"
          onChangeText={(text) => setAllied({ value: text, error: "" })}
        />
        <TextInput
          style={[tw`mr-1.5 `, styles.DataInputBox]}
          onChangeText={(text) => setAlliedRemark({ value: text, error: "" })}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` ml-1.5 text-indigo-700`, styles.titleBox]}>
          Household Industries/ Pottery/ Carpentry/Handicraft etc.
        </Text>
        <TextInput
          style={[tw` text-indigo-700 text-right`, styles.DataInputBox]}
          keyboardType="numeric"
          onChangeText={(text) => setHouseHoldInd({ value: text, error: "" })}
        />
        <TextInput
          style={[tw`mr-1.5 `, styles.DataInputBox]}
          onChangeText={(text) =>
            setHouseHoldIndRemark({ value: text, error: "" })
          }
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` ml-1.5 text-indigo-700`, styles.titleBox]}>
          Rent out Agr. & Irrgn. Machinery/ Equipment /Tractor etc.
        </Text>
        <TextInput
          style={[tw` text-indigo-700 text-right`, styles.DataInputBox]}
          keyboardType="numeric"
          onChangeText={(text) => setRentOutAgr({ value: text, error: "" })}
        />
        <TextInput
          style={[tw`mr-1.5`, styles.DataInputBox]}
          onChangeText={(text) =>
            setRentOutAgrRemark({ value: text, error: "" })
          }
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` ml-1.5 text-indigo-700`, styles.titleBox]}>
          Rent out Residential / Commercial structure/ room
        </Text>
        <TextInput
          style={[tw` text-indigo-700 text-right`, styles.DataInputBox]}
          keyboardType="numeric"
          onChangeText={(text) => setRentOutRes({ value: text, error: "" })}
        />
        <TextInput
          style={[tw`mr-1.5`, styles.DataInputBox]}
          onChangeText={(text) =>
            setRentOutResRemark({ value: text, error: "" })
          }
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` ml-1.5 text-indigo-700 `, styles.titleBox]}>
          NTFP: Sale of Firewood/ Flower/ Fruits/ timber/others
        </Text>
        <TextInput
          style={[tw` text-indigo-700 text-right`, styles.DataInputBox]}
          keyboardType="numeric"
          onChangeText={(text) => setSaleFire({ value: text, error: "" })}
        />
        <TextInput
          style={[tw`mr-1.5`, styles.DataInputBox]}
          onChangeText={(text) => setSaleFireRemark({ value: text, error: "" })}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` ml-1.5 text-indigo-700`, styles.titleBox]}>
          Any others (Please mention)
        </Text>
        <TextInput
          style={[tw` text-indigo-700 text-right`, styles.DataInputBox]}
          keyboardType="numeric"
          onChangeText={(text) => setOther({ value: text, error: "" })}
        />
        <TextInput
          style={[tw`mr-1.5`, styles.DataInputBox]}
          onChangeText={(text) => setOtherRemark({ value: text, error: "" })}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text
          style={[
            tw` ml-1.5 text-2xl font-bold text-indigo-700`,
            styles.titleBox,
          ]}
        >
          TOTAL
        </Text>
        <Text
          style={[
            tw`text-2xl font-bold text-indigo-700 text-right`,
            styles.DataInputBox,
          ]}
        >
          {total}
        </Text>
        <Text style={[tw`mr-1.5 text-indigo-700`, styles.DataInputBox]}>
          {totalRemark.value}
        </Text>
      </View>
    </ScrollView>
  );
};

export default GeneralEco;

const styles = StyleSheet.create({
  titleBox: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
    padding: 5,
    fontSize: 14,
    textAlignVertical: "center",
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "blue",
    color: "white",
  },
  DataInputBox: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
  },
});
