

// Valori Falsy
// "", 0, -0,false, undefined, null, NaN


// Valory truphy. 

const prova = "Tavolo";

if (prova) {
  console.log("Il valore truthy"); //<--- cado qui
} else {
  console.log("Valore è falsy");
}

const prova2 = "";

if (prova2) {
    console.log("Il valore truthy"); 
  } else {
    console.log("Valore è falsy");//<--- cado qui
}

// Lo zero è un valore Falsy 

console.log(!!prova2); // rivela il valore booleano. 


// Parentesi su Null e Undefined

// undefined: javascript non ha trovato un valore
// null: indicato dallo sviluppatore che quel valore è nullo

console.log(20 + null); // 20
console.log(20 + undefined); // NaN