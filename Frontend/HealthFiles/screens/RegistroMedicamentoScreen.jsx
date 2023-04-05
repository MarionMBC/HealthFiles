import {ScrollView, Text, View} from "react-native";
import styles from "../styles/styles";
import SearchBarComp from "../components/SearchBarComponent";
import {Button, Divider} from "@rneui/base";
import TableComponent from "../components/TableComponent";
import MedicamentoCardComponent from "../components/MedicamentoCardComponent";

const RegistroMedicamentoScreen = ({navigation})  => {
    return (
        <ScrollView>
            <SearchBarComp>

            </SearchBarComp>



            <View style={{marginTop: 10}}>
                <View style={{backgroundColor: '#7BC4ED',  paddingHorizontal:10, paddingVertical:10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20 }}>Marion Melchisedec Bustamante Castro</Text>
                    <Text style={{fontWeight: '400'}}>DNI: 0806-2001-00506</Text>
                </View>
                
                <TableComponent></TableComponent>

                <View>
                    <MedicamentoCardComponent></MedicamentoCardComponent>
                </View>


            </View>

        </ScrollView>
    )
}

export default RegistroMedicamentoScreen;