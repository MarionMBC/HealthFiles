/**
 * @author Jennebier Esther Alvarado López
 * @description Pantalla para mostrar el listado de examenes del paciente seleccionado
 */

import React from 'react';
import { View, ScrollView } from 'react-native';
import PacienteInfoComponent from '../components/PacienteInfo.component';
import AgregarComponente from '../components/AgregarComponent.component';
import ExamenCardComponent from '../components/ExamenCard.component';

export default function ExamenesScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <PacienteInfoComponent
        nombrePaciente={"Marion Melchisedec Bustamante Castro"}
        dniPaciente={"0806-2001-00506"}></PacienteInfoComponent>
      <AgregarComponente nombre={"Examen"} navigation={navigation} />
      
    </View>
  );
}

