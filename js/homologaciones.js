
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

//funcion para descargar archivos pdf
function descargarPDF (n) {

    switch(n) {
        case 1:
            var url = '../Assets/Docs Pdf/Homologacion/Homologacion Externa.pdf';  // Ruta relativa al archivo PDF
            var enlace = document.createElement('a');
            

            
            // Configuración del enlace para descargar el archivo
            enlace.href = url; // Ruta al archivo PDF dentro del proyecto
            enlace.download = 'Homologacion Externa.pdf'; // Nombre del archivo a descargar
            
            // Disparar el enlace para iniciar la descarga
            enlace.click();
            

            // Eliminar el enlace después de la descarga
            enlace.remove();
            break;

        case 2:
            var url = '../Assets/Docs Pdf/Homologacion/Homologacion Interna.pdf';  // Ruta relativa al archivo PDF
            var enlace = document.createElement('a');

            
            // Configuración del enlace para descargar el archivo
            enlace.href = url; // Ruta al archivo PDF dentro del proyecto
            enlace.download = 'Homologacion Interna.pdf'; // Nombre del archivo a descargar
            
            // Disparar el enlace para iniciar la descarga
            enlace.click();

            // Eliminar el enlace después de la descarga
            enlace.remove();

            break;

        case 3:
            var url = '../Assets/Docs Pdf/Homologacion/Homologacion por Convenio.pdf';  // Ruta relativa al archivo PDF
            var enlace = document.createElement('a');

            
            // Configuración del enlace para descargar el archivo
            enlace.href = url; // Ruta al archivo PDF dentro del proyecto
            enlace.download = 'Homologacion por Convenio.pdf'; // Nombre del archivo a descargar
            
            // Disparar el enlace para iniciar la descarga
            enlace.click();

            // Eliminar el enlace después de la descarga
            enlace.remove();

            break;

            case 4:
                var url = '../Assets/Docs Pdf/Homologacion/Verificacion de Acuerdos de Homologacion.pdf';  // Ruta relativa al archivo PDF
                var enlace = document.createElement('a');
    
                
                // Configuración del enlace para descargar el archivo
                enlace.href = url; // Ruta al archivo PDF dentro del proyecto
                enlace.download = 'Verificacion de Acuerdos de Homologacion.pdf'; // Nombre del archivo a descargar
                
                // Disparar el enlace para iniciar la descarga
                enlace.click();
    
                // Eliminar el enlace después de la descarga
                enlace.remove();
    
                break;
    }

    
    };
    

    







