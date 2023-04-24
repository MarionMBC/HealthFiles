/**
 * Autor: Rony Josue Gomez Oyuela
 * 20171004489
 * fecha: 06/04/2023
 */

import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, placeholder, rules = {}, secureTextEntry, keyboardType }) => {
    const [data, setData] = useState();
    
    return (

        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[styles.container, { borderColor: error ? 'red' : 'gray' }]}>
                        <TextInput
                            placeholder={placeholder}
                            value={value}
                            onChangeText={(value) => {
                                console.log(value);
                            }}
                            onBlur={onBlur}
                            style={[styles.textInput, {}]}
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
        paddingVertical: 20,
    },
    textInput: {
    },
});

export default CustomInput