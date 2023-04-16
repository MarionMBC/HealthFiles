
const URL = "https://healthfiles-production.up.railway.app/";

export const GuardarCita = async (data) =>{
     const urlCita = `http://10.0.2.2:4000/cita/create`
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

/**
 * @author Jennebier Esther Alvarado López
 * @date 15 de abril del 2023
 * @description Obtiene los hospitales donde atiende un médico es especifico
 * @param {String} dni_medico 
 * @returns respuesta en Json
 */
export const obtenerHospitales = async (dni_medico="56789012345") => {
   try{const urlHospital = `${URL}medico_hospital/getHospitales/${dni_medico}`;
    const response = await fetch(urlHospital);
    const data = await response.json();
    return data;
  }catch (e) {
      return e;
}
  } 

