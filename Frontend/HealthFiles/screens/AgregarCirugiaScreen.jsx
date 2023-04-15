/**
 * Author: Bryan Fernandez
 * Date: 11/04/2023
 * Description: Pantalla para el registro de una cita 
 */

import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, TextInput, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { CheckBox, Button } from '@rneui/themed';
import {Input} from "@rneui/base";
import {Checkbox} from "react-native-paper";

export default function AgregarCirugiaScreen(){
    //Declaración de variables de estado
    const [selectedDate, setSelectedDate] = useState(null);

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);

    //Handles
    const handleDateSelect = (date) => {
        setSelectedDate(date.dateString);
      };
      var fechaActual= new Date();
      fechaActual = fechaActual.dateString;


    
    return(
        <ScrollView>
         <View><Text style={styles.title}>Registrar Orden de Cirugia</Text></View>
        <View style={styles.container}>
        <Text style={styles.label}>Fecha de Cirugia</Text>
          <Calendar
            onDayPress={handleDateSelect}
            minDate={fechaActual}
            markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
          />
        <View style={styles.containerCheckBox}> 
        <Input
                label={'Motivo: '}
                labelStyle={{fontSize:18, fontWeight: '400', color:'#484848'}}
                ></Input>
        </View>

       <Text style={styles.label}>Tipo de cirugía</Text>
            <View style={{margin: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Checkbox.Item label={'Ambulatorio'} status="unchecked" color={'#429adc'} />
                <Checkbox.Item label={'No Ambulatorio'} status="unchecked" color={'#2b7bb7'}/>
            </View>
        </View>
      

        </ScrollView>
    )
   
}
