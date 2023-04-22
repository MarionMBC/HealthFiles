import {
  ScrollView,
  View,
} from "react-native";
import SearchBarComp from "../components/SearchBar.component";
import CardCirugia from "../components/CardCirugia.component";
import React, { useEffect, useState } from "react";
import PacienteInfoComponent from "../components/PacienteInfo.component";
import TittleComponent from "../components/Tittle.component";
import AgregarComponente from "../components/AgregarComponent.component";
import TableTipoCirugia from "../components/TableTipoCirugia";

const RegistroCirugiaScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <TittleComponent title={"Registro de Cirugias"}></TittleComponent>
      <SearchBarComp />
      <PacienteInfoComponent
        nombrePaciente={"Bryan Fernandez Pineda"}
        dniPaciente={"2020-2002-22020"}
      />
      <TableTipoCirugia />
      <View style={{ marginBottom: 15 }}>
        <CardCirugia dni_medico={"12345678901"} dni_paciente={"56789012345"} navigation={navigation} ></CardCirugia>
      </View>
      <AgregarComponente nombre={"Cirugia"} navigation={navigation} />
    </ScrollView>
  );
};

export default RegistroCirugiaScreen;
