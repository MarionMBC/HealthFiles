import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AgregarCirugiaScreen from '../screens/AgregarCirugiaScreen';
import RegistroCirugiaScreen from '../screens/RegistroCirugiaScreen';

const StackCirugia = createNativeStackNavigator();

export default function NavigationStackCirugia(){
    return(
        <StackCirugia.Navigator initialRouteName='Cirugia'> 
            <StackCirugia.Screen  name="Registro Cirugia" component={RegistroCirugiaScreen}/>
			<StackCirugia.Screen name="Agregar Cirugia" component={AgregarCirugiaScreen}/>
        </StackCirugia.Navigator>
    )
    
}
