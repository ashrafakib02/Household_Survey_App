import {
  StyleSheet,
  View,
  LogBox,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import tw from "tailwind-react-native-classnames";
import YesNo from "../AllDropDown/YesNo";
import DisposalProblem from "../AllDropDown/DisposalProblem";
import AllSolidWaste from "../AllDropDown/AllSolidWaste";
import AllWasteContainer from "../AllDropDown/AllWasteContainer";
import WasteEmptied from "../AllDropDown/WasteEmptied";
import WasteDispose from "../AllDropDown/WasteDispose";
import PublicBinEmptied from "../AllDropDown/PublicBinEmptied";
import PublicBinState from "../AllDropDown/PublicBinState";
import HouseWasteRemoval from "../AllDropDown/HouseWasteRemoval";
import SolidWasteState from "../AllDropDown/SolidWasteState";
import YesNoNot from "../AllDropDown/YesNoNot";

const SolidWaste = (props) => {
  LogBox.ignoreAllLogs();

  const [DisposedWaste, setDisposedWaste] = useState("0");
  const [DisposedProperly, setDisposedProperly] = useState("0");
  const [IdentifyCauses, setIdentifyCauses] = useState("0");
  const [SolidWasteType, setSolidWasteType] = useState("0");
  const [ContainerType, setContainerType] = useState("0");
  const [WasteSegregation, setWasteSegregation] = useState("0");
  const [SegregateAtPlace, setSegregateAtPlace] = useState("0");
  const [ContainerEmptied, setContainerEmptied] = useState("0");
  const [DoorToDoor, setDoorToDoor] = useState("0");
  const [DoorCollectionCharge, setDoorCollectionCharge] = useState({
    value: "0",
    error: "",
  });
  const [DisposeWaste, setDisposeWaste] = useState("0");
  const [PublicBinsEmptied, setPublicBinsEmptied] = useState("0");
  const [StatePublicBin, setStatePublicBin] = useState("0");

  const [ProblemWasteManagement1, setProblemWasteManagement1] = useState({
    value: "-",
    error: "",
  });
  const [ProblemWasteManagement2, setProblemWasteManagement2] = useState({
    value: "-",
    error: "",
  });
  const [ProblemWasteManagement3, setProblemWasteManagement3] = useState({
    value: "-",
    error: "",
  });
  const [ProblemWasteManagement4, setProblemWasteManagement4] = useState({
    value: "-",
    error: "",
  });
  const [ProblemWasteManagement5, setProblemWasteManagement5] = useState({
    value: "-",
    error: "",
  });
  const [ProblemWasteManagement6, setProblemWasteManagement6] = useState({
    value: "-",
    error: "",
  });

  const [RemovalWaste, setRemovalWaste] = useState("0");
  const [SolidWasteCollection, setSolidWasteCollection] = useState("0");
  const [WasteManagementCentre, setWasteManagementCentre] = useState("0");
  const [WasteManagementProcess, setWasteManagementProcess] = useState("0");

  const [impRecycling, setImpRecycling] = useState("0");
  const [SolidWasteRecycling, setSolidWasteRecycling] = useState("0");
  const [CollectionPurposes, setCollectionPurposes] = useState("0");
  const [WasteManagementImportant, setWasteManagementImportant] = useState({
    value: "-",
    error: "",
  });
  const [MunicipalityResolve, setMunicipalityResolve] = useState({
    value: "-",
    error: "",
  });

  const dataFetch = (data) => {
    setDisposedWaste(data);
  };
  const dataFetch2 = (data) => {
    setDisposedProperly(data);
  };
  const dataFetch3 = (data) => {
    setIdentifyCauses(data);
  };
  const dataFetch4 = (data) => {
    setSolidWasteType(data);
  };
  const dataFetch5 = (data) => {
    setContainerType(data);
  };
  const dataFetch6 = (data) => {
    setWasteSegregation(data);
  };
  const dataFetch7 = (data) => {
    setSegregateAtPlace(data);
  };
  const dataFetch8 = (data) => {
    setContainerEmptied(data);
  };
  const dataFetch9 = (data) => {
    setDoorToDoor(data);
  };
  const dataFetch10 = (data) => {
    setDisposeWaste(data);
  };
  const dataFetch11 = (data) => {
    setPublicBinsEmptied(data);
  };
  const dataFetch12 = (data) => {
    setStatePublicBin(data);
  };
  const dataFetch13 = (data) => {
    setRemovalWaste(data);
  };
  const dataFetch14 = (data) => {
    setSolidWasteCollection(data);
  };
  const dataFetch15 = (data) => {
    setWasteManagementCentre(data);
  };
  const dataFetch16 = (data) => {
    setWasteManagementProcess(data);
  };
  const dataFetch17 = (data) => {
    setImpRecycling(data);
  };
  const dataFetch18 = (data) => {
    setSolidWasteRecycling(data);
  };
  const dataFetch19 = (data) => {
    setCollectionPurposes(data);
  };

  useEffect(() => {
    dataReady()
  }, [DisposedWaste,DisposedProperly,IdentifyCauses,SolidWasteType,ContainerType,WasteSegregation,SegregateAtPlace,ContainerEmptied,
    DoorToDoor,DoorCollectionCharge.value,DisposeWaste,PublicBinsEmptied,StatePublicBin,ProblemWasteManagement1.value,
    ProblemWasteManagement2.value,ProblemWasteManagement3.value,ProblemWasteManagement4.value,ProblemWasteManagement5.value,
    ProblemWasteManagement6.value,RemovalWaste,SolidWasteCollection,WasteManagementCentre,WasteManagementProcess,impRecycling,
    SolidWasteRecycling,CollectionPurposes,WasteManagementImportant.value,MunicipalityResolve.value])
    const dataReady = () => {
      console.log(DisposedWaste,DisposedProperly,IdentifyCauses,SolidWasteType,ContainerType,WasteSegregation,SegregateAtPlace,ContainerEmptied,
        DoorToDoor,DoorCollectionCharge.value,DisposeWaste,PublicBinsEmptied,StatePublicBin,ProblemWasteManagement1.value,
        ProblemWasteManagement2.value,ProblemWasteManagement3.value,ProblemWasteManagement4.value,ProblemWasteManagement5.value,
        ProblemWasteManagement6.value,RemovalWaste,SolidWasteCollection,WasteManagementCentre,WasteManagementProcess,impRecycling,
        SolidWasteRecycling,CollectionPurposes,WasteManagementImportant.value,MunicipalityResolve.value);
      props.getData(DisposedWaste,DisposedProperly,IdentifyCauses,SolidWasteType,ContainerType,WasteSegregation,SegregateAtPlace,ContainerEmptied,
        DoorToDoor,DoorCollectionCharge.value,DisposeWaste,PublicBinsEmptied,StatePublicBin,ProblemWasteManagement1.value,
        ProblemWasteManagement2.value,ProblemWasteManagement3.value,ProblemWasteManagement4.value,ProblemWasteManagement5.value,
        ProblemWasteManagement6.value,RemovalWaste,SolidWasteCollection,WasteManagementCentre,WasteManagementProcess,impRecycling,
        SolidWasteRecycling,CollectionPurposes,WasteManagementImportant.value,MunicipalityResolve.value);
    };
 
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          How do you dispose your household waste?
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
          <YesNo onChange={dataFetch} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Do you agree if the waste is not disposed properly, it can pollute the
          environment?
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
          <YesNo onChange={dataFetch2} />
        </View>
      </View>
      {DisposedProperly == "1" ? (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            Identify the causes/reasons for some of these problems
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
            <DisposalProblem onChange={dataFetch3} />
          </View>
        </View>
      ) : null}
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          What type of solid waste comes out from your household?
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
          <AllSolidWaste onChange={dataFetch4} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          In what type of container do you collect waste?
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
          <AllWasteContainer onChange={dataFetch5} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Do you know about waste segregation?
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
          <YesNo onChange={dataFetch6} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Do you Segregate the waste at your place?
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
          <YesNo onChange={dataFetch7} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          How often is the waste container emptied?
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
          <WasteEmptied onChange={dataFetch8} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Is there door-to-door waste collection by the municipality?
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
          <YesNo onChange={dataFetch9} />
        </View>
      </View>
      {DoorToDoor == "1" ? (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
            What is the montly charge for the door-to-door collection?
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-1 text-indigo-700`,
              styles.DataInputBox,
            ]}
            keyboardType="numeric"
            maxLength={5}
            onChangeText={(text) =>
              setDoorCollectionCharge({ value: text, error: "" })
            }
          />
          <View
            style={{ marginTop: 10, marginRight: 5, justifyContent: "center" }}
          >
            <Text>Per month</Text>
          </View>
        </View>
      ) : null}
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          Where do you usually dispose the waste?
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
          <WasteDispose onChange={dataFetch10} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          If there are public bins, how often are the nearest public bins
          emptied?
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
          <PublicBinEmptied onChange={dataFetch11} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
          How can you describe the state of the public bin near your house?
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
          <PublicBinState onChange={dataFetch12} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
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
          What problem do you think exist in your area as for waste management?
        </Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-2.5 ml-2.5 `, styles.numTitleBox]}>1.</Text>
            <TextInput
              style={[tw`mt-2.5 mr-1`, styles.numDataInputBox]}
              onChangeText={(text) =>
                setProblemWasteManagement1({ value: text, error: "" })
              }
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-2.5 ml-2.5 `, styles.numTitleBox]}>2.</Text>
            <TextInput
              style={[tw`mt-2.5 mr-1`, styles.numDataInputBox]}
              onChangeText={(text) =>
                setProblemWasteManagement2({ value: text, error: "" })
              }
            />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-2.5 ml-2.5 `, styles.numTitleBox]}>3.</Text>
            <TextInput
              style={[tw`mt-2.5 mr-1`, styles.numDataInputBox]}
              onChangeText={(text) =>
                setProblemWasteManagement3({ value: text, error: "" })
              }
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-2.5 ml-2.5 `, styles.numTitleBox]}>4.</Text>
            <TextInput
              style={[tw`mt-2.5 mr-1`, styles.numDataInputBox]}
              onChangeText={(text) =>
                setProblemWasteManagement4({ value: text, error: "" })
              }
            />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-2.5 ml-2.5 `, styles.numTitleBox]}>5.</Text>
            <TextInput
              style={[tw`mt-2.5 mr-1`, styles.numDataInputBox]}
              onChangeText={(text) =>
                setProblemWasteManagement5({ value: text, error: "" })
              }
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[tw` mt-2.5 ml-2.5 `, styles.numTitleBox]}>6.</Text>
            <TextInput
              style={[tw`mt-2.5 mr-1`, styles.numDataInputBox]}
              onChangeText={(text) =>
                setProblemWasteManagement6({ value: text, error: "" })
              }
            />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            Which system do you prefer for removal of your household waste?
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
            <HouseWasteRemoval onChange={dataFetch13} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            How do you evaluate the state of solid waste collection in your
            House area?
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
            <SolidWasteState onChange={dataFetch14} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            Do you know if there is a waste management centre in your area
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
            <YesNo onChange={dataFetch15} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            Are you satisfied with the waste management processes of your area?
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
            <YesNo onChange={dataFetch16} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            Have you ever heard about the importance of recycling?
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
            <YesNo onChange={dataFetch17} />
          </View>
        </View>
        {impRecycling == "1" ? (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}
            >
              Do you agree to Solid waste recycling?
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
              <YesNoNot onChange={dataFetch18} />
            </View>
          </View>
        ) : null}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-1.5 ml-2.5  text-indigo-700`, styles.titleBox]}>
            If a recycling programme was set up, would you be willing to
            separate materials into separate bags for collection purposes?
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
            <YesNoNot onChange={dataFetch19} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
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
            Please explain why the Solid Waste Management is important to you?
          </Text>
          <TextInput
            style={[tw`mt-2.5 mr-1`, styles.DataInputBoxBig]}
            multiline={true}
            onChangeText={(text) => setWasteManagementImportant({ value: text, error: "" })}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
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
            What do you suggest Municipality to resolve Solid Waste problem?
          </Text>
          <TextInput
            style={[tw`mt-2.5 mr-1`, styles.DataInputBoxBig]}
            multiline={true}
            onChangeText={(text) => setMunicipalityResolve({ value: text, error: "" })}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SolidWaste;

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
    margin: 10,
    height: 100,
    textAlignVertical: "top",
  },
});
