import React from 'react';

export const obtenerMedicamentos = async (dni = '12345678901') => {
        try {
                const response = await fetch(`https://healthfiles-production.up.railway.app/medicamento_paciente/get/${dni}`)
                const data = await response.json()
                return data
        } catch (e) {
                return e
        }
}

export const handleViewMed =  (navigation, medicamento) => {
        navigation.navigate('Detalles de Medicamento',  medicamento )
}


export const dateFormatter = (date) => {
        const fecha = new Date(date);
        const dia = fecha.getUTCDate();
        const mes = fecha.getUTCMonth() +1 ;
        const año = fecha.getUTCFullYear();

        return `${dia}/${mes}/${año}`
}


export const eliminarMedicamento = async (codigo_medicamento, dni='12345678901') => {
        try {
                const response = await fetch(`https://healthfiles-production.up.railway.app/medicamento_paciente/delete/${dni}/${codigo_medicamento}`, {method: 'DELETE'})
                const data = await response.json()

                return data
        } catch (e) {
                return e
        }
}