/*
Preguntar mediante confirm() si desea realizar una compra.

* Si acepta:

    - Solicitar el precio del producto.

    - Si el precio es mayor a 100000,
      mostrar:
      "Producto premium".

    - En caso contrario mostrar:
      "Producto estándar".

* Si cancela mostrar:
"Compra cancelada".
*/

var realizarCompra = window.confirm("Desea realizar una compra?");


if (realizarCompra == true) {
  
  precioProducto = Number(window.prompt("Cual es el precio del producto?"));

  if (precioProducto > 100000){
    console.log("Producto premiun");
  } else {
    console.log("Producto estandar");
  }


} else {
  console.log("compra cancelada.");
}
