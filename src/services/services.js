import {
    loadChangeLocalStorage,
    saveChangeLocalStorage
} from './storage/exchange.js';
import {
    loadChangesFromAPI,
    loadBasesFromAPI
} from '../exchangeAPI.js';
import {
    mapearChange
} from './mapper.js';


export async function loadChangeService (base, date) {
    if (base === undefined || date === undefined) {
        throw new Error('Se necesita una base y una fecha para cargar un cambio desde service');
    }

    try {
        const changeData = loadChangeLocalStorage(base, date);
        return changeData;
    } catch (e) {
        try {
            const changeData = await loadChangesFromAPI(base, date);
            const changeClass = mapearChange(changeData);
            saveChangeLocalStorage(base, date, changeClass);
            return changeClass;
        } catch(e) {
            throw new Error(`Fallo consiguiendo cambio para la Base: ${base} con Fecha: ${date}`);
        }
    }
}

export async function loadBasesService () {
    const base = "EUR";
    const date = "latest";
    try {
        const changeLatest = loadChangeLocalStorage(base, date);
        return changeLatest;
    } catch (e) {
        try {
            const changeLatest = await loadBasesFromAPI();
            const changeClass = mapearChange(changeLatest);
            saveChangeLocalStorage(base, date, changeClass);
            return changeClass;
        } catch (e) {
            throw new Error('Fallo consiguiendo las bases de latest');
        }
    }
}
