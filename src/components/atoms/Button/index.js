import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../../utils/color';

const Button = ({type,title,onPress}) =>  {
    return (
      
      <TouchableOpacity style={styles.component(type)} onPress={onPress}>
        <Text style={styles.text(type)}>{title}</Text>
      </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    component:(type)=>({
        backgroundColor: type==='secondary'?colors.button.secondary.background: colors.button.primary.background,
        paddingVertical:10,
        borderRadius:10
    }),
    text:(type)=>({
        color: type==='secondary'?colors.button.secondary.text:colors.button.primary.text,
        fontSize:16,
        fontWeight:"600",
        textAlign:"center"
    })
})