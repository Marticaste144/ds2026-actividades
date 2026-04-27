interface LibroOL {
  title: string;
  author_name?: string[];
  first_publish_year?: number;
}

async function buscarLibros(query: string): Promise<LibroOL[]> {
  const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);

  if (!response.ok) {
    throw new Error("Error en la API");
  }

  const data = await response.json();
  return data.docs;
}

async function main() {
  const input = document.getElementById("inputBusqueda") as HTMLInputElement;
  const boton = document.getElementById("btnBuscar")!;
  const resultados = document.getElementById("resultados")!;
  const error = document.getElementById("error")!;

  boton.addEventListener("click", async () => {

    const texto = input.value.trim();

    // VALIDACIÓN
    if (texto === "") {
      error.textContent = "Ingresá un texto";
      return;
    }

    error.textContent = "";
    resultados.innerHTML = "";

    try {
      const libros = await buscarLibros(texto);

      libros.slice(0, 10).forEach(libro => {

        const div = document.createElement("div");

        const titulo = document.createElement("h3");
        titulo.textContent = libro.title;

        const autor = document.createElement("p");
        autor.textContent = libro.author_name
          ? libro.author_name[0]
          : "Autor desconocido";

        const año = document.createElement("p");
        año.textContent = libro.first_publish_year
          ? libro.first_publish_year.toString()
          : "Año desconocido";

        div.appendChild(titulo);
        div.appendChild(autor);
        div.appendChild(año);

        resultados.appendChild(div);
      });

    } catch (e) {
      error.textContent = "Error al buscar libros";
    }
  });
}

main();