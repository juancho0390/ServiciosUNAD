
//linea para ejecutar funciones JS tan pronto la pagina se refresca
var elementos = document.querySelectorAll(".view");
elementos[0].style.display = "block"








function vista(numero) {
    var elementos = document.querySelectorAll(".view");
    elementos.forEach(function(elementos){
        elementos.style.display = "none";
    });

    elementos[numero].style.display = "block";
    
    console.log("no hay error");
}






