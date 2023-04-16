/**
 * Author: Jennebier Esther Alvarado López
 * Date: 29/03/2023
 * Description: Componente Picker que se renderiza con los valores enviados
 */
import React from "react";
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from "react";
import { obtenerHorarios } from "../helpers/Horarios.helper";

export default function PickerHorario({ selectedValue, setSelectedValue}) {
  const [horarios, setHorario] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await obtenerHorarios();
      setHorario(datos);
    };
    obtenerDatos();
  }, []);

  const opcionesPicker = horarios.map((horario) => ({
    label: horario.hora_inicio + ' - ' + horario.hora_final,
    value: horario.hora_inicio,
  }));
  console.log(horarios);
  return (
    <Picker
      selectedValue={selectedValue}
      style={{ height: 50, width: 150 }}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
      {opcionesPicker.map((opcion) => (
         <Picker.Item key={opcion.value} label={opcion.label} value={opcion.value} />
      ))}
    </Picker>
  );
}



