/************************************************
EJERCICIO 23 — SISTEMA DE CALIFICACIONES
Dificultad: Avanzado
************************************************

Problema:

Debes determinar si todos los alumnos aprobaron
y calcular el promedio general.

Entrada:

[7, 8, 9, 6, 10]

Métodos recomendados:

- every
- reduce

Requisitos mínimos:

- Una función debe verificar aprobados.
- Otra debe calcular el promedio.

Bonus:

- Mostrar la nota más alta.
*/

var calificaciones = [7, 8, 9, 6, 10];

function aprobados (calificaciones) {
    return calificaciones.every(calificacion => calificacion >= 6);
};

