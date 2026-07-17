/************************************************
EJERCICIO 30 — CLASIFICACIÓN DE ESTUDIANTES
Dificultad: Avanzado
************************************************

Problema:

Debes obtener una lista de alumnos aprobados
con sus nombres en mayúsculas.

Entrada:

[
    { nombre: "Ana", nota: 8 },
    { nombre: "Juan", nota: 4 },
    { nombre: "Pedro", nota: 7 }
]

Métodos recomendados:

- filter
- map

Bonus:

- Ordenar alfabéticamente.
*/

var alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Juan", nota: 4 },
    { nombre: "Pedro", nota: 7 }
];

function AlumnosAprobados (alumnos){

    let aprobados = alumnos.filter(alumno => alumno.nota >= 6);

    let aprobadosMayusculas = aprobados.map(alumno => alumno.nombre.toUpperCase());

    console.log(" --- Lista De Aprovados --- ");
    aprobadosMayusculas.forEach(aprobado => {
        console.log(aprobado);
    });

}

alumnosAprobados();