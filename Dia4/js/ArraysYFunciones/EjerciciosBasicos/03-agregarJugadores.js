/*
==================================================
EJERCICIO 3 — AGREGAR JUGADORES
Dificultad: Básico
==================================================

Problema:

Agregar nuevos jugadores a un equipo.

Entrada:

["Mario", "Luigi", "Peach"]

Restricciones:

- Debe existir una función.
- Debe recibir el array.
- Debe devolver el nuevo array.

Métodos recomendados:

- push

Requisitos mínimos:

- La función debe retornar el equipo actualizado.

Bonus:

- Permitir agregar varios jugadores a la vez.

Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
- ¿Para qué sirven?
- ¿Por qué los elegiste?
- ¿Qué devuelve cada uno?
- ¿Qué aprendiste?
*/

var jugadores = ["Mario", "Luigui", "Peach"];
var nuevoArray;

function agregarNuevosJugadores (jugadores){

    let seguir = true;

    while (seguir){

        let jugadorNuevo = window.prompt("Cual es el nombre del nuevo jugador que desea agregar?");
        jugadores.push(jugadorNuevo);

        seguir = window.confirm("Desea agregar un nuevo jugador?");
}

    return jugadores;
}

nuevoArray = agregarNuevosJugadores(jugadores);


console.log("Lista aantigua de jugadores: " + jugadores);
console.log("Lista actualizada de jugadores: " + nuevoArray);


/* 
Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
    .push

- ¿Para qué sirven?
    Para agregar un elemento al final de la lista.

- ¿Por qué los elegiste?
    Para poder agregar los nuevos jugadores al array de jugadores.

- ¿Qué devuelve cada uno?
    Devuelve la cantidad de elementos nuevos que tenga el array,
    y lo modifica agregandole el elemento indicado.

- ¿Qué aprendiste?
    Que si retorno directamente el array al usar el metodo me dara su longitud de elementos en vez de la lista modificada.

*/

