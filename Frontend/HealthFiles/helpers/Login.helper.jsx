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

const URL = "https://healthfiles-production.up.railway.app/";

export const GuardarPaciente = async (data) =>{
     const urlCita = `${URL}paciente/create`
     await fetch(urlCita, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
}
