document.addEventListener('DOMContentLoaded', () => {
    const btnEncriptar = document.querySelector('.btn-encriptar');
    const btnDesencriptar = document.querySelector('.btn-desencriptar');
    const btnEliminar = document.querySelector('.btn-eliminar');
    const textarea = document.querySelector('.texto');
    const tituloMensaje = document.querySelector('#titulo-mensaje');
    const parrafo = document.querySelector('#parrafo');
    const muñeco = document.querySelector('.muñeco');

    btnEncriptar.addEventListener('click', () => {
        let texto = textarea.value;
        if (texto.trim() !== '') {
            let textoEncriptado = texto
                .replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");

            textarea.value = textoEncriptado;
            tituloMensaje.textContent = "Texto encriptado con éxito";
            parrafo.textContent = "";
            muñeco.src = "img/encriptado.jpg"; // Asegúrate de que la imagen exista en la ruta
        } else {
            muñeco.src = "img/muñeco.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar";
            swal("Ooops!", "Debes ingresar un texto", "warning");
        }
    });

    btnDesencriptar.addEventListener('click', () => {
        let texto = textarea.value;
        if (texto.trim() !== '') {
            let textoDesencriptado = texto
                .replace(/enter/gi, "e")
                .replace(/imes/gi, "i")
                .replace(/ai/gi, "a")
                .replace(/ober/gi, "o")
                .replace(/ufat/gi, "u");

            textarea.value = textoDesencriptado;
            tituloMensaje.textContent = "Texto desencriptado con éxito";
            parrafo.textContent = "";
            muñeco.src = "img/desencriptado.jpg"; // Asegúrate de que la imagen exista en la ruta
        } else {
            muñeco.src = "img/muñeco.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas desencriptar";
            swal("Ooops!", "Debes ingresar un texto", "warning");
        }
    });

    btnEliminar.addEventListener('click', () => {
        textarea.value = '';
        tituloMensaje.textContent = '';
        parrafo.textContent = '';
        muñeco.src = "img/muñeco.png"; // Imagen por defecto
    });
});
