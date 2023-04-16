import React from 'react';
import { Button, View, Text } from 'react-native';
import MyModal from '../components/Modal.component';
import CitaCardComponent from '../components/CitaComponent.component';
import PacienteInfoComponent from '../components/PacienteInfo.component';


export default function CitasScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
        <Text style={{marginBottom: 10, fontSize: 25, fontWeight: '700'}}>Citas</Text>
        <PacienteInfoComponent 
        dniPaciente={"0806-2001-00506"}
        nombrePaciente={"Marion Melchisedec Bustamante Castro"}
        ></PacienteInfoComponent>

        <View>
        <Button
          title="Registro de citas"
          onPress={() => navigation.navigate('RegistroCita')}
        />
        <MyModal
        tittleButton={"Valorar atención"}
        tittleModal={"Valorar atención médica"}
       ></MyModal>
       
        
      </View>
      <CitaCardComponent></CitaCardComponent>
     
      </View>
);
}

