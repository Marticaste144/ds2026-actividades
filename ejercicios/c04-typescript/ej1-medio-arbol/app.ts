export {};

function generarAsteriscos(n: number): string {
    let resultado = "";

    for (let i = 1; i <= n; i++) {
        resultado += "*".repeat(i) + "\n";
    }

    return resultado;
}

function mostrar(): void {
    const input = document.getElementById("numero") as HTMLInputElement | null;
    const resultado = document.getElementById("resultado") as HTMLElement | null;

    if (!input || !resultado) return;

    const valor = Number(input.value);

    resultado.textContent = generarAsteriscos(valor);
}