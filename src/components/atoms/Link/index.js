import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

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
        color:'#7D8797',
        textDecorationLine:"underline",
        textAlign:align
        
    })
})