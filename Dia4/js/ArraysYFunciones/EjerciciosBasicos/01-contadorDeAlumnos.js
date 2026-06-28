/*
==================================================
EJERCICIO 1 — CONTADOR DE ALUMNOS
Dificultad: Básico
==================================================

Problema:

Crear una función que reciba un array de alumnos y
devuelva cuántos alumnos hay.

Entrada:

["Ana", "Juan", "Pedro", "María"]

Restricciones:

- Debe existir una función.
- Debe retornar el resultado.

Métodos recomendados:

- length

Requisitos mínimos:

- Utilizar una función tradicional.

Bonus:

- Mostrar un mensaje distinto si hay más de 20 alumnos.

Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
- ¿Para qué sirven?
- ¿Por qué los elegiste?
- ¿Qué devuelve cada uno?
- ¿Qué aprendiste?
*/

var NombresAlumnos = ["Ana", "Juan", "Pedro", "María"]


function contarAlumnos(alumnos){

    let cantidadAlumnos = alumnos.length;

    return cantidadAlumnos;
}

function calcularLimite(cantidadAlumnos){

    if (cantidadAlumnos > 20){
        console.log("Que genial hoy asistieron mas de 20 alumnos Yeiiii");
    } else if (cantidadAlumnos >= 1 && cantidadAlumnos <= 20) {
        console.log("Hoy asistieron: " + cantidadAlumnos +  " Alumno a la clase.");
    } else {
        console.log("El numero de alumnos ingresado no es valido");
    }
};

function agregarNuevoAlumno (alumnos){

    alumnos.push(window.prompt("Ingrese le nombre del nuevo alumno"));

    return alumnos;

};

// Ejecucion del programa

let cantidadAlumnos = contarAlumnos(NombresAlumnos);

calcularLimite(cantidadAlumnos);

// Agregar un nuevo alumno
var AgregarAlumno = window.confirm("Desea agregar un nuevo alumno?");

while (AgregarAlumno == true){

    agregarNuevoAlumno(NombresAlumnos);

    AgregarAlumno = window.confirm("Desea agregar un nuevo alumno?");
}

// Calcular numero de alumnos nuevos
var cantidadAlumnosNuevos = contarAlumnos(NombresAlumnos);
calcularLimite(cantidadAlumnosNuevos);


// Analisis obligatorio teorico:
/*

- ¿Qué métodos utilizaste?
    .length 
    .push

- ¿Para qué sirven?
    1: para contar la cantidad de elementos que contiene un array.
    2: para agregar un elemento al final de un array.

- ¿Por qué los elegiste?
    1: Me servia para contar la cantidad de nombres de alumnos y saber cuantos habian.
    2: Para poder agregar nuevos alumnos.

- ¿Qué devuelve cada uno?
    1: la cantidad de elementos de el array NombresAlumnos
    2: el array NombresAlumnos con el nuevo elemento integrado

- ¿Qué aprendiste?
    Que los metodos no necesitan parentes para funcionar

*/