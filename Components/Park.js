import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import AllParkUse from "../AllDropDown/AllParkUse";
import YesNo from "../AllDropDown/YesNo";
import AllAccompanies from "../AllDropDown/AllAccompanies";
import AllParkVisitReason from "../AllMultiSelectDropdown/AllParkVisitReason";


const Park = (props) => {

    const [ParkName, setParkName] = useState({ value: "-", error: "" });
    const [ParkUse, setParkUse] = useState("0");
    const [ParkDistance, setParkDistance] = useState({ value: "0", error: "" });
    const [ParkAccessibility, setParkAccessibility] = useState({ value: "-", error: "" });
    const [ParkParking, setParkParking] = useState("0");
    const [ParkAccompany, setParkAccompany] = useState("0");
    const [ParkVisitReasons, setParkVisitReasons] = useState("-");
    const [AvgTimeHr, setAvgTimeHr] = useState({ value: "0", error: "" });
    const [AvgTimeMin, setAvgTimeMin] = useState({ value: "0", error: "" });
    const [MostVisited, setMostVisited] = useState({ value: "-", error: "" });
    const [EventOrganized, setEventOrganized] = useState("0");
    const [WhatEvent, setWhatEvent] = useState({ value: "-", error: "" });
    const [OrganizerName, setOrganizerName] = useState({ value: "-", error: "" });
    const [OrganizerNo, setOrganizerNo] = useState({ value: "0", error: "" });
    const [ChildrenParticipated, setChildrenParticipated] = useState("0");
    const [PlayEquipment, setPlayEquipment] = useState({ value: "-", error: "" });
    const [ParkClean, setParkClean] = useState("0");
    const [ParkToilet, setParkToilet] = useState("0");
    const [ParkDisturb, setParkDisturb] = useState("0");
    const [ParkDisturbOther, setParkDisturbOther] = useState({ value: "-", error: "" });
    const [ImproveIdea, setImproveIdea] = useState({ value: "-", error: "" });

    useEffect(() => {
      dataReady()
    }, [ParkName.value,ParkUse,ParkDistance.value,ParkAccessibility.value,ParkParking,ParkAccompany,ParkVisitReasons,AvgTimeHr.value,AvgTimeMin.value,
      MostVisited.value,EventOrganized,WhatEvent.value,OrganizerName.value,OrganizerNo.value,ChildrenParticipated,PlayEquipment.value,ParkClean,
      ParkToilet,ParkDisturb,ParkDisturbOther.value,ImproveIdea.value])
    const dataReady = () => {
      props.getData(ParkName.value,ParkUse,ParkDistance.value,ParkAccessibility.value,ParkParking,ParkAccompany,ParkVisitReasons,AvgTimeHr.value,AvgTimeMin.value,
        MostVisited.value,EventOrganized,WhatEvent.value,OrganizerName.value,OrganizerNo.value,ChildrenParticipated,PlayEquipment.value,ParkClean,
        ParkToilet,ParkDisturb,ParkDisturbOther.value,ImproveIdea.value);
    };


    const dataFetch = (data) => {
        setParkUse(data);
      };
      const dataFetch2 = (data) => {
        setParkParking(data);
      };
      const dataFetch3 = (data) => {
        setParkAccompany(data);
      };
      const dataFetch4 = (data) => {
        const dataFormat=data.join(",");
        setParkVisitReasons(dataFormat);
      };
      const dataFetch5 = (data) => {
        setEventOrganized(data);
      };
      const dataFetch6 = (data) => {
        setChildrenParticipated(data);
      };
      const dataFetch7 = (data) => {
        setParkClean(data);
      };
      const dataFetch8 = (data) => {
        setParkToilet(data);
      };
      const dataFetch9 = (data) => {
        setParkDisturb(data);
      };
      
  return (
    <View>
      <ScrollView>
      <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
            The name of the park/Open space being evaluated
            </Text>
            <TextInput
              style={[
                tw`mt-2.5 ml-1.5 mr-2.5 `,
                styles.DataInputBox,
              ]}
              onChangeText={(text) => setParkName({ value: text, error: "" })}
              
            />
          </View>
          <AllParkUse onChange={dataFetch}/>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
            Distance of the park/Open space? (In km/meter)            </Text>
            <TextInput
              style={[
                tw`mt-2.5 ml-1.5 mr-2.5 `,
                styles.DataInputBox,
              ]}
              onChangeText={(text) => setParkDistance({ value: text, error: "" })}
             
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
            Accessibility/approach road condition of the park/Open space?            
            </Text>
            <TextInput
              style={[
                tw`mt-2.5 ml-1.5 mr-2.5 `,
                styles.DataInputBox,
              ]}
              onChangeText={(text) => setParkAccessibility({ value: text, error: "" })}
              
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  `, styles.titleBox]}>
          Is there any parking facility/space?
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 10 }}
          >
            <YesNo onChange={dataFetch2} />
          </View>
        </View>
        <AllAccompanies onChange={dataFetch3} />
        <Text style={[tw` mt-1.5 ml-2.5 mr-2.5 `, styles.titleBox2]}>
        Why do you visit this park/Open space? (Pls tick)
          </Text>
        <AllParkVisitReason onChange={dataFetch4} />
        <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
        Average time you sent in this park/Open space? 
        </Text>
        <TextInput
          style={[tw`mt-2.5 ml-1.5 mr-1 `, styles.DataInputBox]}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={(text) => setAvgTimeHr({ value: text, error: "" })}
        />
        <View
          style={{ marginTop: 10, marginRight: 5, justifyContent: "center" }}
        >
          <Text>hours</Text>
        </View>
        <TextInput
          style={[tw`mt-2.5 ml-1.5 mr-1 `, styles.DataInputBox]}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={(text) => setAvgTimeMin({ value: text, error: "" })}
        />
        <View
          style={{ marginTop: 10, marginRight: 10, justifyContent: "center" }}
        >
          <Text>Mins</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
            How much crowd came in this park/Open space?
            </Text>
            <TextInput
              style={[
                tw`mt-2.5 ml-1.5 mr-2.5 `,
                styles.DataInputBox,
              ]}
              
              onChangeText={(text) => setMostVisited({ value: text, error: "" })}
              
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  `, styles.titleBox]}>
          Is there any program and/ or events organazied in the past?
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 10 }}
          >
            <YesNo onChange={dataFetch5} />
          </View>
        </View>
        {EventOrganized == "1" ? (
          <View>
         <View style={{ flex: 1, flexDirection: "row" }}>
         <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
         What program and/ or events are organazied?  
         </Text>
         <TextInput
           style={[
             tw`mt-2.5 ml-1.5 mr-2.5 `,
             styles.DataInputBox,
           ]}
           onChangeText={(text) => setWhatEvent({ value: text, error: "" })}
           
         />
       </View>
       <View style={{ flex: 1, flexDirection: "row" }}>
       <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
       Organizers Name 
       </Text>
       <TextInput
         style={[
           tw`mt-2.5 ml-1.5 mr-2.5 `,
           styles.DataInputBox,
         ]}
         onChangeText={(text) => setOrganizerName({ value: text, error: "" })}
         
       />
     </View>
     <View style={{ flex: 1, flexDirection: "row" }}>
     <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
     Organizers Contact No.   
     </Text>
     <TextInput
       style={[
         tw`mt-2.5 ml-1.5 mr-2.5 `,
         styles.DataInputBox,
       ]}
       onChangeText={(text) => setOrganizerNo({ value: text, error: "" })}
       keyboardType="numeric"
       maxLength={10}
     />
   </View>
   <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  `, styles.titleBox]}>
          Have you or your children ever participated in a program / events in this park?
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 10 }}
          >
            <YesNo onChange={dataFetch6} />
          </View>
        </View>
   </View>
      ) : null}
       
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
        Please describe the condition of the play equipment or courts and surrounding area (Visual survey)
        </Text>
        <TextInput
            style={[
              tw`mt-2.5 ml-2.5 mr-1`,
              styles.DataInputBoxBig,
            ]}
            multiline={true}
            onChangeText={(text) => setPlayEquipment({ value: text, error: "" })}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  `, styles.titleBox]}>
          Is this park/Open space clean? 
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 10 }}
          >
            <YesNo onChange={dataFetch7} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  `, styles.titleBox]}>
          Does the park/Open space have a Toilet? 
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 10 }}
          >
            <YesNo onChange={dataFetch8} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  `, styles.titleBox]}>
          Have you notice any disturbance or antisocial activity in and around the park/Open space 
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 10 }}
          >
            <YesNo onChange={dataFetch9} />
          </View>
        </View>
        {ParkDisturb == "1" ? (
        <View style={{ flex: 1,}}>
          <Text style={[tw` mt-2.5 ml-2.5 mr-2.5 `, styles.titleBox2]}>
            What disturbance?
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 `,
              styles.DataInputBoxBig,
            ]}
            onChangeText={(text) => setParkDisturbOther({ value: text, error: "" })}
           
          />
        </View>
      ) : null}
      <View style={{ flex: 1,}}>
          <Text style={[tw` mt-2.5 ml-2.5 mr-2.5 `, styles.titleBox2]}>
          Please note any ideas for improvement to park/Open space 
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 `,
              styles.DataInputBoxBig,
            ]}
            onChangeText={(text) => setImproveIdea({ value: text, error: "" })}
            
          />
        </View>
        </ScrollView>    
        </View>
  )
}

export default Park

const styles = StyleSheet.create({
    titleBox: {
      backgroundColor: "blue",
      color: "white",
      padding: 5,
      fontSize: 14,
      width: 120,
      textAlignVertical: "center",
    },
    titleBox2: {
      flex:1,
      backgroundColor: "blue",
      color: "white",
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
    DataInputBoxBig: {
      flex: 1,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
    margin:10,
    height:120,
    textAlignVertical: 'top'
    },
  });
  