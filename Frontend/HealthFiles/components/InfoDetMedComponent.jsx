import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import {Text, View} from "react-native";

const InfoDetMedComponent = (props) => {
    const info = [nombre_comercial,
        nombre_generico,
        concentracion,
        descripcion,
        fecha_inicio,
        fecha_fin,
        importancia,
        frecuencia];
    return (
        <View style={{display: 'flex',flexDirection:'row', alignItems:'center'}}>
            <Icon name={'calendar-plus'} size={35} color={'#2b7bb7'} />
            <Text style={{margin:10, padding: 10, width:300, fontSize: 15, backgroundColor:'#2b7bb7', color: 'white', borderRadius: 30 }}>Frecuencia: {frecuencia}</Text>
        </View>
    )
};

export default InfoDetMedComponent;