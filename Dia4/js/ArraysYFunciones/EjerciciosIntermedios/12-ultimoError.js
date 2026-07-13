/************************************************
EJERCICIO 12 — ÚLTIMO ERROR REGISTRADO
Dificultad: Intermedio
************************************************

Problema:

Un sistema registra los códigos de error
ocurridos durante el día.

Debes encontrar la última aparición
de un código específico.

Entrada:

[404, 500, 200, 404, 301, 404]

Código:

404

Restricciones:

- Utilizar una función.
- Devolver la posición encontrada.

Métodos recomendados:

- lastIndexOf

Bonus:

- Indicar cuántas veces aparece el error.

Análisis obligatorio al finalizar:

- ¿Qué devuelve lastIndexOf?
- ¿Cuándo conviene usarlo?
*/

var codigosHTTP = [404, 500, 200, 404, 301, 404];
var contadorErrores = 0;

const encontrarUltimaAparicionCode = (codigosHTTP, codigoBuscado) => {

    let codigoEncontrado = codigosHTTP.lastIndexOf(codigoBuscado);

    // Contar cantidad de apariciones del codigo
    for (let i=0 ; i<codigosHTTP.length ; i++){
        if (codigosHTTP[i] == codigoBuscado){
            contadorErrores ++;
        }
    }

    
    if (codigoEncontrado >= 0){
        alert("Se encontro la ultima aparicion del codigo con indice: " + codigoEncontrado);
        alert("El codigo: " + codigoBuscado + " Aparece un total de: " + contadorErrores + " Veces.")

    } else {
        alert("No se encontro el codigo buscado");
    }

    return codigoEncontrado

}

const codigoBuscado = Number(window.prompt("Ingrese el codigo HTPP a buscar","404"));

const codigoEncontrado = encontrarUltimaAparicionCode(codigosHTTP, codigoBuscado);

/*
Análisis obligatorio al finalizar:

- ¿Qué devuelve lastIndexOf?
    Devuelve el indice de la ultima aparicion de un elemento especificado.

- ¿Cuándo conviene usarlo?
    Cuando queremos buscar la aparicion mas nueva de un elemento en un array o su ultima aparicion.

*/