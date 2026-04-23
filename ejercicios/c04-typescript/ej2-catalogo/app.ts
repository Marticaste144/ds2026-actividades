interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

const catalogo: Libro[] = [
    { isbn: "1", titulo: "Libro A", autor: "Juan", precio: 1000, disponible: true },
    { isbn: "2", titulo: "Libro B", autor: "Ana", precio: 2000, disponible: false },
    { isbn: "3", titulo: "Libro C", autor: "Juan", precio: 1500, disponible: true }
];

const input = document.getElementById("filtroAutor") as HTMLInputElement | null;
const btnFiltrar = document.getElementById("filtrar") as HTMLButtonElement | null;
const btnDisponibles = document.getElementById("mostrarDisponibles") as HTMLButtonElement | null;
const btnTodos = document.getElementById("mostrarTodos") as HTMLButtonElement | null;
const listado = document.getElementById("listado") as HTMLUListElement | null;
const stats = document.getElementById("stats") as HTMLParagraphElement | null;

function buscarPorAutor(autor: string): Libro[] {
    return catalogo.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
}

function librosDisponibles(): Libro[] {
    return catalogo.filter(l => l.disponible);
}

function precioPromedio(libros: Libro[]): number {
    if (libros.length === 0) return 0;
    const total = libros.reduce((acc, l) => acc + l.precio, 0);
    return total / libros.length;
}

function renderizar(libros: Libro[]): void {
    if (!listado || !stats) return;

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