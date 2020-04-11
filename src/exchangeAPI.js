import { mostrarTablaCambios,mostrarBaseMonedas } from './iu.js';

export function buscarCambios(fecha, base) {
  const urlCambio = `https://api.exchangeratesapi.io/${fecha}?base=${base}`;
  fetch(urlCambio)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => {
      mostrarTablaCambios(respuestaJSON);
    })
    .catch((error) => console.error('FALLÓ', error));
}

export function buscarBaseMonedas() {
  const URL = 'https://api.exchangeratesapi.io/latest';
  fetch(URL)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => {
      mostrarBaseMonedas(respuestaJSON)
    })
    .catch((error) => console.error('FALLO', error));
}
