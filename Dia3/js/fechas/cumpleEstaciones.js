/*
Mientras el usuario quiera registrar personas:

Pedir:

- Nombre.
- Mes de cumpleaños.

Si el mes es:

12,1,2:
    Verano

3,4,5:
    Otoño

6,7,8:
    Invierno

9,10,11:
    Primavera

Contar cuántos cumpleaños hay
en cada estación.

Al finalizar mostrar los resultados.
*/

var registrarPersona = window.confirm("Desea registrar una nueva persona?");
var contadorVerano = 0;
var contadorOtonio = 0;
var contadorInvierno = 0;
var contadorPrimavera = 0;



while (registrarPersona == true){

    nombre = window.prompt("Cual es su nombre?");
    cumpleMes = Number(window.prompt("Cual es el mes de su cumpleanios?", "1-12"));

    if (cumpleMes == 12 || cumpleMes == 1 || cumpleMes == 2){
        contadorVerano ++;
    } else if (cumpleMes >= 3 && cumpleMes <= 5){
        contadorOtonio ++;
    } else if (cumpleMes >= 6 && cumpleMes <= 8){
        contadorInvierno ++;
    } else if (cumpleMes >= 9 && cumpleMes <=11){
        contadorPrimavera ++;
    } else {
        alert("Numero de mes invalido, por favor ingrese un numero del 1-12.");
    }

    registrarPersona = window.confirm("Desea registrar una nueva persona?");
}

console.log("En el verano hubieron " + contadorVerano + " Cumples.");
console.log("En el otonio hubieron " + contadorOtonio + " Cumples.");
console.log("En el invierno hubieron " + contadorInvierno + " Cumples.");
console.log("En la primavera hubieron " + contadorPrimavera + " Cumples.");