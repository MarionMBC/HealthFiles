/**
 * Author: Rony Josue Gomez
 * Date: 06/04/2023
 * Description: Pantalla para confirmar el registro de un paciente
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import ButtonsSignIn from '../../../Frontend/HealthFiles/components/ButtonsSignIn.component';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form'
import CustomInput from '../../../Frontend/HealthFiles/components/CustomInput.component';
import styles from '../../HealthFiles/styles/styles';

export default function ConfirmEmailScreen() {
    const navigation = useNavigation();

    const {control, handleSubmit} = useForm();
  
    const onConfirmarPressed = data => {
      console.warn(data);
      navigation.navigate('Pantalla de Inicio')
    }
    const onReenviarPressed = () => {
      console.warn("Reenviar Codigo")
    }
    const onRegresarPressed = () => {
      navigation.navigate('Inicio de Sesion')
    }
    return (
        <ScrollView>
        <View style = {styles.container1}>
          
          <Text style ={styles.subtitulos1}>
            Confirmar Registro
          </Text>

          <Text 
            style = {styles.subtitulos2}
            > Codigo </Text>
          <CustomInput 
              name = "Codigo"
              control = {control}
              placeholder='Ingresa el codigo de confirmacion'
              marginTop = {10}
              rules={{
                required: 'Codigo de Confirmacion es requerido',
              }}
          />

          <ButtonsSignIn
            text = "Confirmar" onPress={handleSubmit(onConfirmarPressed)}
          />
         
          <ButtonsSignIn
            text = 'Reenviar Codigo' onPress={onReenviarPressed} type = 'Ter'
          />

          <ButtonsSignIn
            text = 'Regresar a Inicio de Sesion' onPress={onRegresarPressed} type='TERTIARY'
          />
            
          <StatusBar style="auto" />
        </View>
        </ScrollView>
      );
}
