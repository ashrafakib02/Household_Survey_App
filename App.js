import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  LogBox
} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from './Screens/Footer'
import Login from './Screens/Login'
import MainDashboard from './Screens/MainDashboard'
import Form from './Screens/Form'
import SurveyList from './Screens/SurveyList'
import AsyncStorage from '@react-native-async-storage/async-storage'

LogBox.ignoreAllLogs()

function SplashScreen({ navigation }) {
  const manageData = async () => {
    try {
      var success = await AsyncStorage.getItem('success')
      var user_id = await AsyncStorage.getItem('user_id')
      var full_name = await AsyncStorage.getItem('full_name')
      var email = await AsyncStorage.getItem('email')
      var supervisor_name = await AsyncStorage.getItem('supervisor_name')
      var isHouseSurveyor = await AsyncStorage.getItem('isHouseSurveyor')

    } catch (error) {
      alert('Error while Loading data!')
    }

  global.success = success;
  global.user_id = user_id;
  global.full_name = full_name;
  global.email = email;
  global.supervisor_name = supervisor_name;
  global.isHouseSurveyor = isHouseSurveyor;
   
  }
  useEffect(() => {
    manageData()
    setTimeout(() => {
      if (success == '1') {
        navigation.replace('MainDashboard')
      } else {
        navigation.replace('Login')
      }
    }, 3000)
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />
       
        <Image
          style={{ width: 200, height: 200, resizeMode: 'contain', }}
          source={require('./assets/picture.png')}
        />
        <Text
          style={{
            fontSize: 24,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'rgba(16, 33, 62, 1)',
            textAlign:'center'
          }}
        >
          Nagaland Urban Infrastructure{"\n"}Development Project 
        </Text>
        <Text
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            textAlign: 'center',
            fontSize: 14,
            color: 'rgba(16, 33, 62, 1)',
          }}
        >
under ADB        
</Text>
      </View>
      <Footer />
    </SafeAreaView>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="MainDashboard"
          component={MainDashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Form"
          component={Form}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SurveyList"
          component={SurveyList}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
})
