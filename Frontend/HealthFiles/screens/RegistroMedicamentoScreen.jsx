import {ScrollView, Text, TouchableHighlight, View} from "react-native";
import SearchBarComp from "../components/SearchBar.component";
import TableComponent from "../components/Table.component";
import MedicamentoCardComponent from "../components/MedicamentoCard.component";
import React, {useEffect, useLayoutEffect, useState} from "react";
import PacienteInfoComponent from "../components/PacienteInfo.component";
import TittleComponent from "../components/Tittle.component";
import AgregarComponente from "../components/AgregarComponent.component";
import {fetchData, fetchMedicamentos, obtenerMedicamentos} from "../helpers/RegistroMedicamentos.helper";


const RegistroMedicamentoScreen = ({navigation})  => {
    const [search, setSearch] = useState([]);
    const [medicamentos, setMedicamentos] = useState([]);
    useEffect(() => {
        fetchMedicamentos(setSearch, setMedicamentos);
    }, [medicamentos]);


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

    <ScrollView>
            <PacienteInfoComponent
            nombrePaciente={"Marion Melchisedec Bustamante Castro"} 
            dniPaciente={"0806-2001-00506"}/>
            <TableComponent />
            <View style={{marginBottom: 15}}>
                {
                    search.map( med=> <MedicamentoCardComponent key={med.codigo_medicamento} navigation={navigation} medicamento={med} /> )
                }
            </View>
            <AgregarComponente nombre={"Medicamento"} navigation = {navigation} />
        </ScrollView>

    )
}



export default RegistroMedicamentoScreen;