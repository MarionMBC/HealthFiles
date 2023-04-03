/**
 * Author: Jennebier Esther Alvarado López
 * Date: 29/03/2023
 * Description: Pantalla para el registro de una cita para el usuario doctor
 */
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Calendar } from 'react-native-calendars';
import PickerComp from '../components/PickerComp.jsx';
import { Button } from '@rneui/themed';
import styles from '../styles/styles.js';


export default function RegistroCitaScreen({navigation}) {
  
  //Declaración de variables de estado
  const [motivo, setMotivo] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedHora, setSelectedHora] = useState('');//Para mantener este como valor seleccionado
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeRemainder, setSelectedTimeRemainder] = useState('');


  //Handles
  const handleHospitalSelect = (hospital) => {
    setSelectedHospital(hospital);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };
  var fechaActual= new Date();
  fechaActual = fechaActual.dateString;


  const handleHoraSelect = (hora) => {
    setSelectedHora(hora);
  };
  
  const handleMotivoChange = (text) => {
    setMotivo(text);
  };

  const handleRemainder = (hora) =>{
    setSelectedTimeRemainder(hora);
  };

  const handleSubmit = () => {
    console.log(`Submitted: Hospital: ${selectedHospital}, Fecha: ${selectedDate}, Hora: ${selectedHora}, Motivo: ${motivo}, Recordatorio: ${selectedTimeRemainder}`);
  };


  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const handleConfirm = (hora) => {
    hideDatePicker();
    handleRemainder(hora);
  };
  

  return (
    <ScrollView>
    <View><Text style={styles.title}>Agendar una cita</Text></View>
    <View style={styles.container}>
      
      
      <Text style={styles.label}>Hospital</Text>
      <PickerComp style={styles.selector} selectedValue={selectedHospital} setSelectedValue={handleHospitalSelect} />
      
      <Text style={styles.label}>Fecha de la cita</Text>
      <Calendar
        onDayPress={handleDateSelect}
        minDate={fechaActual}
        markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
      />
    
      <Text style={styles.label}>Hora de la consulta</Text>
      <PickerComp selectedValue={selectedHora} setSelectedValue={handleHoraSelect} />

    <Text style={styles.label}>Motivo</Text>
      <TextInput
        multiline={true}
        maxLength={30}
        style={styles.input}
        placeholder="Motivo"
        onChangeText={handleMotivoChange}
        value={motivo}
      />
      
      <Text style={styles.label}>Hora para el recordatorio de la cita</Text>
      <DateTimePickerModal
      isVisible={datePickerVisible}
      mode="time"
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
      />

      <View style={styles.buttonsContainer}>
      <Button 
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}
      title="Establecer recordatorio" 
      type='outline'
      style={styles.buttonForm}
      onPress={showDatePicker} />

      
       </View>
       <View style={styles.buttonsContainer2}>
      <Button
        title="Agendar"
        onPress={handleSubmit}
       
      />
      
      <Button 
        color="error"
        title="Cancelar"
        onPress={() => navigation.navigate('HealthFiles')}
      />
      </View>

    </View>
    </ScrollView>
  );
}