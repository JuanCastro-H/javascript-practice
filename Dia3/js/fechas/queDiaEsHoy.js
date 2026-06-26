/*
Crear una variable:

hoy = new Date()

Obtener el día actual mediante getDay().

Mostrar:

0 = Domingo
1 = Lunes
...

Además:

Si es sábado o domingo:
    Mostrar:
    "Disfruta tu descanso."

Si es lunes:
    Mostrar:
    "Comienza la semana."

Si es viernes:
    Mostrar:
    "Ya casi termina la semana."

Para cualquier otro día:
    Mostrar:
    "Día normal."
*/

var hoy = new Date();

var numeroSemana = hoy.getDay();

    switch (numeroSemana){

        case 0:
            diaSemana = "Domingo";
        break;

        case 1:
            diaSemana = "Lunes";
        break;

        case 2:
            diaSemana = "Martes";
        break;

        case 3:
            diaSemana = "Miercoles";
        break;

        case 4:
            diaSemana = "Jueves";
        break;

        case 5:
            diaSemana = "Viernes";
        break;

        case 6:
            diaSemana = "Sabado";
        break;
    }

console.log("Tu dia de la semana es: " + diaSemana);

if (numeroSemana == 0 || numeroSemana == 6){
    console.log("Disfruta tu descanso.");
} else if (numeroSemana == 1){
    console.log("Comienza la semana.");
} else if (numeroSemana == 5){
    console.log("Ya casi termina la semana.");
} else {
    console.log("Dia normal.");
}


