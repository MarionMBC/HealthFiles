/**
 * Author: Jennebier Esther Alvarado López
 * Date: 29/03/2023
 * Description: Componente Picker que se renderiza con los valores enviados
 */
import React from "react";
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from "react";
import { obtenerHospitales } from "../helpers/RegistroCitas.helper";


export default function PickerComp({ selectedValue, onValueChange, dni}) {
  
  const [hospitales, setHospitales] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await obtenerHospitales(dni);
      setHospitales(datos);
    };
    obtenerDatos();
  }, [dni]);

  const opcionesPicker = hospitales.map((hospital) => ({
    label: hospital.nombre_hospital,
    value: hospital.codigo_hospital,
  }));

  return (
    <Picker
      selectedValue={selectedValue}
      style={{ height: 50, width: 300 }}
      onValueChange={onValueChange}
    >
      {opcionesPicker.map((opcion) => (
        <Picker.Item key={opcion.value} label={opcion.label} value={opcion.value} />
      ))}
    </Picker>
  );
}



