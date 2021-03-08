// Palidroma
// Chiedere all’utente di inserire una parola
// // Creare una funzione per capire se la parola inserita è palindroma


// creo la funzione isPalindrome: in un ciclo for decrescente che ha come i di partenza la lunghezza della variabile Word
// diminuita di 1 (in modo da far concidere il valore della lunghezza con gli indici dell array "word" che partono da 0),
// prendo tutte le lettere e con += formo una seconda parola con le lettere scritte al contrario.
// Questa parola la salvo in una variabile ReverseWord. Apro una condizione if e, se word e reverseWord sono identiche, faccio restituire true alla funzione.
// In caso contrario, faccio restituire false.

var word = "";
var reverseWord = "";

function isPalindrome(word) {
  for (var i = word.length - 1 ; i >= 0; i--) {
  console.log(word[i]);
  reverseWord += word[i];

  if (word == reverseWord) {
    return true;
  }

  return false;
}

console.log(reverseWord);


//chiedo la parola definendo la var Word con un prompt e forzandola a LowerCase con il relativo metodo.
// Un ciclo While valida il dato continuando a richiedere la parola fintanto che si scrive dati numerici.

do {
  word = prompt("Inserisci una parola io ti dirò se è un palindromo!").toLowerCase();
} while (!isNaN(word));


// invoco la funzione isPalindrome usando come parametro la parola Word inserita;
// Creo una condizione if che, in caso di verità, comunica il palindroma con un alert;
// in caso contrario, comunica che la parola non è un palindromo con un altro alert:


if (isPalindrome(word)) {
  alert("La parola che hai scelto è un palindromo!");
}

else {
  alert("Non è un palindromo")
}
