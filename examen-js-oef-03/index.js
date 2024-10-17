/* Grootste van X getallen vinden. Je mag hiervoor een built-in functie gebruiken maar je hoeft niet. */

// vraag hoeveel getallen de gebruiker wil ingeven

// Vnd het grootste van de 3 getallen

// Vraag aan de gebruiker hoeveel getallen je wil ingeven
let hoeveelGetallen = parseInt(prompt("Hoeveel getallen wil je ingeven?"));



// grootste bepaald het grootste getal in de if else statement
let grootste;

/* Vraag een getal en blijf een getal vragen tot je het aantal vragen gesteld hebt dat de gebruiker ingegeven heeft op hoeveelGetallen. Helaas heb ik niet gevonden hoe ik de variable naam verander naar getal1, getal,2 enz. */
for(i = 1 ; i <= hoeveelGetallen; i++){
    getal = parseInt(prompt(`Voer getal ${i} in`));
}

/* Hiermee werkt het als ik zelf de getallen bepaal maar de vraag vraagt naar de for loop hierboven (die niet volledig gelukt is). */
let getal1 = 3, getal2 = 9, getal3 = 3;

/* Als het ene getal groter of kleiner is dan het andere kan je bepalen welk getal het grootste is */
if (getal1 >= getal2 && getal1 >= getal3) {
    grootste = getal1;
} else if ( getal2 >= getal1 && getal2 >= getal3) {
    grootste = getal2;
} else {
    grootste= getal3;
}

// print welk getal het grootste getal is
console.log(`Het grootste getal is ${grootste}`);