document.querySelector(".btn-encriptar").addEventListener("click", encriptar);
document
  .querySelector(".btn-desencriptar")
  .addEventListener("click", desencriptar);
document.querySelector(".btn-eliminar").addEventListener("click", eliminar);
document.querySelector(".btn-copiar").addEventListener("click", copiar);
document.querySelector(".btn-pegar").addEventListener("click", pegar);

function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "img/encriptado.jpg"; // Actualiza la imagen cuando se encripta
  } else {
    muñeco.src = "img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar un texto"); // Reemplazado swal por alert para simplificar
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "img/desencriptado.jpg"; // Actualiza la imagen cuando se desencripta
  } else {
    muñeco.src = "img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar un texto"); // Reemplazado swal por alert para simplificar
  }
}

function eliminar() {
  document.getElementById("texto").value = "";
  document.getElementById("titulo-mensaje").textContent = "Mensaje eliminado";
  document.getElementById("parrafo").textContent = "";
  document.getElementById("muñeco").src = "img/muñeco.png"; // Actualiza la imagen al eliminar el texto
}

function copiar() {
  const texto = document.getElementById("texto").value;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      document.getElementById("titulo-mensaje").textContent = "Mensaje copiado"; // Actualiza el mensaje
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}

function pegar() {
  navigator.clipboard
    .readText()
    .then((text) => {
      document.getElementById("texto").value = text; // Pega el texto en el campo
      document.getElementById("titulo-mensaje").textContent = "Mensaje pegado"; // Muestra el mensaje de pegado
    })
    .catch((err) => {
      console.error("Error al pegar el texto: ", err);
    });
}

function validarTexto() {
  const input = document.getElementById("texto");
  const mensajeError = document.getElementById("mensaje-error");
  const regex = /^[a-z\s]*$/;

  if (!regex.test(input.value)) {
    mensajeError.style.display = "block";
    input.value = ""; // Limpiar el campo de texto si no es válido
  } else {
    mensajeError.style.display = "none";
  }
}
