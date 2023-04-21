/**
 * Author: Rony Josue Gomez
 * Date: 06/04/2023
 * Description: Pantalla PRINCIPAL de la APP de Inicio de Sesion
 */

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";
import ButtonsSignIn from "../../../Frontend/HealthFiles/components/ButtonsSignIn.component";
import { useNavigation } from "@react-navigation/native";
//Import useForm
import { useForm } from "react-hook-form";

import CustomInput from "../../../Frontend/HealthFiles/components/CustomInput.component";
import styles from "../../HealthFiles/styles/styles";
import { obtenerCorreoContrasena } from "../helpers/Login.helper";

export default function SignInScreen({ navigation }) {
  const { height } = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [correo, setCorreo] = useState (); 
  const [constrasena, setContrasena] = useState();
  const [resultado, setResultado] = useState();

  useEffect(() => {
    fetch("https:/healthfiles-production.up.railway.app/paciente/get/${correo_electronico}/${contrasena}")
      .then((res)=>res.json())
      .then((json)=>{
        setResultado(json)
      })
      .catch((e)=>console.log(e))
  }, [resultado])

  const onInicioSesionPressed = (correo_electronico='juan.perez@gmail.com', contrasena='password123') => {
      

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
  const onContrasenaOlvidadaPressed = () => {
    navigation.navigate("Contrasena Olvidada");
  };
  const onGmailPressed = () => {
    navigation.navigate("Inicio de Sesion Gmail");
  };
  const onRegistroPressed = () => {
    navigation.navigate("Registro");
  };

  return (
    <ScrollView>
      <View style={styles.container1}>
        <Image
          style={[styles.imagen, { height: height * 0.3 }]}
          source={require("../assets/ImagenLogoOff.jpg")}
          resizeMode="contain"
        />

        <Text style={styles.subtitulos_1}> Correo electrónico </Text>

        <CustomInput
          name="Correo Electronico"
          placeholder="example123@example.com"
          control={control}
          rules={{ required: "Ingresar un correo electronico valido" }}
          keyboardType="email-address"
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
        />

        <ButtonsSignIn
          text="He olvidado mi contraseña  Restablecer"
          onPress={onContrasenaOlvidadaPressed}
          type="TERTIARY"
        />

        <ButtonsSignIn
          text="Iniciar Sesion"
          onPress={handleSubmit(onInicioSesionPressed)}
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
