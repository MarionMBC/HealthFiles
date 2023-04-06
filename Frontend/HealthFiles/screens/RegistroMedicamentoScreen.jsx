import {ScrollView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import SearchBarComp from "../components/SearchBar.component";
import TableComponent from "../components/Table.component";
import MedicamentoCardComponent from "../components/MedicamentoCard.component";
import React from "react";
import PacienteInfoComponent from "../components/PacienteInfo.component";
import TittleComponent from "../components/Tittle.component";
import AgregarMedicamentoComponent from "../components/AgregarMedicamento.component";
import {obtenerMedicamentos}  from "../helpers/RegistroMedicamentos.helper";

const RegistroMedicamentoScreen = ({navigation})  => {

    const data = obtenerMedicamentos().then(data=>{
        return data
    })



    return (
        <ScrollView style={{ flex:1}}>
            <TittleComponent title={'Registro de Medicamentos'}></TittleComponent>
            <SearchBarComp/>
            <PacienteInfoComponent />
            <TableComponent />
            <View style={{marginBottom: 15}}>
                <Text>l</Text>
            </View>
            <AgregarMedicamentoComponent />
        </ScrollView>

    )
}



export default RegistroMedicamentoScreen;