function verificarUsuario() {
    var user = document.getElementById("nombre").value;
    var pass = document.getElementById("contraseña").value;

    if (user == "Admin" && pass == "Admin") {
        window.location.href = "paginas/temario.html"
    }
}