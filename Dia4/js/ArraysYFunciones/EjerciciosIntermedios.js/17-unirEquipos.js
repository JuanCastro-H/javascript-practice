/************************************************
EJERCICIO 17 — UNIR EQUIPOS
Dificultad: Intermedio
************************************************

Problema:

Dos equipos escolares deben unirse
para un torneo.

Entrada:

Equipo A:
["Ana", "Juan"]

Equipo B:
["Pedro", "Lucía"]

Métodos recomendados:

- concat

Restricciones:

- No modificar los arrays originales.

Bonus:

- Agregar un tercer equipo.

Análisis obligatorio al finalizar:

- ¿Qué devuelve concat?
- ¿Modifica el array original?
*/

var equipoA = ["Ana", "Juan"];

var equipoB = ["Pedro", "Lucía"];

const unirEquipos = (equipoA, equipoB) => {

    let equipoCompleto = equipoA.concat(equipoB);

    return equipoCompleto
}

const equipoUnido = unirEquipos(equipoA, equipoB);

console.log(" --- EquipoA ---");
console.log(equipoA);
console.log(" --- EquipoB ---");
console.log(equipoB);
console.log(" --- EquipoCompleto ---");
console.log(equipoUnido);

/*
Análisis obligatorio al finalizar:

- ¿Qué devuelve concat?
    Un nuevo array producto de unir o concatenar 2

- ¿Modifica el array original?
    No, no lo modifica sino que crea uno nuevo.

*/