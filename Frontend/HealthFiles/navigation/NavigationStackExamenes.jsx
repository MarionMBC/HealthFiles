//Jennebier Esther Alvarado López
//20191000717
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExamenesScreen from '../screens/ExamenesScreen';
import RegistroExamenScreen from '../screens/FormularioRegistroExamenScreen.jsx';



const StackExamenes = createNativeStackNavigator();

export default function NavigationStackExamenes(){
	return(
        <StackExamenes.Navigator initialRouteName='Examen'> 
<<<<<<< HEAD
            <StackExamenes.Screen name="Examen" component={ExamenesScreen}></StackExamenes.Screen>
=======
            <StackExamenes.Screen name="Examen" component={ExamenesScreen} options={{ headerShown: false }}></StackExamenes.Screen>
>>>>>>> parent of 2d7c6c4 (Listado de pacientes por médico, se agrega componente para renderizar examenes)
            <StackExamenes.Screen name="RegistroExamen" component={RegistroExamenScreen}></StackExamenes.Screen>
        </StackExamenes.Navigator>
	)
	
}

