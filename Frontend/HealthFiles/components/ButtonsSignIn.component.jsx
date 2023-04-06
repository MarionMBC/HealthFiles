/**
 * Autor: Rony Josue Gomez Oyuela
 * 20171004489
 * fecha: 06/04/2023
 */

import {Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const ButtonsSignIn = ({ onPress, text , type = 'Primary' }) => {
    return (
        <Pressable onPress={onPress} style = {[styles.container, styles[`container_${type}`]]}>
          <Text style = {[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
      )
    }
    
    const styles = StyleSheet.create({
        container: {
            width: '80%',
            padding: 15,
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 15
        },
        container_Primary: {
            backgroundColor: '#273A6F',
        },
    
        container_Secondary: {
            backgroundColor: 'white',  
        },
    
        container_Pri: {
            backgroundColor: '#0484C3',
            marginTop: 25,
            paddingTop: 15,
            width: '35%',
            alignSelf: 'flex-end',
            marginHorizontal: 45, 
        },
    
        container_Sec: {
            backgroundColor: 'red',
            paddingTop: 15,
            width: '35%',
            alignSelf: 'flex-start',
            marginTop: -53,
            marginHorizontal: 45,
        },
    
        container_Ter: {
            borderColor: '3B71F3',
            borderWidth: 2,
            fontSize: '15',
            marginTop: 15
        },
        
        container_CUARTERY: {
            width: '85%',
            backgroundColor: '#273A6F',
            padding: 15,
            borderRadius: 0,
            alignItems: 'center',
            marginTop: 10
        },

        text: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 20,
        },
        
        text_Secondary: {
            color: 'red',
            fontSize: 20,   
        },

        text_Ter: {
            color: '#273A6F',
            alignContent: 'center',
            fontSize: 19
        },
    
        text_TERTIARY: {
            width: '99%',
            color: 'gray',
            fontSize: 15,
            marginTop: -20,

        },

        text_Cuar: {
            color: 'gray',
            fontSize: 15,
            marginTop: -10,
            alignSelf: 'flex-start',
            marginHorizontal: -25
        },
    })

export default ButtonsSignIn