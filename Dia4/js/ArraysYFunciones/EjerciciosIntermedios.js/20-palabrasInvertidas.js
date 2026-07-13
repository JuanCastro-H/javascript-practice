/************************************************
EJERCICIO 20 — PALABRA INVERTIDA
Dificultad: Intermedio
************************************************

Problema:

Un sistema recibe las letras de una palabra
por separado.

Debes construir la palabra al revés.

Entrada:

["H", "O", "L", "A"]

Resultado esperado:

"ALOH"

Métodos recomendados:

- reduceRight

Restricciones:

- Debe utilizarse una función.

Bonus:

- Permitir cualquier palabra.

Análisis obligatorio al finalizar:

- ¿Qué diferencia existe entre reduce y reduceRight?
- ¿Qué aprendiste?
*/

var letrasDePalabra = ["H", "O", "L", "A"];

function invertirPalabra (letrasDePalabra){

    let palabraCompleta = letrasDePalabra.reduce((concatenacion2, letra2) => concatenacion2 + letra2, "");

    let palabraInvertida = letrasDePalabra.reduceRight((concatenacion, letra) => concatenacion + letra, "");

    return {
        palabraInvertida : palabraInvertida,
        palabraCompleta : palabraCompleta
    }
}

let palabras = invertirPalabra(letrasDePalabra);

console.log(" --- LetrasDeLaPalabra --- ");
console.log(palabras.palabraCompleta);
console.log(" --- PalabraInvertida --- ");
console.log(palabras.palabraInvertida);


var seguir = window.confirm("Desea invertir una palabra?");
var palabraNueva = [];
var contador = 0;

while(seguir){

    contador ++;
    palabraNueva.push(window.prompt("Agrege la letra numero " + contador + " de la palabra."));

    seguir = window.confirm("Faltan mas letras que agregar a la palabra?");

}

const nuevaPalabra = invertirPalabra(palabraNueva);

console.log(" --- LetrasDeLaPalabra --- ");
console.log(nuevaPalabra.palabraCompleta);
console.log(" --- PalabraInvertida --- ");
console.log(nuevaPalabra.palabraInvertida);

/*
Análisis obligatorio al finalizar:

- ¿Qué diferencia existe entre reduce y reduceRight?
    Que reduce va de izquierda a derecha y reduceRight de derecha a izquierda.

- ¿Qué aprendiste?
    Que puedo usar el "contador" para concatenar letras o textos.
*/