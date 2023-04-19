import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroCitaScreen from '../screens/RegistroCitaScreen.jsx';
import CitasScreen from '../screens/CitasScreen.jsx';

const StackCitas = createNativeStackNavigator();

export default function NavigationStackCitas(){
	return(
		
		<StackCitas.Navigator initialRouteName='Cita'> 
			<StackCitas.Screen name="Cita" component={CitasScreen}></StackCitas.Screen>
			<StackCitas.Screen name="Agregar Cita" component={RegistroCitaScreen}/>
		</StackCitas.Navigator>
	)
	
}

