import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTabs from './navigation/NavigationTabs.jsx';
import NavigationStack from './navigation/NavigationStackCitas.jsx';
import SignInScreen from './screens/SignInScreen.jsx';


export default function App() {
  return (
    <SignInScreen />
 
    
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
