import {ScrollView, Text, TouchableHighlight, View} from "react-native";
import SearchBarComp from "../components/SearchBar.component";
import TableComponent from "../components/Table.component";
import MedicamentoCardComponent from "../components/MedicamentoCard.component";
import React, {useEffect, useLayoutEffect, useState} from "react";
import PacienteInfoComponent from "../components/PacienteInfo.component";
import TittleComponent from "../components/Tittle.component";
import AgregarMedicamentoComponent from "../components/AgregarMedicamento.component";
import {fetchData, fetchMedicamentos, obtenerMedicamentos} from "../helpers/RegistroMedicamentos.helper";
import * as events from "events";

const RegistroMedicamentoScreen = ({navigation})  => {
    const [search, setSearch] = useState([]);
    const [medicamentos, setMedicamentos] = useState([]);

    useEffect(() => {
        fetchMedicamentos(setSearch, setMedicamentos);
    }, [setSearch]);


    console.log(search);


    useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerSearchBarOptions: {
                    onChangeText: (event) => {
                        searchFilterFunction(event.nativeEvent.text);

                    },
                    placeholder: "Buscar medicamento",

                },
                headerStyle: {
                    backgroundColor: "#429adc",
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 400,
                    fontSize: 20
                }

            }
        )
        }, [navigation]);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = medicamentos.filter(item => {
                const itemName = item.nombre_comercial ? item.nombre_comercial.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemName.indexOf(textData) > -1
            })
            setSearch(newData)
        } else {
            setSearch(medicamentos)
        }
    }


    return (
<<<<<<< HEAD
        <ScrollView>
            <PacienteInfoComponent/>
=======
        <ScrollView style={{ flex:1}}>
            <TittleComponent title={'Registro de Medicamentos'}></TittleComponent>
            <SearchBarComp/>
            <PacienteInfoComponent 
            nombrePaciente={"Marion Melchisedec Bustamante Castro"} 
            dniPaciente={"0806-2001-00506"}/>
            <TableComponent />
>>>>>>> e58fb8135e58b5a15ed3a74e8c7628c0a56e97d7
            <View style={{marginBottom: 15}}>
                {
                    search.map( med=> <MedicamentoCardComponent key={med.codigo_medicamento} navigation={navigation} medicamento={med} /> )
                }
            </View>
            <AgregarMedicamentoComponent navigation = {navigation} />
        </ScrollView>

    )
}



export default RegistroMedicamentoScreen;