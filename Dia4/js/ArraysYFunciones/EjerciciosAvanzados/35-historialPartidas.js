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

    return partidas[indice];
}


function obtenerUltimasPartidas (partidas){
    let numeroPartidas = partidas.length;
    let ultimasPartidas = partidas.slice(numeroPartidas-3);

    return ultimasPartidas
}