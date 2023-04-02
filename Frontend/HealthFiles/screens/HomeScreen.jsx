import React from 'react';

import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{marginBottom: 10, fontSize: 25, fontWeight: '700'}}>HealthFiles</Text>
          <View>
          <Button
            title="Registro de citas"
            onPress={() => navigation.navigate('RegistroCitas')}
          />
        </View>
        <View style={{marginTop: 10}}>
            <Button
                title={"Registro de Medicamentos"}
                onPress={()=>{ navigation.navigate('RegistroMedicamentos') }}
            >
            </Button>
        </View>
    </View>
  );
}

