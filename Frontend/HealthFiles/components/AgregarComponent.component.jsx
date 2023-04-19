import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const AgregarComponente = ({ nombre, navigation, params }) => {
  const addIcon = <Icon name="plus-circle" size={50} color="#2b7bb7" />;
  return (
    <TouchableHighlight
      style={styles.style}
      underlayColor="transparent"
      //    navigation.navigate('Detalles de Medicamento',  medicamento )
      onPress={() =>
        navigation.navigate(`Agregar ${nombre}`, (params = { params }))
      }
    >
      {addIcon}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  style: {
    position: "absolute",
    bottom: 0,
    right: 15,
  },
});

export default AgregarComponente;
