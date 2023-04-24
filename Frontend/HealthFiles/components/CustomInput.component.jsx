/**
 * Autor: Rony Josue Gomez Oyuela
 * 20171004489
 * fecha: 06/04/2023
 */

import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, placeholder, rules = {}, secureTextEntry, keyboardType, setState }) => {

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[{ borderColor: error ? 'red' : 'gray' }, styles.container]}>
                        <TextInput
                            placeholder={placeholder}
                            value={value}
                            onChangeText={(value) => {
                                setState(value);
                            }}
                            onBlur={onBlur}
                            style={{}}
                            secureTextEntry={secureTextEntry}
                            keyboardType={keyboardType}

                            rules={{
                                required: 'El Campo Fecha de Nacimiento esta vacio',
                            }}
                        />
                    </View>
                    {error && (
                        <Text
                            style={{ color: 'red', alignSelf: 'stretch', marginHorizontal: 50 }}
                        >{error.message || 'Error'}</Text>
                    )}
                </>
            )}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: 'gray',
        paddingStart: 10,
        width: '80%',
        height: 55,
        padding: 15,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: 'white',

    },
    textInput: {
    },
});

export default CustomInput