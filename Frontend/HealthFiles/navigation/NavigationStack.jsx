import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroCitaScreen from '../screens/RegistroCitaScreen.jsx';
import HomeScreen from '../screens/HomeScreen.jsx';
import RegistroMedicamentoScreen from "../screens/RegistroMedicamentoScreen";
import CirugiasScreen from '../screens/CirugiasScreen.jsx';
import ExamenesScreen from '../screens/ExamenesScreen.jsx';
import MedicinasScreen from '../screens/MedicinasScreen.jsx';
import CitasScreen from '../screens/CitasScreen.jsx';

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
	return(
		
		<Stack.Navigator> 
			<Stack.Screen name="HealthFiles" component={HomeScreen}/>
			<Stack.Screen name="Citas" component={CitasScreen}></Stack.Screen>
			<Stack.Screen name="RegistroCita" component={RegistroCitaScreen}/>
			<Stack.Screen name="Medicinas" component={MedicinasScreen}></Stack.Screen>
			<Stack.Screen name="RegistroMedicamentos" component={RegistroMedicamentoScreen} />
			<Stack.Screen name="Cirugias" component={CirugiasScreen}></Stack.Screen>
			<Stack.Screen name="Examenes" component={ExamenesScreen}></Stack.Screen>
		</Stack.Navigator>
	)
	
}

