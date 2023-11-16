let knapp = document.querySelector("button")
let resultat = document.querySelector("#resultat")

knapp.addEventListener("click", tilfeldigHilsen);

function tilfeldigHilsen() {
    tall = Math.floor(Math.random()*3)
    if (tall < 1) {
        resultat.innerHTML = " Hei!"
    }
    else if (tall < 2) {
        resultat.innerHTML = " HALLO!"
    }
    else {
        resultat.innerHTML = " God dag!"
    }
}


