btnSvar.addEventListener("click", sjekkSvar);

let poeng = 0;
let hvilketSpm = 0;

let spm1 = { spm: "Hva heter Norges høyeste fjell?", svar: "Galdhøpiggen" };
let spm2 = { spm: "Hvor høy er Magnus?", svar: "190" };
let spm3 = { spm: "Hvem er presidenten i Brazil? (Etternavn)", svar: "Silva" };
let spm4 = { spm: "Hva er hovedstaden i Etiopia", svar: "Addis Abeba" };
let spm5 = { spm: "Når ble Nesbru vgs grunnlagt", svar: "1980" };
let spmArray = [spm1, spm2, spm3, spm4, spm5];

let tilfeldigRespons = [
  "Riktig!",
  "Hurra!!!",
  "Det er helt riktig!",
  "Riktig. Du er smart!",
];

function sjekkSvar() {
  let brukerSvar = document.getElementById("inpSvar").value;
  let riktigSvar = spmArray[hvilketSpm].svar;

  if (brukerSvar == riktigSvar) {
    document.getElementById("respons").innerHTML =
      tilfeldigRespons[Math.floor(Math.random() * tilfeldigRespons.length)];
    poeng++;
    document.getElementById("poeng").innerHTML = poeng;
  } else {
    document.getElementById("respons").innerHTML = "Feil svar. Prøv igjen!";
  }
}

document.getElementById("forrigeSpm").style.display = "none";

function nesteSpm() {
  hvilketSpm++;
  document.getElementById("bilde").src = "Bilde-"+ (hvilketSpm + 1)  + ".jpg";
  oppdaterSporsmal();
}

function forrigeSpm() {
  if (hvilketSpm > 0) {
    hvilketSpm--;
    oppdaterSporsmal();
    document.getElementById("bilde").src = "Bilde-"+ (hvilketSpm + 1)  + ".jpg";
  }
}

function oppdaterSporsmal() {
  document.getElementById("spm").innerHTML = spmArray[hvilketSpm].spm;
  document.getElementById("inpSvar").value = "";
  document.getElementById("respons").innerHTML = "";
  document.getElementById("spmNr").innerHTML = hvilketSpm + 1;

  if (hvilketSpm === 0) {
    document.getElementById("forrigeSpm").style.display = "none";
  } else {
    document.getElementById("forrigeSpm").style.display = "inline-block";
  }

  if (hvilketSpm === spmArray.length - 1) {
    document.getElementById("nesteSpm").style.display = "none";
  } else {
    document.getElementById("nesteSpm").style.display = "inline-block";
  }
}

