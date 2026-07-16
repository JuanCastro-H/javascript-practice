/************************************************
EJERCICIO 25 — ENCUESTA DE SATISFACCIÓN
Dificultad: Avanzado
************************************************

Problema:

Una empresa realizó una encuesta.

Las respuestas negativas son menores a 3.

Entrada:

[5, 4, 2, 1, 5, 3, 2]

Métodos recomendados:

- some
- filter

Requisitos mínimos:

- Detectar si existen respuestas negativas.
- Obtener todas las respuestas negativas.

Bonus:

- Calcular el porcentaje de respuestas negativas.
*/

var resultadosEncuesta = [5, 4, 4, 5, 5, 3, 10];

function buscarRespuestasNegativas (resultadosEncuesta) {

    return resultadosEncuesta.some(resultado => resultado < 3);

};


