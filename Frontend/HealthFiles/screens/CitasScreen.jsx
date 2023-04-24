import React from 'react';
import { Button, View, Text } from 'react-native';
import MyModal from '../components/Modal.component';
import CitaCardComponent from '../components/CitaComponent.component';
import PacienteInfoComponent from '../components/PacienteInfo.component';
import AgregarComponente from '../components/AgregarComponent.component';


export default function CitasScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
        <Text style={{marginBottom: 10, fontSize: 25, fontWeight: '700'}}>Citas</Text>
        <PacienteInfoComponent 
        dniPaciente={"0806-2001-00506"}
        nombrePaciente={"Marion Melchisedec Bustamante Castro"}
        ></PacienteInfoComponent>

        <View>
        <MyModal
        tittleButton={"Valorar atención"}
        tittleModal={"Valorar atención médica"}
       ></MyModal>
       
        
      </View>
      <CitaCardComponent dni_paciente={"34567890123"} navigation={navigation}></CitaCardComponent>
      <AgregarComponente nombre={"Cita"} navigation = {navigation} />
     
      </View>
);
}

