import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';
import styles from '../styles/styles.js';
export default function RegistroCitaScreen() {
  const [name, setName] = useState('');
  const [motivo, setMotivo] = useState('');
  const [selectedDate, setSelectedDate] = useState(' ');


  const handleMotivoChange = (text) => {
    setMotivo(text);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleOptionSelect = (itemValue) => {
    setSelectedOption(itemValue);
  };

  const handleSubmit = () => {
    console.log(`Submitted:  ${email}, ${selectedDate}`);
  };

  const [selectedValue, setSelectedValue] = useState("Escuela");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar una cita</Text>
      <Text>Hospital</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Escuela" value="Escuela" />
        <Picker.Item label="Viera" value="Viera" />
      </Picker>
      
      <TextInput
      multiline
      maxLength={30}
        style={styles.input}
        placeholder="Motivo"
        onChangeText={handleMotivoChange}
        value={motivo}
      />
       <Calendar
        onDayPress={handleDateSelect}
      />
      <Button
        title="Establecer recordatorio"
        
      />
      <Button
        title="Agendar"
        onPress={handleSubmit}
      />
    </View>
  );
}


