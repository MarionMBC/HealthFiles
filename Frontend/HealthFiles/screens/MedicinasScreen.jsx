import React from 'react';

import { Button, View, Text } from 'react-native';

export default function MedicinasScreen({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{marginBottom: 10, fontSize: 25, fontWeight: '700'}}>Medicinas</Text>
          <View>
        </View>
        <View style={{marginTop: 10}}>
            <Button
                title={"Registro de Medicamentos"}
                onPress={()=>{ navigation.navigate('Registro de Medicamentos') }}
            >
            </Button>
        </View>
    </View>
  );
}

