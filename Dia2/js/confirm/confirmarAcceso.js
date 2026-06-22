/*
Preguntar mediante un confirm() si el usuario es mayor de edad.

* Si acepta, mostrar un mensaje que diga:
"Acceso permitido".

* Si cancela, mostrar:
"Acceso denegado".
*/

var verificadorEdad = window.confirm("Eres mayor de 18?");

if (verificadorEdad == true){
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}