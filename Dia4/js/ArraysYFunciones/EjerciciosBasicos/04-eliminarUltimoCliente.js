/*
==================================================
EJERCICIO 4 — ELIMINAR ÚLTIMO CLIENTE
Dificultad: Básico
==================================================

Problema:

Una tienda posee una cola de clientes.
Debes eliminar al último cliente de la fila.

Entrada:

["Ana", "Carlos", "Pedro", "Lucía"]

Restricciones:

- Utilizar una función.
- Devolver la lista actualizada.

Métodos recomendados:

- pop

Requisitos mínimos:

- Mostrar quién fue eliminado.

Bonus:

- Mostrar la cantidad restante de clientes.

Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
- ¿Para qué sirven?
- ¿Por qué los elegiste?
- ¿Qué devuelve cada uno?
- ¿Qué aprendiste?
*/

var colaClientes = ["Ana", "Carlos", "Pedro", "Lucas"];


function eliminarUltimoCliente (colaClientes){

    let seguir = true;

    while (seguir && colaClientes.length > 0){

        
        let clienteEliminado = colaClientes.pop();
        
        alert("El cliente eliminado fue: " + clienteEliminado);
        alert("La cantidad de clientes restantes es de: "  + colaClientes.length);
        
        if (colaClientes.length === 0){
            alert("No quedan clientes.");
            break;
        }

        seguir = window.confirm("Desea eliminar otro cliente?");
    }

    return colaClientes
}

colaClientesActualizada = eliminarUltimoCliente(colaClientes);
console.log("La cantidad de clientes restantes es de: "  + colaClientesActualizada.length);

/*
Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
    .pop()
    .length

- ¿Para qué sirven?
    1: Elimina y devuelve el ultimo elemento de un array.
    2: Cuenta la cantidad de elementos de un array.

- ¿Por qué los elegiste?
    1: Poder eleminar el ultimo cliente de una lista de clientes.
    2: Poder contar la cantidad de cliente que quedan en la lista.

- ¿Qué devuelve cada uno?
    1: El elemento eliminado.
    2: La cantidad de elementos contados.

- ¿Qué aprendiste?
    Que el metodo pop necesita de parentesis para funcionar.

*/