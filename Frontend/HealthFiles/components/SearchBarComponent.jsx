import React, {useState} from "react";
import {SearchBar} from "@rneui/base";
import {backgroundColor} from "react-native-calendars/src/style";
import {StyleSheet} from "react-native";

const SearchBarComp = () => {
    const [state, updateSearch ] = useState('');

    const handleChange = (state) => {
        updateSearch(state);
    }

        return (
            <SearchBar
                containerStyle={{
                    backgroundColor: '#0464B4',
                    borderColor: 'red'

                }}
                inputContainerStyle={{
                    backgroundColor: '#7BC4ED',
                }}
                placeholderTextColor={'black'}
                searchIcon={{color:'black'}}
                inputStyle={{color: 'black'}}
                style={{color: 'black'}}
                placeholder="Buscar..."
                onChangeText={handleChange}
                clearIcon={'false'}
                value={state}


            />
        );

}

const styles = StyleSheet.create({

})


export default SearchBarComp;


