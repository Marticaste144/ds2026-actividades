interface Usuario {
  id: number;
  name: string;
  email: string;
}

async function obtenerUsuarios(): Promise<Usuario[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error("Error en la API");
  }
  return await response.json() as Usuario[];
}

async function main() {
  const loading = document.getElementById("loading") as HTMLElement;
  const lista = document.getElementById("lista") as HTMLElement;
  const error = document.getElementById("error") as HTMLElement;

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