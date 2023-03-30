/**
 * Author: Jennebier Esther Alvarado López
 * Date: 29/03/2023
 * Description: Pantalla para el registro de una cita para el usuario doctor
 */
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Calendar } from 'react-native-calendars';
import PickerComp from '../components/PickerComp.jsx';
import styles from '../styles/styles.js';
export default function RegistroCitaScreen({navigation}) {
  
  //Declaración de variables de estado
  const [motivo, setMotivo] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedHora, setSelectedHora] = useState('');//Para mantener este como valor seleccionado


  //Handles
  const handleMotivoChange = (text) => {
    setMotivo(text);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleHospitalSelect = (hospital) => {
    setSelectedHospital(hospital);
  };

  const handleHoraSelect = (hora) => {
    setSelectedHora(hora);
  };

  const handleSubmit = () => {
    console.log(`Submitted:  ${motivo}, ${selectedDate}`);
  };


  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const handleConfirm = () => {
    hideDatePicker();
  };
  

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Agendar una cita</Text>
      
      <Text style={styles.label}>Hospital</Text>
      <PickerComp style={styles.selector} selectedValue={selectedHospital} setSelectedValue={handleHospitalSelect} />
      
      <Text style={styles.label}>Fecha de la cita</Text>
      <Calendar
        onDayPress={handleDateSelect}
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
      <Button 
      title="Establecer recordatorio" 
      style={styles.buttonForm}
      onPress={showDatePicker} />

      <Button
        style={styles.buttonForm}
        title="Agendar"
        onPress={handleSubmit}
      />

      <Button
        style={styles.buttonForm}
        title="Cancelar"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
    </ScrollView>
  );
}