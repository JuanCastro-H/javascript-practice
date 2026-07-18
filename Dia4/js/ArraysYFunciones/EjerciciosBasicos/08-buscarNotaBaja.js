/************************************************
EJERCICIO 8 — BUSCAR UNA NOTA BAJA
Dificultad: Básico
************************************************

Problema:

Debes verificar si existe al menos una nota menor a 6.

Entrada:

[8, 9, 4, 7, 10]

Restricciones:

- Debe existir una función.
- Debe devolver true o false.

Métodos recomendados:

- some

Requisitos mínimos:

- La condición debe revisarse dentro del método.

Bonus:

- Mostrar cuál es la primera nota baja encontrada.

Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
- ¿Para qué sirven?
- ¿Por qué los elegiste?
- ¿Qué devuelve cada método?
- ¿Qué aprendiste?
*/

var notas = [9, 9, 8, 50, 10];

function verificarNotas (notas){

    let existenReprobados = notas.some(nota => nota < 6);

    if (existenReprobados){
        let primerReprobado = notas.find(reprobado => reprobado < 6);
        alert("El primer reprobado fue: " + primerReprobado);
    } else {
        alert("No hubieron reprobados");
    }

    return existenReprobados
}

existenReprobados = verificarNotas(notas);

console.log("Existen reprobados en la lista: " + existenReprobados);

/* 
Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
    .some
    .find

- ¿Para qué sirven?
    1: Verifica si almenos un elemento de un array cumple con una condicion especifica.
    2: Obtiene el primer elemento de un array en cumplir una condicion especifica.

- ¿Por qué los elegiste?
    1: Para verificar si hubo reprobados.
    2: Para saber quien fue el primer reprobado.

- ¿Qué devuelve cada método?
    1: true o false si se cumple que hay 1 elemento que cumple con la condicion especificada.
    2: El primer elemento en cumplir la condicion especificada.


- ¿Qué aprendiste?
    Como hacer funciones flecha sin corchetes, y como funcionan some() y find()

*/