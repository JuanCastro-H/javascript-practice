/*
Preguntar mediante prompt() cuántas veces
quiere mostrar un mensaje.

* Utilizar un bucle para mostrar:

"Estoy aprendiendo Javascript"

la cantidad de veces indicada.
*/

var cantidadMensajes = Number(window.prompt("Cuantas veces quieres mostrar el mensaje?"));
var centinela = 0;

while (centinela < cantidadMensajes){
    console.log("Estoy aprendiendo Javascript vuelta: " +  (centinela + 1));
    centinela ++;
}