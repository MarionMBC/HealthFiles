import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MedicinasScreen from "../screens/MedicinasScreen";
import RegistroMedicamentoScreen from "../screens/RegistroMedicamentoScreen";
import HomeScreen from "../screens/HomeScreen";
import AgregarMedicamentoScreen from "../screens/AgregarMedicamentoScreen";
import { backgroundColor } from "react-native-calendars/src/style";
import DetalleMedicamentoScreen from "../screens/DetalleMedicamentoScreen";

const StackMedicamentos = createNativeStackNavigator();

export default function NavigationStackMedicamentos() {
  return (
    <StackMedicamentos.Navigator>
      <StackMedicamentos.Screen
        name="Registro de Medicamentos"
        component={RegistroMedicamentoScreen}
<<<<<<< HEAD
      
=======
>>>>>>> parent of 561fed5 (Merge branch 'development' of https://github.com/MarionMBC/HealthFiles into development)
      />
      <StackMedicamentos.Screen
        name="Agregar Medicamento"
        component={AgregarMedicamentoScreen}
      />
      <StackMedicamentos.Screen
        name={"Detalles de Medicamento"}
        component={DetalleMedicamentoScreen}
      />
    </StackMedicamentos.Navigator>
  );
}
