import React, {useState} from 'react';
import {Card, Image} from "react-native-elements";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {dateFormatter, handleViewMed} from "../helpers/RegistroMedicamentos.helper";
import EliminarMedicamentoComponent from "./EliminarMedicamento.component";



const CirugiaCardComponent = ({cirugia, navigation}) => {
    const [isHovered, setIsHovered] = useState(false);
    const {
        nombre,
        fecha,
        doctor
    } = cirugia

    const [modalVisible, setModalVisible] = useState(false);

    const handleMouseEnter =  () => {
        setIsHovered(true)
        console.log(isHovered)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }



    return (
        <Card key={codigo_cirugia} onPress={()=>{handleMouseEnter()}} containerStyle={{shadowColor: '#2b7bb7',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,borderRadius: 10}}>
            <View style={styles.cardContainer}>
                <View>
                    <Icon style={{marginLeft: 10}} name={'pills'} size={30} color={'#2b7bb7'} />
                </View>
                <View style={styles.CardDescriptionView}>
                    <Text style={styles.cardTittle}>{nombre}</Text>
                    <Text style={styles.cardContentText}>fecha: {dateFormatter(fecha)}</Text>
                    <Text style={styles.cardTittle}>{doctor}</Text>
                </View>
                <View style={styles.crudButton}>
                    <TouchableHighlight underlayColor="transparent" onPress={()=>{handleViewMed(navigation, cirugia)}}>
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
            <EliminarMedicamentoComponent modalVisible={modalVisible} setModalVisible={setModalVisible} codigo_medicamento={codigo_medicamento} />
        </Card>

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

export default CirugiaCardComponent;