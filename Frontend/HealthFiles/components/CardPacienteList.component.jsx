/**

 * @author Jennebier Esther Alvarado López

 * @description Componente tipo tarjeta que trae las citas de la base de datos y las renderiza

 */

import React, { useState, useEffect } from 'react';

import { Card } from "react-native-elements";

import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';

import { dateFormatter } from "../helpers/RegistroMedicamentos.helper";

import { obtenerPacientes } from '../helpers/ListaPacientes.helper';


const PacienteCardComponent = ({ dni_medico, setSearchStatus, navigation }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true)
        console.log(isHovered)
    }




    const [pacientes, setPacientes] = useState([]);




    useEffect(() => {

        const obtenerDatos = async () => {

            const datos = await obtenerPacientes(dni_medico);

            setPacientes(datos);

        };

        obtenerDatos();

    }, [dni_medico]);







    return (




        <ScrollView>

            {pacientes.map((paciente) => (

                <Card key={paciente.dni_paciente} onPress={() => { handleMouseEnter() }} containerStyle={{

                    shadowColor: '#2b7bb7',

                    shadowOffset: { width: 0, height: 2 },

                    shadowOpacity: 0.25,

                    shadowRadius: 3.84,

                    elevation: 5, borderRadius: 10

                }}>

                    <View style={styles.cardContainer}>

                        <View>

                            <Icon style={{ marginLeft: 5 }} name={'user'} size={30} color={'#2b7bb7'} />

                        </View>

                        <View style={styles.CardDescriptionView}>

                            <Text style={styles.cardTittle}>{`Nombre: ${paciente.primer_nombre} ${paciente.segundo_nombre} ${paciente.primer_apellido} `}</Text>

                            <Text style={styles.cardContentText}>{`Número de identidad: ${paciente.dni_paciente}`}</Text>

                            <Text style={styles.cardContentText}>{`Género: ${paciente.genero}`}</Text>

                            <Text style={styles.cardContentText}>{`Fecha Nacimiento: ${dateFormatter(paciente.fecha_nacimiento)}`}</Text>

                            <Text style={styles.cardContentText}>{`Télefono: ${paciente.telefono}`}</Text>

                        </View>

                        <View style={styles.crudButton}>

                            <TouchableHighlight

                                underlayColor="transparent"




                            >

                                <Icon name={"dot-circle"} size={25} color={"#2b7bb7"} />

                            </TouchableHighlight>

                        </View>

                    </View>




                    <View style={styles.centeredView}>




                    </View>




                </Card>




            ))}













        </ScrollView>













    );

};










const styles = StyleSheet.create({




    cardContainer: {

        flex: 1,

        flexDirection: 'row',

        alignItems: 'center',

        justifyContent: 'space-around',




    },




    CardDescriptionView: {

        marginLeft: 10,

        backgroundColor: 'white',




    },




    cardTittle: {

        fontWeight: 'bold',

        fontSize: 14,




    },

    cardContentText: {

        fontWeight: '400'

    },




    crudButton: {

        display: 'flex',

        flexDirection: 'row',

        justifyContent: 'space-around',

        flex: 1

    },

    cardContainer: {

        flex: 1,

        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-around",

    },




    CardDescriptionView: {

        marginLeft: 20,

        backgroundColor: "white",

    },




    cardTittle: {

        fontWeight: "bold",

        fontSize: 14,

    },

    cardContentText: {

        fontWeight: "400",

    },




    crudButton: {

        display: "flex",

        flexDirection: "row",

        justifyContent: "space-around",

        flex: 1,

    },

    centeredView: {

        flex: 1,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 22,

    },







})




export default PacienteCardComponent;