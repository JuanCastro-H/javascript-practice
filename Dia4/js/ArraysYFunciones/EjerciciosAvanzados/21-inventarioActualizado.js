/************************************************
EJERCICIO 21 — INVENTARIO ACTUALIZADO
Dificultad: Avanzado
************************************************

Problema:

Una tienda recibió nuevos productos y debe
eliminar aquellos que están agotados.

Entrada:

[
    { nombre: "Pan", stock: 10 },
    { nombre: "Leche", stock: 0 },
    { nombre: "Azúcar", stock: 5 }
]

Nuevo producto:

{ nombre: "Café", stock: 8 }

Restricciones:

- Debe existir una función.
- El producto nuevo debe agregarse.
- Los productos sin stock deben eliminarse.

Métodos recomendados:

- push
- filter

Requisitos mínimos:

- La función debe devolver el inventario final.

Bonus:

- Mostrar cuántos productos fueron eliminados.
*/

var productos = [
    { nombre: "Pan", stock: 10 },
    { nombre: "Leche", stock: 0 },
    { nombre: "Azúcar", stock: 5 }
];

var nuevo_producto = { nombre : "Cafe", stock: 8};


function agregarProducto (productos, nuevo_producto){

    productos.push(nuevo_producto);

    return productos;

};

function eliminarProductos (productos){

    // Filtrar los productos agotados
    let productosAgotados = productos.filter(producto => producto.stock <= 0);

    // Recorrer los productos agotados
    for (let i = 0 ; i<productosAgotados.length ; i++){
        // Obtener 1 a 1 cada producto agotado
        let productoAgotado = productosAgotados[i];
        // Obtener indice del producto agotado en la lista de productos
        let indiceProducto = productos.indexOf(productoAgotado);

        // Verificar si se encontro
        if (indiceProducto !== -1) {
            // Y eliminarlo
            productos.splice(indiceProducto, 1);
        }
    }

    return {
        productos : productos,
        productosAgotados : productosAgotados,
    }

}





