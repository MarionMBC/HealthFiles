import React from 'react';
import { StyleSheet, Text,View } from 'react-native';

const PacienteListItem = ({paciente}) => {
    return(
        <View style= {styles.item}>
        <Text style={styles.pacienteName}>{paciente.name}</Text>
        <Text style={styles.pacienteDni}>{paciente.id}</Text>
        <Text style={styles.pacienteEnfermedades}>{paciente.enfermedades.join(", ")}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    item: {
        borderRadius: 10  ,
        backgroundColor: '#0464ab',
        padding: 3,
        marginVertical: 5,
        marginHorizontal: 13,
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 1,
      },
    pacienteName: {
        color: '#c5e0f0',
        marginLeft: 5,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    pacienteDni: {
        color: '#c5e0f0',
        marginLeft: 5,
        fontSize: 14,
        marginBottom: 5,
      },
      pacienteEnfermedades: {
        marginLeft: 5,
        fontSize: 14,
        color: '#c5e0f0',
      },
});

export default PacienteListItem;
