/************************************************
EJERCICIO 34 — LISTA DE REPRODUCCIÓN
Dificultad: Avanzado
************************************************

Problema:

Debes reemplazar canciones antiguas,
agregar nuevas e invertir la lista.

Métodos recomendados:

- splice
- push
- reverse

Requisitos mínimos:

- Realizar las tres operaciones.

Bonus:

- Crear una copia antes de modificarla.
*/

const playlist = [
    { titulo: "Bohemian Rhapsody", anio: 1975 },
    { titulo: "Imagine", anio: 1971 },
    { titulo: "Hotel California", anio: 1976 },
    { titulo: "Billie Jean", anio: 1983 },
    { titulo: "Sweet Child O' Mine", anio: 1987 },
    { titulo: "Smells Like Teen Spirit", anio: 1991 },
    { titulo: "Wonderwall", anio: 1995 },
    { titulo: "Viva la Vida", anio: 2008 },
    { titulo: "Blinding Lights", anio: 2019 },
    { titulo: "Flowers", anio: 2023 }
];

function retirarCancionesAntiguas (playlist){

    const copiaPlaylist = playlist.slice();

    let modernas = playlist.filter(cancion => cancion.anio > 2000);

    return {
        original : copiaPlaylist,
        modernas : modernas
    }
}

