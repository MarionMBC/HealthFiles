
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


export const obtenerHospitales = async (dni_medico) => {
     const urlHospital = `http://10.0.2.2:4000/medico_hospital/getHospitales/${dni_medico}`;
    const response = await fetch(urlHospital);
    const data = await response.json();
    return data;
  }