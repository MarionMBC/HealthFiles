import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CirugiasScreen from '../screens/CirugiasScreen';
import ExamenesScreen from '../screens/ExamenesScreen';
import MedicinasScreen from '../screens/MedicinasScreen';
import ReportesScreen from '../screens/ReportesScreen';
import NavigationStackCitas from './NavigationStackCitas';
import NavigationStackMedicamentos from './NavigationStackMedicamentos';

const Tab = createMaterialBottomTabNavigator();
export default function NavigationTabs(){
    return (<Tab.Navigator
    initialRouteName='HealthFiles'
    activeColor='#f0edf6'
    inactiveColor='#011D33'
    barStyle={{backgroundColor:'#0464b4'}}>
        <Tab.Screen name="HealthFiles" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Cirugias" component={CirugiasScreen}></Tab.Screen>
        <Tab.Screen name="Examenes" component={ExamenesScreen}></Tab.Screen>
        <Tab.Screen name="Medicinas" component={NavigationStackMedicamentos}></Tab.Screen>
        <Tab.Screen name="Citas" component={NavigationStackCitas}></Tab.Screen>
        <Tab.Screen name="Reportes" component={ReportesScreen}></Tab.Screen>
    </Tab.Navigator>)
}