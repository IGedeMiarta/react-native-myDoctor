import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

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
        backgroundColor: type==='secondary'?"white": "#0BCAD4",
        paddingVertical:10,
        borderRadius:10
    }),
    text:(type)=>({
        color: type==='secondary'?"black":"white",
        fontSize:16,
        fontWeight:"600",
        textAlign:"center"
    })
})