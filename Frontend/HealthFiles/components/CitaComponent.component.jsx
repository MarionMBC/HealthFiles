import React, {useState, useEffect} from 'react';
import {Card} from "react-native-elements";
import {ScrollView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {dateFormatter} from "../helpers/RegistroMedicamentos.helper";
import { obtenerCitas } from '../helpers/RegistroCitas.helper';


const CitaCardComponent = ({dni_paciente}) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const [modalVisible, setModalVisible] = useState(false);

    const handleMouseEnter =  () => {
        setIsHovered(true)
        console.log(isHovered)
    }

    const [citas, setCitas] = useState([]);

    useEffect(() => {
      const obtenerDatos = async () => {
        const datos = await obtenerCitas(dni_paciente);
        setCitas(datos[0]);
      };
      obtenerDatos();
    }, [dni_paciente]);


    return (     
            
        <ScrollView>
            {citas.map((cita) =>(
                <Card key={cita.codigo_cita} onPress={()=>{handleMouseEnter()}} containerStyle={{shadowColor: '#2b7bb7',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,borderRadius: 10}}>
                <View style={styles.cardContainer}>
                    <View>
                        <Icon style={{marginLeft: 10}} name={'calendar-week'} size={30} color={'#2b7bb7'} />
                    </View>
                    <View style={styles.CardDescriptionView}>
                        <Text style={styles.cardTittle}>{cita.codigo_cita}</Text>
                        <Text style={styles.cardContentText}>{cita.hora}</Text>
                        <Text style={styles.cardContentText}>Fecha inicio: {dateFormatter(cita.fecha)}</Text>
                        <Text style={styles.cardContentText}>{cita.estado}</Text>
                    </View>
                    <View style={styles.crudButton}>
                        <TouchableHighlight underlayColor="transparent">
                            <Icon name={'eye'} size={25} color={'#2b7bb7'} />
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="transparent" onPress={()=>{
                            setModalVisible(true)}}>
                            <Icon name={'trash'} size={25} color={'#2b7bb7'} />
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="transparent"  onPress={() => {
                            console.log('Hi')}}>
                            <Icon name={'edit'} size={25} color={'#2b7bb7'} />
                        </TouchableHighlight>
                    </View>
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

export default CitaCardComponent;