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

    let modernas = playlist.slice(cancion => cancion.anio > 2000);

    return {
        original : copiaPlaylist,
        modernas : modernas
    }
}


function agregarCancion (playlist){

    let seguir = true;

    while (seguir){
        let nombre = window.prompt("Ingrese el nombre de la cancion");
        let fecha = Number(window.prompt("Ingrese el anio de la cancion"));

        playlist.push({titulo: nombre, anio: fecha});

        seguir = window.confirm("Desea agregar una nueva cancion?");
    }

    return playlist;
}

function invertirLista (playlist){

    return playlist.reverse();
}

function menu (){
    
    let seguir = true;

    while (seguir){

        alert(` --- Menu --- 
            1 - Agregar Una Nueva Cancion.
            2 - Obtener Solo Canciones Modernas.
            3 - Invertir Playlist.
            `);
        
        let opcion = Number(window.prompt("Que opcion Desea Realizar?","0 - Mostrar Opciones De Menu"));

        if (opcion === 0){
            continue;
        } else if (1) {
            const playlistActualizada = agregarCancion(playlist);
            console.log(" --- Lista De Canciones Actualizada ---");
            playlistActualizada.forEach(cancion => {
                console.log(`Cancion ${cancion.titulo} Del Anio ${cancion.anio}`);
            });
        } else if (opcion === 2) {
            const cancionesFiltradas = retirarCancionesAntiguas(playlist);
            console.log(" --- Canciones Modernas ---");
            cancionesFiltradas.modernas.forEach(cancion => {
                console.log(`Cancion ${cancion.titulo} Del Anio ${cancion.anio}`);
            });
        } else if (opcion === 3) {
            const playlistInvertida = invertirLista(playlist);
            playlistInvertida.forEach(cancion => {
            console.log(`Cancion ${cancion.titulo} Del Anio ${cancion.anio}`);
        });
        } else {
            console.log("Opcion Invalida");
        }

        seguir = !window.confirm("Desea salir del menu?");
    }
}

menu();