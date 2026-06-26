/*
Mientras existan alumnos:

Pedir:

- Nombre.
- Hora de llegada.

Si llegó:

Antes de las 7:
    "Muy temprano"

Entre 7 y 7:30:
    "Puntual"

Después de las 7:30:
    "Tardanza"

Contar:

- Puntuales.
- Tardanzas.
- Muy tempranos.

Al finalizar indicar qué grupo tuvo
la mayor cantidad de alumnos.
*/

var registrarAlumnos = window.confirm("Deseaa registrar otro alumno?");
var nombre;
var hora;
var minutos;
var totalMinutos;
var puntuales = 0;
var tardanzas = 0;
var temprano = 0;

while (registrarAlumnos == true){

    nombre = window.prompt("Ingrese el nombre del alumno");
    hora = Number(window.prompt("Ingrese su hora de llegada","h"));
    minutos = Number(window.prompt("Ahora ingrese los minutos","mm"));

    totalMinutos = (hora * 60) + minutos;


    if (totalMinutos < 420){
        temprano ++;
    } else if (totalMinutos >= 420 && totalMinutos <= 450){
        puntuales ++;
    } else if (totalMinutos > 450){
        tardanzas ++;
    }

    registrarAlumnos = window.confirm("Deseaa registrar otro alumno?");
}

console.log("La cantiad de alumnos que llegaron temprano fue de: " + temprano);
console.log("La cantidad de alumnos que llegarona tiempo fue de: " + puntuales);
console.log("La cantidad de alumnos que se tardaron fue de: " + tardanzas);

if (temprano == tardanzas && temprano == puntuales){
    console.log("El tipo de llegada predominante fue un empate");
} else if (temprano > tardanzas && temprano > puntuales){
    console.log("El tipo de llegada predominante fue temprano con " + temprano + " Alumnos.");
} else if (puntuales > temprano && puntuales > tardanzas){
    console.log("El tipo de llegada predominante fue puntuales con " + puntuales + " Alumnos");
} else if (tardanzas > temprano && tardanzas > puntuales){
    console.log("El tipo de llegada predominante fueron tardanzas con " + tardanzas + " Alumnos");
} else {
    console.log("No hubo un claro tipo de llegada predominante");
}