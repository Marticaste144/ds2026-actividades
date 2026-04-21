"use strict";
function generarAsteriscos(n) {
    let resultado = "";
    for (let i = 1; i <= n; i++) {
        resultado += "*".repeat(i) + "\n";
    }
    return resultado;
}
function mostrar() {
    const input = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    const valor = Number(input.value);
    resultado.textContent = generarAsteriscos(valor);
}
