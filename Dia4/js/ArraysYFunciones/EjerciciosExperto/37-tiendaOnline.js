/************************************************
EJERCICIO 37 — SISTEMA COMPLETO DE GESTIÓN DE UNA TIENDA ONLINE
Dificultad: Experto+
************************************************

Problema:

Una empresa vende productos por internet.

Debes desarrollar un sistema completo que permita
administrar una tienda desde la consola utilizando
un menú interactivo.

El sistema debe gestionar:

- Inventario.
- Clientes.
- Carritos de compra.
- Compras.
- Ventas.
- Reportes.
- Estadísticas.

Todo el programa debe permanecer ejecutándose hasta
que el usuario decida salir.

==================================================
DATOS INICIALES
==================================================

Crear como mínimo los siguientes arreglos:

Productos (15 productos mínimo)

[
    {
        id: 1,
        nombre: "",
        categoria: "",
        precio: 0,
        stock: 0
    }
]

Clientes (5 clientes mínimo)

[
    {
        id: 1,
        nombre: "",
        dinero: 0,
        premium: true,
        carrito: []
    }
]

Ventas

const ventas = [];

Historial de movimientos (vacío)

const historial = [];

==================================================
MENÚ PRINCIPAL
==================================================

El programa debe utilizar un ciclo que permita
mostrar continuamente el menú hasta que el usuario
seleccione la opción de salir.

1. Agregar producto.
2. Eliminar producto.
3. Editar producto.
4. Buscar producto.
5. Mostrar inventario.
6. Agregar producto al carrito.
7. Ver carrito.
8. Confirmar compra.
9. Reportes.
10. Salir.

Utilizar obligatoriamente:

- while
- switch
- break
- continue

==================================================
OPCIÓN 1 - AGREGAR PRODUCTO
==================================================

Permitir registrar un nuevo producto.

Validaciones:

- Nombre obligatorio.
- El ID no puede repetirse.
- Precio mayor que 0.
- Stock mayor o igual a 0.
- Categoría válida.

Si alguna validación falla:

throw new Error(...)

Capturar el error utilizando:

try / catch

Registrar el movimiento en el historial.

==================================================
OPCIÓN 2 - ELIMINAR PRODUCTO
==================================================

Permitir eliminar un producto.

Validaciones:

- El producto debe existir.
- No eliminar productos inexistentes.

Registrar el movimiento en el historial.

==================================================
OPCIÓN 3 - EDITAR PRODUCTO
==================================================

Permitir modificar:

- Nombre.
- Precio.
- Stock.
- Categoría.

Utilizar un switch para seleccionar
qué propiedad modificar.

Registrar el cambio en el historial.

==================================================
OPCIÓN 4 - BUSCAR PRODUCTO
==================================================

Permitir buscar por:

- ID.
- Nombre.
- Categoría.
- Precio mínimo.
- Precio máximo.
- Productos disponibles.
- Productos agotados.

Mostrar todos los resultados encontrados.

==================================================
OPCIÓN 5 - MOSTRAR INVENTARIO
==================================================

Permitir ordenar el inventario por:

- Precio.
- Nombre.
- Stock.
- Categoría.

Además permitir mostrar:

- Todos.
- Solo disponibles.
- Solo agotados.

También mostrar:

- Los 5 productos más baratos.
- Los 5 productos más caros.

==================================================
OPCIÓN 6 - AGREGAR AL CARRITO
==================================================

Seleccionar un cliente.

Seleccionar un producto.

Ingresar la cantidad.

Validaciones:

- Cliente existente.
- Producto existente.
- Cantidad válida.
- Stock suficiente.

Si el producto ya existe dentro del carrito,
actualizar la cantidad.

==================================================
OPCIÓN 7 - VER CARRITO
==================================================

Mostrar:

Producto.
Cantidad.
Subtotal.

Calcular:

- Subtotal.
- Descuento.
- IVA.
- Total final.

Reglas:

- Clientes premium reciben un 10% de descuento.
- Compras superiores a 1000 reciben un descuento adicional.
- Mostrar claramente todos los cálculos.

==================================================
OPCIÓN 8 - CONFIRMAR COMPRA
==================================================

Validaciones:

- El carrito no puede estar vacío.
- El cliente debe tener dinero suficiente.
- Debe existir stock suficiente.

Si todo es correcto:

- Descontar dinero al cliente.
- Descontar stock.
- Registrar la venta.
- Vaciar el carrito.
- Registrar el movimiento en el historial.

Cada venta debe almacenarse con la siguiente estructura:

{
    idVenta,
    idCliente,
    productos,
    subtotal,
    descuento,
    iva,
    total,
    fecha
}

==================================================
OPCIÓN 9 - REPORTES
==================================================

Crear un submenú.

1. Total vendido.
2. Producto más vendido.
3. Cliente que más gastó.
4. Producto con menor stock.
5. Productos agotados.
6. Promedio por venta.
7. Valor total del inventario.
8. Historial de movimientos.
9. Volver.

==================================================
VALIDACIONES OBLIGATORIAS
==================================================

Validar como mínimo:

- Producto inexistente.
- Cliente inexistente.
- Carrito vacío.
- Cantidad negativa.
- Cantidad igual a cero.
- Precio inválido.
- Nombre vacío.
- Categoría inválida.
- Stock insuficiente.
- Dinero insuficiente.
- Opción de menú inválida.
- ID repetido.

==================================================
MANEJO DE ERRORES
==================================================

Utilizar obligatoriamente:

- try
- catch
- finally
- throw new Error()

Implementarlos en múltiples operaciones
del programa.

==================================================
FUNCIONES OBLIGATORIAS
==================================================

El programa debe estar dividido en funciones.

Como mínimo crear funciones similares a:

mostrarMenu()

agregarProducto()

eliminarProducto()

editarProducto()

buscarProducto()

mostrarInventario()

agregarAlCarrito()

mostrarCarrito()

confirmarCompra()

generarReportes()

validarProducto()

validarCliente()

calcularSubtotal()

calcularIVA()

calcularDescuento()

registrarVenta()

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

Implementar cupones de descuento.

Ejemplos:

- DESC10
- DESC20
- ENVIOGRATIS

Cada uno modifica el total de forma diferente.

--------------------------------------------------

BONUS 2

Crear un historial de movimientos.

Registrar:

- Altas.
- Eliminaciones.
- Ventas.
- Ediciones.

--------------------------------------------------

BONUS 3

Implementar una opción para deshacer la
última operación realizada.

--------------------------------------------------

BONUS 4

Generar un ranking Top 5 de clientes
que más dinero gastaron.

--------------------------------------------------

BONUS 5

Mostrar un dashboard final con:

- Total de ventas.
- Cantidad de clientes.
- Cantidad de productos.
- Producto más vendido.
- Cliente que más gastó.
- Total facturado.
- Promedio por venta.
- Valor total del inventario.

==================================================
OBJETIVO
==================================================

Este ejercicio busca simular un sistema real de gestión
de una tienda, obligando a utilizar programación
estructurada, funciones, condicionales, bucles,
switch, manejo de errores, validaciones, manipulación
de arreglos, estructuras de datos complejas y lógica
de negocio interconectada.
*/