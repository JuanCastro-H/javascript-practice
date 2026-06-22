/*
Solicitar 10 números mediante prompt().

* Utilizar un bucle.

* Contar cuántos números positivos ingresó.

* Contar cuántos negativos ingresó.

* Mostrar ambos resultados al finalizar.
*/

var positivo = 0;
var negativo = 0;

for (i=0 ; i<10 ; i++){

    numero = Number(window.prompt("Ahora ingrese el numero: " + (i + 1)));

    if (numero >= 0){
        positivo ++;
    } else {
        negativo ++;
    }
}

console.log("La cantidad de numeros positivos fue: " + positivo);
console.log("La cantidad de numeros negativos fue: " + negativo);