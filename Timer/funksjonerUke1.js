
/*
Funksjon 1:
Navn: sumLikeTalt (tall1, tall2)
Funksjonen returnerer summen av to tall derdom tallene
er like. Hviss ikke, returnerer den false.
    tall1: et tilfeldig tall
    tall2: et tilfeldig tall
*/

function sumLikeTall(tall1, tall2) {
  if (tall1 == tall2) {
    return tall1 + tall2;
  } else {
    return false;
  }
} 

/* 
Funksjon 2:
Navn: sumMistToLikeTall (tall1, tall2, tall3)
Hvis minst to av tallene er like returnerer funksjonen 
saummen av de to like tallene. Hvis ingen av tallene er 
like returneres false.
    tall1: et tilfeldig tall
    tall2: et tilfeldig tall
    tall3: et tilfeldig tall
*/

function sumMinstToLikeTall(tall1, tall2, tall3) {
    if (tall1 == tall2 || tall1 == tall3) {
        return tall1 * 2;
    }
    else if (tall2 == tall3) {
        return tall2 * 2;
    }
    else {
        return false;
    }
}

/*
Funksjon 3:
Navn: sumToStorsteTall
Funksjonen tar parametere som tall. Dersom to tall er like 
returneres summen av de to største tallene.
    tall1: et tilfeldig tall
    tall2: et tilfeldig tall
    tall3: et tilfeldig tall
    tall4: et tilfeldig tall
*/

function sumToStorsteTall(tall1, tall2, tall3, tall4) {
    let toLike = false;

    if (tall1 == tall2 || tall1 == tall3 || tall1 == tall4 ||
        tall2 == tall3 || tall2 == tall4 ||
        tall3 == tall4) {
        toLike = true;
    } else {
        return false;
    }

    if (toLike) {
        let tall = [tall1, tall2, tall3, tall4];
        tall.sort(function(a, b) {
            return b - a;
        });
        
        let storsteTall = tall[0];
        let nestStorsteTall = tall[1];

        return storsteTall + nestStorsteTall;
    }
}


/*
Funksjon 4:
Navn: eleverIKlasserom
Funksjonen tar tre parametere som tall og en paremeter som en boolsk variabel. 
Funksjonen returnerer hvor mange elever man kan ha i et klasserom avhengig av 
klasserommets volum. Hvis er av parameterne er 0 returneres false. 
 Parametre: 
    tall1: breddet i klasserom
    tall2: lengden i klasserom 
    tall3: høyden i klasserom
    romningsvei: false eller true avhengig av om det er en rømningsvei
*/

function eleverIKlasserom(tall1, tall2, tall3, romningsvei) {
    if (tall1 == 0 || tall2 == 0 || tall3 == 0) {
        return false;
    }
    let volum = tall1 * tall2 * tall3;
    let antallElever = volum / 10
    if (romningsvei) {
        return antallElever * 1.3;
    }
    else {
        return antallElever;
    }
}

/*
let resultat = eleverIKlasserom(10, 10, 2, true);
console.log(resultat);
*/

/*
Funksjon 5:
Navn: sumToStorsteTall
Funksjonen tar parametere som tall. Dersom to tall er like 
returneres summen av de to største tallene.
    tall1: et tilfeldig tall
    tall2: et tilfeldig tall
    tall3: et tilfeldig tall
    tall4: et tilfeldig tall
    tall5: et tilfeldig tall
*/

function sumToStorsteTall2(tall1, tall2, tall3, tall4, tall5) {
    let toLike = false;

    if (tall1 == tall2 || tall1 == tall3 || tall1 == tall4 || tall1 == tall5 ||
        tall2 == tall3 || tall2 == tall4 || tall2 == tall5 ||
        tall3 == tall4 || tall3 == tall5 ||
        tall4 == tall5) {
        toLike = true;
    } else {
        return false;
    }

    if (toLike) {
        let tall = [tall1, tall2, tall3, tall4, tall5];
        tall.sort(function(a, b) {
            return b - a;
        });
        
        let storsteTall = tall[0];
        let nestStorsteTall = tall[1];

        return storsteTall + nestStorsteTall;
    }
}

/*
Test:
let resultat = sumToStorsteTall2(1, 2, 3, 5, 5);
console.log(resultat);
*/

/*
Funksjon 6:
Funksjonen returner summen av de to største tallene i en array 
dersom det minst er to like tall i arrayen.
*/

function sumToStorsteArray(tall) {

    let i = 0;
    let toLike = false;

    while (i < tall.length) {
        let j = i + 1;
        while (j < tall.length) {
            if (tall[i] == tall[j]) {
                toLike = true; 
            }
            j++;
        }
        i++;
    }
    if (toLike) {
        tall.sort(function(a, b) {
            return b - a;
        });
        
        let storsteTall = tall[0];
        let nestStorsteTall = tall[1];

        return storsteTall + nestStorsteTall;
    }
}

/*
Test:
let resultat = sumToStorsteArray([1, 2, 3, 4, 5, 6, 20, 20]);
console.log(resultat);
*/


/*
Funksjon 7:
*/

function sumTallOgTallIArray(array, tall) {

    let i = 1;
    let toLike = false;

    while (i < array.length) {
        if (array[i] == tall) {
            toLike = true;
        }
        i++
    }

    if (toLike) {
        let indexMidterst = Math.floor(array.length / 2);

        return tall + array[indexMidterst];
    }
    else {
        return false;
    }

}

let resultat = sumTallOgTallIArray([1,2,3,4,5], 3);
console.log(resultat);













