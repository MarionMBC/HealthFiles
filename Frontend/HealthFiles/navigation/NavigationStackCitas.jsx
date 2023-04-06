import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroCitaScreen from '../screens/RegistroCitaScreen.jsx';
import CitasScreen from '../screens/CitasScreen.jsx';

const StackCitas = createNativeStackNavigator();

export default function NavigationStackCitas(){
	return(
		
		<StackCitas.Navigator initialRouteName='Citas'> 
			<StackCitas.Screen name="Citas" component={CitasScreen}></StackCitas.Screen>
			<StackCitas.Screen name="RegistroCita" component={RegistroCitaScreen}/>
		</StackCitas.Navigator>
	)
	
}

