
import React, { createContext, useState } from 'react'
import { obtenerCorreoContrasena } from "../helpers/Login.helper";


const AuthContext = createContext();

const AuthProvider = ({ children, navigation }) => {
    console.log(navigation);
    const [correo, setCorreo] = useState();
    const [contrasena, setContrasena] = useState();
    const [resultado, setResultado] = useState();
    const [isAuth, setAuth] = useState(false);

    const onContrasenaOlvidadaPressed = () => {
        navigation.navigate("Contrasena Olvidada");
    };
    const onGmailPressed = () => {
        navigation.navigate("Inicio de Sesion Gmail");
    };
    const onRegistroPressed = () => {
        navigation.navigate("Registro");
    }
    const handleIgreso = async () => {
        try {
            const res = await obtenerCorreoContrasena(correo, contrasena);
            
            if (res.msg === "Paciente no encontrado" || contrasena == "" || correo == "") {
                setAuth(!isAuth);
                console.log('Hola, auth');
            } else {
                setResultado(res);
                console.log("Resultado: ", resultado);
                navigation.navigate("Inicio", resultado);
            };
        } catch (e) {
            console.error(e);
            setError('Ha ocurrido un error. Por favor, intenta nuevamente.');
        }
    };

    const user = { resultado, handleIgreso, onContrasenaOlvidadaPressed, onGmailPressed, onRegistroPressed, setContrasena, setCorreo };
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthContext;
