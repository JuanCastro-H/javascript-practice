/************************************************
EJERCICIO 7 — VERIFICAR SI TODOS APROBARON
Dificultad: Básico
************************************************

Problema:

Una lista contiene las notas de varios alumnos.
Debes verificar si todos aprobaron.

Entrada:

[7, 8, 10, 9, 6]

Condición:

- Una nota aprobada es mayor o igual a 6.

Restricciones:

- Utilizar una función.
- La función debe devolver true o false.

Métodos recomendados:

- every

Requisitos mínimos:

- Utilizar una función tradicional.

Bonus:

- Mostrar un mensaje indicando si el curso aprobó completamente.

Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
- ¿Para qué sirven?
- ¿Por qué los elegiste?
- ¿Qué devuelve cada método?
- ¿Qué aprendiste?
*/

var notas = [7, 8, 10, 9, 5];


function verificarAprovados (notas){

    let aprobaron = notas.every(nota => nota >= 6)

    if (aprobaron){
        alert("Todos los alumnos aprobaron");
    } else {

        for (let i = 0; i < notas.length; i++){

            if (notas[i] >= 6){
                console.log("Alumno " + (i + 1) + " aprobó.");
            } else {
                console.log("Alumno " + (i + 1) + " reprobó.");
            }

        }
    }
    
    return aprobaron
}

verificacionDeNotas = verificarAprovados(notas);

/* 
Análisis obligatorio al finalizar:

- ¿Qué métodos utilizaste?
    .every()

- ¿Para qué sirven?
    Verifica si una condicion se cumple para todos los elementos y devuelve true o false,
    segun si cumplen o no

- ¿Por qué los elegiste?
    Para verificar si todas las notas de los alumnos superaban el limite minimo de 6.

- ¿Qué devuelve cada método?
    true o false dependiendo si se cumple la condicion en todos los elementos.

- ¿Qué aprendiste?
    Que la funcion flecha puede escribirse con o sin llaves, y de llevar llaves necesita
    si o si un return para retornar la informacion de la funcion.
*/

