export function loadChangesFromAPI(base, date) {
  if (date === undefined || base === undefined) {
    throw new Error('Se necesita una fecha y una base para cargar los cambios');
  }
  const link = `https://api.exchangeratesapi.io/${date}?base=${base}`;
  return fetch(link)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Fallo de conexion http al cargar los cambios para la Base: ${base} con Fecha: ${date}`);
    })
    .catch((error) => console.error('Fallo de red', error));
}

export function loadBasesFromAPI() {
  const link = 'https://api.exchangeratesapi.io/latest';
  return fetch(link)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Fallo de conexion http al cargar las bases`);
    })
    .catch((error) => console.error('Fallo de red', error));
}
