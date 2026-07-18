/************************************************
EJERCICIO 36 — SISTEMA DE VENTAS
Dificultad: Experto
************************************************

Problema:

Una tienda registra todas las ventas realizadas
durante el día.

Cada venta posee:

- nombre del producto
- precio
- cantidad vendida

Debes generar un reporte con:

- Productos vendidos.
- Ingreso total.
- Promedio de venta.
- Productos cuyo total vendido sea mayor a 500.

Entrada:

[
    { producto: "Teclado", precio: 150, cantidad: 2 },
    { producto: "Mouse", precio: 80, cantidad: 5 },
    { producto: "Monitor", precio: 900, cantidad: 1 }
]

Métodos recomendados:

- map
- reduce
- filter

Requisitos mínimos:

- Crear al menos 3 funciones.
- Cada función debe encargarse de una tarea específica.

Bonus:

- Ordenar el reporte por mayor ingreso generado.
*/

var productosVendidos = [
    { producto: "Teclado", precio: 150, cantidad: 2 },
    { producto: "Mouse", precio: 80, cantidad: 5 },
    { producto: "Monitor", precio: 900, cantidad: 1 }
];

function productosVendidos(productosVendidos) {

    console.group(" --- Productos Vendidos --- ");
    productosVendidos.forEach(venta => {
        console.log(venta.nombre + " Con " + venta.cantidad + " Compras" );
    });

};

function totalIngreso (productosVendidos) {

    let total = productosVendidos.reduce((acomulador, venta) => {
        acomulador = acomulador + (venta.precio * venta.cantidad);
        return acomulador;
    });

    return total;

}