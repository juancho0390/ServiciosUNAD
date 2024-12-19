
// funcion para verificar resultados del test
function results() {
    var selected = document.querySelectorAll(".correct");
    var etiquetas = document.querySelectorAll(".etiqueta");
    var resultadoLbl = document.getElementById("resultado");
    var respuestasCorrectas = document.getElementById("counter");
    var lbl1 = document.getElementById("lbl1");
    var retro = document.getElementById("retro");
    var counter = 0
    for(var i=0; i<5; i++){
        if(selected[i].checked){
            counter = counter + 1
            etiquetas[i].textContent = "Correcto"
            etiquetas[i].style.color = "#008000"
                   
        }
        else{
            etiquetas[i].textContent = "Incorrecto"
            etiquetas[i].style.color = "#ff8a8a"
        }
    }
    
    if(counter>=3){
        resultadoLbl.textContent = "¡FELICITACIONES!"
        respuestasCorrectas.textContent = counter
        lbl1.textContent = "APROBADO"
        retro.style.backgroundColor = "#b4fc9c"
    }
    else {
        resultadoLbl.textContent = "...QUE LASTIMA..."
        respuestasCorrectas.textContent = counter
        lbl1.textContent = "REPROBADO"
        retro.style.backgroundColor = "#ff8a8a"
    }
}




//linea para mostrar la vista inicial sin actualizar la pagina
var elementos = document.querySelectorAll(".view");
elementos[0].style.display = "block"


//Funcion para las vistas sin actualizar la pagina 
function vista(numero) {
    var elementos = document.querySelectorAll(".view");
    elementos.forEach(function(elementos){
        elementos.style.display = "none";
    });

    elementos[numero].style.display = "block";
}

