import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import PacienteListItem from "../components/PacienteListItem";

export default function PantallaPacientes({navigation}) {
  const [searchText, setSearchText] = useState('');
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    async function fetchPacientes() {
      try {
        const response = await axios.get("https://healthfiles-production.up.railway.app/pacientes/getPorMedico/123"); 
        setPacientes(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPacientes();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredPacientes = pacientes.filter(
    (paciente) =>
      paciente.nombres.toLowerCase().includes(searchText.toLowerCase()) ||
      paciente.apellidos.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="menufold" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar paciente"
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>

      <View style={styles.list}>
        {filteredPacientes.length > 0 ? (
          <FlatList
            data={filteredPacientes}
            renderItem={({ item }) => <PacienteListItem paciente={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text>No se encontraron pacientes</Text>
        )}
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton}>
          <MaterialIcons name="add" size={24} color="white" />
        </TouchableOpacity>
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