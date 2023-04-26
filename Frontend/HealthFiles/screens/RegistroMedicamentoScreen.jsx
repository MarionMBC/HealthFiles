import { ScrollView, Text, TouchableHighlight, View } from "react-native";
import MedicamentoCardComponent from "../components/MedicamentoCard.component";
import React, { useEffect, useLayoutEffect, useState } from "react";
import PacienteInfoComponent from "../components/PacienteInfo.component";
import TittleComponent from "../components/Tittle.component";
import AgregarComponente from "../components/AgregarComponent.component";

const RegistroMedicamentoScreen = ({ navigation, resultado }) => {
  console.log("Desde reg ", resultado);
  const [medicamentos, setMedicamentos] = useState([]);
  const {primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, dni_medico} = resultado
  useEffect(() => { 
    fetch(
      `https://healthfiles.azurewebsites.net/medicamento_paciente/get/78901234567`
    )
      .then((response) => response.json())
      .then((json) => setMedicamentos(json))
      .catch((error) => console.error("e", error));
  }, [medicamentos]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#429adc",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: 400,
        fontSize: 20,
      },
    });
  }, [navigation]);

  return (
    <ScrollView>
      <PacienteInfoComponent
        nombrePaciente={primer_nombre+ " "+ primer_apellido}
        dniPaciente={dni_medico}
      />
      <View style={{ marginBottom: 15 }}>
        {medicamentos.length > 0 ? (
          medicamentos.map((med) => (
            <MedicamentoCardComponent
              key={med.codigo_medicamento}
              navigation={navigation}
              medicamento={med}
              dni_medico={"34567890123"}
              dni_paciente={"78901234567"}
            />
          ))
        ) : (
          <Text
            style={{
              backgroundColor: "#e09090",
              margin: 10,
              fontSize: 18,
              fontWeight: "400",
              padding: 5,
            }}
          >
            No hay medicamentos registrados...
          </Text>
        )}
      </View>

      <AgregarComponente
        nombre={"Medicamento"}
        navigation={navigation}
        params={{ dni_medico: "34567890123", dni_paciente: "78901234567" }}

      />
    </ScrollView>
  );
};

export default RegistroMedicamentoScreen;
