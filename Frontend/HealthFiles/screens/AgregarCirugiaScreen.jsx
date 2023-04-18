/**
 * Author: Bryan Fernandez
 * Date: 11/04/2023
 * Description: Pantalla para el registro de una cita
 */

import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import styles from "../styles/styles";
import { Input } from "@rneui/base";

export default function AgregarCirugiaScreen() {
  //Declaración de variables de estado
  const [selectedDate, setSelectedDate] = useState(null);
  const [motivo, setMotivo] = useState(null);

  //Handles
  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };
  var fechaActual = new Date();
  fechaActual = fechaActual.dateString;

  const handleMotivoChange = (text) => {
    setMotivo(text);
  };

  const handleTratamientoChange = (text) => {
    setTratamiento(text);
  };
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Registrar Orden de Cirugia</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Fecha de Cirugia</Text>
        <Calendar
          onDayPress={handleDateSelect}
          minDate={fechaActual}
          markedDates={
            selectedDate ? { [selectedDate]: { selected: true } } : {}
          }
        />
        <View style={styles.containerCheckBox}>
          <Text style={styles.label}>Motivo</Text>
          <TextInput
            multiline={true}
            maxLength={30}
            style={styles.input}
            placeholder="Motivo"
            onChangeText={handleMotivoChange}
            value={motivo}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Input
            label={"Tratamiento: "}
            labelStyle={{ fontSize: 18, fontWeight: "400", color: "#484848" }}
          ></Input>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Input
            label={"Observaciones: "}
            labelStyle={{ fontSize: 18, fontWeight: "400", color: "#484848" }}
          ></Input>
        </View>
      </View>
      <TouchableHighlight
        style={{
          backgroundColor: "#429adc",
          margin: 10,
          padding: 10,
          borderRadius: 10,
          alignItems: "center",
        }}
        onPress={() => {
          console.log("Confirmar");
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>
          Agregar Cirugía
        </Text>
      </TouchableHighlight>
    </ScrollView>
  );
}
