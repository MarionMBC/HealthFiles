import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroCitaScreen from '../screens/RegistroCitaScreen.jsx';
import CitasScreen from '../screens/CitasScreen.jsx';
import DetalleCitaScreen from '../screens/DetalleCita.component.jsx';

const StackCitas = createNativeStackNavigator();

export default function NavigationStackCitas(){
	return(
		
		<StackCitas.Navigator initialRouteName='Cita'> 
<<<<<<< HEAD
			<StackCitas.Screen name="Cita" component={CitasScreen}></StackCitas.Screen>
=======
			<StackCitas.Screen name="Cita" component={CitasScreen} options={{ headerShown: false }}></StackCitas.Screen>
>>>>>>> parent of 9ab3bc6 (Headers de stacks modificados)
			<StackCitas.Screen name="Agregar Cita" component={RegistroCitaScreen}/>
			<StackCitas.Screen name="Detalle Cita" component={DetalleCitaScreen}/>
		</StackCitas.Navigator>
	)
	
}

