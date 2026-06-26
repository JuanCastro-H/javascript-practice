/*
* Mientras el usuario acepte un confirm():

    "¿Desea consultar una fecha?"

* Pedir mediante prompt():

    "Ingrese un número del 0 al 6"

    Donde:

    0 = Domingo
    1 = Lunes
    2 = Martes
    3 = Miércoles
    4 = Jueves
    5 = Viernes
    6 = Sábado

* Si el número ingresado es:

    0 o 6:
        Mostrar:
        "Es fin de semana."

    Cualquier otro número:
        Mostrar:
        "Es un día laboral."

* Si el usuario ingresa un número
    menor que 0 o mayor que 6:

    Mostrar:
    "Día inválido."

* Al terminar el programa mostrar:

    - Cantidad de consultas realizadas.
    - Cantidad de fines de semana.
    - Cantidad de días laborales.
*/

var consultarNuevaFecha = window.confirm("Desea consultar una nueva fecha?");
var diaSemana = null;
var estadoSemana = null;
var contadorConsultas = 0;
var cantidadFinSemana = 0;
var cantidadDiaLaboral = 0;

while (consultarNuevaFecha == true){

    contadorConsultas ++;

    numeroSemana = Number(window.prompt("Ingrese el numero de la semana"));

    if (numeroSemana == 0 || numeroSemana == 6){
        estadoSemana = "Fin de semana";
        cantidadFinSemana ++;
        console.log("Actualmente es: " + estadoSemana);
    }
    else if (numeroSemana >= 1 && numeroSemana <=5){
        estadoSemana = "Dia laboral";
        cantidadDiaLaboral ++;
        console.log("Actualmente estas en un: " + estadoSemana);
    } else {
        estadoSemana = "Dia invalido";
        console.log(estadoSemana);
    }

    consultarNuevaFecha = window.confirm("Desea consultar una nueva fecha?");

}   

console.log("La cantidad total de consultas realizadas es de: " + contadorConsultas);
console.log("La cantidad de fines de semana es de: " + cantidadFinSemana);
console.log("La cantidad de dias laborales es de: " + cantidadDiaLaboral);

