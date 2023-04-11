import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CirugiasScreen from '../screens/CirugiasScreen';
import RegistroCirugiaScreen from '../screens/RegistroCirugiaScreen';

const StackCirugia = createNativeStackNavigator();

export default function NavigationStackCirugia(){
    return(
        <StackCirugia.Navigator initialRouteName='Cirugia'> 
            <StackCirugia.Screen name="Cirugia" component={CirugiasScreen}></StackCirugia.Screen>
            <StackCirugia.Screen name="RegistroCirugia" component={RegistroCirugiaScreen}></StackCirugia.Screen>
        </StackCirugia.Navigator>
    )
    
}
