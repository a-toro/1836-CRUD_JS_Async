const createNewLine = (nombre, email) => {
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>
      ${nombre}
    </td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  linea.innerHTML = contenido;
  return linea;
}

const table = document.querySelector("[data-table]");


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

listClientes()
  .then(data =>{
    data.forEach(perfil => {
      const newLine = createNewLine(perfil.nombre, perfil.email);
      table.appendChild(newLine);
    });
  }   
)
  .catch(error => alert(error))