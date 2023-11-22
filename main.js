function efectoEscritura(elemento, texto, tiempoEntreLetras) {
    let i = 0;
    let intervalo = setInterval(function() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, tiempoEntreLetras);
}

// Uso del método:
let elemento = document.getElementById('texto-animado'); // Reemplaza 'miElemento' con el ID de tu elemento HTML
let texto = 'Pilar Jaqueline Hernández García'; // El texto que quieres que se muestre
let tiempoEntreLetras = 100; // Tiempo en milisegundos entre cada letra
efectoEscritura(elemento, texto, tiempoEntreLetras);