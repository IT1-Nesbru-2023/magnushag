let person = { navn: "Magnus", adresse: "Jon Smørs vei 11", alder: 18 }; //Object

function skrivNoe() {
  console.log(
    "Jeg heter " +
      person.navn +
      " og er " +
      person.alder +
      " år. Adressen min er " +
      person.adresse +
      "."
  );
}
console.log(person);

skrivNoe();
