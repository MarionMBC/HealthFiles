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
                    backgroundColor: 'rgba(0,0,0,0.24)',
                    marginHorizontal: 10,
                    marginTop: 10,
                    borderRadius: 10,
                    padding: 3,
                }}
                 inputContainerStyle={{
                     backgroundColor: '#fff',
                 }}
                placeholderTextColor={'black'}
                searchIcon={{color:'black'}}
                inputStyle={{color: 'black'}}
                style={{color: 'black'}}
                placeholder="Buscar..."
                onChangeText={handleChange}
                clearIcon={false}
                value={state}
                lightTheme={true}


            />
        );

}

const styles = StyleSheet.create({

})


export default SearchBarComp;


