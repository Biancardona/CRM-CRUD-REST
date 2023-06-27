//Hacer una variable de la URL de la db
const URL = "http://localhost:4000/clientes";

//Exportar funcion de nuevo cliente que se le pasara el objeto del cliente
export const nuevoCliente = async (objectCliente) => {
  //Insertar nuevo cliente (POST) en la db con async await
  try {
    await fetch(
      URL,
      //Creando un objeto de configuracion parael handling data
      {
        method: "POST",
        body: JSON.stringify(objectCliente), //Contenido de la peticion hacia la URL,(senevia como string o como objeto)
        headers: {
          //Informacion de que tipo de dato se esta enviado
          "Content-Type": "application/json",
        },
      }
    );
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
  // console.log(objectCliente);
};

//Exportar funcion que traiga todos los clientes
//Por defaul el fetch va obtener un GET

export const obtenerClientes = async () => {
  try {
    const respuesta = await fetch(URL);
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Borrar Clientes
//Se tiene que especificar el ID que quiere eliminar
export const borrarCliente = async (id) => {
  try {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    console.log("se elimuino registro");
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

export const obtenerCliente = async (id) => {
  try {
    const respuesta = await fetch(`${URL}/${id}`);
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editarCliente = async (objectCliente) => {
  try {
    await fetch(`${URL}/${objectCliente.id}`, {
      method: "PUT",
      body: JSON.stringify(objectCliente), //Contenido de la peticion hacia la URL,(senevia como string o como objeto)
      headers: {
        //Informacion de que tipo de dato se esta enviado
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
    console.log("registro editado");
  } catch (error) {
    console.log(error);
  }
};
