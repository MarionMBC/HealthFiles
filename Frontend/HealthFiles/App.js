import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './navigation/NavigationStack.jsx';



export default function App() {
  return (
    <NavigationContainer>
      
      
      <NavigationStack></NavigationStack>
      <StatusBar style="auto" />
    
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
