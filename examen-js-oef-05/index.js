/* Som van cijfers in een getal berekenen */

// gebruik while loop

// vraag de gebruiken om een getal
let number = parseInt(prompt("Voeg een getal in"));

// i wordt het gevraagde getal
let i = number;

// sum telt de afzonderlijke cijfers met elkaar op
let sum = 1;

// terwijl i groter is dan 0, voer hetvolgende uit
while(i > 0){

    // als de volgende berekening true is, doe de sum
    if(i = (i - (i % 10)) / 10){
        i++;
        sum += i % 10;
    }
}

// print de uitkomst van de sum
console.log(`De som van de cijfers is ${sum}`);


