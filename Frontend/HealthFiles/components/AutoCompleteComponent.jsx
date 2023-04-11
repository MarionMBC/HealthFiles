import React, {useEffect, useState} from 'react';
import {AutocompleteDropdown} from "react-native-autocomplete-dropdown";
import {fetchNombreMedicamentos} from "../helpers/RegistroMedicamentos.helper";

const AutoCompleteComponent = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [nombresMedicamentos, setNombresMedicamentos] = useState([]);

    useEffect(() => {
        fetchNombreMedicamentos().then(lista =>{
            setNombresMedicamentos(lista)
        });
    }, [
        nombresMedicamentos
    ]);

    console.log(nombresMedicamentos)





    return(
    <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        initialValue={{ id: '2' }} // or just '2'
        onSelectItem={setSelectedItem}
        dataSet={{nombresMedicamentos}}
    />
    );
};

export default AutoCompleteComponent;