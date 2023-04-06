import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTabs from './navigation/NavigationTabs.jsx';
import NavigationStack from './navigation/NavigationStack.jsx';


export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack></NavigationStack>
    </NavigationContainer>
 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
