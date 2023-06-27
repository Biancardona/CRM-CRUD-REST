//Hacer una IIFEpara que las variables no se revuelvan con otros archivos
//Hacer el addEvent Listener para una vez que cargue el documento
//Hacer la funcion
//TRaer la funcion que obtiene la data
//FOr each para iterar en el arreglo de la data
//Destructuring para extraer las variables
//createElement ("tr")
import { borrarCliente, obtenerClientes } from "./API.js";
(function () {
  const listadoClientesDiv = document.querySelector("#listado-clientes");
  listadoClientesDiv.addEventListener("click", confirmarEliminar);
  document.addEventListener("DOMContentLoaded", cargarClientes);

  async function cargarClientes() {
    const resultado = await obtenerClientes();
    console.log(resultado);
    resultado.forEach((elem) => {
      const { email, empresa, id, nombre, telefono } = elem;
      const row = document.createElement("tr");

      row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;
      listadoClientesDiv.appendChild(row);
    });
  }

  async function confirmarEliminar(e) {
    if (e.target.classList.contains("eliminar")) {
      const idEliminar = parseInt(e.target.dataset.cliente);
      //   console.log(idEliminar);
      const eliminar = confirm("Deseas eliminar este registro?");
      if (eliminar) {
        borrarCliente(idEliminar);
      }
    }
  }
})();
