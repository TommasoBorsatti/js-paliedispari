// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// Scrivo una funzione che genera un numero random da 1 a 5; la chiamo Randomizer:

function randomizer () {
  return Math.floor(Math.random() * 5 + 1);
}

//scrivo una funzione che somma due numeri:

function sumTellEven (num1, num2) {
  var sum = parseInt(num1 + num2);
  if (sum % 2 == 0) {
    return true;
  }
  return false;
}

//Chiedo all'utente di scegliere Pari o Dispari:
// In caso si scelga pari la variabile Scelta sarà true;
// In caso contrario false;
// se si inserisce un valore diverso da Pari o Dispari, il programma entra in un ciclo while e fa ripetere l inserimento dati.

var scelta = prompt("Forza scegli pari o dispari!");
scelta = scelta.toLowerCase();

while (scelta != "pari" && scelta != "dispari") {
  var scelta = prompt("Devi scegliere solo pari o dispari!");
  scelta = scelta.toLowerCase();
}

if (scelta == "pari") {
  scelta = true;
  alert("Hai scelto pari! Il computer dunque sceglierà dispari.");
}

else {
  scelta = false;
  alert("Hai scelto dispari! Il computer dunque sceglierà pari.");
}

// Chiedo i numeri all'utente e definisco le variabili del caso.
// La variabile NumeroComputer è definita tramite il Randomizer.

var numeroUtente = parseInt(prompt("È il momento di giocare: scegli un numero da 1 a 5!"));
var numeroComputer = randomizer();
alert("Anche il computer gioca ed ha scelto il numero " + numeroComputer);

//Uso la funzione SumTellEven per sommare i numeri e capire se sono pari.

alert("Ora il programma sommerà i vostri numeri e vi dirà se il risultato della somma è pari o dispari");

if (sumTellEven(numeroUtente, numeroComputer)) {
  alert("la somma dei due numeri è pari!")
  var outcome = true;
}

else {
  alert("la somma dei due numeri è dispari!")
  var outcome = false;
}

if (scelta == outcome) {
  alert("COMPLIMENTI HAI VINTO!!!")
}

else {
  alert("Peccato, hai perso...Sarà per la prossima volta.")
}
