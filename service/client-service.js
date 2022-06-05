


// Abri http (método, url)
/*
  CRUD   - MÉTODOS HTTP
  Creater - POST
  Read - GET
  Update - PUT/PATCH
  Delete - DELETE
*/

// Obtener datos con Fecth API
const listClientes = () => fetch("http://localhost:3000/perfil").then(response => response.json());


/*
Obtener los datos con HTTP request y promise
const listClientes = () => {
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open('GET', 'http://localhost:3000/perfil');
    http.send() // Enviar la petición
    http.onload = () => {
      const response = JSON.parse(http.response);
      if ( http.status >= 400){
        reject(response);
      } else {
        resolve(response);
      }
    }

  })
  return promise;
}*/

export const clientServices = {
  listClientes,
}