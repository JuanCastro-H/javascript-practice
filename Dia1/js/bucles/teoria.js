// Bucle While (Mientras)

var contador = 0;

while (contador < 10){

    console.log("Estoy en la vuelta numero: " + contador);
    contador ++;
}

console.log("------------------------")
//  Bucle For (Repetir hasta)

// Primero declarar la variable del contador
// Luego el limite o rango
// Luego como se va a modificar el contador
for (var i=1 ; i <= 10 ; i++){
    console.log("Vuelta numero: " + i);

}

console.log("------------------------")
// Do While (Hacer mientras) Entra dentro de la porcion de codigo almenos una vez

var contador2 = 0;

do {
    console.log("Vuelta del bucle numero: " + contador2);
    contador2 ++;
} 
while (contador2 <= 10)