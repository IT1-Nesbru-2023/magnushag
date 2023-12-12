/*Funksjonen vis Hangman skjuler startknappen og viser resten av innholdet. 
Kjøres når knappen trykket på (se HTML)*/
function visKategori() {
  let startSide = document.getElementById("startSide");
  let kategori = document.getElementById("kategori");

  // Fjern knappen
  startSide.style.display = "none";

  // Vis skjulte elementer
  kategori.style.display = "block";
  kategori.classList.remove("hidden");
}

function visHangman() {
  let kategori = document.getElementById("kategori");
  let main = document.getElementById("main");

  // Fjern knappen
  kategori.style.display = "none";

  // Vis skjulte elementer
  main.style.display = "block";
  main.classList.remove("hidden");
}

/*Lager en array av ord som kan brukes i spillet*/
let itArray = [
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

let fruktArray = [
  "eple",
  "banan",
  "appelsin",
  "jordbær",
  "melon",
  "drue",
  "ananas",
  "fersken",
  "plomme",
  "mango",
  "sitron",
  "avokado",
  "granateple",
  "vannmelon",
  "kiwi",
  "papaya",
  "fersken",
  "aprikos",
  "lime",
  "guava",
  "passjonsfrukt",
  "apelsin",
  "kiwi",
  "ananas",
  "banan",
  "mango",
];

let bilmerkerArray = [
  "toyota",
  "ford",
  "chevrolet",
  "honda",
  "bmw",
  "audi",
  "volkswagen",
  "tesla",
  "mercedes",
  "nissan",
  "hyundai",
  "volvo",
  "kia",
  "mazda",
  "subaru",
  "lexus",
  "jaguar",
  "porsche",
  "ferrari",
  "lamborghini",
  "maserati",
  "bugatti",
  "jeep",
  "ram",
  "chrysler",
  "dodge",
  "buick",
  "cadillac",
  "chevrolet",
  "lincoln",
  "acura",
  "infiniti",
  "fiat",
  "mini",
  "smart",
];

//Definerer noen globale variabler
let svar = "";
let antallFeil = 0;
let gjettet = [];
let ordStatus = null;
let antallSeiere = 0;
let antallTap = 0;
let valgtKategori;

/*Funksjonen tilfeldigOrd bruker de innebygede funksjone math.floor og 
math.random til å plukke et tilfeldig ord fra en av arrayene.*/
function tilfeldigOrd(kategori) {
  if (kategori === "it") {
    svar = itArray[Math.floor(Math.random() * itArray.length)];
    valgtKategori = "it";
  } else if (kategori === "frukt") {
    svar = fruktArray[Math.floor(Math.random() * fruktArray.length)];
    valgtKategori = "frukt";
  } else if (kategori === "bil") {
    svar = bilmerkerArray[Math.floor(Math.random() * bilmerkerArray.length)];
    valgtKategori = "bil";
  }
  gjettetOrd();
  endreBakgrunnsfarge(kategori);
}

/*Funksjonen endreBakgrunnsfarge endrer bakgrunnsfargen avhengig av hvilkan kategori man valgte */
function endreBakgrunnsfarge(kategori) {
  let mainElement = document.getElementById("main");

  if (kategori === "it") {
    mainElement.style.backgroundColor = "#CBC3E3";
  } else if (kategori === "frukt") {
    mainElement.style.backgroundColor = "#90EE90";
  } else if (kategori === "bil") {
    mainElement.style.backgroundColor = "#FF474C";
  }
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
      //Med .map(...) lages en ny array. Her plasseres bokstavene som er gjettet på riktig sted i ordet og ordene som ikke er gjettet ennå blir markert med en understrek (_)
      if (gjettet.includes(bokstav)) {
        return bokstav;
      } else {
        return " _ ";
      }
    })
    .join(""); //invers operajon av split (den nye arrayen samles til en ny string)

  //Oppdater HTML-elementet med ID "ordPlass" med den oppdaterte stringen
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
    antallSeiere++;
    document.getElementById("antallSeiere").innerHTML = antallSeiere;
  }
}

/*Funksjonen erSpillTapt skjekker om spilleren har gått tom for fårsøk. 
Om vedkommende har gjort det sendes responsen "Du Tapte!" */
function erSpillTapt() {
  if (antallFeil === 6) {
    document.getElementById("ordPlass").innerHTML =
      "Det riktige ordet var " + svar;
    document.getElementById("respons").innerHTML = "Du tapte!";
    antallTap++;
    document.getElementById("antallTap").innerHTML = antallTap;
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
  tilfeldigOrd(valgtKategori);
  gjettetOrd();

  document.getElementById("respons").innerHTML = "";
  document.getElementById("livIgjen").innerHTML = "6";
}

/*Følgende funksjon viser en tilveldig bokstav i svaret når musepekeren er over "hint"-knappen*/
function giHint() {
  let svarArray = svar.split(""); //Lager en Array med hver av bokstavene i svaret
  let tilfeldigIndex = Math.floor(Math.random() * svarArray.length);
  let hintBokstav = svarArray[tilfeldigIndex];

  //Setter innholdet i pop-up menyen
  document.getElementById("hintMenu").innerHTML =
    "Svaret inneholder bokstaven: " + hintBokstav;

  //Viser pop-up meny
  hintMenu.style.display = "block";

  antallFeil++
  oppdaterAntallFeil()
  erSpillTapt()
  nyttBilde()
}

//Skjuler pop-up meny når musen forlater hint-knappen
document.getElementById("btnHint").onmouseout = function () {
  document.getElementById("hintMenu").style.display = "none";
};
