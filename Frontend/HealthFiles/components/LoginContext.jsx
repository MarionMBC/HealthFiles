
import React, {useContext, createContext, useState} from 'react'

const LoginContext = React.createContext();

export function LoginProvider ({children}) {
    const [user, setUser] = useState();

    return (
        <LoginContext.Provider value={user}>
            {children}
        </LoginContext.Provider>
    )
}