/// <reference types="jquery" />
const URL = "https://api.exchangeratesapi.io/latest";

fetch(URL)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        Object.keys(respuestaJSON.rates).forEach(moneda => {
            $("select").append($(`<option>${moneda}</option>`));
        });
    })
.catch(error => console.error("FALLÓ", error));

function buscarCambios(fecha,base){
    const urlCambio = `https://api.exchangeratesapi.io/${fecha}?base=${base}`;
    fetch(urlCambio)
        .then(respuesta => respuesta.json())
        .then(respuestaJSON => {
            Object.keys(respuestaJSON.rates).forEach((moneda, indice) => {
                if(indice===0){
                    const $cambiosContainer = $("#cambios-container");
                    $cambiosContainer.append($(`<table class="table" id="cambios"></table>`));
                    const $cambios = $("#cambios");
                    $cambios.append($(`<thead></thead>`));
                    const $thead = $("thead", $cambios);
                    $thead.append($(`<tr></tr>`));
                    const $tr = $("tr", $thead);
                    $tr.append($(`<th scope="col">#</th>`));
                    $tr.append($(`<th scope="col">Moneda</th>`));
                    $tr.append($(`<th scope="col">Cambio</th>`));
                    $cambios.append($(`<tbody></tbody>`));
                }
                const $cambios = $("#cambios");
                const $tbody = $("tbody", $cambios);
                $tbody.append($(`<tr id=cambio-${indice}></tr>`));
                const $cambio = $(`#cambio-${indice}`);
                $cambio.append($(`<th scope="row">${indice+1}</th>`));
                $cambio.append($(`<td>${moneda}</td>`));
                $cambio.append($(`<td>${respuestaJSON.rates[moneda]}</td>`));
            });
        })
    .catch(error => console.error("FALLÓ", error));
}



document.querySelector('#boton-siguiente').onclick = function(){
    if(!($("#base")[0].value === $("#base option")[0].value) && !($("#fecha")[0].value === '')){
        $("#cambios").remove();
        buscarCambios($("#fecha")[0].value, $("#base")[0].value);
    }
    return false;
} 

