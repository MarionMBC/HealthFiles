import React from 'react';
import {Card, Image} from "react-native-elements";
import {StyleSheet, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const MedicamentoCardComponent = () => {
    const myIcon = <Icon name="pills" size={30} color="black" />;
    return (

        <Card>
            <View style={[styles.cardContainer]}>
                <View>
                    {myIcon}
                </View>
                <View style={styles.CardDescriptionView}>
                    <Text style={styles.cardTittle}>Nombre de Medicamento</Text>
                    <Text style={styles.cardContentText}>25mg</Text>
                    <Text style={styles.cardContentText}>Fecha inicio:</Text>
                    <Text style={styles.cardContentText}>1 comprimido cada 12 horas</Text>
                </View>
            </View>
        </Card>

    );
}


const styles = StyleSheet.create({

    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
    },

    CardDescriptionView: {
        marginLeft: 20
    },

    cardTittle: {
        fontWeight: 'bold',
        fontSize: 14
    },
    cardContentText: {
        fontWeight: '400'
    }

})

export default MedicamentoCardComponent;