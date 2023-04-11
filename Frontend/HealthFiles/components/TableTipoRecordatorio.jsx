import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { reservationsBackgroundColor } from 'react-native-calendars/src/style';

const TableTipoRecordatorio = () => {
    return (
        <View style={styles.tableRow}>
            <View style={styles.tableColumn}>
                <Text  style={styles.tableHeaderText}>Todo</Text>
            </View>
            <View style={styles.tableColumn}>
                <Text   Text  style={styles.tableHeaderText}>Medicamentos</Text>
            </View>
            <View style={styles.tableColumn}>
            <Text  style={styles.tableHeaderText}>Citas</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tableRow: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '',
        borderBottomWidth: 0.2,
        borderBottomColor: '#000',
        borderTopColor: '#000',
        borderTopWidth: 0.2
    },
    tableColumn: {
        flex: 0,
        alignItems: 'center',
    },
    tableHeaderText: {
        textDecorationLine: 'underline line',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default TableTipoRecordatorio;

