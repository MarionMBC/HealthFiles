//Jennebier Esther Alvarado López
//20191000717
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExamenesScreen from '../screens/ExamenesScreen';
import RegistroExamenScreen from '../screens/RegistroExamenScreen';



const StackExamenes = createNativeStackNavigator();

export default function NavigationStackExamenes(){
	return(
        <StackExamenes.Navigator initialRouteName='Examen'> 
            <StackExamenes.Screen name="Examen" component={ExamenesScreen}></StackExamenes.Screen>
            <StackExamenes.Screen name="RegistroExamen" component={RegistroExamenScreen}></StackExamenes.Screen>
        </StackExamenes.Navigator>
	)
	
}

