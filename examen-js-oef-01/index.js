/* Contolleer of een getal even of oneven is */

// Ik vraag een getal aan de gebruiker.
let getal = parseInt(prompt("Geef een getal in:"));

// if else statement. Als het getal modulus 2 gelijk is aan 0 is het even.
if (getal % 2 === 0){
    console.log("Het getal is even.")
}else{ // else, het is niet even dus is het getal oneven.
    console.log("Het getal is oneven.")
}