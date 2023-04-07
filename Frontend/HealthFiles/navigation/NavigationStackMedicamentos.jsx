import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MedicinasScreen from '../screens/MedicinasScreen';
import RegistroMedicamentoScreen from '../screens/RegistroMedicamentoScreen';
import HomeScreen from "../screens/HomeScreen";
import AgregarMedicamentoScreen from "../screens/AgregarMedicamentoScreen";
import {backgroundColor} from "react-native-calendars/src/style";


const StackMedicamentos = createNativeStackNavigator();

export default function NavigationStackMedicamentos(){
	return(
		
		<StackMedicamentos.Navigator headerStyle={{backgroundColor:'red'}} cardStyle={{backgroundColor: 'red'}} initialRouteName='Medicamentos'>
			<StackMedicamentos.Screen  name="Registro de Medicamentos" component={RegistroMedicamentoScreen}/>
			<StackMedicamentos.Screen name="Agregar Medicamento" component={AgregarMedicamentoScreen}/>
		</StackMedicamentos.Navigator>
	)
	
}


