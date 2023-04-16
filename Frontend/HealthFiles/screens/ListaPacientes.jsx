import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import PacienteListItem from "../components/PacienteListItem";

const pacientes = [
  {
    name: "Mario Fernandez",
    id: 1231,
    enfermedades: ["diabetes", "hipertension"],
  },
  {
    name: "Fernando Alcaraz",
    id: 567,
    enfermedades: ["hipertension"],
  },
];

export default function PantallaPacientes({navigation}) {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="menufold" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar paciente"
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>

      <View style={styles.list}>
      <FlatList
        data={pacientes}
        renderItem={({ item }) => <PacienteListItem paciente={item} />}
        keyExtractor={(item) => item.id}
      />
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
