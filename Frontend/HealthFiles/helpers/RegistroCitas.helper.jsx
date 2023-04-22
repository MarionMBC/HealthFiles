const URL = "https://healthfiles-production.up.railway.app/";

/**
 * @author Jennebier Esther Alvarado López
 * @date 17 de abril del 2023
 * @description Agenda una cita
 * @param {Json} data Registro a ingresar en la base de datos
 */
export const GuardarCita = async (data) => {
  const urlCita = `${URL}cita/create`;
  await fetch(urlCita, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

/**
 * @author Jennebier Esther Alvarado López
 * @date 15 de abril del 2023
 * @description Obtiene los hospitales donde atiende un médico es especifico
 * @param {String} dni_medico
 * @returns respuesta en Json
 */
export const obtenerHospitales = async (dni_medico = "56789012345") => {
  try {
    const urlHospital = `${URL}medico_hospital/getHospitales/${dni_medico}`;
    const response = await fetch(urlHospital);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

/**
 * @author Jennebier Esther Alvarado López
 * @date 15 de abril del 2023
 * @description Obtiene las citas dado un paciente
 * @param {String} dni_medico
 * @returns respuesta en Json
 */
export const obtenerCitas = async (dni_paciente = "34567890123") => {
  try {
    const urlCita = `${URL}cita/getCitasParaPaciente/${dni_paciente}`;
    const response = await fetch(urlCita);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

/**
 * @author Jennebier Esther Alvarado López
 * @date 17 de abril del 2023
 * @description Cancela una cita, elimina su registro
 * @param {String} codigoCita
 * @returns Json
 */
export const cancelarCita = async (codigoCita) => {
  try {
          const response = await fetch(`${URL}cita/update/${codigoCita}`, 
          {
            method: 'PUT',
          headers:{
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          estado: 'Cancelada'
        })
       });
       const res = await response.json();
       return res;   
  } catch (e) {
    return e;
  }
};

export const handleViewCita = (navigation, cita) => {
  navigation.navigate("Detalle Cita", cita);
};
