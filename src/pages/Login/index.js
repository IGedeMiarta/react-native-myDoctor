import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.page}>
        <ILLogo/>
        <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
        <Input label="Email Address"/>
        <Gap height={24}/>
        <Input label="Password"/>
        <Gap height={24}/>

        <Link title="Forgot My Password" size={14}/>
        <Gap height={40}/>
        <Button title="Sign In"/>
        <Gap height={30}/>
        <Link title="Create New Account" size={16} align="center"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page:{
    paddingTop:120,
    padding:40,
    backgroundColor:"white",
    flex:1,
  },
  text:{
    fontSize:20,
    color:'#112340',
    marginTop:40,
    marginBottom:40,
    maxWidth:154
  }
})