import React, {useState} from 'react';
import {AutocompleteDropdown} from "react-native-autocomplete-dropdown";

const AutoCompleteComponent = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return(
    <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        initialValue={{ id: '2' }} // or just '2'
        onSelectItem={setSelectedItem}
        dataSet={[
            { id: '1', title: 'Alpha' },
            { id: '2', title: 'Beta' },
            { id: '3', title: 'Gamma' },
        ]}
    />
    );
};

export default AutoCompleteComponent;