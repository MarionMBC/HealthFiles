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
    const [searchStatus, setSearchStatus ] = useState(true); 
    const temp = true;
    useEffect(() => {
        const data = fetch(
            "https://healthfiles-production.up.railway.app/medicamento_paciente/get/78901234567"
        )
        data.then((res) => res.json())
            .then((res) => {
                 /*    setSearch(res)  */ 
               
                    setMedicamentos(res)
                
            })
            .catch((e) => console.log(e));
    }, [temp]);

    


    const searchFilterFunction = (text) => {
        if (text) {
            const newData = medicamentos.filter((item) => {
                const itemName = item.nombre_comercial ? item.nombre_comercial.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemName.indexOf(textData) > -1;
            });
            setSearch(newData);
        } else {
            setSearchStatus(false)
            setMedicamentos(fetch(
                "https://healthfiles-production.up.railway.app/medicamento_paciente/get/78901234567"
            )
                .then((res) => res.json())
                .then((res) => {
                     /*    setSearch(res)  */ 
                   
                        setMedicamentos(res)
                    
                })
                .catch((e) => console.log(e)));
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
                    medicamentos.map((med) => (
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


            <AgregarComponente navigation={navigation} />

            <AgregarComponente nombre={"Medicamento"} navigation = {navigation} />

        </ScrollView>

    )
}



export default RegistroMedicamentoScreen;
