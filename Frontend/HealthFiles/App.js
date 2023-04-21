import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStackLogin from './navigation/NavigationSignIn.jsx';
import NavigationTabs from './navigation/NavigationTabs.jsx';


export default function App() {
  return (
    <NavigationContainer>
      <NavigationTabs></NavigationTabs>
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
