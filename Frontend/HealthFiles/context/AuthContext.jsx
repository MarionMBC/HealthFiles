
import React, { createContext, useState } from 'react'
import { obtenerCorreoContrasena } from "../helpers/Login.helper";


const AuthContext = createContext();

const AuthProvider = ({ children, navigation }) => {
    console.log(navigation);
    const [correo, setCorreo] = useState();
    const [contrasena, setContrasena] = useState();
    const [resultado, setResultado] = useState();
    const [isAuth, setAuth] = useState(false);


    const user = {resultado, setResultado ,correo, contrasena, setContrasena, setCorreo, isAuth, setAuth};
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthContext;
