// / <reference types="jquery" />
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/umd/popper.min.js';
import '../node_modules/jquery-datetimepicker/build/jquery.datetimepicker.full.min.js';
import { initializeDatepicker } from './datepicker.js';
import { buscarCambios,buscarBaseMonedas } from './exchangeAPI.js';

initializeDatepicker();
buscarBaseMonedas();

document.querySelector('#boton-siguiente').onclick = function () {
  if (!($('#base')[0].value === $('#base option')[0].value) && !($('#fecha')[0].value === '')) {
    $('#cambios').remove();
    buscarCambios($('#fecha')[0].value, $('#base')[0].value);
  }
  return false;
};
