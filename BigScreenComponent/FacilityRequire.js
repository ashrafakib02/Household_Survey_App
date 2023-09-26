import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'

const FacilityRequire = (props) => {
    
  const [primaryName2, setPrimaryName2] = useState({ value: "-", error: ""});
  const [primaryJourney2, setPrimaryJourney2] = useState({ value: "0", error: ""});
  const [primaryDistance2, setPrimaryDistance2] = useState({ value: "0", error: ""});
  const [primaryTime2, setPrimaryTime2] = useState({ value: "0", error: ""});
  const [primaryTransport2, setPrimaryTransport2] = useState({ value: "-", error: ""});
  const [primaryCost2, setPrimaryCost2] = useState({ value: "0", error: ""});

const ValueCheck = () =>{
  if(primaryName2.value=="-"){
    alert("Enter Name of the place");
  } else if(primaryJourney2.value=="0"){
    alert("Enter How many journeys required (Nos.)");
  } else if(primaryDistance2.value=="0"){
    alert("Enter Distance in km (One-way Trip)");
  } else if(primaryTime2.value=="0"){
    alert("Enter Time taken (one way trip)");
  } else if(primaryTransport2.value=="-"){
    alert("Enter Mode of Transport");
  } else if(primaryCost2.value=="0"){
    alert("Enter Cost per trip (Rs.)");
  } else{
    sendDataToParent();
  }
}



  const sendDataToParent  = () => {
    props.onDataReceived(false,primaryName2.value,primaryJourney2.value,primaryDistance2.value,primaryTime2.value,primaryTransport2.value,primaryCost2.value);

}

  return (
    <View style={{flex:1,padding:20,marginTop:50,marginBottom:50,marginLeft:20,marginRight:20, backgroundColor:'rgba(0, 0, 0, 0.1)',borderRadius:10}}>
     
    <TextInput
            style={[
              tw`ml-1 mt-2.5 mr-1`,
              styles.DataInputBox,
            ]}
            placeholder='Name of place'
            multiline={true}
            onChangeText={(text) => setPrimaryName2({ value: text, error: "" })}
          />
          <TextInput
            style={[
                tw`ml-1 mt-2.5 mr-1`,
                styles.DataInputBox,
            ]}
            placeholder='How many journeys req. (Nos.)'
            multiline={true}
            keyboardType="numeric"
            onChangeText={(text) => setPrimaryJourney2({ value: text, error: "" })}
          />
           <TextInput
            style={[
                tw`ml-1 mt-2.5 mr-1`,
                styles.DataInputBox,
            ]}
            placeholder='Distance in km (One-way Trip)'
            multiline={true}
            keyboardType="numeric"
            onChangeText={(text) => setPrimaryDistance2({ value: text, error: "" })}
          />
          <TextInput
            style={[
                tw`ml-1 mt-2.5 mr-1`,
                styles.DataInputBox,
            ]}
            placeholder='Time taken (one way trip)'
            multiline={true}
            keyboardType="numeric"
            onChangeText={(text) => setPrimaryTime2({ value: text, error: "" })}
          />
    <TextInput
            style={[
                tw`ml-1 mt-2.5 mr-1`,
                styles.DataInputBox,
            ]}
            placeholder='Mode of Transport'
            multiline={true}
            onChangeText={(text) => setPrimaryTransport2({ value: text, error: "" })}
          />
          <TextInput
            style={[
                tw`ml-1 mt-2.5 mr-1`,
                styles.DataInputBox,
            ]}
            placeholder='Cost per trip (Rs.)'
            multiline={true}
            keyboardType="numeric"
            onChangeText={(text) => setPrimaryCost2({ value: text, error: "" })}
          />
       
    <TouchableOpacity
            activeOpacity={0.8}
            onPress={ValueCheck}
            style={{
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              justifyContent: 'center',
              marginBottom: 5,
              backgroundColor: '#073763',
              borderColor:'white',
              borderWidth:1,
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              Done
            </Text>
          </TouchableOpacity>
    </View>
  )
}

export default FacilityRequire

const styles = StyleSheet.create({ 
  container:{
    flex:1,
    padding:20,
    marginTop:50,
    marginBottom:50,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    borderRadius:10,
    borderColor:'black',
    borderWidth:1},
  DataInputBox: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
    backgroundColor:'white',
    textAlignVertical: 'top',
    borderRadius:10
  },})