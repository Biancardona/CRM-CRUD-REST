import { mostrarAlerta, validarObj } from "./funciones.js";
import { nuevoCliente } from "./API.js";

//Para que las variables queden almacenadas y no se salgan de este archivo hacer:

(function () {
  //Crear los selectors y listeners del boton agregar cliente
  const agregarClienteBtn = document.querySelector("#formulario");
  agregarClienteBtn.addEventListener("submit", agregarCliente);
  //crear la funcion del submit para nuevo cliente
  function agregarCliente(e) {
    e.preventDefault();
    //dentro de la funcion crear los selectors de nuevo cliente
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    //Otra forma de validar el formulario

    //Crear un object literal enchancement (va agarrar los values de arriba para cada propiedad)
    const objectCliente = {
      nombre,
      email,
      telefono,
      empresa,
    };
    //Condicional para pasar el objeto a la funcion de validar
    //FALSE
    if (validarObj(objectCliente)) {
      mostrarAlerta("Hay un campo vacio, favor ingresa los datos completos");
      return;
    }
    //TRUE
    //Enviar peticion POST al servidor
    nuevoCliente(objectCliente);

    //FUNCION PARA validar el objeto
  }
})();
