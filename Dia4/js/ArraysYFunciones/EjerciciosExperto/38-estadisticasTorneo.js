/************************************************
ARCHIVO: 38-estadisticas-torneo.js
EJERCICIO 38 — SISTEMA COMPLETO DE GESTIÓN DE UN TORNEO
Dificultad: Experto+
************************************************

Problema:

Una organización administra un torneo competitivo.

Debes desarrollar un sistema completo que permita
gestionar jugadores, equipos, partidos, resultados,
estadísticas y clasificaciones mediante un menú
interactivo ejecutado desde la consola.

Todo el programa debe permanecer ejecutándose hasta
que el usuario decida finalizarlo.

==================================================
DATOS INICIALES
==================================================

Crear como mínimo los siguientes arreglos.

Jugadores (20 jugadores mínimo)

[
    {
        id: 1,
        nombre: "",
        edad: 0,
        equipoId: 1,
        puntos: 0,
        victorias: 0,
        derrotas: 0,
        empates: 0,
        partidosJugados: 0
    }
]

Equipos (4 equipos mínimo)

[
    {
        id: 1,
        nombre: "",
        ciudad: ""
    }
]

Partidos

const partidos = [];

Historial

const historial = [];

==================================================
MENÚ PRINCIPAL
==================================================

El programa debe utilizar un ciclo para mantenerse
ejecutándose hasta seleccionar la opción salir.

1. Registrar jugador.
2. Eliminar jugador.
3. Editar jugador.
4. Buscar jugador.
5. Registrar partido.
6. Ver clasificación.
7. Estadísticas.
8. Historial.
9. Salir.

Utilizar obligatoriamente:

- while
- switch
- break
- continue

==================================================
OPCIÓN 1 - REGISTRAR JUGADOR
==================================================

Permitir registrar un nuevo jugador.

Validaciones:

- ID único.
- Nombre obligatorio.
- Edad mayor a 0.
- Equipo existente.

Si alguna validación falla:

throw new Error(...)

Capturar el error mediante:

try / catch

Registrar la acción en el historial.

==================================================
OPCIÓN 2 - ELIMINAR JUGADOR
==================================================

Permitir eliminar un jugador.

Validaciones:

- El jugador debe existir.

Registrar la acción en el historial.

==================================================
OPCIÓN 3 - EDITAR JUGADOR
==================================================

Permitir modificar:

- Nombre.
- Edad.
- Equipo.

Utilizar un switch para seleccionar
la propiedad a modificar.

Registrar la modificación en el historial.

==================================================
OPCIÓN 4 - BUSCAR JUGADOR
==================================================

Permitir buscar por:

- ID.
- Nombre.
- Equipo.
- Edad mínima.
- Edad máxima.
- Cantidad de puntos.
- Cantidad de victorias.

Mostrar todos los resultados encontrados.

==================================================
OPCIÓN 5 - REGISTRAR PARTIDO
==================================================

Registrar un partido indicando:

- Jugador A.
- Jugador B.
- Ganador o empate.

Actualizar automáticamente:

- Partidos jugados.
- Victorias.
- Derrotas.
- Empates.
- Puntos.

Sistema de puntuación:

Victoria = 3 puntos

Empate = 1 punto

Derrota = 0 puntos

Validaciones:

- Ambos jugadores deben existir.
- No puede enfrentarse un jugador consigo mismo.
- No registrar resultados inválidos.

Guardar el partido en el arreglo partidos.

Registrar la acción en el historial.

==================================================
OPCIÓN 6 - CLASIFICACIÓN
==================================================

Mostrar:

Ranking completo ordenado por:

- Puntos.
- Victorias.
- Diferencia de partidos.
- Nombre.

Además mostrar:

- Top 3.
- Últimos 3.
- Jugadores invictos.
- Jugadores sin victorias.

==================================================
OPCIÓN 7 - ESTADÍSTICAS
==================================================

Crear un submenú.

1. Puntaje total.
2. Promedio de puntos.
3. Jugador con mayor puntaje.
4. Jugador con menor puntaje.
5. Jugador con más victorias.
6. Jugador con más derrotas.
7. Equipo con más puntos.
8. Promedio de edad.
9. Cantidad total de partidos.
10. Volver.

==================================================
ESTADÍSTICAS
==================================================

Calcular:

- Puntaje total del torneo.
- Promedio de puntos.
- Promedio de edad.
- Ranking general.
- Top 3.
- Bottom 3.
- Jugador con mayor puntaje.
- Jugador con menor puntaje.
- Jugador con más victorias.
- Jugador con más derrotas.
- Equipo con más puntos.
- Equipo con mayor cantidad de victorias.
- Cantidad de partidos disputados.
- Cantidad total de victorias.
- Cantidad total de empates.

==================================================
OPCIÓN 8 - HISTORIAL
==================================================

Mostrar todas las operaciones realizadas.

Ejemplos:

- Jugador agregado.
- Jugador eliminado.
- Partido registrado.
- Jugador editado.

Cada registro debe contener:

- Fecha.
- Hora.
- Tipo de acción.
- Descripción.

==================================================
VALIDACIONES OBLIGATORIAS
==================================================

Validar como mínimo:

- Jugador inexistente.
- Equipo inexistente.
- Edad inválida.
- Nombre vacío.
- ID repetido.
- Partido inválido.
- Jugador repetido en el mismo partido.
- Resultado inválido.
- Opción de menú inválida.

==================================================
MANEJO DE ERRORES
==================================================

Utilizar obligatoriamente:

- try
- catch
- finally
- throw new Error()

Implementarlos en distintas operaciones
del programa.

==================================================
FUNCIONES OBLIGATORIAS
==================================================

El programa debe estar dividido en funciones.

Como mínimo crear funciones similares a:

mostrarMenu()

registrarJugador()

eliminarJugador()

editarJugador()

buscarJugador()

registrarPartido()

mostrarRanking()

mostrarTop3()

mostrarBottom3()

mostrarEstadisticas()

mostrarHistorial()

calcularPromedio()

calcularTotalPuntos()

calcularEquipoGanador()

calcularJugadorTop()

calcularJugadorBottom()

validarJugador()

validarEquipo()

registrarMovimiento()

==================================================
MÉTODOS DE ARRAYS OBLIGATORIOS
==================================================

Intentar utilizar la mayor cantidad posible de:

- find
- findIndex
- filter
- map
- reduce
- sort
- some
- every
- includes
- splice
- slice
- push
- pop
- shift
- unshift
- concat
- flatMap

==================================================
BONUS
==================================================

BONUS 1

Implementar temporadas.

Cada temporada tendrá:

- Año.
- Campeón.
- Subcampeón.
- Partidos.
- Estadísticas.

--------------------------------------------------

BONUS 2

Crear un sistema de premios.

Otorgar automáticamente:

- MVP.
- Máximo goleador (o mayor puntaje).
- Mejor jugador joven.
- Jugador más regular.

--------------------------------------------------

BONUS 3

Permitir transferir jugadores entre equipos.

Actualizar automáticamente todas las estadísticas.

--------------------------------------------------

BONUS 4

Implementar un sistema de sanciones.

Cada sanción puede quitar puntos
a un jugador o a un equipo.

--------------------------------------------------

BONUS 5

Generar un dashboard final con:

- Cantidad de jugadores.
- Cantidad de equipos.
- Partidos disputados.
- Total de puntos.
- Promedio de puntos.
- Campeón del torneo.
- Subcampeón.
- MVP.
- Equipo con más victorias.
- Jugador con más puntos.
- Jugador con menos puntos.

==================================================
OBJETIVO
==================================================

Este ejercicio busca simular un sistema real de
administración de un torneo deportivo, obligando
a utilizar programación estructurada, funciones,
condicionales, bucles, switch, validaciones,
manejo de errores, estadísticas complejas,
múltiples estructuras de datos y lógica de negocio
interconectada.
*/