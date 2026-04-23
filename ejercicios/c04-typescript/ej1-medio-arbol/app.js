"use strict";
function generarAsteriscos(n) {
    let resultado = "";
    for (let i = 1; i <= n; i++) {
        resultado += "*".repeat(i) + "\n";
    }
    return resultado;
}
const input = document.getElementById("numero");
const boton = document.getElementById("generar");
const resultado = document.getElementById("resultado");
if (boton && input && resultado) {
    boton.addEventListener("click", () => {
        const valor = Number(input.value);
        const arbol = generarAsteriscos(valor);
        resultado.textContent = arbol;
    });
}
