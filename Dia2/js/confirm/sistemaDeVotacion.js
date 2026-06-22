/*
Crear dos variables:

votosSi = 0
votosNo = 0

* Mientras el usuario acepte un confirm()
  que diga:

  "¿Desea registrar un voto?"

* Si acepta:

    - Preguntar mediante otro confirm():

      "¿Vota a favor?"

    - Si acepta:
      incrementar votosSi.

    - Si cancela:
      incrementar votosNo.

* Cuando el usuario decida dejar de registrar
  votos, mostrar:

    - Cantidad de votos a favor.
    - Cantidad de votos en contra.
    - Cantidad total de votos.

* Además:

    - Si los votos a favor son mayores,
      mostrar:
      "Ganó el SI".

    - Si los votos en contra son mayores,
      mostrar:
      "Ganó el NO".

    - Si son iguales,
      mostrar:
      "Empate".
*/

var votosSi = 0;
var votosNo = 0;
var votosTotales = 0;

var DeseaVotar = window.confirm("Desea registrar un voto?");

while (DeseaVotar == true){

  voto = window.confirm("Desea votar a favor o encontra?");

  if (voto == true){
    votosSi ++;
  } else {
    votosNo ++;
  }

  var DeseaVotar = window.confirm("Desea registrar un nuevo voto?");
}
console.log("-----------------");
votosTotales = votosSi + votosNo;

console.log("ESTADISTICAS")
console.log("Cantidad de votos a favor: " + votosSi);
console.log("Cantidad de votos encontra: " + votosNo);
console.log("Cantidad total de votos: " + votosTotales);

console.log("ANALISIS DE RESULTADO")
if (votosSi > votosNo){
  console.log("Gano el Si con un total de: " + votosSi + " Votos.");
} else if (votosNo > votosSi) {
  console.log("Gano el NO con un total de: " + votosNo + " Votos.");
} else {
  console.log("Hubo un empate entre los votantes. votos si: " + votosSi + " Votos no: " + votosNo);
}