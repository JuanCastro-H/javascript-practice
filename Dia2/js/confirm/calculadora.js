/*
Crear una variable llamada total con valor 0.

* Mientras el usuario acepte un confirm(),
pedir un número mediante prompt().

* Sumar el número al total.

* Después de cada suma mostrar:

"Total actual: X"

* Al finalizar:

    - Mostrar el total final.

    - Indicar si es mayor a 100.

    - Indicar si es par o impar.
*/

var total = 0;


do {
    
    let numero_ingresado = Number(window.prompt("Ingrese su numero"));
    
    total = total + numero_ingresado;
    
    console.log("---")
    console.log("Valor ingresado fue: " + numero_ingresado);
    console.log("Total actual: " + total);

    var seguir = window.confirm("Desea continuar?");
    
} while (seguir == true)

console.log("-------------------------------------")

if (seguir == false){

    console.log("El total final fue de: " + total);

    if(total > 100){
        console.log("Su cantidad total fue mayor a 100");
    }else {
        console.log("Su cantidad total fue menor a 100");
    }

    if(total % 2 == 0){
        console.log("El numero del total es Par");
    }else {
        console.log("El numero del total es Impar");
    }
}else {
    alert("Error de confirmacion")
}

