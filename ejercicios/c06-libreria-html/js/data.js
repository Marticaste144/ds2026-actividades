async function buscarLibros() {
  const texto = document.getElementById("busqueda").value;

  if (texto === "") {
    alert("Escribí algo");
    return;
  }

  const res = await fetch(`https://openlibrary.org/search.json?q=${texto}`);
  const data = await res.json();

  const libros = data.docs.slice(0, 10);

  let html = "";

  libros.forEach(libro => {
    html += `
      <div class="col-md-3 mb-4">
        <div class="card">
          <div class="card-body">
            <h5>${libro.title}</h5>
            <p>${libro.author_name ? libro.author_name[0] : "Sin autor"}</p>
            <p>${libro.first_publish_year || "Sin año"}</p>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("resultados").innerHTML = html;
}