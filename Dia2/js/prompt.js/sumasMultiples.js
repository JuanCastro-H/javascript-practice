/*
Solicitar al usuario 5 números mediante prompt().

* Utilizar un bucle para pedirlos.

* Ir acumulando la suma total.

* Al finalizar mostrar:

"La suma total es: X"

* Indicar además si la suma es par o impar.
*/

var suma = 0;

for (i=0 ; i<5 ; i++){
    numero = Number(window.prompt("Ingrese el numero: " +  (i+1)));
    suma = suma + numero;
}

console.log("La suma final es: " + suma);