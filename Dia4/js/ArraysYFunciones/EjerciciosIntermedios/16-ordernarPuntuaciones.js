/************************************************
EJERCICIO 16 — ORDENAR PUNTUACIONES
Dificultad: Intermedio
************************************************

Problema:

Un videojuego guarda las puntuaciones
de sus jugadores.

Debes ordenarlas de menor a mayor.

Entrada:

[250, 100, 900, 450, 300]

Métodos recomendados:

- sort

Restricciones:

- Utilizar una función.

Bonus:

- Permitir elegir ascendente o descendente.

Análisis obligatorio al finalizar:

- ¿Cómo funciona sort?
- ¿Por qué necesita una función de comparación?
*/

var puntuaciones = [250, 100, 900, 450, 300];

function ordernarPuntuacion(puntuaciones, tipoDeOrden) {

    let puntuacionOriginal = puntuaciones.slice(0);

    if (tipoDeOrden){
        puntuaciones.sort((a,b) => a - b);
    } else{
        puntuaciones.sort((a,b) => b - a);
    }

    return {
        original : puntuacionOriginal,
        reordenada : puntuaciones
    }

}

const tipoDeOrden = window.confirm("Desea ordenar la puntuacion de forma Accendente: Aceptar Decendente: Cancelar");

const puntuacion = ordernarPuntuacion(puntuaciones, tipoDeOrden)
console.log(" --- Orden Orginal --- ");
console.log(puntuacion.original);
console.log(" --- Orden modificado --- ");
console.log(puntuacion.reordenada);


/*
Análisis obligatorio al finalizar:

- ¿Cómo funciona sort?
    Ordena los elementos de un array pudiendo utilizar una funcion de comparacion
    para decidir el orden de los elementos como en este caso

- ¿Por qué necesita una función de comparación?
    Porque por defecto ordena los valores como texto, una funcion de comparacion
    permite ordenar numeros correctamente u otro tipo de elementos.

*/