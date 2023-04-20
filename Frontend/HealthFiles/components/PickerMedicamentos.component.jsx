import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";

export default function PickerComp({ selectedValue, onValueChange, dni }) {
  const [frecuencia, setFrecuencia] = useState([]);

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
      style={{
        height: 50,
        width: 330,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
      }}
      onValueChange={onValueChange}
    >
      {opcionesPicker.map((opcion) => (
        <Picker.Item
          key={opcion.value}
          label={opcion.label}
          value={opcion.value}
        />
      ))}
    </Picker>
  );
}
