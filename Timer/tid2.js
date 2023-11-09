let antallSekunder = 18900;

let antallTimer = antallSekunder / 3600;

let Timer = Math.floor(antallTimer);

let rest1 = antallTimer - Timer;

let antallMinutter = rest1 * 60;

let Minutter = Math.floor(antallMinutter);

let rest2 = antallMinutter - Minutter;

let antallSek = rest2 * 60;

console.log(antallSekunder + " sekunder tilsvarer: " + Timer + " time(r), " + Minutter + " minutter og " + antallSek + " sekunder")
