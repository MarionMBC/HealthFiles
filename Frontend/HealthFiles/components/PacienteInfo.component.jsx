import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const PacienteInfoComponent = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={{fontWeight: 'bold', fontSize: 20 }}>Marion Melchisedec Bustamante Castro</Text>
            <Text style={{fontWeight: '400'}}>DNI: 0806-2001-00506</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: { marginTop: 7,  paddingHorizontal:10, paddingVertical:10}
})

export default PacienteInfoComponent;