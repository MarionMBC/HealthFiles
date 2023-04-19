/**
 * Author: Jennebier Esther Alvarado López
 * Date: 29/03/2023
 * Description: Pantalla para el registro de una cita para el usuario doctor
 */
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Calendar } from 'react-native-calendars';
import PickerComp from '../components/PickerHospital.component.jsx';
import PickerHorario from '../components/PickerHorario.component.jsx';
import { Button } from '@rneui/themed';
import styles from '../styles/styles.js';
import CodigoAleatorio from '../helpers/CodigoAleatorio.js';
import { GuardarCita } from '../helpers/RegistroCitas.helper.jsx';
import TittleComponent from '../components/Tittle.component.jsx';


export default function RegistroCitaScreen({navigation}) {
  

  //Declaración de variables de estado
  const [motivo, setMotivo] = useState(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState('HN-HOSP-002');
  const [selectedHora, setSelectedHora] = useState('');//Para mantener este como valor seleccionado
  const [selectedDate, setSelectedDate] = useState(fechaActual);
  const [selectedTimeRemainder, setSelectedTimeRemainder] = useState('');

    //Handles
  const handleHospitalSelect = (hospital) => {
    setSelectedHospital(hospital);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };
  var fechaActual = new Date();
  var fechaMax = new Date();
  fechaMax.setDate(fechaActual.getDate() + 90);


  const handleHoraSelect = (hora) => {
    setSelectedHora(hora);
  };
  
  const handleMotivoChange = (text) => {
    setMotivo(text);
  };

  const handleRemainder = (hora) =>{
    setSelectedTimeRemainder(hora);
  };
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const handleConfirm = (hora) => {
    hideDatePicker();
    const selectedHour = hora.toLocaleTimeString('es-MX', {hour: '2-digit', minute:'2-digit'});
    handleRemainder(selectedHour);
  };
  const handleSubmit = () => {
    console.log(`Submitted: Hospital: ${selectedHospital}, Fecha: ${selectedDate}, Hora: ${selectedHora}, Motivo: ${motivo}, Recordatorio: ${selectedTimeRemainder}`);
    console.log(CodigoAleatorio())
    const data ={
        codigo_cita: CodigoAleatorio(),
        dni_paciente: "34567890123",
        dni_medico: "56789012345",
        codigo_hospital:selectedHospital,
        fecha: selectedDate,
        hora: selectedHora,
        razon: motivo,
        estado: "Reservada",
        diagnostico:" ",
        tratamiento:" ",
        valoracion:0
    };
    GuardarCita(data);
    
  };



  return (
    <ScrollView>
      
    <TittleComponent title={"Agendar una cita"}></TittleComponent>
    <View style={styles.container}>
      
      <Text style={styles.label}>Hospital</Text>
      <PickerComp
      selectedValue={selectedHospital}
      onValueChange={handleHospitalSelect}
      dni={"56789012345"}
      style={{ height: 50, width: 150 }}
      
    > 
    </PickerComp>
      
      <Text style={styles.label}>Fecha de la cita</Text>
      <Calendar
        style={styles.calendario}
        onDayPress={handleDateSelect}
        minDate={fechaActual.toISOString().slice(0, 10)}
        maxDate={fechaMax.toISOString().slice(0, 10)}
        markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
      />
    
      <Text style={styles.label}>Hora de la consulta</Text>
      <PickerHorario 
      selectedValue={selectedHora}
      setSelectedValue={handleHoraSelect}
      dni={"56789012345"}
      codigo_h={selectedHospital}
      fecha={selectedDate}></PickerHorario>
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
        onPress={() => navigation.navigate('Cita')}
      />
      
      
      
      </View>

    </View>
    </ScrollView>
  );
}