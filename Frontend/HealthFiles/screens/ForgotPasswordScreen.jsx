/**
 * Author: Rony Josue Gomez
 * Date: 06/04/2023
 * Description: Pantalla de contraseña olvidada
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {Text, View, TextInput, ScrollView, Button } from 'react-native'
import ButtonsSignIn from '../../../Frontend/HealthFiles/components/ButtonsSignIn.component';
import { useNavigation } from '@react-navigation/native';
import { useForm} from 'react-hook-form';
import CustomInput from '../../../Frontend/HealthFiles/components/CustomInput.component';
import styles from '../../HealthFiles/styles/styles';

export default function ForgotPasswordScreen() {
    const navigation = useNavigation();

    const {control, handleSubmit} = useForm();
    const EMAIL_REG = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const onEnviarPressed = data => {
      console.warn(data);
      navigation.navigate('Nueva Contrasena');
    }
    
    const onRegresarPressed = () => {
      navigation.navigate('Inicio de Sesion');
    }
    return (
        <ScrollView>
        <View style = {styles.container1}>
          <Text style ={styles.subtitulos1}>
            Restablecer Contraseña
          </Text>

          <Text 
            style = {styles.subtitulos2}
            > Correo electronico </Text>
          <CustomInput 
              name = "Correo Electronico"
              control={control}
              placeholder='Ingresa tu correo electronico'
              marginTop = {10}
              rules={{
                required: "El correo electronico es requerido",
                pattern: {value: EMAIL_REG, message: "Ingresar un correo electronico valido"}
              }}
          />

          <ButtonsSignIn
            text = "Enviar" onPress={handleSubmit(onEnviarPressed)}
          />

          <ButtonsSignIn
            text = 'Regresar a Inicio de Sesion' onPress={onRegresarPressed} 
            type='TERTIARY'
          />
            
          <StatusBar style="auto" />
        </View>
        </ScrollView>
      );
}
