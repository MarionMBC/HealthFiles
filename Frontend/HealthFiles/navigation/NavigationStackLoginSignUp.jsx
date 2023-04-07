/*
* Author: Rony Josue Gomez
* Date: 06/04/2023
* Description: Stack de Navegacion Pantallas Inicio de Sesion y Registro
*/

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import LoginGmailScreen from '../screens/LoginGmailScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
//import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const NavigationStackLoginSignUp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name = "Inicio de Sesion"           component={SignInScreen} />
        <Stack.Screen name = "Inicio de Sesion Gmail"     component={LoginGmailScreen}/>
        <Stack.Screen name = "Registro"                   component={SignUpScreen}/>
        <Stack.Screen name = "Confirmar Registro"         component={ConfirmEmailScreen}/>
        <Stack.Screen name = "Contrasena Olvidada"        component={ForgotPasswordScreen}/>
        <Stack.Screen name = "Nueva Contrasena"           component={NewPasswordScreen}/>
        {/*<Stack.Screen name = "Pantalla de Inicio"         component={HomeScreen}/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStackLoginSignUp