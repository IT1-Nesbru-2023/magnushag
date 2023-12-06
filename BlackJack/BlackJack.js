let header = document.getElementById("topp");
let meny = document.querySelector(".meny");

//Event listener for scrolling:
  window.addEventListener("scroll", function () {
    //Henter scroll posisjon:
    let scrollPosition = window.scrollY;
    /*Hvis scroll posisjonene er større enn elementet med id="topp" 
    lages en class-list med navn "scrolled". Hvis posisjonene ikke 
    er større fjærnes den*/
    if (scrollPosition > header.clientHeight) {
      meny.classList.add("scrolled");
    } else {
      meny.classList.remove("scrolled");
    }
  });

