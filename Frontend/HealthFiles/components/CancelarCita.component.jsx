/**
 * @author Jennebier Esther Alvarado López
 * @description Componente modal para confirmar la cancelación de una cita
 */
import React, { useEffect, useState, useContext } from 'react';
import { Modal, Pressable, Text, StyleSheet, View, Alert } from "react-native";
import { cancelarCita } from '../helpers/RegistroCitas.helper';
import CitasContext from '../hooks/CitasContext.jsx';



const CancelarCita = ({ modalVisible, setModalVisible, codigo_cita }) => {

    const {actualizarCitas, dni_paciente} = useContext(CitasContext);
    
    const [respuesta, setRespuesta] = useState();
    const handleDelete = () => {
        setModalVisible(!modalVisible);
        console.log(`Este es el código de la cita a cancelar: ${codigo_cita}`)
        cancelarCita(codigo_cita);
        actualizarCitas(dni_paciente);
    }


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('No se eliminó la cita.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, {
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 8
                    }]}>
                        <Text style={styles.modalText}>¿Desea cancelar cita?</Text>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => handleDelete()}>
                                <Text style={styles.textStyle}>Sí</Text>
                            </Pressable><Pressable
                                style={[styles.button, styles.buttonCancel]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>No</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: 'red',
        marginHorizontal: 5
    },
    buttonCancel: {
        backgroundColor: '#2196F3',
        marginHorizontal: 5
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        fontSize: 20,
        textAlign: 'center',
    },
});



export default CancelarCita;