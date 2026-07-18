/************************************************
EJERCICIO 9 — RANKING INVERTIDO
Dificultad: Básico
************************************************

Problema:

Un videojuego guarda un ranking de jugadores.
Debes invertir el orden del ranking.

Entrada:

["Mario", "Luigi", "Peach", "Bowser"]

Restricciones:

- Debe utilizarse una función flecha.
- Debe devolver el array modificado.

Métodos recomendados:

- reverse

Requisitos mínimos:

- Mostrar el ranking original y el invertido.

Bonus:

- Crear una copia del array antes de invertirlo.

Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
- ¿Para qué sirven?
- ¿Por qué los elegiste?
- ¿Qué devuelve cada método?
- ¿Qué aprendiste?
*/

var ranking = ["Mario", "Luigi", "Peach", "Bowser"];
var contador = 0;
var contador2 = 0;
var rankingInvertido;
var copiaOriginal;

const invertirRanking = (ranking)=> {

    let copiaOriginal = ranking.slice(0);
    console.log("Ranking original: " + copiaOriginal);
    
    ranking.reverse();
    console.log("Ranking Invertido: " + ranking);

    return { original :  copiaOriginal,
            invertido : ranking
    };
};

let resultado =  invertirRanking(ranking);

console.log(" --- Rankign Original --- ")
resultado.original.forEach(nombre => {
    contador2 ++;
    console.log(contador2 + " " +  nombre);
});

console.log(" --- Ranking Invertido --- ")
resultado.invertido.forEach(nombre => {
    contador ++;
    console.log(contador + " " + nombre);
});


/* 
Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
    .slice()
    .reverse()
    .forEach()

- ¿Para qué sirven?
    1: Para crear una copia supercial de una porcion de un array o completo.
    2: Para revertir el orden de un array.
    3: Para Aplicarle una funcion a cada elemento del array.

- ¿Por qué los elegiste?
    1: Para crear una copia del ranking original.
    2: Para invertir el orden del ranking.
    3: Para Imprimir el numero y nombre de los jugadores de los rankings.

- ¿Qué devuelve cada método?
    1: Una copia parcial o total del array indicado.
    2: El array invertido.
    3: El resultado de la funcion aplicada a cada elemento del array.

- ¿Qué aprendiste?
    Que se pueden crear objetos en javascript que aparentemente son
    como los diccionarios en Python

*/
