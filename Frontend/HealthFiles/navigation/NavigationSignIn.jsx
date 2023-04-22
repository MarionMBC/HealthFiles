import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import PantallaInicioScreen from "../screens/PantallaInicioScreen";
import { backgroundColor } from "react-native-calendars/src/style";
import LogininGmailScreen from "../screens/LoginGmailScreen";
import SignUpScreen from "../screens/SignUpScreen";
import NavigationTabs from "./NavigationTabs";


const StackSignScreen = createNativeStackNavigator();

export default function NavigationStackLogin() {
  return (
    <StackSignScreen.Navigator
      headerStyle={{ backgroundColor: "red" }}
      cardStyle={{ backgroundColor: "red" }}
      initialRouteName="Login">
      <StackSignScreen.Screen name="Login" component={SignInScreen} />
      <StackSignScreen.Screen name="Inicio de Sesion Gmail" component={LogininGmailScreen} />
      <StackSignScreen.Screen name="Registro" component={SignUpScreen} />
      <StackSignScreen.Screen name="Inicio" component={NavigationTabs}  
    />



    </StackSignScreen.Navigator>
  );
}
