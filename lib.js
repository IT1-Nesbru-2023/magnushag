
//Oppgave 6

let array = [];

function randomRange(t1, t2) {
    console.log("Laget av Magnus Hægh");
    let i = t1;
    while (i <= t2) {
        array.push(i)
        i++
    }
    let randomNumber = array[Math.floor(Math.random()* array.length)];
    return randomNumber;
}

