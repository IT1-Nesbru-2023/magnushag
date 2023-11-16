let tall = document.querySelector("#inpTall");
let knapp = document.querySelector("button");
let resultat = document.querySelector("#resultat");

knapp.addEventListener("click", areal);

function areal() {
  let tallet = parseInt(tall.value);
  if (tallet < 0) {
    resultat.innerHTML = "Sidelengden må være positiv";
  } else {
    let arealet = tallet * tallet;
    resultat.innerHTML = arealet;
  }
}
