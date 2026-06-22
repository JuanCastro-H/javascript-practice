/*
Crear un programa que utilice un bucle.

* Mientras el usuario acepte un confirm()
seguir ejecutando el programa.

* Dentro del bucle solicitar un número.

* Indicar si es:

    - Par o impar.
    - Positivo o negativo.

* Cuando el usuario cancele el confirm(),
mostrar:

"Programa finalizado".
*/

var confirmarAccion = window.confirm("Desea verificar un numero?");

while (confirmarAccion == true){

    numeroVerificar = Number(window.prompt("Ingrese el numero a verificar."));

    if (numeroVerificar % 2 == 0){
        console.log("Tu numero " + numeroVerificar + " es Par");
    } else if (numeroVerificar % 2 > 0) {
        console.log("Tu numero " + numeroVerificar + " es Impar.");
    } else {
        console.log("Accion o dato invalido.")
    }

    console.log("------------------------------");

    var confirmarAccion = window.confirm("Desea verificar otro numero?")
}
console.log("Programa finalizado.");