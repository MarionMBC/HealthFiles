import React from 'react';

import { Button, View, Text, ScrollView } from 'react-native';
import TittleComponent from '../components/Tittle.component';
import SearchBarComp from '../components/SearchBar.component';
import PacienteInfoComponent from '../components/PacienteInfo.component';
import TableComponent from "../components/Table.component";

export default function ExamenesScreen({ navigation }) {
  return (
      <ScrollView>
      
      <TittleComponent title={"Exámenes"}></TittleComponent>
      
      <SearchBarComp></SearchBarComp>
      
      <PacienteInfoComponent 
      nombrePaciente={"Marion Melchisedec Bustamante Castro"} 
      dniPaciente={"0806-2001-00506"}></PacienteInfoComponent>
      <TableComponent></TableComponent>
          <View>
          <Button
                title={"Registrar Examen"}
                onPress={()=>{ navigation.navigate('RegistroExamen') }}
            >
            </Button>
        </View>


    </ScrollView>
  );
}

