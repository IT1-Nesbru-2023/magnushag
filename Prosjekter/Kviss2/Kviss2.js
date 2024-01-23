btnSvar.addEventListener("click", sjekkSvar);

let poeng = 0;
let hvilketSpm = 0;

let spm1 = { spm: "Hva heter Norges høyeste fjell?", svar: "Galdhøpiggen" };
let spm2 = { spm: "Hvor høy er Magnus?", svar: "190" };
let spm3 = { spm: "Hvem er presidenten av Brazil? (Etternavn)", svar: "Silva" };
let spm4 = { spm: "Hva er hovedstaden i Etiopia", svar: "Addis Abeba" };
let spmArray = [spm1, spm2, spm3, spm4];

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

function nesteSpm() {
  hvilketSpm++;
  if (hvilketSpm == 4) {
    document.getElementById("nesteSpm").disabled = true;
  } else {
    document.getElementById("spm").innerHTML = spmArray[hvilketSpm].spm;
    document.getElementById("inpSvar").value = "";
    document.getElementById("spmNr").innerHTML = hvilketSpm + 1;
  }
}

function forrigeSpm() {
  hvilketSpm--;
  document.getElementById("spm").innerHTML = spmArray[hvilketSpm].spm;
  document.getElementById("inpSvar").value = "";
  document.getElementById("spmNr").innerHTML = hvilketSpm + 1;
}
