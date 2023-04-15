import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from "react-native";
import {fetchData} from "../helpers/RegistroMedicamentos.helper";

const AutoCompleteSearchBarComponent = (props) => {

    const [nombresMedicamentos, setNombresMedicamentos] = useState([]);

    useEffect(() => {
        fetchData("medicamento/get/nombres", setNombresMedicamentos);
    }, [nombresMedicamentos]);
    return(
        <ScrollView>

        </ScrollView>

    );
}

export default AutoCompleteSearchBarComponent;