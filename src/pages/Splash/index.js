import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { ILLogo } from '../../assets'

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('GetStarted')
    },1500)
  },[])

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>MY DOCTOR</Text>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
    page:{ backgroundColor:'white',flex:1,alignItems:'center',justifyContent:'center' },
    title:{ fontSize:20,fontWeight:'600',color:'#112340',marginTop:20 },
})