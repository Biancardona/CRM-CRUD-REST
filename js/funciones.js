//FUNCION DE ALERTA
export function mostrarAlerta(mensaje) {
  const alerta = document.querySelector(".bg-red-100");

  if (!alerta) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "text-center",
      "mt-6",
      "mx-auto"
    );
    const formulario = document.querySelector("#formulario");
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 2000);
  } else {
    alerta.remove();
  }
}

export function limpiarHTML() {
  formulario.innerHTML = "";
}

export function validarObj(obj) {
  //leer los valores del objeto con Object.values
  //Values: para el valor del objeto
  //Every: revisa una condicion en cada value del objeto
  //SI al inicio se le agrega la ! entonces retorna TRUE
  //False quiere decir qeu si paso la validacion
  return !Object.values(obj).every((elem) => elem !== ""); //RETORNA FALSE
}
