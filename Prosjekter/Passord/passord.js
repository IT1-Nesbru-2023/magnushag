let passord = "Magnus Hægh";

let input = prompt("Gett passordet!")

if (input == passord) {
    alert("Du valgte riktig passord!")
}

else if (input == "?lengde") {
    alert("Lengden på passordet er " + passord.length)
}

else if (input == "?1") {
    alert("Det første tegnet i passordet er " + passord[0])
}

else if (input == "?2") {
    alert("Det andre tegnet i passordet er " + passord[1])
}

else if (input == "?siste") {
    alert("Her er passordet fra og med bokstav 3: " + passord.substring(3, passord.length))
}

else if (input == "?store") {
    alert("Passordet i store bokstaver er: " + passord.toUpperCase())
}

else if (input == "?små") {
    alert("Passordet i små bokstaver er: " + passord.toLowerCase())
}

else if (input != passord) {
    alert("passordet er feil")
}