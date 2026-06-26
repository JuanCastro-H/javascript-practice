/*
Mientras el usuario acepte:

    "¿Desea consultar una hora?"

Pedir una hora entre 0 y 23.

Si la hora está entre:

0 y 5:
    "Madrugada"

6 y 11:
    "Mañana"

12 y 18:
    "Tarde"

19 y 23:
    "Noche"

Si la hora es inválida:
    "Hora incorrecta"

Al finalizar mostrar cuántas consultas hubo
de cada período.
*/

var consultarHora = window.confirm("Desea consultar una hora?");
var contadorMadrugada = 0;
var contadorManiana = 0;
var contadorTarde = 0;
var contadorNoche = 0;
var contadorInvalida = 0;

while (consultarHora == true){

    hora = Number(window.prompt("Ingrese la hora a consultar"));

    if (hora >= 0 && hora <= 5){
        contadorMadrugada ++;
        console.log("Estas de madrugada.");
    } else if (hora >= 6 && hora <= 11 ){
        contadorManiana ++;
        console.log("Estas de maniana");
    } else if (hora >= 12 && hora <= 18){
        contadorTarde ++;
        console.log("Estas de Tarde");
    } else if (hora >= 19 && hora <= 23){
        contadorNoche ++;
        console.log("Estas de Noche");
    } else {
        contadorInvalida ++;
        console.log("Hora invalida.");
    }

    consultarHora = window.confirm("Desea consultar una hora?");
}

console.log("ESTADISTICAS");
console.log("Horario Madrugada: " + contadorMadrugada);
console.log("Horario Maniana: " + contadorManiana);
console.log("Horario Tarde: " + contadorTarde);
console.log("Horario Noche: " + contadorNoche);