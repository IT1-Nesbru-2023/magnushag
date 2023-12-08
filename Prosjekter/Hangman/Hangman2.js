/*Funksjonen vis Hangman skjuler startknappen og viser resten av innholdet. 
Kjøres når knappen trykket på (se HTML)*/
function visHangman() {
  let startSide = document.getElementById("startSide");
  let main = document.getElementById("main");

  // Fjern knappen
  startSide.style.display = "none";

  // Vis skjulte elementer
  main.style.display = "block";
  main.classList.remove("hidden");
}

/*Lager en array av ord som kan brukes i spillet*/
let ordArray = [
  "informasjonsteknologi",
  "kommunikasjon",
  "programmering",
  "utvikling",
  "algoritme",
  "datastruktur",
  "nettverk",
  "database",
  "mobilapplikasjon",
  "kryptografi",
  "skytjenester",
  "maskinlæring",
  "feilsøking",
  "grensesnitt",
  "prosessering",
  "protokoll",
  "kompilator",
  "maskinvare",
  "programvare",
  "operativsystem",
  "sikkerhet",
  "autentisering",
  "kodingsstandard",
  "testing",
  "agil utvikling",
  "objektorientert",
  "webutvikling",
  "frontend",
  "backend",
  "rammeverk",
  "versjonskontroll",
  "integrering",
  "api",
  "server",
  "brukergrensesnitt",
  "javaScript",
  "python",
  "java",
];

//Definerer noen globale variabler
let svar = "";
let antallFeil = 0;
let gjettet = [];
let ordStatus = null;

/*Funksjonen tilfeldigOrd bruker de innebygede funksjone math.floor og 
math.random til å plukke et tilfeldig ord fra ordArray.*/
function tilfeldigOrd() {
  svar = ordArray[Math.floor(Math.random() * (ordArray.length + 1))]; //Når vi bruker math.floor framfror math.ceil må vi legge til 1 for å få med alle elementene av arrayen
}

/*Funksjonen haanterGjett kjøres hver gang en knapp blir trykket på, og har 
bokstaven knyttet til knappen som parameter*/
function haandterGjett(valgtBokstav) {
  /*I if-setningen under dyttes alle "gjetninger" inn i en array. Setter 
    ...===-1 fordi .indexOf(valgtBokstav) gir -1 dersom valgt bokstav ikke 
    er i arrayen*/
  if (gjettet.indexOf(valgtBokstav) === -1) {
    gjettet.push(valgtBokstav);
  }
  let bokstavKnapp = document.getElementById("btnIndex" + valgtBokstav); //henter knappen som ble trykket på
  bokstavKnapp.setAttribute("disabled", true); //deaktiver knappen når den trykkes på

  if (svar.indexOf(valgtBokstav) >= 0) {
    //hvis den valgte bokstaven fins i svaret kjøres to funksjoner
    gjettetOrd();
    erSpillVunnet();
  } else {
    //Hvis ikke legges det til en feil og kjøres tre funksjoner
    antallFeil++;
    oppdaterAntallFeil();
    erSpillTapt();
    nyttBilde();
  }
}

/*I funksjonen gjettetOrd lagger vi til verdier i variblen ordStatus får å 
vite hvilke bokstaver som er funnet og hvor disse er plassert */
function gjettetOrd() {
  ordStatus = svar
    .split("") //Lager en array av svaret (hvis svaret er "html" ville svar.split("") gitt ["h", "t", "m", "l"])
    .map(function (bokstav) {
      //Med .map(...) lages en ny array. Her plasseres bokstavene som er gjettet på riktig tred i ordet og ordene som ikke er gjettet ennå blir markert med en understrek (_)
      if (gjettet.includes(bokstav)) {
        return bokstav;
      } else {
        return " _ ";
      }
    })
    .join(""); //invers operajon av split (den nye arrayen samles til en ny string)

  //Oppdater HTML-elementet med ID "ordPlass" med den oppdatert stringen
  document.getElementById("ordPlass").innerHTML = ordStatus;
}

/*Hver gang spilelren gjør en feil legges til en kroppsdel. Dette simuleres 
ved å bytte bilder.*/
function nyttBilde() {
  document.getElementById("bilde").src =
    "./BilderKule/hangman" + antallFeil + ".png";
}

/*Funksjonen erSpillVunnet skjekker om spilleren har funnet fram til ordet. 
Om vedkommende har gjort det sendes responsen "Du vant!" */
function erSpillVunnet() {
  if (ordStatus === svar) {
    document.getElementById("respons").innerHTML = "Du vant!";
  }
}

/*Funksjonen erSpillTapt skjekker om spilleren har gått tom for fårsøk. 
Om vedkommende har gjort det sendes responsen "Du Tapte!" */
function erSpillTapt() {
  if (antallFeil === 6) {
    document.getElementById("ordPlass").innerHTML =
      "Det riktige ordet var " + svar;
    document.getElementById("respons").innerHTML = "Du tapte!";
  }
}

/*Funksjonen oppdateerer antall feil */
function oppdaterAntallFeil() {
  document.getElementById("livIgjen").innerHTML = 6 - antallFeil;
}

/*Når man trykker "start på nytt"-knappen kjøres denne funksjonen. Funksjonen 
nullstiller noen av variablene, bildet og tasteturet. I tilleg startes et nytt spill*/
function startPaaNytt() {
  antallFeil = 0;
  gjettet = [];
  document.getElementById("bilde").src = "./BilderKule/hangman0.png";

  // Nullstiller tastaturet (aktiverer knappene)
  let tastaturButtons = document.querySelectorAll("#tastatur button");
  tastaturButtons.forEach((button) => {
    button.removeAttribute("disabled");
  });

  //Med følgende funksjoner startes et nytt spill
  tilfeldigOrd();
  gjettetOrd();

  document.getElementById("respons").innerHTML = "";
  document.getElementById("livIgjen").innerHTML = "6";
}

function giHint() {
  let svarArray = svar.split("");
  let randomIndex = Math.floor(Math.random() * svarArray.length);
  let hintLetter = svarArray[randomIndex];

  // Sett innholdet i pop-up menyen
  let hintMenu = document.getElementById("hintMenu");
  hintMenu.innerHTML = "Svaret inneholder bokstaven: " + hintLetter;

  // Vis pop-up meny
  hintMenu.style.display = "block";
}

// Skjul pop-up meny når musen forlater hint-knappen
document.getElementById("btnHint").onmouseout = function() {
  document.getElementById("hintMenu").style.display = "none";
};

//Funksjone som starter spillet
tilfeldigOrd();
gjettetOrd();
