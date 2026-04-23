function generar() {
    let input = document.getElementById("numero") as HTMLInputElement;
    let valor = input.value;

//validacion si esta vacio o menor a 1.
    if (valor === "" || Number(valor) < 1) {
        let resultadoElem = document.getElementById("resultado") as HTMLElement;
        resultadoElem.textContent = "Error: número inválido";
        return;
    }
    let resultado: string = "";
    for (let i: number = 1; i <= Number(valor); i++) {
    
        for (let j = 0; j < i; j++) {
            resultado += "*";
        }
            resultado += "\n"; 
    }
    (document.getElementById("resultado") as HTMLElement).textContent = resultado;
}