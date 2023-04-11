import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from "react-native";
import {Calendar} from "react-native-calendars";
import Icon from "react-native-vector-icons/FontAwesome5";
import PickerComp from "../components/Picker.component";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {Checkbox, Searchbar} from "react-native-paper";
import {Input} from "@rneui/base";
import AutoCompleteComponent from "../components/AutoCompleteComponent";
import {listaMedicamentos} from "../helpers/RegistroMedicamentos.helper";


const AgregarMedicamentoScreen = ({navigation}) => {
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [selectedTimeReminder, setSelectedTimeReminder] = useState('12:00');




    const handleConfirm = (hora) => {
        hideDatePicker();
        const selectedHour = hora.toLocaleTimeString('es-MX', {hour: '2-digit', minute:'2-digit'});
        setSelectedTimeReminder(selectedHour);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };
    const showDatePicker = () => {
        setDatePickerVisible(true);
    };
    return (
        <ScrollView>
            <View>
                <View style={{marginTop:10}}>
                    {/*<Searchbar
                placeholder={'Buscar medicamento'}
                style={{backgroundColor: '#fff', margin:10, borderColor: '#cfcfcf', borderWidth: 0.2}}

                ></Searchbar>*/}
                    <AutoCompleteComponent></AutoCompleteComponent>
                </View>
                <View>
                    <Text style={{fontSize: 18, marginHorizontal:10, fontWeight: '500', color:'#5a5a5a'}}>Fecha</Text>
                </View>
                <View style={{margin: 10}}>
                    <Calendar  style={{borderRadius: 10 , shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5}}></Calendar>

                </View>
                <View style={{display: 'flex', alignItems: 'center', margin: 10, flexDirection: 'row'}}>
                    <Icon name={'clock'} color={'black'} size={30} ></Icon>
                    <View style={{marginHorizontal: 10, padding:5, backgroundColor: '#cfcfcf', width: 90,
                        borderRadius: 10}}>
                        <Text onPress={showDatePicker} style={{margin: 0, padding: 0, textAlign: 'center'}}>{selectedTimeReminder}</Text>
                    </View >
                    <Icon name={'bell'} color={'black'} size={30}></Icon>
                    <View style={{marginHorizontal: 10, padding:5, backgroundColor: '#cfcfcf',
                        borderRadius: 10}}>
                        <Text style={{margin: 0, padding: 0, textAlign: 'center'}} onPress={()=>{
                            console.log('Confirmar')}}>Establecer Recordatorio</Text>
                    </View>
                </View>
                <View style={{marginVertical: 10}}>
                    <Input
                        label={'Frecuencia: '}
                        labelStyle={{fontSize:18, fontWeight: '400', color:'#484848'}}
                    ></Input>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Text style={{fontSize:18, fontWeight: '400', color:'#484848'}}>Nivel de Importancia:</Text>
                </View>

                <View style={{margin: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Checkbox.Item label={'Baja'} status="checked" color={'#429adc'} />
                    <Checkbox.Item label={'Media'} status="unchecked" color={'#2b7bb7'}/>
                    <Checkbox.Item label={'Alta'} status="unchecked" color={'#125182'} />
                </View>





                <DateTimePickerModal
                    isVisible={datePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />






            </View>
        </ScrollView>
    );
};

export default AgregarMedicamentoScreen;