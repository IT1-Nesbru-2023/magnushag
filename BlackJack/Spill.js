//Deklarer globale variabler
let spillKnapp = document.getElementById("spill");
let nyttSpill = document.getElementById("nyttSpill");
let sumDealer = 0;
let sumDeg = 0;
let gjemtKort;
let kortstokk;
let kanHit = true; //tillater å hitte når sumDeg < 21
let hitKnapp = document.getElementById("hit");
let stayKnapp = document.getElementById("stay");

//Event listener på spill-knappen
spillKnapp.addEventListener("click", visSkjulteElementer);

//Funkjsonen fjærner alle klasser med navn "hidden" slik at alt det skulte innholdet vises
function visSkjulteElementer() {
  document
    .querySelectorAll(".hidden")

    /*bruker forEach for å iterere gjennom hvert av elementene og fjerner klassen 
    "hidden" fra dem ved å bruke element.classList.remove("hidden").*/
    .forEach((element) => element.classList.remove("hidden"));

  //Fjærner knappen
  spillKnapp.remove();
}

/*Med window.onload trigges en funksjonen med en gang siden er helt lastet inn.
Funksjonen kaller funksjonene lagKortstokk og blandKortstokk*/
window.onload = function () {
  lagKortstokk();
  blandKortstokk();
};

function lagKortstokk() {
  let verdier = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  /*C, D, H og S står for hendholsvis clubs, diamonds, harts og spades. Bruker dette pga måten
  kort-bildene er navngitt (Eks: "4-C")*/
  let typer = ["C", "D", "H", "S"];
  kortstokk = []; //Starter arrayen der kortene skal lagres

  /*For-løkken pusher alle 52 kortene i arrayen kortstokk*/
  for (let i = 0; i < typer.length; i++) {
    for (let j = 0; j < verdier.length; j++) {
      kortstokk.push(verdier[j] + "-" + typer[i]);
    }
  }
}

/*I følgenede funksjon blandes kortsdtokken. Denne funksjonen ble tatt fra: 
https://www.geeksforgeeks.org/javascript-program-to-shuffle-deck-of-cards/*/
function blandKortstokk() {
  kortstokk.sort(() => Math.random() - 0.5);
  console.log(kortstokk);
}

//Event listner på start-spill - knappen
spillKnapp.addEventListener("click", startSpill);

/* 
  Funksjonen under (startSpill) er kjernen i programmet. Den kalles hver gang spilleren
  trykker på "Nytt Spill"-knappen. Funksjonen deler ut kortene både til spilleren og dealeren.
  Senere venter den på at en av knappene blir trykket på.
  
  I denne funksjonen brukes .pop() for å trekke kort fra kortstokken. .pop() fjerner og returnerer 
  det siste elementet fra arrayen den er knyttet til ("kortstokk" i dette tilfellet). For denne 
  applikasjonen passer .pop() perfekt, ettersom den simulerer hvordan en kortstokk faktisk 
  fungerer. Den tar det øverste kortet og gir det til spilleren, slik at det er ute av kortstokken. 
  Når .pop() kalles for andre gang, er det altså det nest øverste kortet som deles ut, og så videre.
*/
function startSpill() {
  gjemtKort = kortstokk.pop();
  sumDealer += faaVerdi(gjemtKort); //Legger til vierdien av det gjemte kortet i sumDealer variabelen

  /*While-løkken deler ut kortene til dealeren. Betingelsene for 
  løkken er "sumDealer < 17" ettersom dealeren alltid vil hitte
  dersom kortsummen er mindre enn 17. Er den mer kan ikke dealeren 
  hitte*/
  while (sumDealer < 17) {
    let kortBilde = document.createElement("img"); //oppretter html-bilde-element slik at kortene kan vises
    let kort = kortstokk.pop(); //Dealeren får et nytt kort i tilleg til det gjemte
    kortBilde.src = "./kort/" + kort + ".png"; //path-en til kort-bilde
    sumDealer += faaVerdi(kort); //legger til verdien av det trukne kortet
    document.getElementById("dKort").append(kortBilde); //Legger til img-elementene i diven med id="dKort"
  }

  /*Følgende for løkke gjør akkuratt det samme som while-løkken over, men nå viser den bildene til kortene til 
  spilleren. Setter betingelsen til i <= 2 ettersom spilleren får detl ut 2 kort på starten*/
  for (let i = 1; i <= 2; i++) {
    let kortBilde = document.createElement("img");
    let kort = kortstokk.pop();
    kortBilde.src = "./kort/" + kort + ".png"; 
    sumDeg += faaVerdi(kort);
    document.getElementById("sKort").append(kortBilde);
    if (sumDeg == 21 && sumDealer !== 21) {
      document.getElementById("respons").innerText = "Du fikk utdelt Blackjack og vant!";
      document.getElementById("winLyd").play(); //Spiller av lyd
    }
    else if (sumDeg == 21 && sumDealer == 21) {
      document.getElementById("respons").innerText = "Både deg og dealeren fikk utdelt Blackjack. Det ble uavgjort!!";
    }
  }

  hitKnapp.addEventListener("click", hit); //Event listner for hit-knappen
  stayKnapp.addEventListener("click", stay); //Event listner for stay-knappen
  document.getElementById("din-sum").innerText = sumDeg; //Oppdaterer summen på siden
}

nyttSpill.addEventListener("click", startNyttSpill);

function startNyttSpill() {
  location.reload()
};


function stay() {
  kanHit = false; //slik at man ikke kan hitte dersom man har trykket stay
  document.getElementById("gjemtKort").src = "./kort/" + gjemtKort + ".png"; //Det gjemte kortet vises

  /*Følgende kode skriver ut resultatet av blackjack-runden */
  let message = "";
  if (sumDeg > 21) {
    message = "Du tapte!";
    document.getElementById("tapLyd").play(); //Spiller av lyd
  } else if (sumDealer > 21) {
    message = "Du vant!";
    document.getElementById("winLyd").play(); //Spiller av lyd
  } else if (sumDeg == sumDealer) {
    message = "Det ble uavgjort";
  } else if (sumDeg > sumDealer) {
    message = "Du vant!";
    document.getElementById("winLyd").play(); //Spiller av lyd
  } else if (sumDeg < sumDealer) {
    message = "Du tapte!";
    document.getElementById("tapLyd").play(); //Spiller av lyd
  }

  document.getElementById("respons").innerText = message;
  document.getElementById("din-sum").innerText = sumDeg;
  document.getElementById("dealer-sum").innerText =
    "Dealeren fikk " + sumDealer;
}

function hit() {
  /*Hvis kanHit er false, betyr det at spilleren ikke har tillatelse til å trekke flere kort, 
    og derfor avsluttes funksjonen tidlig ved return */
  if (!kanHit) {
    return;
  } else {
    /*Ellers legges til et nytt kort-bilde*/
    let kortBilde = document.createElement("img");
    let kort = kortstokk.pop();
    kortBilde.src = "./kort/" + kort + ".png";
    sumDeg += faaVerdi(kort);
    document.getElementById("sKort").append(kortBilde);
    document.getElementById("din-sum").innerText = sumDeg; //Oppdaterer summen på siden fortløpende
  }
  if (sumDeg > 21) {
    document.getElementById("respons").innerText = "Du fikk over 21 og tapte!";
    document.getElementById("tapLyd").play(); //Spiller av lyd
  }
}

//Funksjon som får vardien av et kort. Her er kort parameteren til funksjonen
function faaVerdi(kort) {
  let data = kort.split("-"); //deler input i kortverdi og korttype
  let verdi = data[0]; //henter korrtverdien

  /*if-setnigen skjekker om kortverdien ikke er et tall. Om det ikke 
    er et tall har den verdien 10 med mindre den er et ess (A) som gir 
    verdien 11*/
  if (isNaN(verdi)) {
    if (verdi == "A") {
      return 11;
    }
    return 10;
  }

  //Hvis det er et tall returnes tallet som en integer (heltall)
  return parseInt(verdi);
}


