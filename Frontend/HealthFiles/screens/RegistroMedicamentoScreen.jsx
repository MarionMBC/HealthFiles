import {ScrollView, Text, View} from "react-native";
import styles from "../styles/styles";
import SearchBarComp from "../components/SearchBar";

const RegistroMedicamentoScreen = ({navigation})  => {
    return (
        <ScrollView>
            <SearchBarComp>
            </SearchBarComp>
            <View style={styles.container}>
            </View>
        </ScrollView>
    )
}

export default RegistroMedicamentoScreen;