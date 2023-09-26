import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import "../Tools/global";
import tw from "tailwind-react-native-classnames";
import { MultipleSelectList } from "react-native-dropdown-select-list";
const data = [
  { key: "1", value: "For peace and quiet" },
  { key: "2", value: "Get some fresh air" },
  { key: "3", value: "Ride a bike" },
  { key: "4", value: "Visit the play area" },
  { key: "5", value: "Attend events" },
  { key: "6", value: "Enjoy flowers / trees" },
  { key: "7", value: "For a walk" },
  { key: "8", value: "For exercise" },
  { key: "9", value: "Walk a dog" },
  { key: "10", value: "Enjoy the surroundings" },
  { key: "11", value: "Play / watch sports or games" },
  { key: "12", value: "See birds and wildlife" },
  { key: "13", value: "Take a shortcut" },
  { key: "14", value: "Children / family outing" },
  { key: "15", value: "Eat / drink" },
  { key: "16", value: "Meet friends" },
  { key: "17", value: "Other" },
];
const AllParkVisitReason = (props) => {
  const [selectedKey, setSelectedKey] = useState([]);

  const handleTitle = (titleValue) => {
    props.onChange(titleValue);
  };

  return (
    <View style={styles.container}>
      <View style={[tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`, styles.dropDown]}>
        <MultipleSelectList
          setSelected={(val) => setSelectedKey(val)}
          data={data}
          save="key"
          onSelect={handleTitle(selectedKey)}
          label="Categories"
        />
      </View>
    </View>
  );
};

export default AllParkVisitReason;

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
    fontSize: 14,
    backgroundColor: "#ffffff",
  },
});
