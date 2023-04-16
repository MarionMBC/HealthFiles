import {ScrollView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import SearchBarComp from "../components/SearchBar.component";
import TableComponent from "../components/Table.component";
import MedicamentoCardComponent from "../components/MedicamentoCard.component";
import React, {useEffect, useState} from "react";
import PacienteInfoComponent from "../components/PacienteInfo.component";
import TittleComponent from "../components/Tittle.component";
import AgregarComponente from "../components/AgregarComponent.component";
import {obtenerMedicamentos}  from "../helpers/RegistroMedicamentos.helper";
import TableTipoCirugia from "../components/TableTipoCirugia";

const RegistroCirugiaScreen = ({navigation})  => {

    const [medicamentos, setMedicamentos] = useState([]);

    useEffect(() => {
        obtenerMedicamentos().then(res=> {
            setMedicamentos(res);

        })
    }, [medicamentos]);


    return (
        <ScrollView style={{ flex:1}}>
            <TittleComponent title={'Registro de Cirugias'}></TittleComponent>
            <SearchBarComp/>
            <PacienteInfoComponent 
            nombrePaciente={"Bryan Fernandez Pineda"} 
            dniPaciente={"2020-2002-22020"}/>
            <TableTipoCirugia />
            <View style={{marginBottom: 15}}>
                {
                    medicamentos.map( med=> <MedicamentoCardComponent key={med.codigo_medicamento} navigation={navigation} medicamento={med} /> )
                }
            </View>
            <AgregarComponente 
            nombre={"Cirugia"} 
            navigation = {navigation}/>
        </ScrollView>

    )
}



export default RegistroCirugiaScreen;