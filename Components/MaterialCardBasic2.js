import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import "../Tools/global"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function  MaterialCardBasic2(props)  {
  const navigation = useNavigation();
    
  const LogoutFn = () => {
    Alert.alert('LOGOUT', 'Are You sure?', [
      {
        text: 'Cancel',
        onPress: () => console.log('CANCEL PRESSED'),
        style: 'default',
      },
      {
        text: 'LOGOUT',
        onPress: () => {
          global.success = '0'
          global.user_id = '0'
          global.full_name = '0'
          global.email = '0'
          global.supervisor_name = '0'
         

          AsyncStorage.setItem('success', '0')
          AsyncStorage.setItem('user_id', '0')
          AsyncStorage.setItem('full_name', '0')
          AsyncStorage.setItem('email', '0')
          AsyncStorage.setItem('supervisor_name', '0')
          
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        },
        style: 'cancel',
      },
    ])
  }
    return (
        <TouchableOpacity onPress={LogoutFn} style={[styles.container, props.style]}>
          <Image
            source={require("../assets/logout.png")}
            style={styles.cardItemImagePlace}
          />
          <View
            style={[
              styles.body,
              {
                backgroundColor: props.body || undefined
              }
            ]}
          >
            <Text style={styles.bodyText}>
              {props.bodyText ||
                "Logout"}
            </Text>
          </View>
        </TouchableOpacity>
      );
              }
      const styles = StyleSheet.create({
        container: {
          padding: 10,
          flex: 1,
          borderWidth: 1,
          borderRadius: 30,
          borderColor: "#CCC",
          backgroundColor: "#FFF",
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: "#000",
          shadowOffset: {
            width: -2,
            height: 2
          },
          shadowOpacity: 0.1,
          shadowRadius: 1.5,
          elevation: 5,
          overflow: "hidden"
        },
        cardItemImagePlace: {
          backgroundColor: "white",
          resizeMode: 'contain',
          flex: 1,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10
        },
        body: {
          flex: 1,
          padding: 10,
          alignItems: 'flex-end',
          justifyContent: 'flex-end'
        },
        bodyText: {
          fontSize: 21,
          color: "#424242",
          textAlign:'center',
          fontWeight:'bold'
      
      
        }
      });
      