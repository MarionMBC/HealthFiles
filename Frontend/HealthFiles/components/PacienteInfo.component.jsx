import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const PacienteInfoComponent = ({nombrePaciente, dniPaciente}) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={{fontWeight: 'bold', fontSize: 20 }}>{nombrePaciente}</Text>
            <Text style={{fontWeight: '400'}}>{dniPaciente}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: { marginTop: 7,  paddingHorizontal:10, paddingVertical:10}
})

export default PacienteInfoComponent;