/*
Pedir:

- Año de nacimiento.
- Mes de nacimiento.
- Día de nacimiento.

Obtener la fecha actual.

Determinar si el usuario:

- Ya cumplió años.
- Todavía no cumplió años.

Mostrar:

"Ya cumpliste años este año."

o

"Todavía no cumpliste años."

Utilizar condicionales anidadas.
*/

var anio = Number(window.prompt("Ingrese su anio de nacimiento.", "yyyy"));
var mes = Number(window.prompt("Ingrese su mes de nacimiento.", "mm"));
var dia = Number(window.prompt("Ingrese su dia de nacimiento.","dd"));
var fechaNacimiento = dia + "/" + mes + "/" + anio
alert(fechaNacimiento)

var fechaActual = new Date();
var mesActual = (fechaActual.getMonth() + 1); // Hay que sumarle uno ya que esa funcion nos devuelte los meses apartir del 0
var diaActual = fechaActual.getDate();

alert(fechaActual)

if (dia > 0 && dia <= 31 && mes > 1 && mes <= 12 && anio < fechaActual.getFullYear()){
    console.log("Datos correctos");
}else {
    console.log("Datos de fecha incorrectos");
}

if (mes > mesActual){
    console.log("Todavia no cumples anios.");
} else if (mes < mesActual){
    console.log("Ya cumpliste anios.");
} else if (mes == mesActual){
    if (dia == diaActual){
        console.log("Hoy es tu cumpla felicidades");
    } else if (dia > diaActual){
        console.log("Todavia no cumples anios.");
    } else if (dia < diaActual){
            console.log("Ya cumpliste anios.");
    } else {
        console.log("Fallo en las condicionales.");
    }
} else {
    console.log("Fecha invalida");
}

