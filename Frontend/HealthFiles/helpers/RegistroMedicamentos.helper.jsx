import React, {useEffect} from 'react';


const URL = "https://healthfiles-production.up.railway.app/";

export const obtenerMedicamentos = async (dni = '78901234567') => {
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


export const eliminarMedicamento = async (codigo_medicamento, dni='78901234567') => {
        try {
                const response = await fetch(`https://healthfiles-production.up.railway.app/medicamento_paciente/delete/${dni}/${codigo_medicamento}`, {method: 'DELETE'})
                const data = await response.json()
                return data
        } catch (e) {
                return e
        }
}


/*



export const fetchData = async(url, setState) => {
        try {
                const response = await fetch(`${URL+url}`);
                const json = await response.json();
                setState(json);
        } catch (e) {
                return e;
        }
}


/*export const fetchMedicamentos = async (setMedicamentos) => {
        try {
                const response = await fetch(`${URL}medicamento_paciente/get/78901234567`)
                const json = await response.json();
                setMedicamentos(json);
        }
        catch (e) {
                return e;
        }
}*/




export const searchFilter = (text, setSearch, data, searchName) => {
        if (text) {
                const newData = data.filter(item => {
                        const itemName = `${item}.${searchName}` ? `${item}.${searchName}`.toUpperCase() : ''.toUpperCase();
                        const textData = text.toUpperCase();
                        return itemName.indexOf(textData) > -1
                })
                setSearch(newData)
        } else {
                setSearch(data)
        }
}
















