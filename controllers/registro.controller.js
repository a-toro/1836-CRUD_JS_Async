import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    
    clientServices.crearCliente(nombre, email)
        .then(response => window.location.href = "./registro_completado.html")
        .catch(error => window.location.href = "../screens/error.html")
});