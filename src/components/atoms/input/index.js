import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../../utils/color';

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
    borderColor:colors.border,
    borderRadius:10,
    height:40,
    padding:12
  },
  label:{
    fontSize:16,
    color:colors.text.secondary,
    marginBottom:6
  }
})