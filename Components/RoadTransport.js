import { StyleSheet, View, LogBox, Text, ScrollView, TextInput, TouchableOpacity, Modal } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import tw from "tailwind-react-native-classnames";
import RoadConnect from "../AllDropDown/RoadConnect";
import TransportUsed from "../AllDropDown/TransportUsed";
import FacilityRequire from "../BigScreenComponent/FacilityRequire";



const RoadTransport = (props) => {
  LogBox.ignoreAllLogs();

  const [RoadCondition, setRoadCondition] = useState("0");
  const [MajorRoad, setMajorRoad] = useState({ value: "0", error: ""});
  const [ImpRoad1, setImpRoad1] = useState({ value: "-", error: ""});
  const [ImpRoad2, setImpRoad2] = useState({ value: "-", error: ""});
  const [ImpRoad3, setImpRoad3] = useState({ value: "-", error: ""});
  const [ImpRoad4, setImpRoad4] = useState({ value: "-", error: ""});
  const [ImpRoad5, setImpRoad5] = useState({ value: "-", error: ""});
  const [ImpRoad6, setImpRoad6] = useState({ value: "-", error: ""});
  
  const [PrimaryName, setPrimaryName] = useState(" ");
  const [PrimaryJourney, setPrimaryJourney] = useState(" ");
  const [PrimaryDistance, setPrimaryDistance] = useState(" ");
  const [PrimaryTime, setPrimaryTime] = useState(" ");
  const [PrimaryTransport, setPrimaryTransport] = useState(" ");
  const [PrimaryCost, setPrimaryCost] = useState(" ");
  const [PrimaryString, setPrimaryString] = useState("-");


  const [SecondaryName, setSecondaryName] = useState(" ");
  const [SecondaryJourney, setSecondaryJourney] = useState(" ");
  const [SecondaryDistance, setSecondaryDistance] = useState(" ");
  const [SecondaryTime, setSecondaryTime] = useState(" ");
  const [SecondaryTransport, setSecondaryTransport] = useState(" ");
  const [SecondaryCost, setSecondaryCost] = useState(" ");
  const [SecondaryString, setSecondaryString] = useState("-");

  const [CollegeName, setCollegeName] = useState(" ");
  const [CollegeJourney, setCollegeJourney] = useState(" ");
  const [CollegeDistance, setCollegeDistance] = useState(" ");
  const [CollegeTime, setCollegeTime] = useState(" ");
  const [CollegeTransport, setCollegeTransport] = useState(" ");
  const [CollegeCost, setCollegeCost] = useState(" ");
  const [CollegeString, setCollegeString] = useState("-");

  const [RegularName, setRegularName] = useState(" ");
  const [RegularJourney, setRegularJourney] = useState(" ");
  const [RegularDistance, setRegularDistance] = useState(" ");
  const [RegularTime, setRegularTime] = useState(" ");
  const [RegularTransport, setRegularTransport] = useState(" ");
  const [RegularCost, setRegularCost] = useState(" ");
  const [RegularString, setRegularString] = useState("-");

  const [CommonHealthName, setCommonHealthName] = useState(" ");
  const [CommonHealthJourney, setCommonHealthJourney] = useState(" ");
  const [CommonHealthDistance, setCommonHealthDistance] = useState(" ");
  const [CommonHealthTime, setCommonHealthTime] = useState(" ");
  const [CommonHealthTransport, setCommonHealthTransport] = useState(" ");
  const [CommonHealthCost, setCommonHealthCost] = useState(" ");
  const [CommonHealthString, setCommonHealthString] = useState("-");

  const [GovtHospitalName, setGovtHospitalName] = useState(" ");
  const [GovtHospitalJourney, setGovtHospitalJourney] = useState(" ");
  const [GovtHospitalDistance, setGovtHospitalDistance] = useState(" ");
  const [GovtHospitalTime, setGovtHospitalTime] = useState(" ");
  const [GovtHospitalTransport, setGovtHospitalTransport] = useState(" ");
  const [GovtHospitalCost, setGovtHospitalCost] = useState(" ");
  const [GovtHospitalString, setGovtHospitalString] = useState("-");

  const [DistrictName, setDistrictName] = useState(" ");
  const [DistrictJourney, setDistrictJourney] = useState(" ");
  const [DistrictDistance, setDistrictDistance] = useState(" ");
  const [DistrictTime, setDistrictTime] = useState(" ");
  const [DistrictTransport, setDistrictTransport] = useState(" ");
  const [DistrictCost, setDistrictCost] = useState(" ");
  const [DistrictString, setDistrictString] = useState("-");

  const [PostOfficeName, setPostOfficeName] = useState(" ");
  const [PostOfficeJourney, setPostOfficeJourney] = useState(" ");
  const [PostOfficeDistance, setPostOfficeDistance] = useState(" ");
  const [PostOfficeTime, setPostOfficeTime] = useState(" ");
  const [PostOfficeTransport, setPostOfficeTransport] = useState(" ");
  const [PostOfficeCost, setPostOfficeCost] = useState(" ");
  const [PostOfficeString, setPostOfficeString] = useState("-");

  const [WorkPlaceName, setWorkPlaceName] = useState(" ");
  const [WorkPlaceJourney, setWorkPlaceJourney] = useState(" ");
  const [WorkPlaceDistance, setWorkPlaceDistance] = useState(" ");
  const [WorkPlaceTime, setWorkPlaceTime] = useState(" ");
  const [WorkPlaceTransport, setWorkPlaceTransport] = useState(" ");
  const [WorkPlaceCost, setWorkPlaceCost] = useState(" ");
  const [WorkPlaceString, setWorkPlaceString] = useState("-");

  const [ReligiousName, setReligiousName] = useState(" ");
  const [ReligiousJourney, setReligiousJourney] = useState(" ");
  const [ReligiousDistance, setReligiousDistance] = useState(" ");
  const [ReligiousTime, setReligiousTime] = useState(" ");
  const [ReligiousTransport, setReligiousTransport] = useState(" ");
  const [ReligiousCost, setReligiousCost] = useState(" ");
  const [ReligiousRegularString, setReligiousString] = useState("-");

  const [TransportMainlyUsed, setTransportMainlyUsed] = useState("0");

  const [PrimaryVisible, setPrimaryVisible] = useState(false);
  const [SecondaryVisible, setSecondaryVisible] = useState(false);
  const [CollegeVisible, setCollegeVisible] = useState(false);
  const [RegularVisible, setRegularVisible] = useState(false);
  const [CommonHealthVisible, setCommonHealthVisible] = useState(false);
  const [GovtHospitalVisible, setGovtHospitalVisible] = useState(false);
  const [DistrictVisible, setDistrictVisible] = useState(false);
  const [PostOfficeVisible, setPostOfficeVisible] = useState(false);
  const [WorkPlaceVisible, setWorkPlaceVisible] = useState(false);
  const [ReligiousVisible, setReligiousVisible] = useState(false);

  useEffect(() => {
    dataReady()
  }, [RoadCondition,MajorRoad.value,ImpRoad1.value,ImpRoad2.value,ImpRoad3.value,ImpRoad4.value,ImpRoad5.value,ImpRoad6.value,
    PrimaryString,SecondaryString,CollegeString,RegularString,CommonHealthString,GovtHospitalString,DistrictString,PostOfficeString,
    WorkPlaceString,ReligiousRegularString,TransportMainlyUsed])
  const dataReady = () => {
    props.getData(RoadCondition,MajorRoad.value,ImpRoad1.value,ImpRoad2.value,ImpRoad3.value,ImpRoad4.value,ImpRoad5.value,ImpRoad6.value,
      PrimaryString,SecondaryString,CollegeString,RegularString,CommonHealthString,GovtHospitalString,DistrictString,PostOfficeString,
      WorkPlaceString,ReligiousRegularString,TransportMainlyUsed);
  };

  const handleDataFromChild = (data,Name,Journey,Distance,Time,Transport,Cost) => {
    setPrimaryVisible(data);
    setPrimaryName("Name of the place:"+Name);
    setPrimaryJourney("How many journeys required (Nos.):"+Journey);
    setPrimaryDistance("Distance in km (One-way Trip):"+Distance);
    setPrimaryTime("Time taken (one way trip):"+Time);
    setPrimaryTransport("Mode of Transport:"+Transport);
    setPrimaryCost("Cost per trip (Rs.):"+Cost);
    setPrimaryString(Name+","+Journey+","+Distance+","+Time+","+Transport+","+Cost);
  };
  const handleDataFromChild2 = (data,Name,Journey,Distance,Time,Transport,Cost) => {
    setSecondaryVisible(data);
    setSecondaryName("Name of the place:"+Name);
    setSecondaryJourney("How many journeys required (Nos.):"+Journey);
    setSecondaryDistance("Distance in km (One-way Trip):"+Distance);
    setSecondaryTime("Time taken (one way trip):"+Time);
    setSecondaryTransport("Mode of Transport:"+Transport);
    setSecondaryCost("Cost per trip (Rs.):"+Cost);
    setSecondaryString(Name+","+Journey+","+Distance+","+Time+","+Transport+","+Cost);
  };
  const handleDataFromChild3 = (data,Name,Journey,Distance,Time,Transport,Cost) => {
    setCollegeVisible(data);
    setCollegeName("Name of the place:"+Name);
    setCollegeJourney("How many journeys required (Nos.):"+Journey);
    setCollegeDistance("Distance in km (One-way Trip):"+Distance);
    setCollegeTime("Time taken (one way trip):"+Time);
    setCollegeTransport("Mode of Transport:"+Transport);
    setCollegeCost("Cost per trip (Rs.):"+Cost);
    setCollegeString(Name+","+Journey+","+Distance+","+Time+","+Transport+","+Cost);
  };
  const handleDataFromChild4 = (data,Name,Journey,Distance,Time,Transport,Cost) => {
    setRegularVisible(data);
    setRegularName("Name of the place:"+Name);
    setRegularJourney("How many journeys required (Nos.):"+Journey);
    setRegularDistance("Distance in km (One-way Trip):"+Distance);
    setRegularTime("Time taken (one way trip):"+Time);
    setRegularTransport("Mode of Transport:"+Transport);
    setRegularCost("Cost per trip (Rs.):"+Cost);
    setRegularString(Name+","+Journey+","+Distance+","+Time+","+Transport+","+Cost);
  };
  
  const handleDataFromChild5 = (data,Name,Journey,Distance,Time,Transport,Cost) => {
    setCommonHealthVisible(data);
    setCommonHealthName("Name of the place:"+Name);
    setCommonHealthJourney("How many journeys required (Nos.):"+Journey);
    setCommonHealthDistance("Distance in km (One-way Trip):"+Distance);
    setCommonHealthTime("Time taken (one way trip):"+Time);
    setCommonHealthTransport("Mode of Transport:"+Transport);
    setCommonHealthCost("Cost per trip (Rs.):"+Cost);
    setCommonHealthString(Name+","+Journey+","+Distance+","+Time+","+Transport+","+Cost);
  };
  const handleDataFromChild6 = (data,Name,Journey,Distance,Time,Transport,Cost) => {
    setGovtHospitalVisible(data);
    setGovtHospitalName("Name of the place:"+Name);
    setGovtHospitalJourney("How many journeys required (Nos.):"+Journey);
    setGovtHospitalDistance("Distance in km (One-way Trip):"+Distance);
    setGovtHospitalTime("Time taken (one way trip):"+Time);
    setGovtHospitalTransport("Mode of Transport:"+Transport);
    setGovtHospitalCost("Cost per trip (Rs.):"+Cost);
    setGovtHospitalString(Name+","+Journey+","+Distance+","+Time+","+Transport+","+Cost);
  };
  
  const handleDataFromChild7 = (data,Name,Journey,Distance,Time,Transport,Cost) => {
    setDistrictVisible(data);
    setDistrictName("Name of the place:"+Name);
    setDistrictJourney("How many journeys required (Nos.):"+Journey);
    setDistrictDistance("Distance in km (One-way Trip):"+Distance);
    setDistrictTime("Time taken (one way trip):"+Time);
    setDistrictTransport("Mode of Transport:"+Transport);
    setDistrictCost("Cost per trip (Rs.):"+Cost);
    setDistrictString(Name+","+Journey+","+Distance+","+Time+","+Transport+","+Cost);
  };
  const handleDataFromChild8 = (data,Name,Journey,Distance,Time,Transport,Cost) => {
    setPostOfficeVisible(data);
    setPostOfficeName("Name of the place:"+Name);
    setPostOfficeJourney("How many journeys required (Nos.):"+Journey);
    setPostOfficeDistance("Distance in km (One-way Trip):"+Distance);
    setPostOfficeTime("Time taken (one way trip):"+Time);
    setPostOfficeTransport("Mode of Transport:"+Transport);
    setPostOfficeCost("Cost per trip (Rs.):"+Cost);
    setPostOfficeString(Name+","+Journey+","+Distance+","+Time+","+Transport+","+Cost);
  };
  const handleDataFromChild9 = (data,Name,Journey,Distance,Time,Transport,Cost) => {
    setWorkPlaceVisible(data);
    setWorkPlaceName("Name of the place:"+Name);
    setWorkPlaceJourney("How many journeys required (Nos.):"+Journey);
    setWorkPlaceDistance("Distance in km (One-way Trip):"+Distance);
    setWorkPlaceTime("Time taken (one way trip):"+Time);
    setWorkPlaceTransport("Mode of Transport:"+Transport);
    setWorkPlaceCost("Cost per trip (Rs.):"+Cost);
    setWorkPlaceString(Name+","+Journey+","+Distance+","+Time+","+Transport+","+Cost);
  };
  const handleDataFromChild10 = (data,Name,Journey,Distance,Time,Transport,Cost) => {
    setReligiousVisible(data);
    setReligiousName("Name of the place:"+Name);
    setReligiousJourney("How many journeys required (Nos.):"+Journey);
    setReligiousDistance("Distance in km (One-way Trip):"+Distance);
    setReligiousTime("Time taken (one way trip):"+Time);
    setReligiousTransport("Mode of Transport:"+Transport);
    setReligiousCost("Cost per trip (Rs.):"+Cost);
    setReligiousString(Name+","+Journey+","+Distance+","+Time+","+Transport+","+Cost);
  };
  
  const VisibleFetch = () => {
    setPrimaryVisible(true);   
  };
  const VisibleFetch2 = () => {
    setSecondaryVisible(true);   
  };
  const VisibleFetch3 = () => {
    setCollegeVisible(true);   
  };
  const VisibleFetch4 = () => {
    setRegularVisible(true);   
  };
  const VisibleFetch5 = () => {
    setCommonHealthVisible(true);   
  };
  const VisibleFetch6 = () => {
    setGovtHospitalVisible(true);   
  };
  const VisibleFetch7 = () => {
    setDistrictVisible(true);   
  };
  const VisibleFetch8 = () => {
    setPostOfficeVisible(true);   
  };
  const VisibleFetch9 = () => {
    setWorkPlaceVisible(true);   
  };
  const VisibleFetch10 = () => {
    setReligiousVisible(true);   
  };
  const dataFetch = (data) => {
    setRoadCondition(data);   
  };
  const dataFetch2 = (data) => {
    setTransportMainlyUsed(data);   
  };
  
//   const dataFetch3 = (data) => {
//     setDoorToDoor(data); 
// };
// const dataFetch4 = (data) => {
//   setImpRecycling(data);
// };
  return (
    <ScrollView style={{flex:1}}>
         <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Connectivity/ road condition in your area 
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5,justifyContent:'center' }}
          >
            <RoadConnect onChange={dataFetch} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
          Number of Major roads in your area
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`,
              styles.DataInputBox,
            ]}
            onChangeText={(text) => setMajorRoad({ value: text, error: "" })}
            keyboardType="numeric"
            
          />
        </View>
        <View style={{ flex: 1, }}>
        <Text style={{
                  flex: 1,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                  backgroundColor: "blue",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}
              >
        Mention most important roads in your area?
        </Text>
        <View style={{ flex: 1,flexDirection:'row' }}>
        <View style={{ flex: 1,flexDirection:'row' }}>
        <Text style={[tw` mt-2.5 ml-2.5 `, styles.numTitleBox]}>
          1.
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 mr-1`,
              styles.numDataInputBox,
            ]}
            
            onChangeText={(text) => setImpRoad1({ value: text, error: "" })}
          />
        </View>
        <View style={{ flex: 1,flexDirection:'row' }}>
        <Text style={[tw` mt-2.5 ml-2.5 `, styles.numTitleBox]}>
          2.
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 mr-1`,
              styles.numDataInputBox,
            ]}
            
            onChangeText={(text) => setImpRoad2({ value: text, error: "" })}
          />
        </View>
        </View>
        <View style={{ flex: 1,flexDirection:'row' }}>
        <View style={{ flex: 1,flexDirection:'row' }}>
        <Text style={[tw` mt-2.5 ml-2.5 `, styles.numTitleBox]}>
          3.
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 mr-1`,
              styles.numDataInputBox,
            ]}
            
            onChangeText={(text) => setImpRoad3({ value: text, error: "" })}
          />
        </View>
        <View style={{ flex: 1,flexDirection:'row' }}>
        <Text style={[tw` mt-2.5 ml-2.5 `, styles.numTitleBox]}>
          4.
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 mr-1`,
              styles.numDataInputBox,
            ]}
            
            onChangeText={(text) => setImpRoad4({ value: text, error: "" })}
          />
        </View>
        </View>
        <View style={{ flex: 1,flexDirection:'row' }}>
        <View style={{ flex: 1,flexDirection:'row' }}>
        <Text style={[tw` mt-2.5 ml-2.5 `, styles.numTitleBox]}>
          5.
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 mr-1`,
              styles.numDataInputBox,
            ]}
            
            onChangeText={(text) => setImpRoad5({ value: text, error: "" })}
          />
        </View>
        <View style={{ flex: 1,flexDirection:'row' }}>
        <Text style={[tw` mt-2.5 ml-2.5 `, styles.numTitleBox]}>
          6.
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 mr-1`,
              styles.numDataInputBox,
            ]}
            
            onChangeText={(text) => setImpRoad6({ value: text, error: "" })}
          />
        </View>
        </View>
        </View>
        <View style={{ flex: 1, }}>
        
          <Text style={{
                  flex: 1,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                  backgroundColor: "blue",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}>Access to Facilities/ Transport requirements (Per month)</Text>
        
        <View style={{ flex: 1,borderColor:'black',borderWidth:1,marginLeft:10,marginRight:10,marginTop:10 }}>
        <TouchableOpacity onPress={VisibleFetch}>
          <Text style={{
                  flex: 1,
                  margin: 5,
                  backgroundColor: "blue",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}>Primary School</Text>
        </TouchableOpacity>
        <Modal transparent={true}
        
        visible={PrimaryVisible}>
        <FacilityRequire onDataReceived={handleDataFromChild}/>
        </Modal>
        <Text  style={[
              tw`mt-2.5 ml-1.5 my-1.5 mr-1.5`,
              styles.DataInputBoxBig,
            ]}>
          {PrimaryName}{"\n"}{PrimaryJourney}{"\n"}{PrimaryDistance}{"\n"}{PrimaryTime}{"\n"}{PrimaryTransport}{"\n"}{PrimaryCost}
          </Text>
        </View>
        <View style={{ flex: 1,borderColor:'black',borderWidth:1,marginLeft:10,marginRight:10,marginTop:10 }}>
        <TouchableOpacity onPress={VisibleFetch2}>
          <Text style={{
                  flex: 1,
                  margin: 5,
                  backgroundColor: "blue",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}>Secondary School</Text>
        </TouchableOpacity>
        <Modal transparent={true}
        
        visible={SecondaryVisible}>
        <FacilityRequire onDataReceived={handleDataFromChild2}/>
        </Modal>
        <Text  style={[
              tw`mt-2.5 ml-1.5 my-1.5 mr-1.5`,
              styles.DataInputBoxBig,
            ]}>
          {SecondaryName}{"\n"}{SecondaryJourney}{"\n"}{SecondaryDistance}{"\n"}{SecondaryTime}{"\n"}{SecondaryTransport}{"\n"}{SecondaryCost}
          </Text>
        </View>
        <View style={{ flex: 1,borderColor:'black',borderWidth:1,marginLeft:10,marginRight:10,marginTop:10 }}>
        <TouchableOpacity onPress={VisibleFetch3}>
          <Text style={{
                  flex: 1,
                  margin: 5,
                  backgroundColor: "blue",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}>College</Text>
        </TouchableOpacity>
        <Modal transparent={true}
        
        visible={CollegeVisible}>
        <FacilityRequire onDataReceived={handleDataFromChild3}/>
        </Modal>
        <Text  style={[
              tw`mt-2.5 ml-1.5 my-1.5 mr-1.5`,
              styles.DataInputBoxBig,
            ]}>
          {CollegeName}{"\n"}{CollegeJourney}{"\n"}{CollegeDistance}{"\n"}{CollegeTime}{"\n"}{CollegeTransport}{"\n"}{CollegeCost}
          </Text>
        </View>
        <View style={{ flex: 1,borderColor:'black',borderWidth:1,marginLeft:10,marginRight:10,marginTop:10 }}>
        <TouchableOpacity onPress={VisibleFetch4}>
          <Text style={{
                  flex: 1,
                  margin: 5,
                  backgroundColor: "blue",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}>Regular Market</Text>
        </TouchableOpacity>
        <Modal transparent={true}
        
        visible={RegularVisible}>
        <FacilityRequire onDataReceived={handleDataFromChild4}/>
        </Modal>
        <Text  style={[
              tw`mt-2.5 ml-1.5 my-1.5 mr-1.5`,
              styles.DataInputBoxBig,
            ]}>
          {RegularName}{"\n"}{RegularJourney}{"\n"}{RegularDistance}{"\n"}{RegularTime}{"\n"}{RegularTransport}{"\n"}{RegularCost}
          </Text>
        </View>
        <View style={{ flex: 1,borderColor:'black',borderWidth:1,marginLeft:10,marginRight:10,marginTop:10 }}>
        <TouchableOpacity onPress={VisibleFetch5}>
          <Text style={{
                  flex: 1,
                  margin: 5,
                  backgroundColor: "blue",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}>Commonly visited health service place</Text>
        </TouchableOpacity>
        <Modal transparent={true}
        
        visible={CommonHealthVisible}>
        <FacilityRequire onDataReceived={handleDataFromChild5}/>
        </Modal>
        <Text  style={[
              tw`mt-2.5 ml-1.5 my-1.5 mr-1.5`,
              styles.DataInputBoxBig,
            ]}>
          {CommonHealthName}{"\n"}{CommonHealthJourney}{"\n"}{CommonHealthDistance}{"\n"}{CommonHealthTime}{"\n"}{CommonHealthTransport}{"\n"}{CommonHealthCost}
          </Text>
        </View>
        <View style={{ flex: 1,borderColor:'black',borderWidth:1,marginLeft:10,marginRight:10,marginTop:10 }}>
        <TouchableOpacity onPress={VisibleFetch6}>
          <Text style={{
                  flex: 1,
                  margin: 5,
                  backgroundColor: "blue",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}>Government Hospital</Text>
        </TouchableOpacity>
        <Modal transparent={true}
        
        visible={GovtHospitalVisible}>
        <FacilityRequire onDataReceived={handleDataFromChild6}/>
        </Modal>
        <Text  style={[
              tw`mt-2.5 ml-1.5 my-1.5 mr-1.5`,
              styles.DataInputBoxBig,
            ]}>
          {GovtHospitalName}{"\n"}{GovtHospitalJourney}{"\n"}{GovtHospitalDistance}{"\n"}{GovtHospitalTime}{"\n"}{GovtHospitalTransport}{"\n"}{GovtHospitalCost}
          </Text>
        </View>
        <View style={{ flex: 1,borderColor:'black',borderWidth:1,marginLeft:10,marginRight:10,marginTop:10 }}>
        <TouchableOpacity onPress={VisibleFetch7}>
          <Text style={{
                  flex: 1,
                  margin: 5,
                  backgroundColor: "blue",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}>District Office</Text>
        </TouchableOpacity>
        <Modal transparent={true}
        
        visible={DistrictVisible}>
        <FacilityRequire onDataReceived={handleDataFromChild7}/>
        </Modal>
        <Text  style={[
              tw`mt-2.5 ml-1.5 my-1.5 mr-1.5`,
              styles.DataInputBoxBig,
            ]}>
          {DistrictName}{"\n"}{DistrictJourney}{"\n"}{DistrictDistance}{"\n"}{DistrictTime}{"\n"}{DistrictTransport}{"\n"}{DistrictCost}
          </Text>
        </View>
        <View style={{ flex: 1,borderColor:'black',borderWidth:1,marginLeft:10,marginRight:10,marginTop:10 }}>
        <TouchableOpacity onPress={VisibleFetch8}>
          <Text style={{
                  flex: 1,
                  margin: 5,
                  backgroundColor: "blue",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}>Post Office/ Bank</Text>
        </TouchableOpacity>
        <Modal transparent={true}
        
        visible={PostOfficeVisible}>
        <FacilityRequire onDataReceived={handleDataFromChild8}/>
        </Modal>
        <Text  style={[
              tw`mt-2.5 ml-1.5 my-1.5 mr-1.5`,
              styles.DataInputBoxBig,
            ]}>
          {PostOfficeName}{"\n"}{PostOfficeJourney}{"\n"}{PostOfficeDistance}{"\n"}{PostOfficeTime}{"\n"}{PostOfficeTransport}{"\n"}{PostOfficeCost}
          </Text>
        </View>
        <View style={{ flex: 1,borderColor:'black',borderWidth:1,marginLeft:10,marginRight:10,marginTop:10 }}>
        <TouchableOpacity onPress={VisibleFetch9}>
          <Text style={{
                  flex: 1,
                  margin: 5,
                  backgroundColor: "blue",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}>Work Place/ at Job/ Duty/ Farm/Shop</Text>
        </TouchableOpacity>
        <Modal transparent={true}
        
        visible={WorkPlaceVisible}>
        <FacilityRequire onDataReceived={handleDataFromChild9}/>
        </Modal>
        <Text  style={[
              tw`mt-2.5 ml-1.5 my-1.5 mr-1.5`,
              styles.DataInputBoxBig,
            ]}>
          {WorkPlaceName}{"\n"}{WorkPlaceJourney}{"\n"}{WorkPlaceDistance}{"\n"}{WorkPlaceTime}{"\n"}{WorkPlaceTransport}{"\n"}{WorkPlaceCost}
          </Text>
        </View>
        <View style={{ flex: 1,borderColor:'black',borderWidth:1,marginLeft:10,marginRight:10,marginTop:10 }}>
        <TouchableOpacity onPress={VisibleFetch10}>
          <Text style={{
                  flex: 1,
                  margin: 5,
                  backgroundColor: "blue",
                  color: "white",
                  padding: 5,
                  fontSize: 14,
                  textAlignVertical: "center",
                }}>Place of worship/ Religious place often visited</Text>
        </TouchableOpacity>
        <Modal transparent={true}
        
        visible={ReligiousVisible}>
        <FacilityRequire onDataReceived={handleDataFromChild10}/>
        </Modal>
        <Text  style={[
              tw`mt-2.5 ml-1.5 my-1.5 mr-1.5`,
              styles.DataInputBoxBig,
            ]}>
          {ReligiousName}{"\n"}{ReligiousJourney}{"\n"}{ReligiousDistance}{"\n"}{ReligiousTime}{"\n"}{ReligiousTransport}{"\n"}{ReligiousCost}
          </Text>
        </View>
        </View>
        
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          What means of transport is mainly used to convey produce away from village 
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5,justifyContent:'center' }}
          >
            <TransportUsed onChange={dataFetch2} />
          </View>
        </View>
        
    </ScrollView>
  );
};


export default RoadTransport

const styles = StyleSheet.create({
  titleBox: {
    backgroundColor: "blue",
    color: "white",
    padding: 5,
    fontSize: 14,
    width: 120,
    textAlignVertical: "center",
  },
  numTitleBox: {
    padding: 5,
    fontSize: 14,
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
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
  },
  numDataInputBox: {
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 5,
    fontSize: 14,
  },
  DataInputBoxBig: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
    margin:10,
    maxHeight:200,
    textDecorationLine: 'underline',
    textAlignVertical: 'top'
  },
});
