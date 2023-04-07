import React, {useState} from 'react';
import {Card, Image} from "react-native-elements";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';



const MedicamentoCardComponent = ({medicamento}) => {
    const [isHovered, setIsHovered] = useState(false);

    const { nombre, codigo_medicamento, frecuencia, estado, fecha_final, fecha_inicial, novel_importancia, cantidad_principio_act, cantidad_tomar  } = medicamento
    const fecha = new Date(fecha_inicial);
    const dia = fecha.getUTCDate();
    const mes = fecha.getUTCMonth() +1 ;
    const año = fecha.getUTCFullYear();
    const fecha_inicial_f = `${dia}/${mes}/${año}`
    const handleMouseEnter =  () => {
        setIsHovered(true)
        console.log(isHovered)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <Card key={codigo_medicamento} onPress={()=>{handleMouseEnter()}} containerStyle={{borderColor:'#2b7bb7', borderRadius: 10}}>
            <View style={styles.cardContainer}>
                <View>
                    <Icon style={{marginLeft: 10}} name={'pills'} size={30} color={'#2b7bb7'} />
                </View>
                <View style={styles.CardDescriptionView}>
                    <Text style={styles.cardTittle}>{nombre}</Text>
                    <Text style={styles.cardContentText}>{cantidad_principio_act}</Text>
                    <Text style={styles.cardContentText}>Fecha inicio: {fecha_inicial_f}</Text>
                    <Text style={styles.cardContentText}>{cantidad_tomar}</Text>
                </View>
                <View style={styles.crudButton}>
                    <TouchableHighlight underlayColor="transparent" onPress={()=>{
                        console.log('Funciona')}}>
                        <Icon name={'trash'} size={30} color={'#2b7bb7'} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="transparent" onPress={()=>{console.log('A')}}>
                        <Icon name={'edit'} size={30} color={'#2b7bb7'} />
                    </TouchableHighlight>
                </View>
            </View>
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

export default MedicamentoCardComponent;