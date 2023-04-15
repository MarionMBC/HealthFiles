import React from 'react';

export const obtenerCorreoContrasena = async (correo_electronico='juan.perez@gmail.com', contrasena='password123') => {
    try {
            const response = await fetch(`https:/healthfiles-production.up.railway.app/paciente/get/${correo_electronico}/${contrasena}`)
            const data = await response.json()
            return data
    } catch (e) {
            return e
    }
}
