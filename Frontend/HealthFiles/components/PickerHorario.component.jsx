/**
 * Author: Jennebier Esther Alvarado López
 * Date: 29/03/2023
 * Description: Componente Picker que se renderiza con los valores enviados
 */
import React from "react";
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from "react";
import { obtenerHorarios } from "../helpers/Horarios.helper";

export default function PickerHorario({ selectedValue, setSelectedValue, dni, codigo_h, fecha}) {
  const [horarios, setHorario] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await obtenerHorarios(dni, codigo_h, fecha);
      setHorario(datos);
    };
    obtenerDatos();
  }, [dni, codigo_h, fecha]);

  const opcionesPicker = horarios.map((horario) => ({
    label: horario.hora_inicio + ' - ' + horario.hora_final,
    value: horario.hora_inicio,
  }));
  console.log(horarios);
  return (
    <Picker
      selectedValue={selectedValue}
      style={{ height: 50, width: 330, borderWidth:1, borderRadius:10, backgroundColor:'white'}}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
      {opcionesPicker.map((opcion) => (
         <Picker.Item key={opcion.value} label={opcion.label} value={opcion.value} />
      ))}
    </Picker>
  );
}



