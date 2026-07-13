/************************************************
EJERCICIO 19 — TOTAL DE VENTAS
Dificultad: Intermedio
************************************************

Problema:

Una tienda registra las ventas del día.

Debes calcular el total vendido.

Entrada:

[150, 300, 250, 100]

Métodos recomendados:

- reduce

Restricciones:

- Debe devolver un número.

Bonus:

- Calcular también el promedio.

Análisis obligatorio al finalizar:

- ¿Qué hace el acumulador?
- ¿Qué devuelve reduce?
*/

var ventasDelDia = [150, 300, 250, 100];

function calcularVentas (ventasDelDia){

    let total = ventasDelDia.reduce((total,venta) => total + venta);
    
    let promedio = total / ventasDelDia.length;
    return {
        totalVenta : total,
        promedioVentas : promedio
    }

}

const ventasCalculadas = calcularVentas(ventasDelDia);

console.log(" --- VentasTotales --- ");
console.log(ventasCalculadas.totalVenta);
console.log(" --- PromedioDeVentas --- ");
console.log(ventasCalculadas.promedioVentas);

/*
Análisis obligatorio al finalizar:

- ¿Qué hace el acumulador?
    Acomula los valores de la forma que se indique en la funcion.
    reduciendolos en un unico valor de izquierda a derecha.

- ¿Qué devuelve reduce?
    Un valor apartir de todos los elementos de un array.

*/