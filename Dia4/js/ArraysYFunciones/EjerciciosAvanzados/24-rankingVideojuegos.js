/************************************************
EJERCICIO 24 — RANKING DE VIDEOJUEGOS
Dificultad: Avanzado
************************************************

Problema:

Un videojuego almacena las puntuaciones
de todos sus jugadores.

Debes mostrar el Top 5.

Entrada:

[500, 1200, 850, 300, 2100, 950, 700]

Métodos recomendados:

- sort
- slice

Bonus:

- Permitir elegir cuántos jugadores mostrar.
*/

var puntuaciones = [500, 1200, 850, 300, 2100, 950, 700];

function topPuntajes (puntuaciones, cantidadJugadores){

    puntuaciones.sort((a, b) => b - a);

    let top = puntuaciones.slice(0, cantidadJugadores);

    return top;
};

const tamanioTop = Number(window.prompt("Ingrese el tamanio del top"));

const topPuntuaciones = topPuntajes(puntuaciones, tamanioTop);

alert("El top de puntuaciones fue: " + topPuntuaciones);