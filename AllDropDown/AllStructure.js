import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import '../Tools/global'
import tw from 'tailwind-react-native-classnames';
const data = [
    { label: 'Pucca', value: '1' },
    { label: 'Semi-pucca', value: '2' },
    { label: 'Kaccha', value: '3' },
    { label: 'Large Building', value: '4' },
    { label: 'Shanty', value: '5' },
    { label: 'None', value: '6' },
];
const AllStructure = (props) => {
    const [value, setValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);


     
    const handletitle = (titleValue) => {
        props.onChange(titleValue);
    }

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Residential Structure
                </Text>
            );
        }      
        return null;
    };
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', }}>
            <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>Residential Structure</Text>
            <View style={[tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`, styles.dropDown]}>

            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Structure' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                    {handletitle(item.value)}
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? 'blue' : 'black'}
                        name="Safety"
                        size={20}
                    />
                )}
            />
            
</View>
        </View>
        </View>
    );
};
export default AllStructure


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