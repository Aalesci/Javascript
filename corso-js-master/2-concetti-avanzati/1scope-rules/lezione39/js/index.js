/**
 * Operatore Ternario è un espressione che si serve di tre parametri per simulare il comportamento di un if statement.
 * La differenza sostanziale è che un operatore ternario, essendo un espressione, deve sempre ritornare un valore.
 */




const numero = 5;
let conditionalNumber;

if (numero > 6) {
  conditionalNumber = 9;
} else {
  conditionalNumber = 4;
}


/// TERNARY OPERAOTRS
// NOta devo sempre passare un valore!
// NOTA devo sempre gestire i due casi! Caso vero e caso falso! 
let ternaryNumber = numero > 6 ? 'numero maggiore di 6' : 'numero minore di 6';

console.log(ternaryNumber);


// Operatori ternari più complessi. 
const numero2 = 2;  

let ter = 
   numero2 <= 0 
      ? false 
      : numero > 0 && numero < 6 
      ? 'Tra 1 e 5'
      : "maggiore di 6";


console.log(ter);