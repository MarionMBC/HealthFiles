import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import MyModal from '../components/Modal.component';
import CitaCardComponent from '../components/CitaComponent.component';


export default function CitasScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
        <Text style={{marginBottom: 10, fontSize: 25, fontWeight: '700'}}>Citas</Text>
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

