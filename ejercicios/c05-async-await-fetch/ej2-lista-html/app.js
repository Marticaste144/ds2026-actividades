async function obtenerUsuarios() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const usuarios = await response.json();
  return usuarios;
}

async function main() {
  const loading = document.getElementById("loading");
  const lista = document.getElementById("lista");
  const error = document.getElementById("error");

  try {
    const usuarios = await obtenerUsuarios();

    loading.style.display = "none";

    usuarios.forEach(u => {
      const li = document.createElement("li");
      li.textContent = `${u.name} - ${u.email}`;
      lista.appendChild(li);
    });

  } catch (e) {
    loading.style.display = "none";
    error.textContent = "Error al cargar usuarios";
  }
}

main();