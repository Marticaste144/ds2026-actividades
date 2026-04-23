"use strict";
const catalogo = [
    { isbn: "1", titulo: "Libro A", autor: "Juan", precio: 1000, disponible: true },
    { isbn: "2", titulo: "Libro B", autor: "Ana", precio: 2000, disponible: false },
    { isbn: "3", titulo: "Libro C", autor: "Juan", precio: 1500, disponible: true }
];
const input = document.getElementById("filtroAutor");
const btnFiltrar = document.getElementById("filtrar");
const btnDisponibles = document.getElementById("mostrarDisponibles");
const btnTodos = document.getElementById("mostrarTodos");
const listado = document.getElementById("listado");
const stats = document.getElementById("stats");
function buscarPorAutor(autor) {
    return catalogo.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
}
function librosDisponibles() {
    return catalogo.filter(l => l.disponible);
}
function precioPromedio(libros) {
    if (libros.length === 0)
        return 0;
    const total = libros.reduce((acc, l) => acc + l.precio, 0);
    return total / libros.length;
}
function renderizar(libros) {
    if (!listado || !stats)
        return;
    listado.innerHTML = "";
    libros.forEach(l => {
        const li = document.createElement("li");
        li.textContent = `${l.titulo} - ${l.autor} - $${l.precio}`;
        listado.appendChild(li);
    });
    stats.textContent = `Cantidad: ${libros.length} | Promedio: $${precioPromedio(libros)}`;
}
if (btnFiltrar && input) {
    btnFiltrar.addEventListener("click", () => {
        renderizar(buscarPorAutor(input.value));
    });
}
if (btnDisponibles) {
    btnDisponibles.addEventListener("click", () => {
        renderizar(librosDisponibles());
    });
}
if (btnTodos) {
    btnTodos.addEventListener("click", () => {
        renderizar(catalogo);
    });
}
renderizar(catalogo);
