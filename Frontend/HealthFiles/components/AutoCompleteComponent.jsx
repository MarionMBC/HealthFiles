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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return(
    <AutocompleteDropdown
        style={{marginBottom: isDropdownOpen ? 200 : 0}}
        containerStyle={
                    { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', margin:10, borderColor: '#cfcfcf', borderWidth: 0.2}

        }
        onOpenSuggestionsList={() => setIsDropdownOpen(true)}
        onCloseSuggestionsList={() => setIsDropdownOpen(false)}
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        initialValue={{ id: '2' }} // or just '2'
        onSelectItem={setSelectedItem}
        dataSet={
            nombresMedicamentos.map((item, index) => ({
                id: item.nombre_comercial,
                title: item.nombre_comercial
            }))
        }
    />
    );
};

export default AutoCompleteComponent;