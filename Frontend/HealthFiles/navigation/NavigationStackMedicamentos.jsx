import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MedicinasScreen from '../screens/MedicinasScreen';
import RegistroMedicamentoScreen from '../screens/RegistroMedicamentoScreen';


const StackMedicamentos = createNativeStackNavigator();

export default function NavigationStackMedicamentos(){
	return(
		
		<StackMedicamentos.Navigator initialRouteName='Medicamentos'> 
			<StackMedicamentos.Screen name="Medicinas" component={MedicinasScreen}></StackMedicamentos.Screen>
			<StackMedicamentos.Screen name="Registro de Medicamentos" component={RegistroMedicamentoScreen}/>
		</StackMedicamentos.Navigator>
	)
	
}

