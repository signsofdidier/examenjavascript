/* Temperatuur converteren van Celsius naar Fahrenheit */

// wanneer het minder is dan 15 graden is het "frisjes"
// tussen 15 en 25 is het "aangenaam"
// meer dan 25 graden is "te warm"

// vraag aan de gebruiken hoeveel graden ze willen omzetten naar fahrenheit
let celsius = parseInt(prompt("Hoeveel graden Celsius?"))

// verander celcius naar fahrenheit
let fahrenheit= celsius * 1.8 + 32;

// gebruik if else statement om te bepalen welke zin geprint moet worden bij welk graden
if(celsius < 15){
    console.log(`${celsius} graden Celsius is gelijk aan ${fahrenheit} graden Fahrenheit en voelt frisjes aan.`);
}else if (celsius >= 15 && celsius <= 25){
    console.log(`${celsius} graden Celsius is gelijk aan ${fahrenheit} graden Fahrenheit en voelt aangenaam aan.`);
}else {
    console.log(`${celsius} graden Celsius is gelijk aan ${fahrenheit} graden Fahrenheit en voelt te warm aan.`);
}
