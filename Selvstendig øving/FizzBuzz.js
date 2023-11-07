let tall = 1;

while (tall <= 100) {
    if (tall % 3 == 0 && tall % 5 == 0) {
        console.log("FizzBuzz")
    }
    else if (tall % 3 == 0) {
        console.log("Fizz")
    }
    else if (tall % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(tall);
    }
    tall++;
}