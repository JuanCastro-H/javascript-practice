/************************************************
EJERCICIO 22 — BIBLIOTECA DIGITAL
Dificultad: Avanzado
************************************************

Problema:

Una biblioteca almacena libros y su disponibilidad.

Debes verificar si existe algún libro disponible
y obtener el primero que pueda prestarse.

Entrada:

[
    { titulo: "Libro A", disponible: false },
    { titulo: "Libro B", disponible: true },
    { titulo: "Libro C", disponible: true }
]

Métodos recomendados:

- some
- find

Bonus:

- Mostrar un mensaje si no hay libros disponibles.
*/

var libros = [
    { titulo: "Libro A", disponible: false },
    { titulo: "Libro B", disponible: true },
    { titulo: "Libro C", disponible: true }
];

function prestarLibro (libros) {
    let libro;
    let libroDisponible =  libros.some(libro => libro.disponible === true);

    if (libroDisponible){
        libro = libros.find(libro => libro.disponible === true);
    } else {
        alert("No hay libros disponibles");
    }

    return libro
};

const libroPrestar = prestarLibro(libros);

console.log("El libro que se te ha prestado es: " + libroPrestar.titulo);
