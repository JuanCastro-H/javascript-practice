/************************************************
EJERCICIO 18 — PRIMEROS PRODUCTOS
Dificultad: Intermedio
************************************************

Problema:

Un inventario contiene muchos productos.

Debes obtener solamente los primeros 5.

Entrada:

["Pan", "Leche", "Azúcar",
"Harina", "Café", "Arroz",
"Yerba"]

Métodos recomendados:

- slice

Restricciones:

- No modificar el array original.

Bonus:

- Permitir indicar la cantidad a mostrar.

Análisis obligatorio al finalizar:

- ¿Qué devuelve slice?
- ¿Qué diferencia tiene con splice?
*/

var productos = [
    "Pan", "Leche", "Azúcar",
    "Harina", "Café", "Arroz",
    "Yerba" 
]

function obtenerProductos (productos, cantidad){

    let productosSolicitados = productos.slice(0,cantidad);

    return productosSolicitados

}
let cantidad;
seguir = true;

while(seguir){
    cantidad = Number(window.prompt("Ingrese la cantidad de productos que quiere obtener","0-"+(productos.length-1)));

    if (cantidad >= 0 && cantidad <= (productos.length-1)){
        break;
    }else {
        alert("Cantidad De elementos a pedir invalida");
    }
}
const listaDeProductos = obtenerProductos(productos, cantidad);

console.log(" --- ListaCompleta ---");
console.log(productos);
console.log(" --- ListaDeProductosFiltrada --- ");
console.log(listaDeProductos);

/*
Análisis obligatorio al finalizar:

- ¿Qué devuelve slice?
    Un nuevo arrays con una copia parcial o completa segun se indique de los elementos de otro array.

- ¿Qué diferencia tiene con splice?
    Que no cambia el contenido del array como splice sino que crea uno nuevo.

*/