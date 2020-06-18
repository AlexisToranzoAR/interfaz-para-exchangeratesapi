// / <reference types="jquery" />
import { initializeDatepicker } from './datepicker.js';
import { mostrarBaseMonedas, mostrarTablaCambios } from './iu.js';
import { loadChangeService } from './services/services.js';

initializeDatepicker();
mostrarBaseMonedas();

document.querySelector('#boton-siguiente').onclick = async function () {
  if (!($('#base')[0].value === $('#base option')[0].value) && !($('#fecha')[0].value === '')) {
    $('#cambios').remove();
    const base = $('#base')[0].value;
    const date = $('#fecha')[0].value;
    const changeClass = await loadChangeService(base, date);
    mostrarTablaCambios(changeClass);
  }
  return false;
};
