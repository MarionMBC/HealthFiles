/**
 * Author: Rony Josue Gomez
 * Date: 06/04/2023
 * Description: Pantalla PRINCIPAL de la APP de Inicio de Sesion
 */

import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";
import ButtonsSignIn from "../../../Frontend/HealthFiles/components/ButtonsSignIn.component";
/* import { useNavigation } from "@react-navigation/native";
 *///Import useForm
import { useForm } from "react-hook-form";

import CustomInput from "../../../Frontend/HealthFiles/components/CustomInput.component";
import styles from "../../HealthFiles/styles/styles";
import AuthContext from "../context/AuthContext";


export default function SignInScreen({ navigation }) {

  const { isAuth, setCorreo, setContrasena, onContrasenaOlvidadaPressed, onGmailPressed, handleIgreso, onRegistroPressed } = useContext(AuthContext);



  const { height } = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();



  /* 
    const [correo, setCorreo] = useState();
    const [contrasena, setContrasena] = useState();
    const [resultado, setResultado] = useState();
    const [isAuth, setAuth] = useState(false); */

  /* 
    useEffect(() => {
      console.log("Correo: ", correo);
      console.log("Contraseña: ", contrasena);
    }, [correo, contrasena]); */
  /*   useEffect(() => {
      fetch("https://healthfiles.azurewebsites.net/paciente/get/${correo_electronico}/${contrasena}")
        .then((res) => res.json())
        .then((json) => {
          setResultado(json)
        })
        .catch((e) => console.log(e))
    }, []) */
  /*   const onInicioSesionPressed = (correo_electronico = 'juan.perez@gmail.com', contrasena = 'password123') => {
      console.log("d", resultado);
      var keys = Object.keys(
        resultado.then
          ? resultado.then((result) => {
            return result;
          })
          : resultado
      );
  
      if (keys.length > 1) {
        navigation.navigate("Pantalla de Inicio");
      } else {
        message = "Correo o Contrasena son invalidos";
      }
    };
   */

  /* 
    const onContrasenaOlvidadaPressed = () => {
    navigation.navigate("Contrasena Olvidada");
  };
  const onGmailPressed = () => {
    navigation.navigate("Inicio de Sesion Gmail");
  };
  const onRegistroPressed = () => {
    navigation.navigate("Registro");
  }; */

  /*   const handleIgreso = async () => {
      try {
        const res = await obtenerCorreoContrasena(correo, contrasena);
        if (res.msg === "Paciente no encontrado" || contrasena == "" || correo == "") {
          setAuth(!isAuth);
        } else {
          setResultado(res);
          console.log("Resultado: ", resultado);
          navigation.navigate("Inicio", resultado)
        };
      } catch (e) {
        console.error(e);
        setError('Ha ocurrido un error. Por favor, intenta nuevamente.');
      }
    }; */


  return (
    <ScrollView>
      <View style={styles.container1}>
        <Image
          style={[styles.imagen, { height: height * 0.3 }]}
          source={require("../assets/ImagenLogoOff.jpg")}
          resizeMode="contain"
        />
        {isAuth ? <Text style={{ color: "red", fontSize: 14, fontWeight: 500 }}>Usuario o contraseña incorrecto</Text> : <></>}


        <Text style={styles.subtitulos_1}> Correo electrónico </Text>
        <CustomInput
          name="Correo Electronico"
          placeholder="example123@example.com"
          control={control}
          rules={{ required: "Ingresar un correo electronico valido" }}
          keyboardType="email-address"
          setState={setCorreo}
        />

        <Text style={styles.subtitulo_2}> Contraseña </Text>

        <CustomInput
          name="Contraseña"
          placeholder="Contraseña"
          control={control}
          rules={{
            required: "Ingresar su contraseña",
            minLength: {
              value: 8,
              message: "La contraseña debe tener 8 caracteres minimo",
            },
          }}
          secureTextEntry={true}
          setState={setContrasena}
        />

        <ButtonsSignIn
          text="He olvidado mi contraseña  Restablecer"
          onPress={onContrasenaOlvidadaPressed}
          type="TERTIARY"
        />

        <ButtonsSignIn
          text="Iniciar Sesion"
          onPress={handleIgreso}
        />

        <ButtonsSignIn
          text="Iniciar Sesion con Gmail"
          onPress={onGmailPressed}
          type="Secondary"
        />

        <ButtonsSignIn text="Registrarse" onPress={onRegistroPressed} />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
