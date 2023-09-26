import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import AllScCategory from "../AllDropDown/AllScCategory";
import AllVulnerability from "../AllDropDown/AllVulnerability";
import AllFamilyType from "../AllDropDown/AllFamilyType";
import AllRationCardType from "../AllDropDown/AllRationCardType";
import AllStructure from "../AllDropDown/AllStructure";
import AllOwnerShip from "../AllDropDown/AllOwnerShip";
import AllRelations from "../AllDropDown/AllRelations";
import AllGender from "../AllDropDown/AllGender";
import AllProofType from "../AllDropDown/AllProofType";

const HouseHold = (props) => {
  const [RespondentName, setRespondentName] = useState({ value: "-", error: ""});
  const [HohRelation, setHohRelation] = useState("0");
  const [HohName, setHohName] = useState({ value: "-", error: ""});
  const [Gender, setGender] = useState("0");
  const [MobileNo, setMobileNo] = useState({ value: "-", error: ""});
  const [ProofType, setProofType] = useState("0");
  const [ProofNo, setProofNo] = useState({ value: "-", error: ""});
  const [sCategory, setSCategory] = useState("0");
  const [TribeName, setTribeName] =useState({ value: "-", error: ""});
  const [Vulnerability, setVulnerability] = useState("0");
  const [VulnerabilityOther, setVulnerabilityOther] = useState({ value: "-", error: ""});
  const [FamilyType, setFamilyType] = useState("0");
  const [MemberNo, setMemberNo] = useState({ value: "0", error: ""});

  const [Class10, setClass10] = useState({ value: "0", error: ""});
  const [Class12, setClass12] = useState({ value: "0", error: ""});
  const [Graduate, setGraduate] = useState({ value: "0", error: ""});
  const [PostGrad, setPostGrad] = useState({ value: "0", error: ""});

  const [EduString, setEduString] = useState("-");


  const [RationCardType, setRationCardType] = useState("0");
  const [Structure, setStructure] = useState("0");
  const [areaLived, setAreaLived] = useState({ value: "-", error: ""});
  const [OwnerShip, setOwnerShip] = useState("0");
  const [OwnerShipOther, setOwnerShipOther] = useState({ value: "-", error: ""});

  const dataFetch = (data) => {
    setHohRelation(data);
  };
  const dataFetch2 = (data) => {
    setGender(data);
  };
  const dataFetch3 = (data) => {
    setSCategory(data);
  };
  const dataFetch4 = (data) => {
    setVulnerability(data);
  };
  const dataFetch5 = (data) => {
    setFamilyType(data);
  };
  const dataFetch6 = (data) => {
    setRationCardType(data);
  };
  const dataFetch7 = (data) => {
    setStructure(data);
  };
  const dataFetch8 = (data) => {
    setOwnerShip(data);
  };
  const dataFetch9 = (data) => {
    setProofType(data);
  };

  useEffect(() => {

    dataReady()
  }, [RespondentName.value,HohRelation,HohName.value,Gender,
    MobileNo.value,ProofType,ProofNo.value,sCategory,TribeName,Vulnerability,VulnerabilityOther.value,FamilyType,MemberNo.value,
    Class10.value,Class12.value,Graduate.value,PostGrad.value,RationCardType,Structure,areaLived.value,OwnerShip,OwnerShipOther.value
  ])
  const dataReady = () => {

    setEduString(Class10.value+","+Class12.value+","+Graduate.value+","+PostGrad.value);
    props.getData(RespondentName.value,HohRelation,HohName.value,Gender,MobileNo.value,ProofType,ProofNo.value,sCategory,TribeName.value,
      Vulnerability,VulnerabilityOther.value,FamilyType,MemberNo.value,EduString,RationCardType,Structure,areaLived.value,OwnerShip,OwnerShipOther.value);
  };

  
  return (
    <View>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
            Name of the Respondent
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 `,
              styles.DataInputBox,
            ]}
            onChangeText={(text) => setRespondentName({ value: text, error: "" })}
          />
        </View>
        <AllRelations onChange={dataFetch} />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
            Name of the Head of Household
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 `,
              styles.DataInputBox,
            ]}
            onChangeText={(text) => setHohName({ value: text, error: "" })}
          />
        </View>
        <AllGender onChange={dataFetch2} />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
            Mobile Number (10 digit)
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 `,
              styles.DataInputBox,
            ]}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={(text) => setMobileNo({ value: text, error: "" })}
          />
        </View>
        <AllProofType onChange={dataFetch9} />

        {ProofType=='1' ?
       <View style={{ flex: 1, flexDirection: "row" }}>
       <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
         Aadhar Number (12 digit)
       </Text>
       <TextInput
         style={[
           tw`mt-2.5 ml-1.5 mr-2.5 `,
           styles.DataInputBox,
         ]}
         keyboardType="numeric"
         maxLength={12}
         onChangeText={(text) => setProofNo({ value: text, error: "" })}
       />
     </View>
          :null
       }

{ProofType=='2' ?
       <View style={{ flex: 1, flexDirection: "row" }}>
       <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
         Voter ID Number
       </Text>
       <TextInput
         style={[
           tw`mt-2.5 ml-1.5 mr-2.5 `,
           styles.DataInputBox,
         ]}
         maxLength={12}
         onChangeText={(text) => setProofNo({ value: text, error: "" })}
       />
     </View>
          :null
       }
       {ProofType=='3' ?
       <View style={{ flex: 1, flexDirection: "row" }}>
       <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
       Driving license Number
       </Text>
       <TextInput
         style={[
           tw`mt-2.5 ml-1.5 mr-2.5 `,
           styles.DataInputBox,
         ]}
         maxLength={12}
         onChangeText={(text) => setProofNo({ value: text, error: "" })}
       />
     </View>
          :null
       }
       {ProofType=='4' ?
       <View style={{ flex: 1, flexDirection: "row" }}>
         
       <TextInput
         style={[
           tw`mt-2.5 ml-1.5 mr-2.5 `,
           styles.DataInputBox,
         ]}
         maxLength={12}
         onChangeText={(text) => setProofNo({ value: text, error: "" })}
       />
     </View>
          :null
       }
        <AllScCategory onChange={dataFetch3} />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
            Specify the community (Tribe Name)
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 `,
              styles.DataInputBox,
            ]}
            onChangeText={(text) => setTribeName({ value: text, error: "" })}
          />
        </View>
        <AllVulnerability onChange={dataFetch4} />
        {Vulnerability=='5' ?
        <View style={{ flex: 1}}>
        <TextInput
          style={[
            tw`mt-2.5 ml-2.5 mr-2.5 `,
            styles.DataInputBox,
          ]}
          onChangeText={(text) => setVulnerabilityOther({ value: text, error: "" })}
        />
      </View>
          :null
       }
        <AllFamilyType onChange={dataFetch5} />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
          Total Number of Family Members
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 `,
              styles.DataInputBox,
            ]}
            keyboardType="numeric"
            maxLength={3}
            onChangeText={(text) => setMemberNo({ value: text, error: "" })}
          />                   
        </View>
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
            Educational Background of Family Member
          </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1,}}>
        <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox2]}>
        Class 10
        </Text>
        <TextInput
            style={[
              tw`ml-2.5`,
              styles.DataInputBox,
            ]}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(text) => setClass10({ value: text, error: "" })}
          /> 
        </View>
        <View style={{ flex: 1,}}>
        <Text style={[tw` mt-2.5 text-indigo-700`, styles.titleBox2]}>
        Class 12
        </Text>
        <TextInput
            style={[
              tw``,
              styles.DataInputBox,
            ]}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(text) => setClass12({ value: text, error: "" })}
          />
        </View>
        <View style={{ flex: 1,}}>
        <Text style={[tw`  mt-2.5 text-indigo-700`, styles.titleBox2]}>
        Graduate
        </Text>
        <TextInput
            style={[
              tw``,
              styles.DataInputBox,
            ]}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(text) => setGraduate({ value: text, error: "" })}
          />
        </View>
        <View style={{ flex: 1,}}>
        <Text style={[tw` mt-2.5 mr-2.5 text-indigo-700`, styles.titleBox2]}>
        Post Graduates
        </Text>
        <TextInput
            style={[
              tw`mr-2.5`,
              styles.DataInputBox,
            ]}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(text) => setPostGrad({ value: text, error: "" })}
          />
        </View>
      </View>
        <AllRationCardType onChange={dataFetch6} />
        <AllStructure onChange={dataFetch7} />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[tw` mt-2.5 ml-2.5 `, styles.titleBox]}>
          How long have you lived in this area?
          </Text>
          <TextInput
            style={[
              tw`mt-2.5 ml-1.5 mr-2.5 `,
              styles.DataInputBox,
            ]}
            keyboardType="numeric"
            maxLength={3}
            onChangeText={(text) => setAreaLived({ value: text, error: "" })}
          />
          <View style={{marginTop:10,marginRight:66,justifyContent:'center'}}>
          <Text >
         Years
          </Text>
          </View>
          
        </View>

        <AllOwnerShip onChange={dataFetch8} />
        {OwnerShip=='3' ?
        <View style={{ flex: 1}}>
        <TextInput
          style={[
            tw`mt-2.5 ml-2.5 mr-2.5 `,
            styles.DataInputBox,
          ]}
          onChangeText={(text) => setOwnerShipOther({ value: text, error: "" })}
        />
      </View>
          :null
       }
      </ScrollView>
    </View>
  );
};

export default HouseHold;

const styles = StyleSheet.create({
  titleBox: {
   
    backgroundColor: "white",
    color: "black",
    padding: 5,
    fontSize: 14,
    textAlignVertical: "center",
    borderColor: "black",
    borderWidth: 1,
    width: 120,
    backgroundColor: "blue",
    color: "white",
  },
  titleBox2: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
    padding: 5,
    fontSize: 14,
    textAlignVertical: "center",
    borderColor: "black",
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
    borderWidth: 1,
  },
});
