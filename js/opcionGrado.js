
//linea para mostrar la vista inicial sin actualizar la pagina
var elementos = document.querySelectorAll(".view");
elementos[0].style.display = "block"


//Funcion para las vistas sin actualizar la pagina 
function vista(numero) {
    var elementos = document.querySelectorAll(".view");
    elementos.forEach(function (elementos) {
        elementos.style.display = "none";
    });

    elementos[numero].style.display = "block";
}

//funcion para descargar archivos pdf
function descargarPDF(n) {

    switch (n) {
        case 1:
            var url = '../Assets/Docs Pdf/Opcion de Grado/Creditos de Posgrado.pdf';  // Ruta relativa al archivo PDF
            var enlace = document.createElement('a');



            // Configuración del enlace para descargar el archivo
            enlace.href = url; // Ruta al archivo PDF dentro del proyecto
            enlace.download = 'Creditos de Posgrado.pdf'; // Nombre del archivo a descargar

            // Disparar el enlace para iniciar la descarga
            enlace.click();


            // Eliminar el enlace después de la descarga
            enlace.remove();
            break;

        case 2:
            var url = '../Assets/Docs Pdf/Opcion de Grado/diplomado de profundizacion.pdf';  // Ruta relativa al archivo PDF
            var enlace = document.createElement('a');


            // Configuración del enlace para descargar el archivo
            enlace.href = url; // Ruta al archivo PDF dentro del proyecto
            enlace.download = 'Diplomado de Profundizacion.pdf'; // Nombre del archivo a descargar

            // Disparar el enlace para iniciar la descarga
            enlace.click();

            // Eliminar el enlace después de la descarga
            enlace.remove();

            break;

        case 3:
            var url = '../Assets/Docs Pdf/Opcion de Grado/Monografia.pdf';  // Ruta relativa al archivo PDF
            var enlace = document.createElement('a');


            // Configuración del enlace para descargar el archivo
            enlace.href = url; // Ruta al archivo PDF dentro del proyecto
            enlace.download = 'Monografia.pdf'; // Nombre del archivo a descargar

            // Disparar el enlace para iniciar la descarga
            enlace.click();

            // Eliminar el enlace después de la descarga
            enlace.remove();

            break;

        case 4:
            var url = '../Assets/Docs Pdf/Opcion de Grado/pasantia.pdf';  // Ruta relativa al archivo PDF
            var enlace = document.createElement('a');


            // Configuración del enlace para descargar el archivo
            enlace.href = url; // Ruta al archivo PDF dentro del proyecto
            enlace.download = 'Pasantia.pdf'; // Nombre del archivo a descargar

            // Disparar el enlace para iniciar la descarga
            enlace.click();

            // Eliminar el enlace después de la descarga
            enlace.remove();

            break;

        case 5:
            var url = '../Assets/Docs Pdf/Opcion de Grado/proyecto aplicado.pdf';  // Ruta relativa al archivo PDF
            var enlace = document.createElement('a');


            // Configuración del enlace para descargar el archivo
            enlace.href = url; // Ruta al archivo PDF dentro del proyecto
            enlace.download = 'Proyecto Aplicado.pdf'; // Nombre del archivo a descargar

            // Disparar el enlace para iniciar la descarga
            enlace.click();

            // Eliminar el enlace después de la descarga
            enlace.remove();

            break;

        case 6:
            var url = '../Assets/Docs Pdf/Opcion de Grado/proyecto de investigacion.pdf';  // Ruta relativa al archivo PDF
            var enlace = document.createElement('a');


            // Configuración del enlace para descargar el archivo
            enlace.href = url; // Ruta al archivo PDF dentro del proyecto
            enlace.download = 'Proyecto de Investigacion.pdf'; // Nombre del archivo a descargar

            // Disparar el enlace para iniciar la descarga
            enlace.click();

            // Eliminar el enlace después de la descarga
            enlace.remove();

            break;
    }


};



function next() {
    window.location.href = "../paginas/testOpcionGrado.html"
}






