/************************************************
EJERCICIO 28 — REGISTRO DE TEMPERATURAS
Dificultad: Avanzado
************************************************

Problema:

Debes obtener las temperaturas más altas.

Entrada:

[32, 25, 40, 18, 37, 29]

Métodos recomendados:

- sort
- slice

Requisitos mínimos:

- Mostrar las tres temperaturas más altas.

Bonus:

- Mostrar también las tres más bajas.
*/

var temperaturas = [32, 25, 40, 18, 37, 29];

function obtenerTemperaturaAlta (temperaturas){

    temperaturas.sort((a,b) => b - a);

    const topTemperaturas = temperaturas.slice(0, 2);

    console.log("Top 3 Temperaturas mas altas");
    temperaturas.forEach(element => {
        console.log(element)
    });
};

obtenerTemperaturaAlta(temperaturas);