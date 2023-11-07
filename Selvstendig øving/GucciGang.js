let vers1 = "Gucci gang";
let vers2 = "spend three racks on new chains";
let tekst = "";
let resultat = document.querySelector("#resultat");
let antall = 1;
let knapp = document.querySelector("button");

knapp.addEventListener("click", gucciGang);

function gucciGang() {
  while (antall <= 74) {
    if (antall % 10 !== 0) {
      tekst = tekst + vers1 + "<br>";
    } else {
      tekst = tekst + vers2 + "<br>";
    }
    antall++;
  }
  resultat.innerHTML = tekst;
}
