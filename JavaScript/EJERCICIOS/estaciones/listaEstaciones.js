// Función que devuelve las filas con sus elementos
function csvToArray(estaciones) {
    let filas = estaciones.trim().split("\n");
    return filas.map(fila => fila.trim().split(";"));
}
    
let resultado = csvToArray(estaciones);
//console.log(resultado);


// Booleano para obtener los encabezados en la primera vuelta
let firstRow = true;
let table = "";

resultado.forEach(e => {
    // Elementos de la primera fila (encabezados)
    if(firstRow) {
        table += "<thead class=\"table-dark table-striped\"><tr>";

        e.forEach(e2 => {
            table += "<th>" + e2 + "</th>";
        });

        table += "</tr></thead>";
        firstRow = false;

    } else { // Elementos del cuerpo
        table += "<tbody><tr>";

        e.forEach(e2 => {
            table += "<td>" + e2 + "</td>";
        });

        table += "</tr></tbody>";
    }
});

// Obtenemos el elemento table del HTML
const list = document.querySelector(".listE");
list.innerHTML = table;