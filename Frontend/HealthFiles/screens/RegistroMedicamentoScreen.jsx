import { ScrollView, Text, TouchableHighlight, View } from "react-native";
import MedicamentoCardComponent from "../components/MedicamentoCard.component";
import React, { useEffect, useLayoutEffect, useState } from "react";
import PacienteInfoComponent from "../components/PacienteInfo.component";



import TittleComponent from "../components/Tittle.component";
import AgregarComponente from "../components/AgregarComponent.component";
import {fetchData, fetchMedicamentos, obtenerMedicamentos} from "../helpers/RegistroMedicamentos.helper";


const RegistroMedicamentoScreen = ({ navigation }) => {
    const [search, setSearch] = useState([]);
    const [medicamentos, setMedicamentos] = useState([]);
    const [searchStatus, setSearchStatus ] = useState(false);
    
    useEffect(() => {
        fetch(
            "https://healthfiles-production.up.railway.app/medicamento_paciente/get/78901234567"
        )
            .then((res) => res.json())
            .then((res) => {
                 /*    setSearch(res)  */ 
               
                    setMedicamentos(res)
                    setSearch(res)
                
            })
            .catch((e) => console.log(e));
    }, []);
    

    const searchFilterFunction = (text) => {
        setSearchStatus(true)
        if (text) {
            const newData = medicamentos.filter((item) => {
                const itemName = item.nombre_comercial ? item.nombre_comercial.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemName.indexOf(textData) > -1;
            });
            setMedicamentos(newData);
        } else {
            setSearchStatus(false)
            setMedicamentos(medicamentos);
        }
        
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                onChangeText: (event) => {
                    searchFilterFunction(event.nativeEvent.text);
                }
                ,


                placeholder: "Buscar medicamento",
            },
            headerStyle: {
                backgroundColor: "#429adc",
            },
            headerTintColor: "white",
            headerTitleStyle: {
                fontWeight: 400,
                fontSize: 20,
            },
        });
    }, [navigation]);


    

    return (
        <ScrollView>
            <PacienteInfoComponent
                nombrePaciente={"Marion Melchisedec Bustamante Castro"}
                dniPaciente={"0806-2001-00506"}
            />

            <View style={{ marginBottom: 15 }}>
                {medicamentos.length > 0 ? (
                    search.map((med) => (
                        <MedicamentoCardComponent
                            key={med.codigo_medicamento}
                            navigation={navigation}
                            medicamento={med}
                        
                           
                        />

                    ))
                ) : (
                    <Text
                        style={{
                            backgroundColor: "#e09090",
                            margin: 10,
                            fontSize: 18,
                            fontWeight: "400",
                            padding: 5,
                        }}
                    >
                        No se encontraron resultados.
                    </Text>
                )}
            </View>


            <AgregarMedicamentoComponent navigation={navigation} />

            <AgregarComponente nombre={"Medicamento"} navigation = {navigation} />

        </ScrollView>
    );
};

export default RegistroMedicamentoScreen;
