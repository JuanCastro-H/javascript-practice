/*
Ingresar dos numeros mediante un prompt y almacenar sus valores
en dos variables distintas.

* Realizar una resta entre los dos valores en Javascript.
* Almacenar el resultado en una variable.
* Importar el archivo JS desde una pagina HTML.

* Si el resultado de la resta es mayor a 0, mostrar mediante un
console.log() o un alert() el mensaje "es mayor a 0".

    * Si es mayor a cero, comparar si el numero es par, en caso
    de  que lo sea mostrar un mensaje "Es par" en caso de que no uno
    que diga "es impar".

* En caso de que sea menor a 0, mostrar un mensaje que diga "es menor o igual a 0".
*/ 

var numero1 = prompt("Ingrese el primer numero");
var numero2 = prompt("Ingrese el segundo numero");

var resta = numero1 - numero2;

if (resta > 0){
    console.log("Es mayor a 0");
    if (resta % 2 == 0){
        console.log("Es par");
    }
    else{
        console.log("Es impar");
    }
}
else {
    console.log("La resta de tu numero equivalente a: " + resta + " Es un numero menor o igual a 0.");
}
