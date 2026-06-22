/*
Ingresar un número mediante prompt().

* Si el número es mayor a 0 mostrar:
"El número es positivo".

* Si es menor a 0 mostrar:
"El número es negativo".

* Si es igual a 0 mostrar:
"El número es cero".
*/

var numero = Number(window.prompt("Ingrese un numero"));

if (numero == 0){
    console.log("TU numero es 0");
} else if (numero > 0){
    console.log("Tu numero es postivio");
} else if (numero < 0){
    console.log("Tu numero es negativo");
} else {
    console.log("Accion o dato invalido");
}