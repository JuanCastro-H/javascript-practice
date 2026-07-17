/************************************************
EJERCICIO 27 — LISTA DE COMPRAS INTELIGENTE
Dificultad: Avanzado
************************************************

Problema:

Evitar agregar productos repetidos.

Entrada:

["Pan", "Leche", "Azúcar"]

Nuevo producto:

"Pan"

Métodos recomendados:

- includes
- push

Restricciones:

- No permitir duplicados.

Bonus:

- Ignorar mayúsculas y minúsculas.
*/

var listaCompras = ["Pan", "Leche", "Azúcar"];

function agregarProducto (listaCompras, producto) {
    let listaEstandarizada = listaCompras.map(producto => producto.toLowerCase());

    let productoRepetido = listaEstandarizada.includes(producto.toLowerCase());

    if (productoRepetido) {
        console.log(`Ese producto "${producto}" ya se encuentra en la lista`);
    } else {
        listaCompras.push(producto);
    }

    return listaCompras;

};

let producto = window.prompt("Ingrese el nombre del nuevo producto a agregar a la lista");

if(producto) {

    const listaNueva = agregarProducto(listaCompras, producto);

    console.log("La nueva lista de productos es: ");
    listaNueva.forEach(element => {
        console.log(element);
    });
    
}