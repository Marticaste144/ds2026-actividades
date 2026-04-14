function agregarProducto() {

    let input = document.getElementById("producto");
    let lista = document.getElementById("lista");

    let nombre = input.value;

    if (nombre === "") {
        alert("Ingrese un producto");
        return;
    }

    let li = document.createElement("li");
    li.innerText = nombre;

    let boton = document.createElement("button");
    boton.innerText = "Eliminar";

    boton.onclick = function () {
        lista.removeChild(li);
        actualizarContador();
    };

    li.appendChild(boton);
    lista.appendChild(li);

    input.value = "";

    actualizarContador();
}

function actualizarContador() {

    let lista = document.getElementById("lista");
    let contador = document.getElementById("contador");

    let cantidad = lista.children.length;

    contador.innerText = cantidad + " productos en la lista";
}