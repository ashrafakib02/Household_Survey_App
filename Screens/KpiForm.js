import {

  Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native'
  import React, { useState, useEffect, useCallback } from 'react'
  import Footer from './Footer'
  import tw from 'tailwind-react-native-classnames'

  import { useNavigation } from '@react-navigation/native'

import FormData from '../FilterComponents/FormData'
import AllTypes from '../FilterComponents/AllTypes'
import AllYear from '../FilterComponents/AllYear'
import AllMonth from '../FilterComponents/AllMonth'
  
  export default function KpiForm (){
    const navigation = useNavigation()

  const KpiFormEntry = global.KpiFormEntry

  const [division, setDivision] = useState('0')
  const [region, setRegion] = useState('0')
  const [country, setCountry] = useState('0')
  const [type, setType] = useState('0')
  const [budget, setBudget] = useState('0')
  const [actual, setActual] = useState('0')
  const [year, setYear] = useState('0')
  const [month, setMonth] = useState('0')
  const [isClicked, setClicked] = useState(false)

  const dataFetch = (data, data2,data3) => {
    if (data != '0') {
      setDivision(data)
    }

    if (data2 != '0') {
      setRegion(data2)
    }
    if (data3 != '0') {
      setCountry(data3)
    }
  }
  const dataFetch2 = (data) => {
    if (data != '0') {
      setType(data)
    }
  }
  const dataFetch3 = (data) => {
    if (data != '0') {
      setYear(data)
    }
  }
  const dataFetch4 = (data) => {
    if (data != '0') {
      setMonth(data)
    }
  }


  const insSubmit = () => {
     if (division == '0' || division == 'undefined') {
      alert('Please Select Division!')
    } else if (region == '0' || region == 'undefined') {
      alert('Please Select Region!')
    } else if (country == '0' || country == 'undefined') {
      alert('Please Select Country!')
    }else if (type == '0' || type == 'undefined') {
      alert('Please Select Type!')
    } else if (budget.length == 0) {
      alert('Please Enter Budget Amount')
    } else if (actual.length == 0) {
      alert('Please Enter Actual Amount')
    } else if (year == '0' || year == 'undefined') {
      alert('Please Select Year!')
    }else if (month == '0' || month == 'undefined') {
      alert('Please Select Month!')
    }else {
      setClicked(true)
      fetch(KpiFormEntry, {
        method: 'post',
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          division2: division,
          region2: region,
          country2: country,
          type2: type,         
          budget2: budget.value,
          actual2: actual.value,
          year2: year,
          month2: month,
        
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          let loginObj = JSON.stringify(response)
          var parsed = JSON.parse(loginObj)
          var success = parsed.success
          if (success == 1) {
            setClicked(false);
      Alert.alert('SUCCESS', 'Data Added Successfully', [
        {
          text: 'Cancel',
          onPress: () => navigation.replace('DashBoard'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.replace('DashBoard'),
        },
      ])          }
        })
        .catch((error) => {
          alert('Error ' + error)
        })
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Text style={styles.header}>Submit KPI Data</Text>
        <ScrollView style={{ flex: 1, margin: 2 }}>
            <FormData onChange={dataFetch}/>
            <View >
            <AllTypes onChange={dataFetch2}/>

          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
              Budget
            </Text>
            <TextInput
              style={[
                tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`,
                styles.DataInputBox,
              ]}
              keyboardType='numeric'
              onChangeText={(text) => setBudget({ value: text, error: '' })}
            />
          </View>


          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={[tw` mt-2.5 ml-2.5 text-indigo-700`, styles.titleBox]}>
              Actual Progress
            </Text>
            <TextInput
              style={[
                tw`mt-2.5 ml-1.5 mr-2.5 text-indigo-700`,
                styles.DataInputBox,
              ]}
              keyboardType='numeric'
              onChangeText={(text) => setActual({ value: text, error: '' })}
            />
          </View>
            <AllYear onChange={dataFetch3}/>

            <AllMonth onChange={dataFetch4}/>

          
          
          {!isClicked ? (
            <TouchableOpacity
              onPress={insSubmit}
              activeOpacity={0.8}
              style={{
                flex: 1,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                justifyContent: 'center',
                marginBottom: 5,
                backgroundColor: 'blue',
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
                Submit
              </Text>
            </TouchableOpacity>
          ) : null}
        </ScrollView>
      </View>
      <Footer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  header: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleBox: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 5,
    fontSize: 14,
    width: 100,
    textAlignVertical: 'center',
  },
  DataBox: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
    backgroundColor: '#d0f5e6',
    textAlignVertical: 'center',
  },
  dropDown: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 14,
    backgroundColor: '#d0f5e6',
  },
  DataInputBox: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
  },
  titleBoxBig: {
    flex: 1,
    backgroundColor: 'blue',
    color: 'white',
    padding: 5,
    fontSize: 14,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  DataBoxBig: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    flexShrink: 1,
    textAlignVertical: 'top',
  },
})
