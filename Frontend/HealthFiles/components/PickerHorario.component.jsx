import React from "react";
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from "react";
import { obtenerHospitales } from "../helpers/RegistroCitas.helper";


export default function PickerHorario({ selectedValue, setSelectedValue}) {
  const [hospitales, setHospitales] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await obtenerHospitales();
      setHospitales(datos);
    };
    obtenerDatos();
  }, []);

  const opcionesPicker = hospitales.map((hospital) => ({
    label: hospital.nombre,
    value: hospital.id,
  }));

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
