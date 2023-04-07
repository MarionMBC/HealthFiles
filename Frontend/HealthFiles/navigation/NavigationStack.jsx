import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroCitaScreen from '../screens/RegistroCitaScreen.jsx';
import HomeScreen from '../screens/HomeScreen.jsx';
import RegistroMedicamentoScreen from "../screens/RegistroMedicamentoScreen";
import {View} from "react-native";


const Stack = createNativeStackNavigator();

export default function NavigationStack(){
	return(

	<Stack.Navigator initialRouteName='Home'>
		<Stack.Screen name="HealthFiles" component={HomeScreen}/>
		<Stack.Screen name="RegistroCitas" component={RegistroCitaScreen}/>
		<Stack.Screen name={"RegistroMedicamentos"} component={RegistroMedicamentoScreen} />
	</Stack.Navigator>

	)
	
}