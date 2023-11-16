let vokal = "aeiou";
let konstonant = "bcdfghjklmnpqrstvwxyz";

let knapp = document.querySelector("button");
let resultat = document.querySelector("#resultat");
let antall_bokstaver = document.querySelector("#inpTall");

knapp.addEventListener("click", tilfeldigOrd);

// Funksjon som skriver ut et tilfeldig ord.
function tilfeldigOrd() {
  let streng = "";
  let antallBokstaver = parseInt(antall_bokstaver.value);
  if (antallBokstaver % 2 !== 0) {
    streng = "Tallet må være et partall";
  } else {
    for (let i = 1; i < antallBokstaver / 2 + 1; i++) {
      let konst = konstonant[Math.floor(Math.random() * konstonant.length)];
      let vok = vokal[Math.floor(Math.random() * vokal.length)];
      streng = streng + konst + vok; // skriver ut annenhver konsonant og vokal
    }
  }
  resultat.innerHTML = streng;
}

