function terning() {
  return Math.floor(Math.random() * 20) + 1;
}

let knapp = document.querySelector("button");
let resultat = document.querySelector("#resultat");

knapp.addEventListener("click", kast);

function kast() {
  let tall = terning()
  if (tall <= 6) {
    resultat.innerHTML = "Du fikk 6 eller mindre";
  } else if (tall > 6 && tall < 18) {
    resultat.innerHTML = "Du fikk imellom 6 og 18";
  } else if (tall >= 18) {
    resultat.innerHTML = "Du fikk mer en 18";
  } else if (tall == 13) {
    resultat.innerHTML = "Du fikk 13";
  }
}


