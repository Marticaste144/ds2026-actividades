function calcularPrecioFinal(monto, medioPago) {

    if (monto < 200) {
        return monto;
    }

    if (monto >= 200 && monto <= 400) {

        if (medioPago === "E") {
            return monto * 0.7;
        } else if (medioPago === "D") {
            return monto * 0.8;
        } else {
            return monto * 0.9;
        }

    }

    return monto * 0.6;
}

console.log(`Monto: $150 | Pago: E | Final: $${calcularPrecioFinal(150, "E")}`);
console.log(`Monto: $250 | Pago: E | Final: $${calcularPrecioFinal(250, "E")}`);
console.log(`Monto: $300 | Pago: D | Final: $${calcularPrecioFinal(300, "D")}`);
console.log(`Monto: $350 | Pago: C | Final: $${calcularPrecioFinal(350, "C")}`);
console.log(`Monto: $500 | Pago: E | Final: $${calcularPrecioFinal(500, "E")}`);