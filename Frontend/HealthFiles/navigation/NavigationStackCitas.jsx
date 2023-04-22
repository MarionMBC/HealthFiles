import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroCitaScreen from '../screens/RegistroCitaScreen.jsx';
import CitasScreen from '../screens/CitasScreen.jsx';
import DetalleCitaScreen from '../screens/DetalleCita.component.jsx';

const StackCitas = createNativeStackNavigator();

<<<<<<< HEAD
export default function NavigationStackCitas() {
	return (

		<StackCitas.Navigator initialRouteName='Cita'>
			<StackCitas.Screen name="Cita" component={CitasScreen} options={{ headerShown: false }}></StackCitas.Screen>
			<StackCitas.Screen name="Agregar Cita" component={RegistroCitaScreen} />
			<StackCitas.Screen name="Detalle Cita" component={DetalleCitaScreen} />
=======
export default function NavigationStackCitas(){
	return(
		
		<StackCitas.Navigator initialRouteName='Cita'> 
			<StackCitas.Screen name="Cita" component={CitasScreen}></StackCitas.Screen>
			<StackCitas.Screen name="Agregar Cita" component={RegistroCitaScreen}/>
			<StackCitas.Screen name="Detalle Cita" component={DetalleCitaScreen}/>
>>>>>>> parent of 561fed5 (Merge branch 'development' of https://github.com/MarionMBC/HealthFiles into development)
		</StackCitas.Navigator>
	)
}



