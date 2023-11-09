let aar = document.querySelector("#inpaar");
let knapp = document.querySelector("button");
let resultat = document.querySelector("#resultat");

knapp.addEventListener("click", skuddor);

// funksjon som skjkker om input året er et skuddår
function skuddor() {
  let aaret = parseInt(aar.value);
  let erSkuddor = false;
  // hvis året er delelig med 4 er det et skuddår
  if (aaret % 4 == 0) {
    erSkuddor = true;
  }
  if (erSkuddor) { 
    resultat.innerHTML = aaret + " er et skuddår";
  } else {
    resultat.innerHTML = aaret + " er ikke et skuddår";
  }
}

