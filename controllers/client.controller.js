import { clientServices } from "../service/client-service.js";

const createNewLine = (nombre, email, id) => {
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
              href="../screens/editar_cliente.html?id=${id}"
              class="simple-button simple-button--edit"
            >
              Editar
            </a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button" id="${id}">
              Eliminar
            </button>
          </li>
        </ul>
      </td>
    `;
    linea.innerHTML = contenido;
    const btnDelete = linea.querySelector("button");
    btnDelete.addEventListener('click',  () => {
      const id = btnDelete.id;
      clientServices.eliminarCliente(id)
        .then(respuesta => console.log(respuesta))
        .catch(error => alert(error.message))
    })

    return linea;
  }
  
  const table = document.querySelector("[data-table]");

  clientServices.listClientes()
  .then(data =>{
    data.forEach(({nombre, email, id}) => {
      const newLine = createNewLine(nombre, email, id);
      table.appendChild(newLine);
    });
  }   
)
  .catch(error => alert(error.message))