import React from 'react';
import { Button, View, Text } from 'react-native';


export default function CitasScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{marginBottom: 10, fontSize: 25, fontWeight: '700'}}>Citas</Text>
        <View>
        <Button
          title="Registro de citas"
          onPress={() => navigation.navigate('RegistroCita')}
        />
      </View>
     
      </View>
);
}

