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
    const cover = libro.cover_i 
      ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`
      : "https://via.placeholder.com/150";

    html += `
      <div class="col-md-3 mb-4">
        <div class="card">
          <img src="${cover}" class="card-img-top">
          <div class="card-body text-center">
            <h6>${libro.title}</h6>
            <p>${libro.author_name ? libro.author_name[0] : "Sin autor"}</p>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("resultados").innerHTML = html;
}