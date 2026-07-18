/*
==================================================
EJERCICIO 5 — CLIENTES VIP
Dificultad: Básico
==================================================

Problema:

Un cliente VIP llega a una tienda y debe ser colocado
al inicio de la fila.

Entrada:

["Juan", "Pedro", "María"]

Nuevo cliente:
"Ana"

Restricciones:

- Utilizar una función.
- Devolver el nuevo array.

Métodos recomendados:

- unshift

Requisitos mínimos:

- La función debe recibir el cliente nuevo.

Bonus:

- Agregar varios clientes VIP.

Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
- ¿Para qué sirven?
- ¿Por qué los elegiste?
- ¿Qué devuelve cada uno?
- ¿Qué aprendiste?
*/

var clientes = ["Juan", "Pedro", "Maria"];

function agregarClientesVIP (clientes){

    let seguir = true;

    while(seguir){

        let clienteVIP = window.prompt("Cual es el nombre del nuevo cliente VIP?");

        let listaTamanio = clientes.unshift(clienteVIP);

        alert("La nueva lista de clientes es: " + clientes);
        alert("Con un tamanio de: " + listaTamanio);


        seguir = window.confirm("Desea agregar un nuevo cliente VIP?");

    }

    return clientes
}

var clientesTienda = agregarClientesVIP(clientes);

console.log("La lista actual de clientes es:")
clientesTienda.forEach( cliente => {
    console.log(cliente);
    
});
console.log("Con un tamanio de: " + clientesTienda.length);

/*
Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
    .unshift
    .length
    .forEach

- ¿Para qué sirven?
    1: Para agregar un elemento al principio de un array.
    2: Contar la cantidad de elementos de un array.
    3: Imprimir los elementos de un array.

- ¿Por qué los elegiste?
    1: Para intruducir al cliente VIP al principio de la lista.
    2: Para contar la cantidad de clientes de la lista.
    3: Para poder mostrar de una forma mas estetica los clientes de la lista.

- ¿Qué devuelve cada uno?
    1: La cantidad de elementos de la nueva lista al modificarla.
    2: La cantidad de elementos del arrray.
    3: Ejecuta un accion para cada elemento mediante lo que se le indique en la funcion,
    en mi caso Cliente por Cliente.

- ¿Qué aprendiste?
    Que el metodo forEach necesita una funcion para funcionar.

*/