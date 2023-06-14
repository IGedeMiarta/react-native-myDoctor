import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react';
import { Button, Gap, Headers, Input } from '../../components';
import { colors } from '../../utils/color';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={{ paddingTop:15 }}></View>
        {/* <Headers label={'Home'} /> */}
       <View style={styles.content}>
          <Input label={"Full Name"}/>
          <Gap height={24}/>
          <Input label={"Pekerjaan"}/>
          <Gap height={24}/>
          <Input label={"Email"}/>
          <Gap height={24}/>
          <Input label={"Password"}/>
          <Gap height={40}/>
          <Button title={'Continue'}/>
       </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:colors.white,
    flex:1
  },
  content:{
    padding:40,
    paddingTop:0,
  }
})