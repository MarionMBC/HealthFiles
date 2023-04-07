/**
 * Author: Rony Josue Gomez
 * Date: 06/04/2023
 * Description: Pantalla para ingresar nueva contraseña
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {Text, View, TextInput, ScrollView} from 'react-native'
import ButtonsSignIn from '../../../Frontend/HealthFiles/components/ButtonsSignIn.component';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import CustomInput from '../../../Frontend/HealthFiles/components/CustomInput.component';
import styles from '../../HealthFiles/styles/styles';

export default function NewPasswordScreen() {
    const navigation = useNavigation();

    //Validacion de Nueva Contrasena
    const PASSWORD_REGEX =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const {control, handleSubmit} = useForm();

    const onAceptarPressed = () => {
      navigation.navigate('Pantalla de Inicio')
    }

    const onRegresarPressed = () => {
      navigation.navigate('Inicio de Sesion')
    }
    return (
        <ScrollView>
        <View style = {styles.container1}>
          
          <Text style ={styles.subtitulos1}>
            Nueva Contraseña
          </Text>

          <Text 
            style = {styles.subtitulos2}
            > Codigo de Confirmacion </Text>
          <CustomInput 
              name="Codigo"
              constrol={control}
              placeholder='Ingresa el codigo de Confirmacion'
              marginTop = {10}
              rules = {{
                required: 'El codigo de confirmacion es requerido'
              }}
          />

          <Text 
            style = {styles.subtitulos2}
            > Nueva Contraseña </Text>
          <TextInput 
              name="Nueva Contraseña"
              constrol={control}
              placeholder='Ingresa tu nueva Contraseña'
              marginTop = {10}
              secureTextEntry={true}
              rules = {{
                required: 'El codigo de confirmacion es requerido',
                pattern: {
                  value: PASSWORD_REGEX, 
                  message: 'La contraseña debe contener minimo 8 caracteres, una letra mayuscula, una letra minuscula y un caracter especial'
                } 
              }}
          />

          <ButtonsSignIn
            text = "Aceptar" onPress={handleSubmit(onAceptarPressed)}
          />

          <ButtonsSignIn
            text = 'Regresar a Inicio de Sesion' onPress={onRegresarPressed} type='TERTIARY'
          />
            
          <StatusBar style="auto" />
        </View>
        </ScrollView>
      );
}
