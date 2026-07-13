/************************************************
EJERCICIO 11 — BÚSQUEDA DE PRODUCTO
Dificultad: Intermedio
************************************************

Problema:

Un almacén guarda una lista de productos.
Debes crear una función que indique en qué
posición se encuentra un producto.

Entrada:

["Pan", "Leche", "Azúcar", "Harina"]

Producto a buscar:

"Azúcar"

Restricciones:

- Debe existir una función.
- Debe devolver la posición.
- Si no existe, devolver -1.

Métodos recomendados:

- indexOf

Requisitos mínimos:

- La función debe recibir el array y el producto.

Bonus:

- Mostrar un mensaje indicando si fue encontrado.

Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
- ¿Qué devuelve indexOf?
- ¿Por qué elegiste este método?
*/

var listaProductos = ["Pan", "Leche", "Azucar", "Harina"];


function encontrarNumProducto (listaProductos, productoABuscar){

    let indiceProducto = listaProductos.indexOf(productoABuscar);

    if (indiceProducto >= 0){
        console.log("El indice del producto que buscas en la lista es: " + indiceProducto);
    } else {
        alert("No se encontro el producto que buscabas en la lista");
    }

    return indiceProducto

}

var productoABuscar = window.prompt("Ingrese el nombre del producto a buscar","Azucar");

const posicion = encontrarNumProducto(listaProductos, productoABuscar);


/*
Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
    .indexOf() 

- ¿Qué devuelve indexOf?
    El indice de la posicion donde se encuentra el elemento buscado.
    O -1 si no aparece el elemento en la lista

- ¿Por qué elegiste este método?
    Para poder buscar el indice de los productos en la lista

*/