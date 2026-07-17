/************************************************
EJERCICIO 29 — SISTEMA DE TURNOS
Dificultad: Avanzado
************************************************

Problema:

Un hospital atiende al primer paciente
y registra nuevos ingresos.

Entrada:

["Ana", "Pedro", "Juan"]

Nuevo paciente:

"María"

Métodos recomendados:

- shift
- push

Requisitos mínimos:

- Mostrar quién fue atendido.
- Mostrar la nueva cola.

Bonus:

- Procesar varios pacientes nuevos.
*/

var pacientes = ["Ana", "Pedro", "Juan"];

function registroPacientes (pacientes){

    let seguir = true;
    let atenderRegistrar = window.confirm("Opcion1: atender paciente: 'Aceptar'. Opcion2: Registrar paciente: 'Cancelar' ")

    if (atenderRegistrar){
        let pacienteAtendido = pacientes.shift();
        alert("El paciente atendido fue: " + pacienteAtendido);
    } else {
        while (seguir){
            let nuevoPaciente = window.prompt("Ingrese el nombre del nuevo paciente");
            pacientes.push(nuevoPaciente);

            seguir = window.confirm("Desea agregar un nuevo paciente?");
            }
            
        console.log(" --- Lista de Pacientes Actualizada ---");
        pacientes.forEach(paciente => {
            console.log(paciente);
            
        });
    }

};

registroPacientes(pacientes);