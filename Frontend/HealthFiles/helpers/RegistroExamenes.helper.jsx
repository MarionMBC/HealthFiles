const URL = "https://healthfiles-production.up.railway.app/";

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