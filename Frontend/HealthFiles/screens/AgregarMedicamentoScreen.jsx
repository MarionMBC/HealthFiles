import React, {useState} from 'react';
import {View,  Text} from "react-native";
import {Calendar} from "react-native-calendars";
import Icon from "react-native-vector-icons/FontAwesome5";
import PickerComp from "../components/Picker.component";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AgregarMedicamentoScreen = ({navigation}) => {
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [selectedTimeRemainder, setSelectedTimeRemainder] = useState('');

    
    const handleConfirm = (hora) => {
        hideDatePicker();
        const selectedHour = hora.toLocaleTimeString('es-MX', {hour: '2-digit', minute:'2-digit'});
        setSelectedTimeRemainder(selectedHour);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    return (
        <View>
            <View>
                <Text style={{fontSize: 20, marginTop:10, marginHorizontal:10, fontWeight: '500', color:'#5a5a5a'}}>Fecha</Text>
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
                    <Text style={{margin: 0, padding: 0, textAlign: 'center'}}>18:00</Text>
                </View >
                <Icon name={'bell'} color={'black'} size={30}></Icon>
                <View style={{marginHorizontal: 10, padding:5, backgroundColor: '#cfcfcf',
                    borderRadius: 10}}>
                    <Text onPress={()=>{}}>Establecer Recordatorio</Text>
                    <DateTimePickerModal
                        isVisible={datePickerVisible}
                        mode="time"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>

            </View>
            <View>
                <Text style={{fontSize: 20, marginTop:10, marginHorizontal:10, fontWeight: '500', color:'#5a5a5a'}}>Especificaciones</Text>
            </View>




        </View>
    );
};

export default AgregarMedicamentoScreen;