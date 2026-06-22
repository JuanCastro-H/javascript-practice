/*
Ingresar un número mediante prompt().

* Utilizar un bucle para mostrar desde 1
hasta el número ingresado.

Ejemplo:

Si ingresa 5:

1
2
3
4
5
*/

var centinela = Number(window.prompt("Ingresa un numero."));

for(i = 0; i < centinela; i++){
    console.log(i + 1);
}