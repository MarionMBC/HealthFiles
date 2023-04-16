import React, {useEffect, useState} from 'react';
import {Modal, Pressable, Text, StyleSheet, View, Alert} from "react-native";
import {eliminarMedicamento, obtenerMedicamentos} from "../helpers/RegistroMedicamentos.helper";
const EliminarMedicamentoComponent = ({modalVisible, setModalVisible, codigo_medicamento, setSearchStatus}) => {

    const [respuesta, setRespuesta] = useState();
    const handleDelete = () => {
        setModalVisible(!modalVisible);
            eliminarMedicamento(codigo_medicamento).then(r => {
                setRespuesta(r)
                setSearchStatus(false)
            })
    }


    return (
        <View style={styles.centeredView }>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('No se eliminó el medicamento.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, {shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 8}]}>
                        <Text style={styles.modalText}>¿Eliminar medicamento?</Text>
                        <View style={{display: 'flex',flexDirection: 'row'}}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => handleDelete()}>
                                <Text style={styles.textStyle}>Eliminar</Text>
                            </Pressable><Pressable
                            style={[styles.button, styles.buttonCancel]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cancelar</Text>
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


export default EliminarMedicamentoComponent;