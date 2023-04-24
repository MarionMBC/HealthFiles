const URL = "https://healthfiles.azurewebsites.net/";

/**
 * @author Jennebier Esther Alvarado López
 * @date 15 de abril del 2023
 * @description Obtiene las horas disponibles para agendar una cita con un médico, en un hospital y fecha indicados
 * @param {String} dni_medico 
 * @param {String} codigo_hospital 
 * @param {String} fecha 
 * @returns 
 */
export const obtenerHorarios = async (dni_medico = "56789012345", codigo_hospital = "HN-HOSP-002", fecha = "2023-04-28") => {
  try {
    const urlHorario = `${URL}horario/get/${dni_medico}/${codigo_hospital}/${fecha}`;
    const response = await fetch(urlHorario);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
} 