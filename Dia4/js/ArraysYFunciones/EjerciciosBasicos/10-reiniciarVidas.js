/************************************************
EJERCICIO 10 — REINICIAR VIDAS
Dificultad: Básico
************************************************

Problema:

Un juego almacena las vidas de varios jugadores.
Después de una nueva partida, todos deben comenzar
con 3 vidas.

Entrada:

[1, 0, 2, 1, 0]

Nuevo valor:

3

Restricciones:

- Debe existir una función.
- Debe devolver el array actualizado.

Métodos recomendados:

- fill

Requisitos mínimos:

- El nuevo valor debe recibirse por parámetro.

Bonus:

- Permitir indicar desde qué posición comenzar el reinicio.

Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
- ¿Para qué sirven?
- ¿Por qué los elegiste?
- ¿Qué devuelve cada método?
- ¿Qué aprendiste?
*/

var vidasJugadores = [1, 0, 2, 1, 0];
var vidasNuevas;
var validarVidas;
var validarJugador;
var contador = 0;
var contador2 = 0;

function reiniciarVidasJugadores (vidasJugadores, vidas, jugador){

    let vidasOriginalesJugadores = vidasJugadores.slice(0);
    let revertidas = vidasJugadores.fill(vidas, jugador);

    return {
        vidasOrginales : vidasOriginalesJugadores,
        vidasRevertidas : revertidas
    }

}


let verificarDatos = true;

while (verificarDatos){
    var vidas = Number(window.prompt("Indique la cantidad de vidas con la que empezaran los jugadores","1-3"));
    var jugador = Number(window.prompt("Indique aparitir de que jugador se aplicara el reinicio de vidas","0-" + (vidasJugadores.length-1)));

    if (vidas >= 1 && vidas <= 3){
        validarVidas = true;
    } else {
        validarVidas = false;
    }

    if (jugador >= 0 && jugador <= vidasJugadores.length){
        validarJugador = true;
    } else{
        validarJugador = false;
    }

    if (validarVidas && validarJugador){
        console.log("Datos de vidas y jugadores validos");
        break;
    } else {
        alert("Los datos de las vidas o jugadores son invalidos")
    }

}


vidasNuevas = reiniciarVidasJugadores(vidasJugadores, vidas, jugador)

console.log(" --- Vidas Originales --- ")
vidasNuevas.vidasOrginales.forEach(vidas => {
    contador2 ++;
    console.log("Jugador " + contador2 + " Tiene " + vidas + " Vidas.");
});

console.log(" --- Vidas Revertidas --- ")
vidasNuevas.vidasRevertidas.forEach(vidas => {
    contador ++;
    console.log("Jugador " + contador + "Tiene " + vidas + "Vidas.");
});

/*

Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
    .slice()
    .fill()
    .forEach()

- ¿Para qué sirven?
    1: Sirve para crear una copia supercial o total de los elementos de un array.
    2: Sirve para modificar todos los datos de los elementos de un array por 1 en especifico.
    3: Sirve para aplicar una funcion a cada elemento del array.

- ¿Por qué los elegiste?
    1: Para hacer una copia original de las vidas antes de modificarlas y poder comparar.
    2: Para cambiar el valor de las vidas por uno que se pueda introducir por prompt entre 1 y 3.
    3: Para imprimir la lista original y la reiniciada de vidas.

- ¿Qué devuelve cada método?
    1: Una copia parcial o completa de un array.
    2: Un array con todos sus elementos reemplazados por un valor especifico.
    3: Los resultados de cada funcion a los elementos del array.

- ¿Qué aprendiste?
    reforce el uso de objetos, slice y aprendi fill

*/