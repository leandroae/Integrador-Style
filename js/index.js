const menu = document.querySelector("#menu");
const mostrarMenu = document.querySelector("#mostrar-menu");
const cerrarMenu = document.querySelector("#cerrar-menu")

mostrarMenu.onclick = () => {
    menu.style.display = "block";
}

cerrarMenu.onclick = () => {
    menu.style.display = "none";
}
const usuario = document.querySelector("#usuario");
const menuUsuario = document.querySelector("#menu-usuario");

usuario.onclick = () => {
    menuUsuario.classList.toggle("menu-usuario-visible")
}

