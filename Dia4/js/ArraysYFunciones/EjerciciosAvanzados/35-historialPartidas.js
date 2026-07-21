/************************************************
EJERCICIO 35 — HISTORIAL DE PARTIDAS
Dificultad: Avanzado
************************************************

Problema:

Un jugador desea ver sus últimas partidas
comenzando por la más reciente.

Entrada:

["G1", "G2", "G3", "G2", "G4", "G5"]

Métodos recomendados:

- lastIndexOf
- slice
- reverse

Requisitos mínimos:

- Buscar una partida específica.
- Obtener las últimas partidas.
- Invertir el orden.

Bonus:

- Permitir elegir cuántas partidas mostrar.
*/

var partidas = ["G1", "G2", "G3", "G2", "G4", "G5"];

function encontrarPartida (partidas, partida){
    let indice = partidas.lastIndexOf(partida);

    if (indice === -1){
        alert("Esa partida no existe.")
    }

    return partidas[indice];
}


function obtenerUltimasPartidas (partidas){
    let numeroPartidas = partidas.length;
    let ultimasPartidas = partidas.slice(numeroPartidas-3);

    return ultimasPartidas
}

function invertirOrdenPartidas (partidas){

    return partidas.inverse();
}

let partidaSolicitada = window.prompt("Ingrese la partida a buscar");

console.log(" --- Buscar Partida ---")
const partidaBuscada = encontrarPartida(partidas, partidaSolicitada);
partidaBuscada.forEach(partida => {
    console.log(partida);
});

console.log(" --- Ultimas Partidas Jugadas ---")
const topPartidasFinales = obtenerUltimasPartidas(partidas);
topPartidasFinales.forEach(partida => {
    console.log(partida);
});

console.log(" --- Historial De Partidas Invertido ---")
const partidasInvertidas = invertirOrdenPartidas(partidas);
partidasInvertidas.forEach(partida => {
    console.log(partida);
});