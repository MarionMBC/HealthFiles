import React, {useEffect, useState} from 'react';
import {Card} from "react-native-elements";
import {ScrollView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {dateFormatter} from "../helpers/RegistroMedicamentos.helper";
import { obtenerCirugias } from '../helpers/RegistroCirugia.helper';


const CardCirugia = ({dni_medico, dni_paciente}) => {
    const [isHovered, setIsHovered] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const handleMouseEnter =  () => {
        setIsHovered(true)
        console.log(isHovered)
    }

    const  [cirugias, setCirugias] = useState([])

    useEffect(() => {
        const obtenerDatos = async () =>{
            const datos = await obtenerCirugias(dni_medico, dni_paciente)
            setCirugias(datos[0]);
        };
        obtenerDatos();
    }, [dni_medico, dni_paciente]);


    return (
        <ScrollView>
            {cirugias.map((cirugia) => {
                <Card key={cirugia.codigo_cirugia} onPress={()=>{handleMouseEnter()}} containerStyle={{shadowColor: '#2b7bb7',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,borderRadius: 10}}>
                <View style={styles.cardContainer}>
                    <View>
                        <Icon style={{marginLeft: 10}} name={'scalpel-line-dashed'} size={30} color={'#2b7bb7'} />
                    </View>
                    <View style={styles.CardDescriptionView}>
                        <Text style={styles.cardTittle}>{cirugia.codigo_cirugia}</Text>
                        <Text style={styles.cardContentText}>{cirugia.motivo}</Text>
                        <Text style={styles.cardContentText}>Fecha: {dateFormatter(cirugia.fecha)}</Text>
                        <Text style={styles.cardContentText}>{cirugia.tipo}</Text>
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
}



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

export default CardCirugia;