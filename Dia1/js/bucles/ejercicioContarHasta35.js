/*
* Realizar un programa en Javascript que muestre los numeros del 1 al 35
(Uno abajo del otro) mediante un console.log().

* Utilizar para esto alguna estructura repetitiva.

*/ 

// --- Inicializar contador ---
var contador = 0;

// --- Crear bucle que aumente hasta 35 ---
while (contador < 35){
    // Imprimir el numero del contador actual + 1 en la consola
    console.log("El numero actual es: " + (contador + 1));
    contador ++;
}

