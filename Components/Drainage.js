import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import AllToilet from "../AllDropDown/AllToilet";
import SepticDischarge from "../AllDropDown/SepticDischarge";
import ToiletLocation from "../AllDropDown/ToiletLocation";
import YesNo from "../AllDropDown/YesNo";
import GenderBoth from "../AllDropDown/GenderBoth";
import PitSepticTankUser from "../BigScreenComponent/PitSepticTankUser";
import DrainAdjacent from "../AllDropDown/DrainAdjacent";

const Drainage = (props) => {
 
  const [ToiletType, setToiletType] = useState("0");
  const [TankDischarge, setTankDischarge] = useState("0");
  const [TankDischargeOther, setTankDischargeOther] =useState({ value: "-", error: "" });
  const [ToiletLocationPart, setToiletLocationPart] = useState("0");
  const [ShareFacility, setShareFacility] = useState("0");
  const [UseToiletFacility, setUseToiletFacility] = useState({ value: "0", error: "" });
  const [CareCleaningToilet, setCareCleaningToilet] = useState("0");
  const [SewerageNetwork, setSewerageNetwork] = useState("0");
  const [DoesOverflow, setDoesOverflow] = useState("0");
  const [StormWaterDrains, setStormWaterDrains] = useState("0");
  const [StormWaterNearHouse , setStormWaterNearHouse] = useState("0");
  const [TankOld, setTankOld] = useState("0");
  const [HowFrequentEmptied, setHowFrequentEmptied] = useState("0");
  const [HowEmptied, setHowEmptied] = useState("0");
  const [HowEmptiedOther, setHowEmptiedOther] = useState("-");
  const [WhoEmptied, setWhoEmptied] = useState("0");
  const [WhoEmptiedOther, setWhoEmptiedOther] = useState("-");
  const [LastEmptied, setLastEmptied] = useState("0");
  const [LastEmptiedOther, setLastEmptiedOther] = useState("-");
  
  const dataFetch = (data) => {
    setToiletType(data);
    //props.getData(sCategory,Vulnerability,FamilyType,RationCardType,Structure,OwnerShip);
  };
  const dataFetch2 = (data) => {
    setTankDischarge(data);
    //props.getData(sCategory,Vulnerability,FamilyType,RationCardType,Structure,OwnerShip);
  };
  const dataFetch3 = (data) => {
    setToiletLocationPart(data);
    //props.getData(sCategory,Vulnerability,FamilyType,RationCardType,Structure,OwnerShip);
  };
  const dataFetch4 = (data) => {
    setShareFacility(data);
    //props.getData(sCategory,Vulnerability,FamilyType,RationCardType,Structure,OwnerShip);
  };
  const dataFetch5 = (data) => {
    setCareCleaningToilet(data);
    //props.getData(sCategory,Vulnerability,FamilyType,RationCardType,Structure,OwnerShip);
  };
  const dataFetch6 = (data) => {
    setSewerageNetwork(data);
    //props.getData(sCategory,Vulnerability,FamilyType,RationCardType,Structure,OwnerShip);
  };
  const dataFetch7 = (data) => {
    setStormWaterDrains(data);
    //props.getData(sCategory,Vulnerability,FamilyType,RationCardType,Structure,OwnerShip);
  };
  const dataFetch8 = (data) => {
    setStormWaterNearHouse(data);
    //props.getData(sCategory,Vulnerability,FamilyType,RationCardType,Structure,OwnerShip);
  };
  const dataFetch9 = (data) => {
    setDoesOverflow(data);
    //props.getData(sCategory,Vulnerability,FamilyType,RationCardType,Structure,OwnerShip);
  };
  function getPitTankData(
    sTankOld,
    sHowFrequentEmptied,
    sHowEmptied,
    sHowEmptiedOther,
    sWhoEmptied,
    sWhoEmptiedOther,
    sLastEmptied,
    sLastEmptiedOther
  ) {
      setTankOld(sTankOld);
      setHowFrequentEmptied(sHowFrequentEmptied);
      setHowEmptied(sHowEmptied);
      setHowEmptiedOther(sHowEmptiedOther);
      setWhoEmptied(sWhoEmptied);
      setWhoEmptiedOther(sWhoEmptiedOther);
      setLastEmptied(sLastEmptied);
      setLastEmptiedOther(sLastEmptiedOther);
  }
  useEffect(() => {
    dataReady()
  }, [ToiletType,TankDischarge,TankDischargeOther.value,ToiletLocationPart,ShareFacility,UseToiletFacility.value,
    CareCleaningToilet,SewerageNetwork,DoesOverflow,StormWaterDrains,StormWaterNearHouse,TankOld,HowFrequentEmptied,
    HowEmptied,HowEmptiedOther,WhoEmptied,WhoEmptiedOther,LastEmptied,LastEmptiedOther])
  const dataReady = () => {
    props.getData(ToiletType,TankDischarge,TankDischargeOther.value,ToiletLocationPart,ShareFacility,UseToiletFacility.value,
      CareCleaningToilet,SewerageNetwork,DoesOverflow,StormWaterDrains,StormWaterNearHouse,TankOld,HowFrequentEmptied,
      HowEmptied,HowEmptiedOther,WhoEmptied,WhoEmptiedOther,LastEmptied,LastEmptiedOther);
  };

  return (
    <View>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            What kind of toilet facility do members of your household usually
            use?
          </Text>
          <View
            style={{
              flex: 1,
              marginTop: 5,
              marginLeft: 5,
              marginRight: 5,
              justifyContent: "center",
            }}
          >
            <AllToilet onChange={dataFetch} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            Where does your septic tank discharge to?
          </Text>
          <View
            style={{
              flex: 1,
              marginTop: 5,
              marginLeft: 5,
              marginRight: 5,
              justifyContent: "center",
            }}
          >
            <SepticDischarge onChange={dataFetch2} />
          </View>
        </View>
        {TankDischarge=='6' ?
        <View style={{ flex: 1,flexDirection:'row'}}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            Please Specify
            </Text>
        <TextInput
          style={[
            tw`mt-2.5 ml-2.5 mr-2.5 `,
            styles.DataInputBox,
          ]}
          onChangeText={(text) => setTankDischargeOther({ value: text, error: "" })}
        />
      </View>
          :null
       }

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Location of the Toilet
          </Text>
          <View
            style={{
              flex: 1,
              marginTop: 5,
              marginLeft: 5,
              marginRight: 5,
              justifyContent: "center",
            }}
          >
            <ToiletLocation onChange={dataFetch3} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Do you share this facility with other households?
          </Text>
          <View
            style={{
              flex: 1,
              marginTop: 5,
              marginLeft: 5,
              marginRight: 5,
              justifyContent: "center",
            }}
          >
            <YesNo onChange={dataFetch4} />
          </View>
        </View>
        {ShareFacility != ('0') ?
      <View>
          {ShareFacility == ('1') ?
          <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
          How many households use this toilet facility?
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`,
              styles.DataInputBoxBig,
            ]}
            onChangeText={(text) => setUseToiletFacility({ value: text, error: "" })}
            maxLength={4}
            keyboardType="numeric"
          />
        </View>
          :null}
          </View>
          :null}
          <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Who in your household regularly take care of cleaning the toilet?
          </Text>
          <View
            style={{
              flex: 1,
              marginTop: 5,
              marginLeft: 5,
              marginRight: 5,
              justifyContent: "center",
            }}
          >
            <GenderBoth onChange={dataFetch5} />
          </View>
        </View>
        
      
        {ToiletType != ('0') ?
        <View>
          {ToiletType == ('2')||ToiletType == ('3') ?
          <View>
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
            Households, who use pit latrine / Septic tank:
          </Text>
          </View>
          <PitSepticTankUser getData={getPitTankData}/>
          </View>
          :null}
          </View>
          :null}
         <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
        Is there any Sewerage network exists in your area?
        </Text>
        <View
          style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5,justifyContent:'center' }}
        >
          <YesNo onChange={dataFetch6} />
        </View>
      </View>  
      {SewerageNetwork == ('1') ?
          <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Does it overflow?
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5,justifyContent:'center' }}
          >
            <YesNo onChange={dataFetch9} />
          </View>
        </View>  
          :null}
          <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Does your area have storm water drains?
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5,justifyContent:'center' }}
          >
            <YesNo onChange={dataFetch7} />
          </View>
        </View> 
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Type of storm water drain adjacent to your house
          </Text>
          <View
            style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5,justifyContent:'center' }}
          >
            <DrainAdjacent onChange={dataFetch8} />
          </View>
        </View> 
      </ScrollView>
    </View>
  );
};

export default Drainage;

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
  },
});
