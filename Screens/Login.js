import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  View,
  SafeAreaView,
  Item,
  LogBox
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { TextInput } from "react-native-paper";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import "../Tools/global";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  LogBox.ignoreAllLogs();
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const LoginUrl = global.Login;

  const LoginFn = () => {
    if (username.length == 0) {
      alert("Please Enter Email!");
      setIsSubmit(false);
    } else if (password.length == 0) {
      alert("Please Enter Password!");
      setIsSubmit(false);
    } else {
      fetch(LoginUrl, {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uname: username.value,
          password: password.value,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          let loginObj = JSON.stringify(response);
          var parsed = JSON.parse(loginObj);
          var success = parsed.success;
          var user_id = parsed.user_cd;
          var full_name = parsed.full_name;
          var email = parsed.email;
          var supervisor_name = parsed.supervisor_name;
          var isHouseSurveyor = parsed.isHouseSurveyor;


          console.log(supervisor_name);

         

          if (success == 1) {
            global.success = success;
            global.user_id = user_id;
            global.full_name = full_name;
            global.email = email;
            global.supervisor_name = supervisor_name;
            global.isHouseSurveyor = isHouseSurveyor;
  
            AsyncStorage.setItem("success", success);
            AsyncStorage.setItem("user_id", user_id);
            AsyncStorage.setItem("full_name", full_name);
            AsyncStorage.setItem("email", email);
            AsyncStorage.setItem("supervisor_name", supervisor_name);
            AsyncStorage.setItem("isHouseSurveyor", isHouseSurveyor);
            navigation.reset({
              index: 0,
              routes: [{ name: "MainDashboard" }],
            });
          } else {
            console.log(success)
            alert("Username and Password Didn't match!!");
          }
        })
        .catch((error) => {
          alert("Error 1" + error);
        })
        .finally(setIsSubmit(false));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.logo}>
          <Image
            style={{ width: 250, height: 200, resizeMode: "contain" }}
            source={require("../assets/picture.png")}
          />
          <Text
            style={{
              fontSize: 24,
              marginTop: 10,
              fontWeight: "bold",
              color: "rgba(16, 33, 62, 1)",
              textAlign: "center",
            }}
          >
            Nagaland Urban Infrastructure{"\n"}Development Project
          </Text>
          <Text
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              textAlign: "center",
              fontSize: 14,
              color: "rgba(16, 33, 62, 1)",
            }}
          >
            under ADB
          </Text>
        </View>
        <View
          style={[
            tw`max-h-96 max-w-screen-sm m-8 rounded-3xl  mt-10 `,
            styles.flexdiv,
          ]}
        >
          <View style={styles.viewdiv}>
            <Text style={styles.text}>LOGIN</Text>
          </View>
          <View style={{ margin: 15 }}>
            <TextInput
              style={{
                paddingLeft: 5,
                marginBottom: 10,
                borderRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: "white",
              }}
              label="Email"
              autoCapitalize="none"
              onChangeText={(text) => setEmail({ value: text, error: "" })}
            />
            <TextInput
              style={{
                paddingLeft: 5,
                marginTop: 10,
                borderRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: "white",
              }}
              label="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(text) => setPassword({ value: text, error: "" })}
            />
          </View>
          <View
            style={{
              justifyContent: "space-evenly",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              onPress={LoginFn}
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f5f5f5",
                height: 40,
                marginLeft: "25%",
                marginRight: "25%",
                marginTop: 10,
                borderRadius: 10,
                shadowColor: "#f5f5f5",
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 1.5,
                elevation: 2,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  flexdiv: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "rgba(16, 33, 62, 1)",
  },
  viewdiv: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  text: {
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
