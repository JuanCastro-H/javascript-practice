/************************************************
EJERCICIO 14 — FILTRAR MAYORES DE EDAD
Dificultad: Intermedio
************************************************

Problema:

Una aplicación posee una lista de usuarios.

Debes obtener únicamente los mayores
de edad.

Entrada:

[
    { nombre: "Ana", edad: 17 },
    { nombre: "Juan", edad: 25 },
    { nombre: "Pedro", edad: 18 }
]

Métodos recomendados:

- filter

Requisitos mínimos:

- Utilizar función flecha.

Bonus:

- Mostrar la cantidad de mayores.

Análisis obligatorio al finalizar:

- ¿Qué devuelve filter?
- ¿Por qué no usar find?
*/

var usuarios = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Juan", edad: 25 },
    { nombre: "Pedro", edad: 18 }
];

const buscarUsuariosMayores = (usuarios) => {

    let mayoresfiltrados = usuarios.filter(usuario => usuario.edad >= 18);

    return  {
        mayores : mayoresfiltrados,
        cantidad : mayoresfiltrados.length
    }
}

const usuariosMayores = buscarUsuariosMayores(usuarios);

console.log("La cantidad de usuarios mayores es de: " + usuariosMayores.cantidad);
console.log("Sus nombres son:");
usuariosMayores.mayores.forEach(usuario => console.log(usuario.nombre));

/*
Análisis obligatorio al finalizar:

- ¿Qué devuelve filter?
    Devuelve un nuevo array con todos los elementos que cumplan con las condiciones del filtro.

- ¿Por qué no usar find?
    Por que find() solo devuelve el primer elemento que cumpla con la condicion.

*/