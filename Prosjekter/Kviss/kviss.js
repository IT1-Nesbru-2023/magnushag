function visKviss() {
  let forside = document.getElementById("forside");
  let sporsmaal1 = document.getElementById("sporsmaal1");

  forside.style.display = "none";

  sporsmaal1.style.display = "block";
  sporsmaal1.classList.remove("hidden");
}

function sjekkSvar1() {
  let brukerSvar = document.getElementById("svar1").value;
  let riktigSvar = "Javascript";
  let riktigTall = "2";

  if (brukerSvar == riktigSvar || brukerSvar == riktigTall) {
    document.getElementById("respons").innerHTML = "Riktig!";
    document.getElementById("nesteSporsmaal1").style.display = "block";
  } else {
    document.getElementById("respons").innerHTML = "Feil svar. Prøv igjen!";
  }
}

function tilSporsmaalTo() {
  document.getElementById("sporsmaal1").style.display = "none";
  document.getElementById("sporsmaal2").style.display = "block";
}

function sjekkSvar2() {
  let brukerSvar = document.getElementById("svar2").value;
  let riktigSvar =
    "En datatype som representerer logiske verdier som sant eller falskt";
  let riktigTall = "1";

  if (brukerSvar == riktigSvar || brukerSvar == riktigTall) {
    document.getElementById("respons2").innerHTML = "Riktig!";
    document.getElementById("nesteSporsmaal2").style.display = "block";
  } else {
    document.getElementById("respons2").innerHTML = "Feil svar. Prøv igjen!";
  }
}
