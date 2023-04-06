import React from 'react';

export const obtenerMedicamentos = async (dni = '12345678901') => {
        try {
                const response = await fetch(`http://10.0.2.2:4000/medicamento_paciente/get/${dni}`)
                const data = await response.json()

                return data

        } catch (e) {
                return e
        }
}
