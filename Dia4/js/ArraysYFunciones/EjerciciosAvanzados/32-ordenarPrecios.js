/************************************************
EJERCICIO 32 — ORDENAR PRODUCTOS POR PRECIO
Dificultad: Avanzado
************************************************

Problema:

Ordenar productos por precio y obtener
solo sus nombres.

Entrada:

[
    { nombre: "Teclado", precio: 120 },
    { nombre: "Mouse", precio: 80 },
    { nombre: "Monitor", precio: 700 }
]

Métodos recomendados:

- sort
- map

Bonus:

- Permitir orden descendente.
*/

var productos = [
    { nombre: "Teclado", precio: 120 },
    { nombre: "Mouse", precio: 80 },
    { nombre: "Monitor", precio: 700 }
];

function ordernarProductos (productos) {

    return productos.sort((a,b) => b.precio - a.precio);

}

