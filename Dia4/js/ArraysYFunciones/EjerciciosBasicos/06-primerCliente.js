/************************************************
EJERCICIO 6 — ATENDER PRIMER CLIENTE
Dificultad: Básico
************************************************

Problema:

Una tienda tiene una fila de clientes.
Debes atender al primer cliente y eliminarlo de la cola.

Entrada:

["Ana", "Carlos", "Pedro", "Lucía"]

Restricciones:

- Debe existir una función.
- La función debe recibir el array.
- Debe devolver la fila actualizada.

Métodos recomendados:

- shift

Requisitos mínimos:

- Mostrar quién fue atendido.
- Mostrar la nueva fila.

Bonus:

- Si la fila queda vacía, mostrar un mensaje.

Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
- ¿Para qué sirven?
- ¿Por qué los elegiste?
- ¿Qué devuelve cada método?
- ¿Qué aprendiste?
*/

var clientes = ["Ana", "Carlos", "Pedro", "Lucía"];
var contador = 0;

function atenderPrimerCliente (clientes){

    let seguir = true;

    while (seguir && clientes.length > 0){

        let clienteAtendido = clientes.shift();

        alert("El cliente atendido fue: " + clienteAtendido);

        if (clientes.length === 0){
            alert("Ya no quedan mas clientes que atender");
            break;
        }

        seguir = window.confirm("Desea atender al siguente cliente?");
    }

    return clientes
}

clientes = atenderPrimerCliente(clientes);
console.log("La cantidad de clientes sin atender es de: " + clientes.length);
if (clientes.length >  0){
    console.log("Los clientes que no fueron atendidos son:")
    clientes.forEach( cliente => {
        contador ++;
        console.log("cliente numero " + contador + ": " + cliente);
    }
);}

/* 
Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
    .shift()
    .length
    .forEach()

- ¿Para qué sirven?
    1: Sirve para eliminar el primer elemento de un array.
    2: Sirve para contar los elementos de un array.
    3: Para aplicarle una funcion a cada elemento del array.

- ¿Por qué los elegiste?
    1: Para poder atender y sacar de la lista al primer cliente.
    2: Para contar los clientes que quedaban sin atender en la lista.
    3: Para poder imprimir cada elemento del array con un contador

- ¿Qué devuelve cada método?
    1: El elemento que fue eliminado.
    2: La cantidad de elementos.
    3: Imprime el numero del cliente y su nombre

- ¿Qué aprendiste?
    Que el metodo shift() devuelve el elemento eliminado.
*/