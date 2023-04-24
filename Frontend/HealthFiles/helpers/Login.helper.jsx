import React from 'react';

export const obtenerCorreoContrasena = async (correo_electronico, contrasena) => {
  try {
    const response = await fetch(`https://healthfiles.azurewebsites.net/paciente/get/${correo_electronico}/${contrasena}`)
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}


// Metodo POST Formulario de Registro
const URL = "https://healthfiles.azurewebsites.net/";

export const guardarPaciente = async (data) => {
  const urlPaciente = `${URL}paciente/create`
  await fetch(urlPaciente, {
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
