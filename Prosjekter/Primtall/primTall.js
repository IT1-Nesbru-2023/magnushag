let tallInput = document.querySelector("#inpTall");
let knapp = document.querySelector("button");
let resultatElement = document.querySelector("#resultat");

knapp.addEventListener("click", primtall);

function primtall() {
    let tall = parseInt(tallInput.value);
    let faktor;
    if (tall == 1) {
        resultatElement.innerHTML = "1 er verken et primtall eller et sammensatt tall";
    } 
    else if (tall > 1) {
        let erPrimtall = true;
        for (let i = 2; i <= tall / 2; i++) {
            if (tall % i == 0) {
                erPrimtall = false;
                faktor = i;
                break;

            }
        }
        if (erPrimtall) {
            resultatElement.innerHTML = tall + " er et primtall";
        } else {
            resultatElement.innerHTML = tall + " er ikke et primtall fordi " + tall + " er delelig med " + faktor;
        }
    } 
}


