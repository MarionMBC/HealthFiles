const URL = "https://healthfiles.azurewebsites.net/";

export const obtenerPacientes = async (
  dni_medico = "56789012345",
) => {
  try {
    const urlPacientesPorMedico = `${URL}paciente/getPorMedico/${dni_medico}`;
    const response = await fetch(urlPacientesPorMedico);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};
