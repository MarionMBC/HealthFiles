import {ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import TittleComponent from "../components/Tittle.component";
import TableTipoRecordatorio from "../components/TableTipoRecordatorio";
import { MaterialIcons } from '@expo/vector-icons';

const RegistroRecordatorioScreen = ({navigation})  => {

    const [recordatorios, setRecordatorios] = useState([]);

  //  useEffect(() => {
   //     obtenerRecordatorios().then(res=> {
   //         setRecordatorios(res);
//
  //      })
   // }, [recordatorios]);

    return (
        <ScrollView style={styles.container}>
            <TittleComponent title={'Recordatorios'}></TittleComponent>
            <TableTipoRecordatorio />
            <View style={{marginBottom: 15}}>
                <Text>
                </Text>
                <Text>
                </Text>
            </View>
            <View style={styles.addButtonContainer}>
                 <TouchableOpacity style={styles.addButton}>
                    <MaterialIcons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    addButtonContainer: {
        position: 'absolute',
        bottom: 10,
        right: 20,
      },
      addButton: {
        backgroundColor: '#3d438b',
        padding: 10,
        borderRadius: 30,
      }
})

export default RegistroRecordatorioScreen;

