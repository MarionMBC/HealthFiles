import React, {useEffect, useState} from 'react';
import {Card} from "react-native-elements";
import {ScrollView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { obtenerPacientes } from '../helpers/ListaPacientes.helper';


const CardPacienteList = ({dni_medico}) => {
    const [isHovered, setIsHovered] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const handleMouseEnter =  () => {
        setIsHovered(true)
        console.log(isHovered)
    }

    const  [pacientes, setPacientes] = useState([])

    useEffect(() => {
        const obtenerDatos = async () =>{
            const datos = await obtenerPacientes(dni_medico)
            setPacientes(datos[0]);
        };
        obtenerDatos();
    }, [dni_medico]);


    return (
        <ScrollView>
            {pacientes.map((paciente) => {
                <Card key={paciente.dni_paciente} onPress={()=>{handleMouseEnter()}} containerStyle={{shadowColor: '#2b7bb7',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,borderRadius: 10}}>
                <View style={styles.cardContainer}>
                    <View>
                        <Icon style={{marginLeft: 10}} name={'hospital-user'} size={30} color={'#2b7bb7'} />
                    </View>
                    <View style={styles.CardDescriptionView}>
                        <Text style={styles.cardTittle}>{paciente.primer_nombre + paciente.segundo_nombre + paciente.primer_apellido + paciente.paciente.segundo_apellido }</Text>
                        <Text style={styles.cardContentText}>{paciente.dni_paciente}</Text>
                    </View>
                    <View style={styles.crudButton}>
                        <TouchableHighlight underlayColor="transparent">
                            <Icon name={'eye'} size={25} color={'#2b7bb7'} />
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="transparent" onPress={()=>{
                            setModalVisible(true)}}>
                            <Icon name={'trash'} size={25} color={'#2b7bb7'} />
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="transparent"   onPress={() => {
                            console.log('Hi')}}>
                            <Icon name={'edit'} size={25} color={'#2b7bb7'} />
                        </TouchableHighlight>
                    </View>
                </View>
            </Card>
            })}


            
        </ScrollView>
        
    );
};



const styles = StyleSheet.create({

    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around',

    },

    CardDescriptionView: {
        marginLeft: 20,
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
    }

})

export default CardPacienteList;