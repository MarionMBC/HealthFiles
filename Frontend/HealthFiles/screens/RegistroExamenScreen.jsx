/**
 * Author: Jennebier Esther Alvarado López
 * Date: 06/04/2023
 * Description: Pantalla para el registro de un examen para el usuario doctor 
 */

import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, TextInput, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { CheckBox, Button } from '@rneui/themed';



export default function RegistroExamenScreen(){
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
         <View><Text style={styles.title}>Registrar Orden de examen</Text></View>
        <View style={styles.container}>
        <Text style={styles.label}>Fecha de examen</Text>
          <Calendar
            onDayPress={handleDateSelect}
            minDate={fechaActual}
            markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
          />

        <Text style={styles.label}>Tipo de examen</Text>
        <View style={styles.containerCheckBox}> 
        <CheckBox
        center
        title="Laboratorio"
        checked={check1}
        onPress={() => setCheck1(!check1)}
        />
        <CheckBox
        center
        title="Físico"
        checked={check2}
        onPress={() => setCheck2(!check2)}
        />
         <CheckBox
        center
        title="Imágenes diagnósticas"
        checked={check3}
        onPress={() => setCheck3(!check3)}
        />
         <CheckBox
        center
        title="Funcionales"
        checked={check4}
        onPress={() => setCheck4(!check4)}
        />

        <CheckBox
        center
        title="Psicológica"
        checked={check5}
        onPress={() => setCheck5(!check5)}
        />
        </View>
        
        <Button title={"Cargar Imagen"}></Button>
        
        </View>

        </ScrollView>
    )
   
}