import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView>
 <View style={styles.container}>
                    <Image style={styles.logo}  source={require('../assets/sj.png')} />
                    <View style={{width:70}}></View>
                    <Image style={styles.logo2}  source={require('../assets/smec.png')} />

               </View>    
                </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flexDirection:'row',       
        alignSelf:'center',

    },
    logo: {
        resizeMode:'contain',
        width:150,height:50,

    },
    logo2: {
        resizeMode:'contain',
        width:150,height:50,

    },
   
});