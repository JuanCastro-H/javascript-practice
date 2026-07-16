/************************************************
EJERCICIO 26 — ESTADÍSTICAS DEPORTIVAS
Dificultad: Avanzado
************************************************

Problema:

Un equipo registra los puntos obtenidos
en cada partido.

Entrada:

[80, 90, 75, 100, 95]

Métodos recomendados:

- reduce
- length

Requisitos mínimos:

- Calcular el total.
- Calcular el promedio.

Bonus:

- Determinar si el promedio supera 85 puntos.
*/

var puntosPartidos = [55, 90, 75, 100, 95];

function puntosTotales (puntosPartidos){

    let puntosTotales = puntosPartidos.reduce((acomulador, puntaje) => {
        acomulador = acomulador + puntaje;
        return acomulador;
    }, 0);

    return puntosTotales;
};



