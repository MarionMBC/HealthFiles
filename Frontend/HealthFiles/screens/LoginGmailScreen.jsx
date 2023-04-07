/**
 * Author: Rony Josue Gomez
 * Date: 06/04/2023
 * Description: Pantalla para Iniciar Sesion con Gmail
 */

import { StatusBar } from 'expo-status-bar';
import { Text, View, useWindowDimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as React from 'react'
import styles from '../../HealthFiles/styles/styles';


WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen()  {
    const { height} = useWindowDimensions();

    const [accessToken, setAccessToken] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
      //AQUI VAN LOS CLIENTES ID CREADOS EN GOOGLE CLOUD PARA PODER REALIZAR INICIO DE SESION CON GOOGLE
        //expoClientId: "",
        //iosClientId: "",
        //androidClientId:""
    });

    React.useEffect(() => {
      if(response?.type === "success") {
        setAccessToken(response.authentication.accessToken);
        accessToken && fetchUserInfo();
      }
    }, [response, accessToken])

    async function fetchUserInfo() {
      let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {Authorization: `Bearer ${accessToken}`}
      });
      const userInfo = await response.json();
      setUser(userInfo);
    }

    const ShowUserInfo = () => {
      if(user) {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>Bienvenido</Text>
          <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
        </View>
      )
    }
  } 
    return (
        <ScrollView>
        <View style = {styles.containerG}>
          <Image 
            style = {[styles.imagenG, {height: height * 0.3}]}
            source = { require('../../../Frontend/HealthFiles/assets/googlelogo1.png')}
            resizeMode = 'contain'
          />
          <Text 
            style = {styles.subtitulos2G}
          > Sign in with your Google </Text>
          
          <View style = {styles.container1G}>

          <Image 
            style = {[styles.imagen2G, {height: height * 0.3}]}
            source = { require('../../../Frontend/HealthFiles/assets/cuentaLogin.png')}
            resizeMode = 'contain'
          />

          {user && <ShowUserInfo />}
          {user === null &&
            <>

            <Text style = {{fontSize: 20, fontWeight: 'bold', marginBottom: 20,marginTop: 10, color: 'gray'}}>Por favor Inicie Sesion</Text>
            <TouchableOpacity
            disabled={!request}
            onPress={() => {
              promptAsync();
            }}
            >
              <Image 
              source = {require('../../../Frontend/HealthFiles/assets/google-signin-button.png')} 
              style = {{width: 310, height: 45 }}
              />
            </TouchableOpacity>
            </>
          }
          </View>

          <StatusBar style="auto" />
        </View>
        </ScrollView>
      );
}
