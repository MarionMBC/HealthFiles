import React, {useState} from "react";
import {SearchBar} from "@rneui/base";

const SearchBarComp = () => {
    const [state, updateSearch ] = useState('');

    const handleChange = (state) => {
        updateSearch(state);
    }

        return (
            <SearchBar
                placeholder="Buscar..."
                onChangeText={handleChange}
                clearIcon={'false'}
                value={state}
                lightTheme ={true}

            />
        );

}
export default SearchBarComp;