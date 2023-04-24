import React from 'react';
import { Button, View, Text } from 'react-native';
import MyModal from '../components/Modal.component';
import CitaCardComponent from '../components/CitaComponent.component';
import PacienteInfoComponent from '../components/PacienteInfo.component';
import AgregarComponente from '../components/AgregarComponent.component';
import { CitasProvider } from '../hooks/CitasContext';

export default function CitasScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <PacienteInfoComponent
        dniPaciente={"0806-2001-00506"}
        nombrePaciente={"Marion Melchisedec Bustamante Castro"}
      ></PacienteInfoComponent>
      <CitasProvider dni_paciente={"34567890123"}>
        <CitaCardComponent dni_paciente={"34567890123"} navigation={navigation}></CitaCardComponent>
        <AgregarComponente nombre={"Cita"} navigation={navigation} />
      </CitasProvider>
    </View>
  );
}

