let miImagen = document.querySelector('img');

miImagen.onclick = function () {

    let miSrc = miImagen.getAttribute('src');

    if (miSrc === 'images/arte.jpg') {

        miImagen.setAttribute('src', 'images/arteDos.jpg');

    } else {

        miImagen.setAttribute('src', 'images/arte.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if(!miNombre) {
        estableceNombreUsuario();
    } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Esculturas griegas, Bienvenido ' + miNombre;
    }
}

if(!localStorage.getItem('nombre')){
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Esculturas griegas, Bienvenido ' + nombreAlmacenado;
}

miBoton.onclick =  function() {
    estableceNombreUsuario();
}