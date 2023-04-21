/**
 * @author Jennebier Esther Alvarado López
 * @description Pantalla que muestra los detalles de la cita seleccionada
 * @date 21 de abril de 2023
 */

import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Paragraph } from "react-native-paper";
import { Divider } from "@rneui/base";
import { dateFormatter } from "../helpers/RegistroMedicamentos.helper";

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

const DetalleCitaScreen = ({ route }) => {
    // const medicamento = navigation.params;
    console.log("Llegue a Detalle Cita Screen")
    console.log(route.params)
    const { cod, date, dni, hour, state, reason, treat, valueDate } = route.params;




    return (
        <View style={detalleMedStyle.d_med_view}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{
                    backgroundColor: 'rgba(167,167,167,0.16)',
                    marginTop: 10,
                    width: 100,
                    height: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50
                }}>
                    <Icon style={{ marginLeft: 10 }} name={'calendar-week'} size={60} color={'#2b7bb7'} />
                </View>

                <View style={{ marginStart: 10 }}>
                    <Text style={detalleMedStyle.d_med_title}>{`Código: ${cod}`}</Text>
                    <Text style={{ fontSize: 15 }} >{`Dni del Paciente: ${dni}`}</Text>
                    <Text style={{ fontSize: 15 }}>{`Estado: ${state}`}</Text>
                </View>
            </View>
            <Divider style={{ margin: 10 }}></Divider>
            <View style={{ margin: 10, marginTop: 0 }}>
                <Text style={detalleMedStyle.d_med_title}>Razón</Text>
                <Paragraph style={{ fontSize: 15 }}>{reason}</Paragraph>


                <Text style={detalleMedStyle.d_med_title}>Tratamiento</Text>
                <Paragraph style={{ fontSize: 15 }}>{treat}</Paragraph>



                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                    <Icon name={'hourglass-start'} size={38} color={'#2b7bb7'} />
                    <Text style={{ margin: 10, padding: 10, width: 300, backgroundColor: '#2b7bb7', fontSize: 15, color: 'white', borderRadius: 30 }}>Fecha: {dateFormatter(date)}</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'star'} size={28} color={'#2b7bb7'} />
                    <Text style={{ margin: 10, padding: 10, width: 300, fontSize: 15, backgroundColor: '#2b7bb7', color: 'white', borderRadius: 30 }}>Valoración: {valueDate}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'clock'} size={30} color={'#2b7bb7'} />
                    <Text style={{ margin: 10, padding: 10, width: 300, fontSize: 15, color: 'white', backgroundColor: '#2b7bb7', borderRadius: 30 }}>Hora {hour}</Text>
                </View>
            </View>


        </View>


    );
};



export default DetalleCitaScreen;