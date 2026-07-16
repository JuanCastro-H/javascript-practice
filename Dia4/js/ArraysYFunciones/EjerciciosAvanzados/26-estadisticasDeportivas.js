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

function promedioPuntos (puntosPartidos){

    let sumaTotal = puntosTotales(puntosPartidos);

    let promedio = sumaTotal / puntosPartidos.length;

    if (promedio >= 85){
        console.log("El promedio de puntos de los partidos fue mayor a 85");
    } else {
        console.log("El promedio de los partidos fue menor a 85");
    }

    return promedio
}


const pTotales = puntosTotales(puntosPartidos);
console.log("Cantidad de puntos totales de todos los partidos: " + pTotales);

const promedio = promedioPuntos(puntosPartidos);
console.log("El promedio fue de: " + promedio);
