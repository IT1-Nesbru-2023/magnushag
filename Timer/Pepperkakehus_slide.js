let imgBilde = document.getElementById("imgBilde")
let bildeNummer = document.getElementById("bildeNummer")


function visBilde(parameter) {
    imgBilde.src = "https://helull.github.io/bilder/pepperkakehus/hus"+ parameter + ".jpg";
}

function visNummer(parameter) {
    bildeNummer.innerHTML = parameter;
}
