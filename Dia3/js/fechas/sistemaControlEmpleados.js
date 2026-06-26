/*
Una empresa quiere registrar la asistencia
de sus empleados.

Crear los siguientes contadores:

- Puntuales.
- Tarde.
- Ausentes.
- Turno mañana.
- Turno tarde.
- Turno noche.

Mientras el administrador acepte:

    "¿Registrar empleado?"

Pedir:

- Nombre.
- Hora de entrada (0-23).
- Mes de ingreso a la empresa.
- Año de nacimiento.

Reglas:

TURNO:

6-13:
    Mañana

14-20:
    Tarde

21-5:
    Noche

PUNTUALIDAD:

    Si llega exactamente a su hora: 
        - Puntual.

    Si llega hasta 2 hora después: 
        - Tarde.

    Si llega más de 2 hora después: 
        - Ausente.

EDAD:

Menor de 18:
    "Menor de edad"

18-59:
    "Adulto"

60 o más:
    "Adulto mayor"

ANTIGÜEDAD:

Si ingresó este mismo mes:
    "Empleado nuevo"

Si ingresó antes:
    "Empleado antiguo"

Además:

Si el empleado:

- Es mayor de 60.
- Trabaja de noche.

Mostrar:

"Empleado de riesgo."

Al finalizar mostrar:

- Total de empleados.
- Puntuales.
- Tardes.
- Ausentes.
- Cantidad por turno.
- Cuántos son menores.
- Cuántos son adultos.
- Cuántos son adultos mayores.

Finalmente indicar:

- Qué turno tuvo más empleados.
- Qué tipo de asistencia predominó.
- Si hubo empate.
*/

// -------------------
// Contadores
// -------------------

var puntuales = 0;
var tarde = 0;
var ausentes = 0;
var temprano = 0;
var turnoManiana = 0;
var turnoTarde = 0;
var turnoNoche = 0;

// -------------------
// fecha actual
// -------------------

var fechaActual = new Date();

// -------------------
// edad
// -------------------

var edad;
var edadEstado = null;
var menores = 0;
var adultos = 0;
var adultoMayor = 0;

// -------------------
// confirmacion
// -------------------

var registrarEmpleado = window.confirm("Desea registrar un empleado?");
var cantidadEmpleados = 0; 

// -------------------
// Datos empleado
// -------------------

var nombre = null;
var horaEntrada;
var mesIngreso;
var anioNacimiento;
var turno;
var turnoHora;
var anioIngreso;

// ---------------------------------
// Bucle de registro de empleados
// ---------------------------------

while (registrarEmpleado == true){

    // --- Aumentar contador de empleados ---
    cantidadEmpleados ++;

    // --- Solicitar datos del empledo ---
    nombre = window.prompt("Nombre del empleado");
    horaEntrada = Number(window.prompt("Hora de entrada","0-23 Horas"));
    mesIngreso = Number(window.prompt("Mes de ingreso a la empresa","1-12"));
    anioNacimiento = Number(window.prompt("Anio de nacimiento","yyyy"));
    anioIngreso = Number(window.prompt("Anio de ingreso a la empresa","yyyy"));

    // --- Calculo de edad ---
    edad = fechaActual.getFullYear() - anioNacimiento; 

    // -------------------
    // Edad
    // -------------------

    if (edad < 18){ // Menor de 18.
        menores ++;
        edadEstado = "Menor de edad";
    } else if (edad >= 18 && edad <= 59){ // Entre 18 y 59.
        adultos ++;
        edadEstado = "Adulto";
    } else if (edad >= 60){ // Mayor a 60.
        adultoMayor ++;
        edadEstado = "Adulto mayor";
    } else { // Manejo de edad invalida.
        alert("La edad ingresada: " + edad + " No es valida.");
    }


    // -------------------
    // Turno de llegada
    // -------------------

    if (horaEntrada >= 6 && horaEntrada <= 13){ // Turno maniana.
        turnoHora = 6;
        turnoManiana ++;
        turno = "Maniana";
    } else if (horaEntrada >= 14 && horaEntrada <= 20){ // Turno tarde.
        turnoHora = 14;
        turnoTarde ++;
        turno = "Tarde";
    } else if (horaEntrada >= 21 && horaEntrada <= 23 || horaEntrada >=0 && horaEntrada <= 5){ // Turno noche.
        turnoHora = 21;
        turnoNoche ++;
        turno = "Noche";
        if (edadEstado == "Adulto mayor"){ // Caso especial de adulto mayor.
            alert("Empleado de riesgo");
        }
    } else { // Manejo de hora de entrada invalidaa.
        alert("La hora de entrada: " + horaEntrada + " No es valida.")
    }


    // ---------------------
    // Puntualidad
    // ---------------------

    if (horaEntrada == turnoHora){ // Puntual
        puntuales ++;    
    } else if (horaEntrada > turnoHora &&  horaEntrada <= (turnoHora + 2)){ // Tarde (2 horas de retraso maximo)
        tarde ++;
    } else if (horaEntrada > (turnoHora + 2)){ // Ausente (mas de 2 horas de retrasao)
        ausentes ++;
    } else if (turno == "Noche"){
        if (horaEntrada >= 0 && horaEntrada <= 5){ // Manejo de asencias en turno noche.
            ausentes ++;
        }
    } else { // Manejo de ingreso temprano
        temprano ++;
    }


    // -------------------
    // Antiguedad
    // -------------------

    // --- Verificar si el mes de ingreso es el actual ---
    if (mesIngreso == (fechaActual.getMonth() + 1) && anioIngreso == fechaActual.getFullYear()){
        console.log("Empleado nuevo");
    } // --- Verificar si el mes ingresado es valido --
    else if (mesIngreso >= 1 && mesIngreso <= 12){  

        // -- Verificaar que el anio sea el actual ---
        if (fechaActual.getFullYear() == anioIngreso){

            // Verificar que el mes sea menor al mes actual ---
            if (mesIngreso < (fechaActual.getMonth() + 1)){
                console.log("Empleado antiguo");
            } // -- Si es mayor... ---
            else {
                console.log("El mes de ingreso es invalido");
            }
        } // --- Verificar si el anio de ingreso es menor al actual --- 
        else if (anioIngreso < fechaActual.getFullYear()){
            console.log("Empleado antiguo");
        } // --- Si no es menor ---
        else {
            console.log("Anio de ingreso invalido");
        }
    } // --- Si el mes ingresado no es valido ---
    else { 
        console.log("Mes de ingreso invalido");
    }


    // Agregar empleado o salir del bucle
    registrarEmpleado = window.confirm("Desea registrar un empleado?");
}


// --- Estadisticas Generales ---
console.log("ESTADISTICAS GENERALES");

console.log("El total de empleados es: " + cantidadEmpleados);
console.log("La cantidad de empleados puntuales fue de: " + puntuales);
console.log("La cantidad de atrasos es de: " + tarde);
console.log("La cantidad de ausentes es de: " + ausentes);
console.log("La cantidad de empleados que llegaron temprano fue de: " + temprano);

console.log("La cantidad de personas menores es de: " + menores);
console.log("La cantidad de adultos es de : " + adultos);
console.log("La cantidad adultos mayores es de: " + adultoMayor);


console.log("ESTADISTICAS DE TURNOS Y PUNTULIDAD");

// --- Turnos ---

if (turnoManiana == turnoTarde && turnoManiana == turnoNoche){
    console.log("Hubo un empate entre la cantidad de empleados por turnos");
} else if(turnoManiana >= turnoTarde && turnoManiana >= turnoNoche){
    console.log("La asistencia predominante fue en el turno maniana con: " + turnoManiana + "de empleados");
} else if (turnoTarde >= turnoManiana && turnoTarde >= turnoNoche){
    console.log("La asistencia predominante fue en el turno tarde con: " + turnoTarde + "de empleados");
} else if (turnoNoche >= turnoManiana && turnoNoche >= turnoTarde){
    console.log("La asistencia predominante fue en el turno noche con: " + turnoNoche + "de empleados");
} else {
    console.log("Hubo un error en el calculo de turno predominante");
}

// --- Asistencia predominante ---
if (puntuales == tarde && puntuales == ausentes && puntuales == temprano){
    console.log("Hubo un empate entre la asistencia de los empleados en todos los tipos de llegadas");
} else if (puntuales >= tarde && puntuales >= ausentes && puntuales >= temprano){
    console.log("La asistencia predominante de los empleados fue puntuales con: " + puntuales + " Asistencias");
} else if (tarde >= puntuales && tarde >= ausentes && tarde >= temprano){
    console.log("La asistencia predominante fue de: " + tarde + " Retrasos");
} else if (ausentes >= puntuales && ausentes >= tarde && ausentes >= temprano){
    console.log("La asistencia predominante fue de: " + ausentes + " Ausentes");
} else if (temprano >= puntuales && temprano >= tarde && temprano >= ausentes){
    console.log("La asistencia predominante fue de: " + temprano + "Llegadas tempranas");
}
    else {
    console.log("Hubo un problema en el calculo de asistencia predominante");
}

