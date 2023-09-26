import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { ScrollView } from "react-native-gesture-handler";
import * as DocumentPicker from "expo-document-picker";
import { TouchableOpacity } from "react-native";

const Others = (props) => {
  const [WaterRank, setWaterRank] = useState({ value: "0", error: "" });
  const [SanitationRank, setSanitationRank] = useState({
    value: "0",
    error: "",
  });
  const [DrainageRank, setDrainageRank] = useState({ value: "0", error: "" });
  const [SolidWasteRank, setSolidWasteRank] = useState({
    value: "0",
    error: "",
  });
  const [TransportRank, setTransportRank] = useState({ value: "0", error: "" });

  const [WaterReason, setWaterReason] = useState({ value: "-", error: "" });
  const [SanitationReason, setSanitationReason] = useState({
    value: "-",
    error: "",
  });
  const [DrainageReason, setDrainageReason] = useState({
    value: "-",
    error: "",
  });
  const [SolidWasteReason, setSolidWasteReason] = useState({
    value: "-",
    error: "",
  });
  const [TransportReason, setTransportReason] = useState({
    value: "-",
    error: "",
  });

  const [PriorityRemark, setPriorityRemark] = useState({
    value: "-",
    error: "",
  });
  const [File, setFile] = useState([]);

  useEffect(() => {
    dataReady();
  }, [
    WaterRank.value,
    SanitationRank.value,
    DrainageRank.value,
    SolidWasteRank.value,
    TransportRank.value,
    WaterReason.value,
    SanitationReason.value,
    DrainageReason.value,
    SolidWasteReason.value,
    TransportReason.value,
    PriorityRemark.value,
    File.length,
  ]);
  const dataReady = () => {
    props.getData(
      WaterRank.value,
      SanitationRank.value,
      DrainageRank.value,
      SolidWasteRank.value,
      TransportRank.value,
      WaterReason.value,
      SanitationReason.value,
      DrainageReason.value,
      SolidWasteReason.value,
      TransportReason.value,
      PriorityRemark.value,
      File
    );
  };
  const GotoDelete = (itemNme) => {
    const updatedFile = File.filter((item) => item.name !== itemNme);
    setFile(updatedFile);
  };
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    }).then((response) => {
      if (!response.canceled) {
        let { name, size, uri } = response.assets[0];
        let nameParts = name.split(".");
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = {
          name: name,
          size: size,
          uri: uri,
          type: "application/" + fileType,
        };
        console.log(fileToUpload.name, "...............file");

        docDataPicker(fileToUpload);
      }
    });
  };
  const docDataPicker = (docFull) => {
    setFile([...File, docFull]);

    console.log("Doc: " + File);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            flex: 1,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            backgroundColor: "blue",
            color: "white",
            padding: 5,
            fontSize: 14,
            textAlignVertical: "center",
          }}
        >
          RANK YOUR PRIORITY (FROM 1 TO 4, WITH 1 BEING THE LEAST ON THE
          PRIORITY LIST)
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text
          style={[tw` mt-2.5 ml-1.5 text-indigo-700`, styles.titleBoxSmall]}
        >
          Amenities
        </Text>
        <Text style={[tw` mt-2.5 text-indigo-700`, styles.titleBoxSmall2]}>
          Rank
        </Text>
        <Text style={[tw` mt-2.5 mr-1 text-indigo-700`, styles.titleBox]}>
          Reason
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` ml-1.5 text-indigo-700`, styles.titleBoxSmall]}>
          Water facility
        </Text>
        <TextInput
          style={[tw` text-indigo-700`, styles.DataInputBoxSmall]}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => setWaterRank({ value: text, error: "" })}
        />
        <TextInput
          style={[tw` mr-1.5 text-indigo-700`, styles.DataInputBox]}
          onChangeText={(text) => setWaterReason({ value: text, error: "" })}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` ml-1.5 text-indigo-700`, styles.titleBoxSmall]}>
          Sanitation
        </Text>
        <TextInput
          style={[tw` text-indigo-700`, styles.DataInputBoxSmall]}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => setSanitationRank({ value: text, error: "" })}
        />
        <TextInput
          style={[tw`mr-1.5 text-indigo-700`, styles.DataInputBox]}
          onChangeText={(text) =>
            setSanitationReason({ value: text, error: "" })
          }
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` ml-1.5 text-indigo-700`, styles.titleBoxSmall]}>
          Drainage
        </Text>
        <TextInput
          style={[tw` text-indigo-700`, styles.DataInputBoxSmall]}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => setDrainageRank({ value: text, error: "" })}
        />
        <TextInput
          style={[tw`mr-1.5 text-indigo-700`, styles.DataInputBox]}
          onChangeText={(text) => setDrainageReason({ value: text, error: "" })}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` ml-1.5 text-indigo-700`, styles.titleBoxSmall]}>
          Solid waste management
        </Text>
        <TextInput
          style={[tw` text-indigo-700`, styles.DataInputBoxSmall]}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => setSolidWasteRank({ value: text, error: "" })}
        />
        <TextInput
          style={[tw`mr-1.5 text-indigo-700`, styles.DataInputBox]}
          onChangeText={(text) =>
            setSolidWasteReason({ value: text, error: "" })
          }
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` ml-1.5 text-indigo-700`, styles.titleBoxSmall]}>
          Transport/Road
        </Text>
        <TextInput
          style={[tw` text-indigo-700`, styles.DataInputBoxSmall]}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => setTransportRank({ value: text, error: "" })}
        />
        <TextInput
          style={[tw`mr-1.5 text-indigo-700`, styles.DataInputBox]}
          onChangeText={(text) =>
            setTransportReason({ value: text, error: "" })
          }
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
          REMARKS, IF ANY
        </Text>
        <TextInput
          style={[tw`mt-2.5 mr-1`, styles.DataInputBoxBig]}
          multiline={true}
          onChangeText={(text) => setPriorityRemark({ value: text, error: "" })}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
          Attachment
        </Text>
        <Text
          onPress={pickDocument}
          style={[tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`, styles.DataBox]}
        >
          Attach Document
        </Text>
      </View>
      <ScrollView
        style={[tw`text-indigo-700`, styles.DocBox]}
        horizontal={true}
      >
        {File.map((data) => (
          <View
            style={{
              borderColor: "black",
              borderWidth: 1,
              marginTop: 10,
              marginLeft: 10,
              marginBottom: 10,
            }}
          >
            {data.name.includes(".pdf") ? (
              <ImageBackground
                source={{
                  uri: "https://cdn.pixabay.com/photo/2017/03/08/21/20/pdf-2127829_960_720.png",
                }}
                style={{ width: 200, height: 200, margin: 10, padding: 5 }}
              >
                <View style={{ padding: 5, alignItems: "flex-end" }}>
                  <TouchableOpacity
                    style={{ borderColor: "black", borderWidth: 1 }}
                    onPress={() => GotoDelete(data.name)}
                  >
                    <Image
                      source={require("../assets/trash.png")}
                      style={{
                        width: 20,
                        height: 20,
                        margin: 5,
                        alignContent: "flex-end",
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            ) : (
              <ImageBackground
                source={{ uri: data.uri }}
                style={{ width: 200, height: 200, margin: 10, padding: 5 }}
              >
                <View style={{ padding: 5, alignItems: "flex-end" }}>
                  <TouchableOpacity
                    style={{ borderColor: "black", borderWidth: 1 }}
                    onPress={() => GotoDelete(data.name)}
                  >
                    <Image
                      source={require("../assets/trash.png")}
                      style={{
                        width: 20,
                        height: 20,
                        margin: 5,
                        alignContent: "flex-end",
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            )}
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};
export default Others;

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
  titleBoxSmall: {
    width: 100,
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
  titleBoxSmall2: {
    width: 80,
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
    textAlignVertical: "top",
  },
  DataInputBoxSmall: {
    width: 80,
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
    margin: 10,
    height: 120,
    textAlignVertical: "top",
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
});
