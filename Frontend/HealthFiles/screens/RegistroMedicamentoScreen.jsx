import {ScrollView, Text, View} from "react-native";
import styles from "../styles/styles";
import SearchBarComp from "../components/SearchBar";
import {Divider} from "@rneui/base";

const RegistroMedicamentoScreen = ({navigation})  => {
    return (
        <ScrollView>
            <SearchBarComp>
            </SearchBarComp>

            <View style={styles.container}>
                <Divider></Divider>
            </View>
        </ScrollView>
    )
}

export default RegistroMedicamentoScreen;