import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroCitaScreen from '../screens/RegistroCitaScreen.jsx';
import HomeScreen from '../screens/HomeScreen.jsx';


const Stack = createNativeStackNavigator();

export default function NavigationStack(){
	return(

		<Stack.Navigator initialRouteName='Home'>
			<Stack.Screen name="Home" component={HomeScreen}/>
			<Stack.Screen name="RegistroCitas" component={RegistroCitaScreen}/>
		</Stack.Navigator>
	)
	
}