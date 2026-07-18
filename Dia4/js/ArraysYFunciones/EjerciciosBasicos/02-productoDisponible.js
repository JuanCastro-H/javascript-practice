/*
==================================================
EJERCICIO 2 — PRODUCTO DISPONIBLE
Dificultad: Básico
==================================================

Problema:

Verificar si un producto existe dentro del inventario.

Entrada:

Inventario:
["Pan", "Leche", "Azúcar"]

Producto a buscar:
"Leche"

Restricciones:

- Debe existir una función.
- La función debe retornar true o false.

Métodos recomendados:

- includes

Requisitos mínimos:

- La función debe devolver un booleano.

Bonus:

- Resolverlo utilizando una función flecha.

Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
- ¿Para qué sirven?
- ¿Por qué los elegiste?
- ¿Qué devuelve cada uno?
- ¿Qué aprendiste?
*/

var inventario = ["Pan","Leche","Azucar"];


function buscarProducto (inventario,producto){

    return inventario.includes(producto);

}

// Solucion con funcion flecha
const buscarProductoExperimento = (inventario, producto) => {
    return inventario.includes(producto);
}

var producto = window.prompt("Ingrese el nombre del producto que desea buscar.");
var encontrado = buscarProducto(inventario, producto)

console.log("Fue encontrado el producto que usted busca: " + encontrado);

/*
Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
    .includes

- ¿Para qué sirven?
    Sirve para verificar si un elemento esta incluido en un array.

- ¿Por qué los elegiste?
    Por que era necesario verificar si un producto formaba parte del inventario.

- ¿Qué devuelve cada uno?
    El metodo includes devuelve true o false dependiendo si el elemento se encuentra o no dentro del array.

- ¿Qué aprendiste?
    Que las funciones flechas es una forma de crear una funcion simplificada.

*/