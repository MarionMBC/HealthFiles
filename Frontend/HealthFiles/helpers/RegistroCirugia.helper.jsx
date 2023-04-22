const URL = "https://healthfiles-production.up.railway.app/";

export const obtenerCirugias = async (
  dni_medico = "12345678901",
  dni_paciente = "56789012345"
) => {
  try {
    const urlCirugia = `${URL}cirugia/getCirugiasMedPac/${dni_medico}/${dni_paciente}`;
    const response = await fetch(urlCirugia);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};
