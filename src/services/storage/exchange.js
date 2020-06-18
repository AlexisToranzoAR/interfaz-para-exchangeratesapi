function obteinKeyChange(base, date){
    return `exchange_${base}_${date}`;
}

export function loadChangeLocalStorage (base, date) {
    if (base === undefined || date === undefined) {
        throw new Error('Se necesita una base y una fecha para cargar de localStorage')
    }

    const change = JSON.parse(localStorage.getItem(obteinKeyChange(base, date)))

    if (change === null) {
        throw new Error(`Cambios para la Base: ${base} con Fecha: ${date} no encontrados`)
    }

    return change;
}

export function saveChangeLocalStorage (base, date, changeClass) {
    if (base === undefined || date === undefined || typeof changeClass !== 'object') {
        throw new Error('Se necesita una base y una fecha para guardar un cambio en localStorage')
    }
    try {
        localStorage.setItem(obteinKeyChange(base, date), JSON.stringify(changeClass));
    } catch (e) {
        localStorage.clear();
        console.error('Memoria del local storage llena esta fue vaciada en su totalidad', e);
    }
}
