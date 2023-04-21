/**
 * Author: Rony Josue Gomez
 * Date: 06/04/2023
 * Description: Pantalla para registro de un paciente
 */
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { useState } from 'react';
import {Text, View, TextInput, Pressable, ScrollView, Platform, TouchableOpacity } from 'react-native'
import ButtonsSignIn from '../components/ButtonsSignIn.component';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'
import CustomInput from '../components/CustomInput.component';
import { useForm} from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list';
import styles from '../styles/styles';
import { guardarPaciente } from '../helpers/Login.helper';


export default function SignUpScreen() {
    const navigation = useNavigation();

    //Expresiones Regulares Validaciones
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
    const PASSWORD_REGEX =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const PHONE_REGEX = /(\(?(\+54)\)?)?(11)(\d{8})/;
    const IMAGEN_REGEX = /([a-zA-Z0-9])+(.[j|p]+[n|p]+[g])/;

    //Handles
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('Contrasena');

    //DatePicker
    const [date, setDate]= useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    //Variables de Estados
    const [dni, setDni] = useState('');
    const [primerNombre, setPrimerNombre] = useState('');
    const [segundoNombre, setSegundoNombre] = useState('');
    const [primerApellido, setPrimerApellido] = useState('');
    const [segundoApellido, setSegundoApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmacionContrasena, setConfirmacionContrasena] = useState('');
    const [pin, setPin] = useState('');
    const [imagenPerfil, setImagenPerfil] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [contactoEmergencia, setContactoEmergencia] = useState('');
    const [telefonoEmergencia, setTelefonoEmergencia] = useState('');

    //Handles
    const handleId = (text) =>{
      setDni(text);
    }
    const handleFirstName = (text) =>{
      setPrimerNombre(text);
    }
    const handleMiddleName = (text) =>{
      setSegundoNombre(text);
    }
    const handleLastName = (text) =>{
      setPrimerApellido(text);
    }
    const handleSecondName = (text) =>{
      setSegundoApellido(text);
    }
    const handlePhone = (text) =>{
      setTelefono(text);
    }
    const handleEmail = (text) =>{
      setCorreoElectronico(text);
    }
    const handlePassword = (text) =>{
      setContrasena(text);
    }
    const handleConfirmPassword = (text) =>{
      setConfirmacionContrasena(text);
    }
    const handleCode = (text) =>{
      setPin(text);
    }
    const handleImage = (text) =>{
      setImagenPerfil(text);
    }
    const handleWeight = (text) =>{
      setPeso(text);
    }
    const handleHeight = (text) =>{
      setAltura(text);
    }
    const handleEmergency = (text) =>{
      setContactoEmergencia(text);
    }
    const handlePhoneEmergency = (text) =>{
      setTelefonoEmergencia(text);
    }

    //Lista desplegable para Genero
    const [genero, setGenero] = useState('');
    const datos = [
    {key: '1', value: ' F'},
    {key: '2', value: ' M'},
    ]

    const handleGender = (text) => {
      setGenero(text);
    }
    //Lista despeglable para tipo de sangre
    const [tipoSangre, setTipoSangre] = useState('');
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
    
    //Submitt Button 
    const onAceptarPressed = () => {
      console.log(`Submitted: 
      Dni: ${dni},
      Primer_Nombre: ${primerNombre},
      Segundo_Nombre: ${segundoNombre},
      Primer_Apellido: ${primerApellido},                
      Segundo_Apellido: ${segundoApellido},
      Genero: ${genero}, 
      Fecha_Nacimiento: ${fechaNacimiento}, 
      Telefono: ${telefono},
      Correo_Electronico: ${correoElectronico},
      Contrasena: ${contrasena},
      Pin: ${pin},
      Img_Perfil: ${imagenPerfil},
      Peso: ${peso},
      Altura: ${altura},
      Tipo_Sangre: ${tipoSangre},
      Nombre_Contacto_Emergencia: ${contactoEmergencia},
      Telefono_Contacto_Emergencia: ${telefonoEmergencia}
      `)
    
      const data = {
        dni_paciente: dni,
        primer_nombre: primerNombre,
        segundo_nombre: segundoNombre,
        primer_apellido: primerApellido,
        segundo_apellido: segundoApellido,
        genero: genero,
        fecha_nacimiento: fechaNacimiento,
        telefono: telefono,
        correo_electronico: correoElectronico,
        contrasena: contrasena,
        pin: pin,
        img_perfil: imagenPerfil,
        peso: peso,
        altura: altura,
        tipo_sangre: tipoSangre,
        nombre_contacto_emergencia: contactoEmergencia,
        telefono_contacto_emergencia: telefonoEmergencia
      };
      guardarPaciente(data);
      //navigation.navigate('Confirmar Registro')
      navigation.navigate('Pantalla de Inicio')
    };

    const onCancelarPressed = () => {
      navigation.navigate('Login')
    }
    const onIniciodeSesionPressed = () => {
      navigation.navigate('Inicio de Sesion')
    }

    return (
        <ScrollView>
        <View style = {styles.container1}>
          <Text style ={styles.subtitulos1}>Registro de Paciente</Text>

          <Text //************************DNI************************
            style = {styles.subtitulos_2}
            > DNI </Text>
          <CustomInput 
              name="Dni"
              control={control}
              onChangeText = {handleId}
              value={dni}
              placeholder='1235849873328'
              marginTop = {6}
              keyboardType='number-pad'
              rules={{  
              required: 'El campo DNI esta vacio',
              minLength: {
                value: 11,
                message: 'Minimo de caracteres es de 11',
              },  
              maxLength: {
                value: 11,
                message: 'Maximo de caracteres es de 11',
              },
            }}
          />

          <Text //************************PRIMER NOMBRE************************
            style = {styles.subtitulos_2}
            > Primer Nombre </Text>
          <CustomInput 
              name="PrimerNombre"
              control={control}
              value={primerNombre}
              onChangeText= {handleFirstName}
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

          <Text //************************SEGUNDO NOMBRE************************
            style = {styles.subtitulos_2}
            > Segundo Nombre </Text>
          <CustomInput 
              name="SegundoNombre"
              control={control}
              value={segundoNombre}
              onChangeText = {handleMiddleName}
              placeholder='David'
              marginTop = {6}
              rules={{
                //required: 'El campo Segundo Nombre esta vacio',
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
    
          <Text //************************PRIMER APELLIDO************************
            style = {styles.subtitulos_2}
            > Primer Apellido </Text>
          <CustomInput 
              name="PrimerApellido"
              value={primerApellido}
              onChangeText = {handleLastName}
              control={control}
              placeholder="Alvarez"
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

          <Text //************************SEGUNDO APELLIDO************************
            style = {styles.subtitulos_2}
            > Segundo Apellido </Text>
          <CustomInput 
              name="SegundoApellido"
              control={control}
              value={segundoApellido}
              onChangeText = {handleSecondName}
              placeholder="Hernandez"
              marginTop = {6}  
              rules={{
                //required: 'El campo Segundo Apellido esta vacio',
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

          <Text //************************GENERO************************
            style = {styles.subtitulos_2}
            > Genero </Text>
          <SelectList 
              data = {datos}
              setSelected = {handleGender}
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
                marginHorizontal: -0.5
              }}
              dropdownStyle = {{backgroundColor: 'white'}}
              dropdownItemStyles={{marginVertical:3}}
              maxHeight={150}
            
          />
          
          <Text //************************FECHA NACIMIENTO************************
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
         
          <Text //************************TELEFONO************************
            style = {styles.subtitulos_2}
            > Telefono </Text>
          <CustomInput 
              name="Telefono"
              control={control}
              value={telefono}
              onChangeText = {handlePhone}
              placeholder='+541185221699'
              marginTop = {6} 
              keyboardType='phone-pad'
              rules= {{
                required: 'El campo Telefono esta vacio', 
                minLength: {
                  value: 13,
                  message: 'Ingrese un numero de telefono valido',
                }, 
                maxLength: {
                  value: 13,
                  message: 'Ingrese un numero de telefono valido',
                }, 
                pattern: {
                  value: PHONE_REGEX, 
                  message: 'Ingrese un formato de telefono valido: +541185221699'
                }
              }}
            
          />

          <Text //************************CORREO ELECTRONICO************************
            style = {styles.subtitulos_2}
            > Correo electronico </Text>
          <CustomInput 
              name="CorreoElectronico"
              control={control}
              value={correoElectronico}
              onChangeText = {handleEmail}
              placeholder='example123@example.com'
              marginTop = {6}  
              rules = {{
                required: 'El campo Correo electronico esta vacio',
                pattern: {value: EMAIL_REGEX, message: 'Ingresar una direccion de correo valida'}
              }}
              keyboardType='email-address'   
          />

          <Text //************************CONTRASENA************************
            style = {styles.subtitulos_2}
            > Contraseña </Text>
          <CustomInput 
              name="Contrasena"
              control={control}
              value={contrasena}
              onChangeText= {handlePassword}
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

          <Text //************************CONFIRMACION DE CONTRASENA************************
            style = {styles.subtitulos_2}
            > Confirmacion de Contraseña </Text>
          <CustomInput 
              name="ConfirmacionContrasena"
              control={control}
              value={confirmacionContrasena}
              onChangeText= {handleConfirmPassword}
              placeholder='Ingresar Contraseña Nuevamente'
              secureTextEntry={true}
              marginTop = {6}   
              rules = {{
                validate: value => 
                  value === pwd || "Las contraseñas no coinciden" 
              }} 
          />

          <Text //************************PIN************************
            style = {styles.subtitulos_2}
            > PIN </Text>
          <CustomInput 
              name="Pin"
              control={control}
              value={pin}
              onChangeText= {handleCode}
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

          <Text //************************IMAGEN DE PERFIL************************
            style = {styles.subtitulos_2}
          > Imagén de Perfil </Text>
          <CustomInput 
              name="ImagenPerfil"
              control={control}
              value={imagenPerfil}
              onChangeText= {handleImage}
              placeholder='imagen.jpg'
              marginTop = {6}  
              rules = {{
                required: 'El campo Imagen de Perfil esta vacio',
                pattern: {value: IMAGEN_REGEX, message: 'Ingresar una imagen valida'}
              }}
              keyboardType='email-address'   
          />
          <Text //************************PESO************************
            style = {styles.subtitulos_2}
            > Peso </Text>
          <CustomInput 
              name="Peso"
              control={control}
              value={peso}
              onChangeText= {handleWeight}
              placeholder='KG'
              marginTop = {6}  
              keyboardType='decimal-pad'   
              rules = {{
                required: 'El Campo peso esta vacio',
                min: {
                  value: 10,
                  message: 'Ingrese un valor de peso Valido'
                },  
                max: {
                  value: 250,
                  message: 'Ingrese un valor de peso Valido'
                },
              }} 
          />

          <Text //************************ALTURA************************
            style = {styles.subtitulos_2}
            > Altura </Text>
          <CustomInput 
              name="Altura"
              control={control}
              value={altura}
              onChangeText= {handleHeight}
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

          <Text //************************TIPO DE SANGRE************************
            style = {styles.subtitulos_2}
            > Tipo de Sangre </Text>

          <SelectList 
          name="TipoSangre"
          data={data} 
          setSelected={setTipoSangre}
          value={tipoSangre}
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
          

          <Text //************************CONTACTO DE EMERGENCIA************************
            style = {styles.subtitulos_2}
            > Contacto Emergencia </Text>
          <CustomInput
              name="ContactoEmergencia"
              control={control}
              value={contactoEmergencia}
              onChangeText= {handleEmergency}
              placeholder='Nombre Contacto'
              marginTop = {6}  
              rules = {{
                required: 'El campo Contacto Emergencia esta vacio',
              }}  
          />

          <Text //************************CELULAR CONTACTO DE EMERGENCIA************************
            style = {styles.subtitulos_2}
            > Celular Contacto Emergencia </Text>
          <CustomInput
              name="TelefonoContactoEmergencia"
              control={control}
              value={telefonoEmergencia}
              onChangeText= {handlePhoneEmergency}
              keyboardType='phone-pad'
              placeholder='+541185221699'
              marginTop = {6}  
              rules = {{
                required: 'El campo Celular Contacto Emergencia esta vacio',
                minLength: {
                  value: 13,
                  message: 'Ingresar un numero de telefono valido',
                }, 
                maxLength: {
                  value: 13,
                  message: 'Ingrese un numero de telefono valido',
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