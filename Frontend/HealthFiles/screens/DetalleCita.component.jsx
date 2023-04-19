import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import {Paragraph} from "react-native-paper";
import {Divider} from "@rneui/base";
import {dateFormatter} from "../helpers/RegistroMedicamentos.helper";

const detalleMedStyle = StyleSheet.create({
    d_med_view: {
        flex: 1,
        margin: 10
    }
    ,
    d_med_title: {
        fontWeight: '600',
        fontSize: 20
    },

    d_med_imp_baja: {
        color: 'green'
    },
    d_med_imp_alta: {
        color: 'red'
    }
})

const DetalleCitaScreen = ({codigo_cita}) =>
{
  // const medicamento = navigation.params;
    console.log(route.params)
    const {cita} = route.params;

    const fecha_cita = dateFormatter(cita.fecha);
    return (
    <View style={detalleMedStyle.d_med_view}>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <View style={{backgroundColor:'rgba(167,167,167,0.16)',
                marginTop: 10,
                width: 100,
                height: 100,
                display:'flex',
                alignItems:'center',
                justifyContent: 'center',
                borderRadius: 50
            }}>
                <Icon style={{marginLeft: 10}} name={'pills'} size={60} color={'#2b7bb7'} />
            </View>

            <View style={{marginStart: 10}}>
                <Text style={detalleMedStyle.d_med_title}>{cita.codigo_cita}</Text>
                <Text style={{fontSize: 15}} >{cita.dni_paciente}</Text>
                <Text style={{fontSize: 15}}>{cita.valoracion}</Text>
            </View>
        </View>
        <Divider style={{margin:10}}></Divider>
        <View style={{margin:10, marginTop: 0}}>
            <Text style={detalleMedStyle.d_med_title}>Razón</Text>
            <Paragraph style={{fontSize: 15}}>{cita.razon}</Paragraph>
            <View style={{display: 'flex',flexDirection:'row', marginTop:10, alignItems:'center'}}>
                <Icon name={'hourglass-start'} size={35} color={'#2b7bb7'} />
                <Text style={{margin:10, padding: 10, width:300, backgroundColor:'#2b7bb7', fontSize: 15 , color: 'white', borderRadius: 30 }}>Fecha: {fecha_cita}</Text>
            </View>
            
            <View style={{display: 'flex',flexDirection:'row', alignItems:'center'}}>
                <Icon name={'calendar-plus'} size={35} color={'#2b7bb7'} />
                <Text style={{margin:10, padding: 10, width:300, fontSize: 15, backgroundColor:'#2b7bb7', color: 'white', borderRadius: 30 }}>Diagnóstico: {cita.diagnostico}</Text>
            </View>
            <View style={{display: 'flex',flexDirection:'row', alignItems:'center'}}>
                <Icon name={'exclamation-triangle'} size={30} color={'#2b7bb7'} />
                <Text style={{margin:10 , padding: 10, width:300, fontSize: 15, color: 'white', backgroundColor:'#2b7bb7' , borderRadius: 30 }}>Hora {cita.hora}</Text>
            </View>
        </View>


    </View>


  );
};



export default DetalleCitaScreen;