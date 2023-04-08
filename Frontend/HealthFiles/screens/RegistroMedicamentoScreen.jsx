import {ScrollView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import SearchBarComp from "../components/SearchBar.component";
import TableComponent from "../components/Table.component";
import MedicamentoCardComponent from "../components/MedicamentoCard.component";
import React, {useEffect, useState} from "react";
import PacienteInfoComponent from "../components/PacienteInfo.component";
import TittleComponent from "../components/Tittle.component";
import AgregarMedicamentoComponent from "../components/AgregarMedicamento.component";
import {obtenerMedicamentos}  from "../helpers/RegistroMedicamentos.helper";

const RegistroMedicamentoScreen = ({navigation})  => {

    const [medicamentos, setMedicamentos] = useState([]);

    useEffect(() => {
        obtenerMedicamentos().then(res=> {
            setMedicamentos(res);

        })
    }, [medicamentos]);


    return (
        <ScrollView style={{ flex:1}}>
            <TittleComponent title={'Registro de Medicamentos'}></TittleComponent>
            <SearchBarComp/>
            <PacienteInfoComponent />
            <TableComponent />
            <View style={{marginBottom: 15}}>
                {
                    medicamentos.map( med=> <MedicamentoCardComponent key={med.codigo_medicamento} navigation={navigation} medicamento={med} /> )
                }
            </View>
            <AgregarMedicamentoComponent navigation = {navigation} />
        </ScrollView>

    )
}



export default RegistroMedicamentoScreen;