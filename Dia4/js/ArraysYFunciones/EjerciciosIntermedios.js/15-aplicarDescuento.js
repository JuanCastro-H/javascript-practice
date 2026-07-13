/************************************************
ARCHIVO: 15-aplicar-descuento.js
EJERCICIO 15 — APLICAR DESCUENTO
Dificultad: Intermedio
************************************************

Problema:

Una tienda desea aplicar un descuento
del 20% a todos sus productos.

Entrada:

[100, 250, 400, 80]

Restricciones:

- No modificar el array original.
- Devolver uno nuevo.

Métodos recomendados:

- map

Bonus:

- Permitir que el porcentaje sea un parámetro.

Análisis obligatorio al finalizar:

- ¿Qué devuelve map?
- ¿Por qué es útil?
*/

var precioProductos = [100, 250, 400, 80];


function aplicarDescuento (precioProductos, descuento){

    precioDescuento = precioProductos.map(producto => {
        let descuentoProducto = (producto * descuento) / 100;
        let descuentoAplicado = producto - descuentoProducto;
        return descuentoAplicado;
    });

    return precioDescuento;
}

const descuento = Number(window.prompt("Ingrese el descuento a aplicar","0-100"));
const nuevoPrecio = aplicarDescuento(precioProductos, descuento); 

console.log("Precio normal: " + precioProductos);
console.log("Precios con descuento: " + nuevoPrecio);

/*
Análisis obligatorio al finalizar:

- ¿Qué devuelve map?
    Un nuevo array con los resultados de aplicar una funcion a los elementos de otro array.

- ¿Por qué es útil?
    Porque nos permite conservar el array original.

*/