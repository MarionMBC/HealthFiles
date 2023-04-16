import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const ImagePicker = require('react-native-image-picker');

export default class ImageUpload extends React.Component {
     
    handleEligeFotoPerfil = () => {  
         ImagePicker.launchImageLibrary(
            {noData: true},
            (res) => console.log(res)
         );
    };
    render() { 
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                <Button 
                    title="Elige tu Foto de Perfil"
                    onPress={this.handleEligeFotoPerfil}
                />
            </View> 
         )
    }
};
