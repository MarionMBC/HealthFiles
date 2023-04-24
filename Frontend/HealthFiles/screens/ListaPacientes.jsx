import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import PacienteCardComponent from '../components/CardPacienteList.component';

export default function PantallaPacientes({navigation}) {
  console.log("Pacientes", navigation);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
     <PacienteCardComponent dni_medico={"56789012345"} navigation={navigation}></PacienteCardComponent>

      <View style={{ marginBottom: 15 }}>
     
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
  list: {
    flex: 1,
    padding: 10,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButton: {
    backgroundColor: '#3d438b',
    padding: 10,
    borderRadius: 30,
  },
});