import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import "../Tools/global";
import tw from "tailwind-react-native-classnames";
import { MultipleSelectList } from "react-native-dropdown-select-list";
const data = [
  { key: "1", value: "Tube well" },
  { key: "2", value: "Well" },
  { key: "3", value: "Private Tanker" },
  { key: "4", value: "PHED Supply" },
  { key: "5", value: "River/Stream/ Spring" },
  { key: "6", value: "Pond/ Water Body" },
];
const AllSourceWater = (props) => {
  const [selectedKey, setSelectedKey] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const handleTitle = (titleValue) => {
    props.onChange(titleValue);
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Select Source
        </Text>
      );
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
          Current source of Drinking Water
        </Text>
        <View
          style={[tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`, styles.dropDown]}
        >
          <MultipleSelectList
            setSelected={(val) => setSelectedKey(val)}
            data={data}
            save="key"
            onSelect={handleTitle(selectedKey)}
            label="Categories"
          />
        </View>
      </View>
    </View>
  );
};

export default AllSourceWater;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  dropdown: {
    padding: 10,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  titleBox: {
    flex: 1,
    backgroundColor: "blue",
    color: "white",
    padding: 5,
    fontSize: 14,
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
    fontSize: 14,
    backgroundColor: "#ffffff",
  },
});
