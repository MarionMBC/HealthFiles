import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import NavigationStackExamenes from "./NavigationStackExamenes";
import ReportesScreen from "../screens/ReportesScreen";
import NavigationStackCitas from "./NavigationStackCitas";
import NavigationStackMedicamentos from "./NavigationStackMedicamentos";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NavigationStackRecordatorio from "./NavigationStackRecordatorio";
import ListaPacientes from "../screens/ListaPacientes.jsx";
import NavigationStackHome from "./NavigationHome";
import NavigationStackCirugia from "./NavigationStackCirugia";
import AuthContext from "../context/AuthContext";

const Tab = createMaterialBottomTabNavigator();
export default function NavigationTabs({ navigation, route }) {
  const { resultado } = useContext(AuthContext)
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#125ba5"
      inactiveColor="#848385"
      barStyle={{ backgroundColor: "#F9F7E9" }}
    >
      <Tab.Screen
        name="Home"
        component={NavigationStackHome}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Cirugias"
        component={NavigationStackCirugia}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="doctor" color={color} size={26} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Examenes"
        component={NavigationStackExamenes}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="test-tube" color={color} size={26} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Medicinas"


        options={{

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pill" color={color} size={26} />
          ),



        }}
      >
        {props => <NavigationStackMedicamentos {...props} resultado={resultado}></NavigationStackMedicamentos>}
      </Tab.Screen>
      <Tab.Screen
        name="Citas"
        component={NavigationStackCitas}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-text-clock"
              color={color}
              size={26}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Reportes"
        component={ReportesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file-chart" color={color} size={26} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
