function verificarUsuario() {
    const user = document.getElementById("nombre").value;
    const pass = document.getElementById("contraseña").value;

    if (user == "Admin" && pass == "Admin") {
        window.location.href = "/paginas/temario.html"
    }
}