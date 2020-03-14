/// <reference types="jquery" />

fetch("https://api.exchangeratesapi.io/latest")
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        Object.keys(respuestaJSON.rates).forEach(moneda => {
            $("select").append($(`<option>${moneda}</option>`));
        });
    })
.catch(error => console.error("FALLÓ", error));

function buscarCambios(fecha,base){
    fetch(`https://api.exchangeratesapi.io/${fecha}?base=${base}`)
        .then(respuesta => respuesta.json())
        .then(respuestaJSON => {
            Object.keys(respuestaJSON.rates).forEach((moneda, indice) => {
                if(indice===0){
                    $("#cambios-container").append($(`<table class="table" id="cambios"></table>`));
                    $("#cambios").append($(`<thead></thead>`));
                    $("#cambios thead").append($(`<tr></tr>`));
                    $("#cambios thead tr").append($(`<th scope="col">#</th>`));
                    $("#cambios thead tr").append($(`<th scope="col">Moneda</th>`));
                    $("#cambios thead tr").append($(`<th scope="col">Cambio</th>`));
                    $("#cambios").append($(`<tbody></tbody>`));
                }
                $("#cambios tbody").append($(`<tr id=${indice}></tr>`));
                $(`#${indice}`).append($(`<th scope="row">${indice+1}</th>`));
                $(`#${indice}`).append($(`<td>${moneda}</td>`));
                $(`#${indice}`).append($(`<td>${respuestaJSON.rates[moneda]}</td>`));
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

