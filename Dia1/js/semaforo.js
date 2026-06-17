/* 
* Pide al usuario ingresar un color mediante javascript

* Y mediante el uso de la condicional switch mostrar mediante
un console.log() o un alert() la eleccion del color rojo, azul y amarillo.

* Si el color ingresado por el usuario no esta, indicar con un mensaje que no es valido.
*/

// Pedir al usuario que ingrese un color
var color = prompt("Ingrese un color");


// Condicional tipo switch
switch (color) {
    case "rojo":
    console.log("Color rojo");
    break;

    case "azul":
    console.log("Color azul")
    break;

    case "amarillo":
    console.log("Color amarillo");
    break;

    default:
        console.log("El color ingresado no es valido");
}