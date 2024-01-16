let array = []

function lagArray(tall) {

    let i = 1;

    while (i <= tall) {
        array.push(i);
        i++
    }
    return array
}


let nyArray = lagArray(10);
console.log(nyArray);


function trekkUtTall() {

    let antallTrekk = Math.floor(Math.random() * nyArray.length);

    nyArray.splice(1, antallTrekk);

    console.log(nyArray);
}

trekkUtTall();
