import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../../utils/color';

const Link = ({title,size,align}) =>  {
  
    return (
      <View>
        <Text style={styles.text(size,align)}>{title}</Text>
      </View>
    )
  }

export default Link;

const styles = StyleSheet.create({
    text:(size,align)=>({
        fontSize:size,
        color:colors.text.secondary,
        textDecorationLine:"underline",
        textAlign:align
        
    })
})