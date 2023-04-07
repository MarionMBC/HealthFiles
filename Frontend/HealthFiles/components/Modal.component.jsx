/**
 * @author Jennebier Esther Alvarado López
 * @description Componente con botón que abre una ventana modal
 */
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import styles from '../styles/styles';

const MyModal = ({tittleButton, tittleModal, content})=> {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{tittleModal}</Text>
            <Text style={styles.modalText}>{content}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hecho</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttonModal, styles.buttonOpenModal]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>{tittleButton}</Text>
      </Pressable>
    </View>
  );
};


export default MyModal;
