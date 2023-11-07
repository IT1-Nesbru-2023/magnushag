
let navn = "Magnus";

let antallBokstaver = navn.length;

function navneskilt(navn) {
    let stjerner = "*".repeat(antallBokstaver + 4); 
    console.log(stjerner);
    console.log("* " + navn + " *");
    console.log(stjerner); 
}

console.log(antallBokstaver)

navneskilt(navn)

