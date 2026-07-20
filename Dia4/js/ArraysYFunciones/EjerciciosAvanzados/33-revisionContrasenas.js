/************************************************
EJERCICIO 33 — REVISIÓN DE CONTRASEÑAS
Dificultad: Avanzado
************************************************

Problema:

Verificar si todas las contraseñas cumplen
una longitud mínima y si alguna es insegura.

Entrada:

["abc123", "segura2026", "123"]

Condiciones:

- Segura: 6 o más caracteres.

Métodos recomendados:

- every
- some

Bonus:

- Mostrar cuáles son inseguras.
*/

var claves = ["abc123", "segura2026", "123", "1235", "89785"];

function verificarLongitud (claves){

    let inseguraIndice = [];

    let longitud = claves.map(clave => {
        return clave.length;
    });

    for (let i = 0; i<claves.length ; i++){
        if (longitud[i] < 6){
            inseguraIndice.push(claves[i]);
        }
    }

    if (inseguraIndice.length > 0){
        return inseguraIndice;
    } else {
        console.log("Todas las claves son seguras");
        return [];
    }
};

const clavesVerificadas = verificarLongitud(claves);
if (clavesVerificadas.length > 0){
    console.log(" --- Claves Inseguras --- ")
    clavesVerificadas.forEach(clave => console.log(clave));
}