/************************************************
EJERCICIO 13 — PRIMER ALUMNO REPROBADO
Dificultad: Intermedio
************************************************

Problema:

Una escuela almacena alumnos y notas.

Debes encontrar el primer alumno
que haya reprobado.

Entrada:

[
    { nombre: "Ana", nota: 8 },
    { nombre: "Juan", nota: 4 },
    { nombre: "Pedro", nota: 3 }
]

Condición:

- Reprueba si la nota es menor a 6.

Métodos recomendados:

- find

Restricciones:

- Utilizar una función.

Bonus:

- Mostrar un mensaje si todos aprobaron.

Análisis obligatorio al finalizar:

- ¿Qué devuelve find?
- ¿Qué diferencia tiene con filter?
*/

var alumnosNotas = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Juan", nota: 5 },
    { nombre: "Pedro", nota: 6 }
]

function evaluarAlumnos (alumnosNotas){

    let claseAprobada = alumnosNotas.every(alumno => 
        alumno.nota >=6);

    let primerAlumnoReprobado = alumnosNotas.find(alumno => alumno.nota < 6);
    if (primerAlumnoReprobado){
        alert("El primer alumno reprobado fue " + primerAlumnoReprobado.nombre + " con nota " + primerAlumnoReprobado.nota);
    }


    if (claseAprobada){
        alert("Todos los alumnos de la clase aprobaron con exito.");
    }else {
        for (let i=0; i<alumnosNotas.length ; i++){
            let alumno = alumnosNotas[i];
        
            if (alumno.nota >= 6){
                alert("El alumno " + alumno.nombre + " Aprobo con: " + alumno.nota);
            } else {
                alert("El alumno " + alumno.nombre + " Reprobo con: " + alumno.nota);
            }    
        }
    }

}

evaluarAlumnos(alumnosNotas);


/*
Análisis obligatorio al finalizar:

- ¿Qué devuelve find?
    Devuelve el primer elemento que cumpla con una condicion especifica.

- ¿Qué diferencia tiene con filter?
    No se aun no veo filter. 
*/