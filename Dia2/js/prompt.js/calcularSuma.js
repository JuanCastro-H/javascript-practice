/*
Ingresar dos números mediante prompt().

* Calcular la suma.

* Si la suma es mayor a 100 mostrar:
"La suma es grande".

* Si es menor o igual a 100 mostrar:
"La suma es pequeña".
*/

var numero1 = Number(window.prompt("Ingrese el primer numero."));

var numero2 = Number(window.prompt("Ingrese el segundo numero"));

var suma = numero1 + numero2;

if (suma >= 100){
    console.log("El valor de la suma " + suma + " es grande.");
} else if (suma >= 0 && suma < 100){
    console.log("El valor de la suma: " + suma + " es chico.");
} else {
    console.log("El valor de la suma: " + suma + " Es negativo.");
}