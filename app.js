// Datos de perfil
const nombre = "Eduardo Inga";
const descripcion = "Desarrollador Full Stack";

// Seleccionar el contenedor y agregar el nombre y la descripción
const profileInfo = document.getElementById("profile-info");

const nombreElemento = document.createElement("h1");
nombreElemento.textContent = nombre;

const descripcionElemento = document.createElement("p");
descripcionElemento.textContent = descripcion;

profileInfo.appendChild(nombreElemento);
profileInfo.appendChild(descripcionElemento);


// Selecciónar el botón y agregar la función de abrir el modal

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function (event) {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
};
