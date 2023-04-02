import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Table = () => {
    return (
        <View style={styles.tableRow}>
            <View style={styles.tableColumn}>
                <MaterialIcons name="filter-alt" size={24} color="black" />
            </View>
            <View style={styles.tableColumn}>
                <Text style={styles.tableHeaderText}>Fecha</Text>
            </View>
            <View style={styles.tableColumn}>
                <Text style={styles.tableHeaderText}>Nombre</Text>
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
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 1,
        borderBottomColor: '#7BC4ED',
        borderTopColor: '#7BC4ED',
        borderTopWidth: 1
    },
    tableColumn: {
        flex: 1,
        alignItems: 'center',
    },
    tableHeaderText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Table;
