import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  TouchableHighlight,
  RefreshControl,
} from "react-native";
import { Calendar } from "react-native-calendars";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Checkbox, RadioButton } from "react-native-paper";
import { Input } from "@rneui/base";
import { SelectList } from "react-native-dropdown-select-list";
import { Icon } from "react-native-elements";
import CustomButtom from "../components/CustomButtom.component";

const AgregarMedicamentoScreen = ({ navigation, route }) => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedTimeReminder, setSelectedTimeReminder] = useState("12:00");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString("es-HN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  );
  const handleConfirm = (hora) => {
    hideDatePicker();
    const selectedHour = hora.toLocaleTimeString("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setSelectedTimeReminder(selectedHour);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const [selected, setSelected] = useState("");
  const [selectedKey, setSelectedKey] = useState("");
  const [medicamentos, setMedicamentos] = useState();
  const [refresh, setRefresh] = useState(false);
  const [frecuencia, setFrecuencia] = useState("");
  const [importancia, setImportancia] = useState("Alta");
  /* 
  useEffect(() => {
    console.log(selectedKey);
  }, [selectedKey]); */

  const handleSend = () => {
    const nowDate = new Date()
      .toLocaleDateString("es-HN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");
    //reverse date format to match database format
    const nowDateArray = nowDate.split("-");
    const nowDateReversed =
      nowDateArray[2] + "-" + nowDateArray[1] + "-" + nowDateArray[0];
    const data = {
      dni_medico: route.params.dni_medico,
      dni_paciente: route.params.dni_paciente,
      codigo_medicamento: selectedKey,
      fecha_inicio: nowDateReversed,
      fecha_fin: selectedDate,
      frecuencia: frecuencia,
      importancia: importancia,
    };
    fetch(
      "https://healthfiles-production.up.railway.app/medicamento_paciente/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        navigation.navigate("Registro de Medicamentos");
      })
      .catch((err) => console.log(err));
  };

  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    fetch(
      "https://healthfiles-production.up.railway.app/medicamento/get/nombres"
    )
      .then((res) => res.json())
      .then((json) => {
        let newArray = json.map((item) => {
          return { key: item.codigo_medicamento, value: item.nombre_comercial };
        });
        setMedicamentos(newArray);
      })
      .catch((err) => console.log(err));
    setRefresh(false);
  }, []);

  useEffect(() => {
    fetch(
      "https://healthfiles-production.up.railway.app/medicamento/get/nombres"
    )
      .then((res) => res.json())
      .then((json) => {
        let newArray = json.map((item) => {
          return { key: item.codigo_medicamento, value: item.nombre_comercial };
        });
        setMedicamentos(newArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
    >
      <View>
        <View style={{ marginTop: 10 }}>
          <SelectList
            setSelected={setSelected}
            onSelect={() => {
              setSelectedKey(selected);
            }}
            data={medicamentos}
            boxStyles={{
              borderRadius: 10,
              marginHorizontal: 10,
              borderColor: "#484848",
              borderWidth: 0.4,
              marginTop: 10,
            }}
            notFoundText="No se encontraron resultados"
            placeholder="Buscar medicamento"
            placeholderStyle={{ color: "#484848" }}
            searchPlaceholder="Buscar medicamento"
            dropdownStyles={{
              marginHorizontal: 10,
              borderRadius: 10,
              borderColor: "#484848",
              borderWidth: 0.4,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              marginHorizontal: 10,
              fontWeight: "500",
              color: "#5a5a5a",
            }}
          >
            Fecha Final
          </Text>
        </View>
        <View style={{ margin: 10, position: "relative" }}>
          <Calendar
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
              console.log(day.dateString);
            }}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: "#429adc",
              },
            }}
            style={{
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              position: "relative",
            }}
          ></Calendar>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            margin: 10,
            flexDirection: "row",
          }}
        >
          {/*<Icon name={'clock'} color={'black'} size={30} ></Icon>
                    <View style={{marginHorizontal: 10, padding:5, backgroundColor: '#cfcfcf', width: 90,
                        borderRadius: 10}}>
                        <Text onPress={showDatePicker} style={{margin: 0, padding: 0, textAlign: 'center'}}>{selectedTimeReminder}</Text>
                    </View >*/}
          {/*<Icon name={'bell'} color={'black'} size={30}></Icon>*/}
          {/*<View style={{marginHorizontal: 10, padding:5, backgroundColor: '#cfcfcf',*/}
          {/*    borderRadius: 10}}>*/}
          {/*    <Text style={{margin: 0, padding: 0, textAlign: 'center'}} onPress={()=>{*/}
          {/*        console.log('Confirmar')}}>Establecer Recordatorio</Text>*/}
          {/*</View>*/}
        </View>
        <View style={{ marginVertical: 10 }}>
          <Input
            label={"Frecuencia: "}
            labelStyle={{ fontSize: 18, fontWeight: "400", color: "#484848" }}
            onChangeText={(text) => {
              setFrecuencia(text);
            }}
            value={frecuencia}
          ></Input>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "400", color: "#484848" }}>
            Nivel de Importancia:
          </Text>
        </View>

        <View
          style={{
            margin: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <RadioButton.Group
            onValueChange={(newValue) => setImportancia(newValue)}
            value={importancia}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text>Baja</Text>
              <RadioButton value="Baja" color={"#429adc"} />
              <Text>Media</Text>
              <RadioButton value="Media" color={"#429adc"} />
              <Text>Alta</Text>
              <RadioButton value="Alta" color={"#429adc"} />
            </View>
          </RadioButton.Group>
        </View>

        <CustomButtom
          title={"Agregar medicamento"}
          onClick={handleSend}
        ></CustomButtom>
      </View>
    </ScrollView>
  );
};

export default AgregarMedicamentoScreen;
