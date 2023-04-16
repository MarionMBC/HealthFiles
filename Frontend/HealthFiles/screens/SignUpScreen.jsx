/**
 * Author: Rony Josue Gomez
 * Date: 06/04/2023
 * Description: Pantalla para registro de un paciente
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { useState } from 'react';
import {Text, View, TextInput, Pressable, ScrollView, Platform, TouchableOpacity } from 'react-native'
import ButtonsSignIn from '../../../Frontend/HealthFiles/components/ButtonsSignIn.component'
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'
import CustomInput from '../../../Frontend/HealthFiles/components/CustomInput.component';
import { useForm } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list';
import styles from '../../HealthFiles/styles/styles';
import ImageUpload from '../components/ImagenUpload.component';

export default function SignUpScreen() {
    const navigation = useNavigation();

    //Expresiones Regulares Validaciones
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
    const PASSWORD_REGEX =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const PHONE_REGEX = /(\(?(\+54)\)?)?(11)(\d{8})/;
    const IMAGEN_REGEX = /([a-zA-Z0-9])+(.[j|p]+[n|p]+[g])/;

    //Handles
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('Contraseña');

    //DatePicker
    const [date, setDate]= useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    //Lista desplegable para Genero
    const [genero, setGenero] = useState('');
    const datos = [
    {key: '1', value: '- Femenino'},
    {key: '2', value: '- Masculino'},
    {key: '3', value: '- Prefiero no mencionarlo'},
    ]
    //Lista despeglable para tipo de sangre
    const [selected, setSelected] = useState('');
    const data = [
    {key: '1', value: '-  A+'},
    {key: '2', value: '-  A-'},
    {key: '3', value: '-  B+'},
    {key: '4', value: '-  B-'},
    {key: '5', value: '-  AB+'},
    {key: '6', value: '-  AB-'},
    {key: '7', value: '-  O+'},
    {key: '8', value: '-  O-'},
  ]

    //Handles Fecha Nacimiento
    const handleFecha = (text) => {
      setFechaNacimiento(text);
    };
    const toggleDatepicker = () => {
      setShowPicker(!showPicker);
    }

    //Formato de Fecha en Android
    const onChange = ({type}, selectedDate) => {
      if (type == "set"){
        const currentDate = selectedDate;
        setDate(currentDate);
        if (Platform.OS === "android"){
          toggleDatepicker();
          setFechaNacimiento(formatDate(currentDate));
        }
      }else{
        toggleDatepicker();
      }
    };
    //Formato de Fecha en IOS
    const confirmIOSDate = () => {
      setFechaNacimiento(formatDate(date));
      toggleDatepicker();
    };

    //FORMATO DE FECHA DE NACIMIENTO EN BASE AL TIPO DE ATRIBUTO EN BASE DE DATOS
    const formatDate = (rawDate) => {
      let date = new Date(rawDate);

      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      month = month < 10 ? `0${month}`: month;
      day = day < 10 ? `0${day}`: day;

      return year + " / " + month + " / " + day;
    }
    

    //Buttons
    const onAceptarPressed = () => {
      navigation.navigate('Confirmar Registro')
    }
    const onCancelarPressed = () => {
      navigation.navigate('Inicio de Sesion')
    }
    const onIniciodeSesionPressed = () => {
      navigation.navigate('Inicio de Sesion')
    }

    return (
        <ScrollView>
        <View style = {styles.container}>
          
          <Text style ={styles.subtitulos1}>Registro de Paciente</Text>

          <Text //DNI
            style = {styles.subtitulos_2}
            > DNI </Text>
          <CustomInput 
              name="DNI"
              control={control}
              placeholder='08012005000'
              marginTop = {6}
              rules={{
              required: 'El campo DNI esta vacio',
              minLength: {
                value: 11,
                message: 'Minimo de caracteres es de 13',
              },  
              maxLength: {
                value: 11,
                message: 'Maximo de caracteres es de 13',
              },
            }}
          />
          <Text //PRIMER NOMBRE
            style = {styles.subtitulos_2}
            > Primer Nombre </Text>
          <CustomInput 
              name="Primer Nombre"
              control={control}
              placeholder='Mario'
              marginTop = {6}
              rules={{
              required: 'El campo Primer Nombre esta vacio',
              minLength: {
                value: 3,
                message: 'Minimo de caracteres es de 3',
              },  
              maxLength: {
                value: 25,
                message: 'Maximo de caracteres es de 25',
              },
            }}
          />

          <Text //SEGUNDO NOMBRE
            style = {styles.subtitulos_2}
            > Segundo Nombre </Text>
          <CustomInput 
              name="Segundo Nombre"
              control={control}
              placeholder='David'
              marginTop = {6}
              rules={{
                required: 'El campo Segundo Nombre esta vacio',
                minLength: {
                value: 3,
                message: 'Minimo de caracteres es de 3',
              },  
              maxLength: {
                value: 25,
                message: 'Maximo de caracteres es de 25',
              },
            }}
          />
    
          <Text //PRIMER APELLIDO
            style = {styles.subtitulos_2}
            > Primer Apellido </Text>
          <CustomInput 
              name="Primer Apellido"
              control={control}
              placeholder="Alvarez Hernandez"
              marginTop = {6}  
              rules={{
                required: 'El campo Primer Apellido esta vacio', 
                minLength: {
                  value: 4,
                  message: 'Minimo de caracteres es de 3',
                },  
                maxLength: {
                  value: 25,
                  message: 'Maximo de caracteres es de 25',
                },
              }}   
          />

          <Text //SEGUNDO APELLIDO
            style = {styles.subtitulos_2}
            > Segundo Apellido </Text>
          <CustomInput 
              name="Segundo Apellido"
              control={control}
              placeholder="Alvarez Hernandez"
              marginTop = {6}  
              rules={{
                required: 'El campo Segundo Apellido esta vacio',
                minLength: {
                  value: 4,
                  message: 'Minimo de caracteres es de 3',
                },  
                maxLength: {
                  value: 25,
                  message: 'Maximo de caracteres es de 25',
                },
              }}   
          />

          <Text //GENERO
            style = {styles.subtitulos_2}
            > Genero </Text>
          <SelectList 
              data = {datos}
              setSelected = {setGenero}
              name="Genero"
              control={control}
              placeholder='Seleccionar Genero'
              marginTop = {6}
              boxStyles={{
                backgroundColor: 'white', 
                borderColor:'gray', 
                width: 328,
                height: 55,
                marginTop: 15,
                paddingStart: 10,
                marginVertical: 6,
                marginHorizontal: 40
              }}
              dropdownStyle = {{backgroundColor: 'white'}}
              dropdownItemStyles={{marginVertical:3}}
              maxHeight={150}
            
          />
          
          <Text //FECHA NACIMIENTO
            style = {styles.subtitulos_2}
            > Fecha de nacimiento </Text>
          <TextInput
              value={fechaNacimiento}
              onChangeText={handleFecha}
              placeholder='DD / MM / AAAA'
              marginTop = {6}  
              editable = {false} 
              onPressIn={toggleDatepicker}  
              style={styles.textInputSU}
          />
          {showPicker && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={date}
              onChange={onChange}
              style = {styles.datePicker}
            />
          )}
          {showPicker && Platform.OS === "ios" && (
            <View
              style={{flexDirection:"row", 
              justifyContent:"center"}}
            >

            {/* BOTON DE CANCELAR FECHA DE NACIMIENTO*/}
            <TouchableOpacity style={[
              styles.button,
              styles.pickerButton,
              {backgroundColor: "#11182711"},
            ]}
              onPress={toggleDatepicker}
            >
              <Text style={[
                styles.buttonText, {color:"#075985"}
              ]}>Cancelar</Text>
            </TouchableOpacity>

            {/* BOTON DE CONFIRMAR FECHA DE NACIMIENTO*/}
            <TouchableOpacity style={[
              styles.button,
              styles.pickerButton,
              {backgroundColor: "#273a6f"},
            ]}
              onPress={confirmIOSDate}
            >
              <Text style={[
                styles.buttonText, 
              ]}>Confirmar</Text>
            </TouchableOpacity>
          </View>
          )}
          {!showPicker && (
          <Pressable
            onPress={toggleDatepicker}>
          </Pressable>
          )}
         
          <Text //TELEFONO
            style = {styles.subtitulos_2}
            > Telefono </Text>
          <CustomInput 
              name="Telefono"
              control={control}
              placeholder='+541185221699'
              marginTop = {6} 
              //keyboardType='
              rules= {{
                required: 'El campo Telefono esta vacio', 
                minLength: {
                  value: 13,
                  message: 'Ingrese un numero de telefono valido',
                },  
                pattern: {
                  value: PHONE_REGEX, 
                  message: 'Ingrese un formato de telefono valido: +541185221699'
                }
              }}
            
          />

          <Text //CORREO ELECTRONICO
            style = {styles.subtitulos_2}
            > Correo electronico </Text>
          <CustomInput 
              name="CorreoElectronico"
              control={control}
              placeholder='example123@example.com'
              marginTop = {6}  
              rules = {{
                required: 'El campo Correo electronico esta vacio',
                pattern: {value: EMAIL_REGEX, message: 'Ingresar una direccion de correo valida'}
              }}
              keyboardType='email-address'   
          />

          <Text //CONTRASENA
            style = {styles.subtitulos_2}
            > Contraseña </Text>
          <CustomInput 
              name="Contraseña"
              control={control}
              placeholder='Ingresar Contraseña'
              secureTextEntry={true}
              marginTop = {6}  
              rules={{
                required: 'La contraseña es requerida', 
                pattern: {
                  value: PASSWORD_REGEX, 
                  message: 'La contraseña debe contener minimo 8 caracteres, una letra mayuscula, una letra minuscula y un caracter especial'} 
              }} 
          />

          <Text //CONFIRMACION DE CONTRASENA
            style = {styles.subtitulos_2}
            > Confirmacion de Contraseña </Text>
          <CustomInput 
              name="ConfirmacionContraseña"
              control={control}
              placeholder='Ingresar Contraseña Nuevamente'
              secureTextEntry={true}
              marginTop = {6}   
              rules = {{
                validate: value => 
                  value === pwd || "Las contraseñas no coinciden" 
              }} 
          />

          <Text //PIN
            style = {styles.subtitulos_2}
            > PIN </Text>
          <CustomInput 
              name="PIN"
              control={control}
              placeholder='Ingrese un pin de 4 digitos'
              marginTop = {6}  
              keyboardType='number-pad'   
              secureTextEntry={true}
              rules = {{
                required: 'El pin es requerido',
                minLength: {
                  value: 4,
                  message: 'El Pin debe contener 4 caracteres',
                },  
                maxLength: {
                  value: 4,
                  message: 'El Pin debe contener 4 caracteres',
                },
              }}  
          />

          <Text //IMAGEN DE PERFIL
            style = {styles.subtitulos_2}
          > Imagén de Perfil </Text>
          <CustomInput 
              name="Imagen de Perfil"
              control={control}
              placeholder='imagen.jpg'
              marginTop = {6}  
              rules = {{
                required: 'El campo Imagen de Perfil esta vacio',
                pattern: {value: IMAGEN_REGEX, message: 'Ingresar una imagen valida'}
              }}
              keyboardType='email-address'   
          />

          <Text //PESO
            style = {styles.subtitulos_2}
            > Peso </Text>
          <CustomInput 
              name="PESO"
              control={control}
              placeholder='LBS'
              marginTop = {6}  
              keyboardType='decimal-pad'   
              rules = {{
                required: 'El Campo peso esta vacio',
                min: {
                  value: 10,
                  message: 'Ingrese un valor de peso Valido'
                },  
                max: {
                  value: 350,
                  message: 'Ingrese un valor de peso Valido'
                },
              }} 
          />

          <Text //ALTURA
            style = {styles.subtitulos_2}
            > Altura </Text>
          <CustomInput 
              name="ALTURA"
              control={control}
              placeholder='mts'
              marginTop = {6}  
              keyboardType='decimal-pad'  
              rules = {{
                required: 'El campo Altura esta vacio',
                min: {
                  value: 0.5,
                  message: 'Ingrese un valor de Altura Valido'
                },  
                max: {
                  value: 3.5,
                  message: 'Ingrese un valor de Altura Valido'
                },
              }}   
          />

          <Text //TIPO DE SANGRE
            style = {styles.subtitulos_2}
            > Tipo de Sangre </Text>

          <SelectList 
          data={data} 
          setSelected={setSelected}
          name="TIPO DE SANGRE"
          control={control}
          placeholder='Tipo de Sangre'    
          boxStyles={{
            backgroundColor: 'white', 
            borderColor:'gray', 
            width: 328,
            height: 55,
            marginTop: 15,
            paddingStart: 10,
            paddingHorizontal: 20,
            marginHorizontal: 40
          }}
          dropdownStyle = {{backgroundColor: 'white'}}
          dropdownItemStyles={{marginHorizontal: 65, marginVertical:3}}
        />
          

          <Text //CONTACTO DE EMERGENCIA
            style = {styles.subtitulos_2}
            > Contacto Emergencia </Text>
          <CustomInput
              name="CONTACTO DE EMERGENCIA"
              control={control}
              placeholder='Nombre Contacto'
              marginTop = {6}  
              rules = {{
                required: 'El campo Contacto Emergencia esta vacio',
              }}  
          />

          <Text //CELULAR CONTACTO DE EMERGENCIA
            style = {styles.subtitulos_2}
            > Celular Contacto Emergencia </Text>
          <CustomInput
              name="CELULAR CONTACTO DE EMERGENCIA"
              control={control}
              placeholder='+541185221699'
              marginTop = {6}  
              rules = {{
                required: 'El campo Celular Contacto Emergencia esta vacio',
                minLength: {
                  value: 13,
                  message: 'Ingresar un numero de telefono valido',
                }, 
                pattern: {
                  value: PHONE_REGEX, 
                  message: 'Ingrese un formato de telefono valido: +541185221699'
                }
              }}  
          />
         
          <ButtonsSignIn 
            text = "Registrar" onPress={handleSubmit(onAceptarPressed)}
                type = 'Pri'
          />
          
          <ButtonsSignIn 
            text = "Cancelar" onPress={onCancelarPressed}
              type = 'Sec'
          />

          <ButtonsSignIn 
            text = 'Ya tienes una Cuenta? Inicia Sesion'
            onPress={onIniciodeSesionPressed}
            type='TERTIARY'
          />
            
          <StatusBar style="auto" />
        </View>
        </ScrollView>
      );
}