import React, {useState} from 'react';
import {Card, Image} from "react-native-elements";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';



const MedicamentoCardComponent = ({medicamento}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter =  () => {
        setIsHovered(true)
        console.log(isHovered)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }


    return (
        <Card onPress={()=>{handleMouseEnter()}} containerStyle={{borderColor:'#2b7bb7', borderRadius: 10}}>
            <View style={styles.cardContainer}>
                <View>
                    <Icon style={{marginLeft: 10}} name={'pills'} size={30} color={'#2b7bb7'} />
                </View>
                <View style={styles.CardDescriptionView}>
                    <Text style={styles.cardTittle}>l</Text>
                    <Text style={styles.cardContentText}>25mg</Text>
                    <Text style={styles.cardContentText}>Fecha inicio:</Text>
                    <Text style={styles.cardContentText}>1 comprimido cada 12 horas</Text>
                </View>
                <View style={styles.crudButton}>
                    <TouchableHighlight underlayColor="transparent" onPress={()=>{
                        console.log('Funciona')}}>
                        <Icon name={'trash'} size={30} color={'#2b7bb7'} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="transparent" onPress={()=>{console.log('A')}}>
                        <Icon name={'edit'} size={30} color={'#2b7bb7'} />
                    </TouchableHighlight>
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
        justifyContent: 'space-around',

    },

    CardDescriptionView: {
        marginLeft: 20,
        backgroundColor: 'white',

    },

    cardTittle: {
        fontWeight: 'bold',
        fontSize: 14,

    },
    cardContentText: {
        fontWeight: '400'
    },

    crudButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1
    }

})

export default MedicamentoCardComponent;