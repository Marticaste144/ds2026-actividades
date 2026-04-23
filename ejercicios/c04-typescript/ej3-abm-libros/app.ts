interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
}

let catalogo: Libro[] = [
    { isbn: "1", titulo: "Libro A", autor: "Juan", precio: 1000, disponible: true },
    { isbn: "2", titulo: "Libro B", autor: "Ana", precio: 2000, disponible: false }
];

const inputTitulo = document.getElementById("titulo") as HTMLInputElement | null;
const inputAutor = document.getElementById("autor") as HTMLInputElement | null;
const inputPrecio = document.getElementById("precio") as HTMLInputElement | null;
const inputDisponible = document.getElementById("disponible") as HTMLInputElement | null;

const btnAgregar = document.getElementById("agregar") as HTMLButtonElement | null;
const listado = document.getElementById("listado") as HTMLUListElement | null;
const errorForm = document.getElementById("errorForm") as HTMLDivElement | null;

function renderizar(): void {
    if (!listado) return;

    listado.innerHTML = "";

    catalogo.forEach(libro => {
        const li = document.createElement("li");
        li.textContent = `${libro.titulo} - ${libro.autor} - $${libro.precio}`;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", () => {
            eliminarLibro(libro.isbn);
        });

        li.appendChild(btnEliminar);
        listado.appendChild(li);
    });
}

function agregarLibro(libro: Libro): void {
    catalogo.push(libro);
    renderizar();
}

function eliminarLibro(isbn: string): void {
    catalogo = catalogo.filter(l => l.isbn !== isbn);
    renderizar();
}

function validarFormulario(): Libro | null {
    if (!inputTitulo || !inputAutor || !inputPrecio || !inputDisponible || !errorForm) return null;

    errorForm.textContent = "";

    if (inputTitulo.value === "" || inputAutor.value === "" || inputPrecio.value === "") {
        errorForm.textContent = "Todos los campos son obligatorios";
        return null;
    }

    const precio = Number(inputPrecio.value);

    if (precio <= 0) {
        errorForm.textContent = "El precio debe ser mayor a 0";
        return null;
    }

    const nuevoLibro: Libro = {
        isbn: "AUTO-" + Date.now(),
        titulo: inputTitulo.value,
        autor: inputAutor.value,
        precio: precio,
        disponible: inputDisponible.checked
    };

    return nuevoLibro;
}

if (btnAgregar) {
    btnAgregar.addEventListener("click", () => {
        const libro = validarFormulario();

        if (libro) {
            agregarLibro(libro);

            if (inputTitulo && inputAutor && inputPrecio) {
                inputTitulo.value = "";
                inputAutor.value = "";
                inputPrecio.value = "";
            }
        }
    });
}

renderizar();