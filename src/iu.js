export function mostrarTablaCambios(respuestaJSON) {
  Object.keys(respuestaJSON.rates).forEach((moneda, indice) => {
    if (indice === 0) {
      const $cambiosContainer = $('#cambios-container');
      $cambiosContainer.append($('<table class="table" id="cambios"></table>'));
      const $cambios = $('#cambios');
      $cambios.append($('<thead></thead>'));
      const $thead = $('thead', $cambios);
      $thead.append($('<tr></tr>'));
      const $tr = $('tr', $thead);
      $tr.append($('<th scope="col">#</th>'));
      $tr.append($('<th scope="col">Moneda</th>'));
      $tr.append($('<th scope="col">Cambio</th>'));
      $cambios.append($('<tbody></tbody>'));
    }
    const $cambios = $('#cambios');
    const $tbody = $('tbody', $cambios);
    $tbody.append($(`<tr id=cambio-${indice}></tr>`));
    const $cambio = $(`#cambio-${indice}`);
    $cambio.append($(`<th scope="row">${indice + 1}</th>`));
    $cambio.append($(`<td>${moneda}</td>`));
    $cambio.append($(`<td>${respuestaJSON.rates[moneda]}</td>`));
  });
}

export function mostrarBaseMonedas(respuestaJSON) {
  $('select').append($('<option>EUR</option>'));
      Object.keys(respuestaJSON.rates).forEach((moneda) => {
        $('select').append($(`<option>${moneda}</option>`));
      });
}
