/**
 * Author: Jennebier Esther Alvarado López
 * Date: 29/03/2023
 * Description: Componente Picker que se renderiza con los valores enviados
 */
import React from "react";
import { Picker } from '@react-native-picker/picker';


export default function PickerComp({ selectedValue, setSelectedValue}){
    return (
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="Escuela" value="Escuela" />
        <Picker.Item label="Viera" value="Viera" />
      </Picker>
      );
}

