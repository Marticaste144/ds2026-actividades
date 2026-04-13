function generar() {

    let input = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    let n = Number(input);

    // VALIDACIÓN
    if (input === "" || n < 1) {
        resultado.innerText = "Error: ingresar un número mayor a 0";
        return;
    }

    let salida = "";

    // GENERAR MEDIO ÁRBOL
    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {
            salida = salida + "*";
        }

        salida = salida + "\n";
    }

    resultado.innerText = salida;
}