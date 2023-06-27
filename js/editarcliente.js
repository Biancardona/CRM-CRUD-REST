//EDITAR CLIENTE requiere de dos acciones:
//Extraer la informacion del cliente que se selecciono: (GET a un ID especifico)
//Despues un PUT o PATCH.

import { obtenerCliente, editarCliente } from "./API.js";

import { limpiarHTML, mostrarAlerta, validarObj } from "./funciones.js";

//Al seleccionar editar se debe renderear la info en el formulario
(function () {
  const nombreInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const empresaInput = document.querySelector("#empresa");
  const telefonoInput = document.querySelector("#telefono");
  const idInput = document.querySelector("#id");
  const guardarCambiosBtn = document.querySelector("#formulario");
  guardarCambiosBtn.addEventListener("submit", guardarCambios);

  document.addEventListener("DOMContentLoaded", traerCliente);

  async function traerCliente() {
    const parametrosURL = new URLSearchParams(window.location.search);
    const idValue = parseInt(parametrosURL.get("id"));

    const edicion = await obtenerCliente(idValue);
    mostrarCliente(edicion);
  }
  function mostrarCliente(cliente) {
    const { nombre, email, empresa, telefono, id } = cliente;

    nombreInput.value = nombre;
    emailInput.value = email;
    empresaInput.value = empresa;
    telefonoInput.value = telefono;
    idInput.value = id;
  }

  function guardarCambios(e) {
    e.preventDefault();
    const objectCliente = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: idInput.value,
    };
    console.log(objectCliente);
    if (validarObj(objectCliente)) {
      mostrarAlerta("Hay un campo vacio, favor ingresa los datos completos");
      return;
    }

    editarCliente(objectCliente);
  }
})();
