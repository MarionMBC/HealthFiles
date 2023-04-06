import React from 'react';

import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{marginBottom: 10, fontSize: 25, fontWeight: '700'}}>HealthFiles</Text>
        
    </View>
  );
}

