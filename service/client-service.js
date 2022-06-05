


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

const crearCliente = (nombre, email) => {
  const id = uuid.v4();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email, id})
  }

  return fetch("http://localhost:3000/perfil", options)
}

const eliminarCliente = (id) => {
  const options = {
    method: "DELETE"
  }
  return fetch(`http://localhost:3000/perfil/${id}`, options)
}

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json())
}

const actualizarCliente = (nombre, email, id) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, email })
  }
  return fetch(`http://localhost:3000/perfil/${id}`, options).then(respuesta => respuesta).catch(error => console.log(error.message))
}

export const clientServices = {
  listClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
}