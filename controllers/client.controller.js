import { clientServices } from "../service/client-service.js";

console.log(clientServices)

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

  clientServices.listClientes()
  .then(data =>{
    data.forEach(perfil => {
      const newLine = createNewLine(perfil.nombre, perfil.email);
      table.appendChild(newLine);
    });
  }   
)
  .catch(error => alert(error.message))