function terning() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  let antallTerningerInput = document.querySelector("#inpTall");
  let knapp = document.querySelector("button");
  let resultatElement = document.querySelector("#resultat");
  
  knapp.addEventListener("click", yatzy);
  
  function yatzy() {
    let antallTerninger = parseInt(antallTerningerInput.value);
    if (antallTerninger < 1 || antallTerninger > 6) {
        resultatElement.innerHTML = "Antall terninger må være mellom 1 og 6";
    } else {
      const resultat = [];
      for (let i = 1; i <= antallTerninger; i++) {
        resultat.push(terning());
      }
      resultatElement.innerHTML = "Du kastet " + antallTerninger + " terninger og fikk: " + resultat.join();
    }
  }
