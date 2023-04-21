import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { backgroundColor } from "react-native-calendars/src/style";
import ListaPacientes from "../screens/ListaPacientes";

const StackHome = createNativeStackNavigator();

export default function NavigationStackHome() {
  return (
    <StackHome.Navigator
      headerStyle={{ backgroundColor: "red" }}
      cardStyle={{ backgroundColor: "red" }}
      initialRouteName="Inicio"
    >
      <StackHome.Screen name="Inicio" component={ListaPacientes} options={{ headerShown: false }} />
    </StackHome.Navigator>
  );
}
