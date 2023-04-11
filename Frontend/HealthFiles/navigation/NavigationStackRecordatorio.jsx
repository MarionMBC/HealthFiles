import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import {backgroundColor} from "react-native-calendars/src/style";
import RegistroRecordatorioScreen from '../screens/RegistroRecordatorioScreen';

const StackRecordatorio = createNativeStackNavigator();

export default function NavigationStackRecordatorio(){
    return(
        
        <StackRecordatorio.Navigator headerStyle={{backgroundColor:'red'}} cardStyle={{backgroundColor: 'red'}} initialRouteName='Recordatorio'>
            <StackRecordatorio.Screen  name="RegistroRecordatorios" component={RegistroRecordatorioScreen}/>
            
        </StackRecordatorio.Navigator>
    )
    
}
