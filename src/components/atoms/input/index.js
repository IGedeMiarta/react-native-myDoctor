import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'

const Input = ({label}) => {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} />
      </View>
    )
}

export default Input;

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderColor:'#E9E9E9',
    borderRadius:10,
    height:40,
    padding:12
  },
  label:{
    fontSize:16,
    color:"#7d8797",
    marginBottom:6
  }
})