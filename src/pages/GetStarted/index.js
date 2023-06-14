import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILGetStated, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'

const GetStarted = ({navigation}) =>  {
  return (
    <ImageBackground source={ILGetStated} style={styles.page}>
         <View style={styles.overlay} />
        <View>
            <ILLogo/>
            <Text style={styles.title}>Konsultasi Dengan Dokter Jadi Lebih Mudah & Fleksibel</Text>
        </View>
        <View>
            <Button title="GET STARTED" onPress={ ()=>navigation.navigate('Register')} />
            <Gap height={16}/>
            <Button title="SIGN IN" type="secondary" onPress={ ()=>navigation.navigate('Login')} />
        </View>
    </ImageBackground>
  )
}
export default GetStarted;
const styles = StyleSheet.create({
    page:{
        padding:40,
        paddingTop:120,
        // backgroundColor:"yellow",
        justifyContent:"space-between",
        flex:1
    },
    title:{
        paddingTop:190,
        fontSize:38,
        fontWeight:"700",
        color:"white",
        marginTop:60,
        fontWeight: 'bold',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity value to darken the image
  },
})