import { createContext, useState, useEffect } from 'react';
import { obtenerCitas } from '../helpers/RegistroCitas.helper';

export const CitasContext = createContext();

export function CitasProvider({ children, dni_paciente }) {
    const [citas, setCitas] = useState([]);
  
    const actualizarCitas = async (dni_paciente) => {
        const datos = await obtenerCitas(dni_paciente);
        setCitas(datos);
      }; 
  
    useEffect(() => {
      actualizarCitas();
    }, [dni_paciente]);
  
    return (
      <CitasContext.Provider value={{ citas, setCitas, actualizarCitas, dni_paciente }}>
        {children}
      </CitasContext.Provider>
    );
  }
  
  export default CitasContext;