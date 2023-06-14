import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react';
import { IconBackDark } from '../../../assets';
import { Gap } from '../../atoms';
import { colors } from '../../../utils/color';

const Headers = ({label}) => {
    return (
        <View style={styles.container}>
            <IconBackDark width={50} height={25} />
            <Text style={styles.text}>{label}</Text>
            <Gap width={24} />
        </View>
    )
}
export default Headers;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        paddingVertical:25,
        backgroundColor:colors.white,
        flexDirection:'row',
        alignItems:"center",
    },
    text:{
        fontSize:20,
        flex:1,
        color:colors.text,
        textAlign:"center",
    }
})