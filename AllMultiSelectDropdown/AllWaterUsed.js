import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import '../Tools/global'
import tw from 'tailwind-react-native-classnames';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
const data = [
    {key:'1', value:'Piped Water'},
    {key:'2', value:'Tanker-truck'},
    {key:'3', value:'Tube well/ Borehole'},
    {key:'4', value:'Dug well'},
    {key:'5', value:'Protected spring'},
    {key:'6', value:'Unprotected spring'},
    {key:'7', value:'Rainwater collection'},
    {key:'8', value:'Surface water (river, lake, pond, stream, canal)'},
    {key:'9', value:'Well'},
]
const AllWaterUsed = (props) => {
    const [selectedKey, setSelectedKey] = useState([]);
  


     
    const handleTitle = (titleValue) => {
        props.onChange(titleValue);
    }

  
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


export default AllWaterUsed

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    dropdown: {
        padding:10,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
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

        backgroundColor: 'blue',
        color: 'white',
        padding: 5,
        fontSize: 14,
        width: 120,
        textAlignVertical: "center"


    },
    DataBox: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        fontSize: 14,
        backgroundColor: '#d0f5e6',
        textAlignVertical: 'center'
    },
    dropDown: {
        flex: 1,
        borderColor: 'black',
        fontSize: 14,
        backgroundColor: '#ffffff'
    },
});