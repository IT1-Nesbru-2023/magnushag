
function primtall(tall) {
    if (tall == 1) {
        return "1 er verken et primtall eller et sammensatt tall";
    } 
    else if (tall > 1) {
        for (let i = 2; i < tall/2; i++) {
            if (tall % i == 0) {
                return tall + " er ikke et primtall";
            }
        }
        return tall + " er et primtall";
    } 
}

console.log(primtall(17)); 