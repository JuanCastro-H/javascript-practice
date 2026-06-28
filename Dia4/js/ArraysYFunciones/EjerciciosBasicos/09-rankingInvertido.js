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

