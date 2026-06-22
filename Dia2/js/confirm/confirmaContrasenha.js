/*
Preguntar mediante confirm() si el usuario
desea iniciar sesión.

* Si acepta:

    - Solicitar una contraseña mediante prompt().

    - Si la contraseña es igual a "1234",
      mostrar:
      "Acceso correcto".

    - En caso contrario mostrar:
      "Contraseña incorrecta".

* Si cancela:

    - Mostrar:
      "Inicio de sesión cancelado".
*/

var iniciarSession = window.confirm("Desea iniciar sesion?");

var clave = 1234;

if (iniciarSession == true) {

  claveIngresada = window.prompt("Ingrese su clave");

  if (claveIngresada == clave) {
    console.log("Acceso correcto");
  } else {
    console.log("Acceso denegado clave incorrecta");
  }
} else {
  console.log("Inicio de sesion cancelado.");
}