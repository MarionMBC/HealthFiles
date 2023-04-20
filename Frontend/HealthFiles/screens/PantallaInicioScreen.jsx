import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import NavigationTabs from '../navigation/NavigationTabs'

const PantallaInicioScreen = () => {
  return (
    <View>
      <NavigationContainer>
        <NavigationTabs/>
      </NavigationContainer>
    </View>
  )
}

export default PantallaInicioScreen