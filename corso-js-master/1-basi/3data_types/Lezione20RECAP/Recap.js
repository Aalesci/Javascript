
//////////////////////////////////////////////////////////////////////////////////////////////////
////////// DIFFERENZA TRA VARIABILI //////////////////////////////////////////////////////////////
//////////// let var e const ? ///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


////////// 1. var  //////////

// Scope: var ha uno scope di funzione, il che significa che le variabili
// dichiarate con var sono visibili all'interno della funzione in cui sono dichiarate.

// Riassegnabilità: Può essere riassegnata.

// Hoisting: Le variabili dichiarate con var vengono "hoisted" (spostate) in cima
//  al loro scope. Questo significa che puoi usarle prima di 
//  dichiararle (anche se il valore sarà undefined).

// Esempio:

function esempioVar() {
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
}
esempioVar();

////////// 2. let //////////
// Scope: let ha uno scope di blocco, il che significa che 
// le variabili dichiarate con let sono visibili solo 
// all'interno del blocco di codice (ad es. { ... }) in cui sono dichiarate.

// Riassegnabilità: Può essere riassegnata.

// Hoisting: Le variabili dichiarate con let vengono anche "hoisted",
// ma non possono essere utilizzate prima della loro dichiarazione (temporal dead zone).

// Esempio:

function esempioLet() {
  console.log(y); // ReferenceError: y is not defined
  let y = 10;
  console.log(y); // 10
}
esempioLet();


////////// 3. const //////////
// Scope: const ha uno scope di blocco, come let.

// Riassegnabilità: Non può essere riassegnata. 
// Una volta assegnato un valore a una variabile const, 
// non può essere cambiato. Tuttavia, se il valore è un oggetto,
//  le proprietà dell'oggetto possono essere modificate.

// Hoisting: Le variabili dichiarate con const vengono "hoisted", 
// ma non possono essere utilizzate prima della loro dichiarazione (temporal dead zone).

// Esempio:

function esempioConst() {
  const z = 15;
  console.log(z); // 15
  
  // Proveremo a riassegnare
  // z = 20; // TypeError: Assignment to constant variable.
  
  // Se è un oggetto, possiamo modificare le proprietà
  const obj = { a: 1 };
  obj.a = 2;
  console.log(obj.a); // 2
}
esempioConst();


////////// Riepilogo //////////
// ---> Scope:
// var: Funzione
// let e const: Blocco

// ---> Riassegnabilità:
// var e let: Sì
// const: No (tranne per le proprietà degli oggetti)

// ---> Hoisting:
// var: Sì (accessibile come undefined)
// let e const: Sì (ma non accessibile prima della dichiarazione)



//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// OPERATORI LOGICI ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// Uguaglianza Debole (==
// Confronta due valori per uguaglianza dopo aver effettuato la conversione di tipo.
5 == '5'; // true perché '5' viene convertito a numero

// Uguaglianza Stretta (===)
// Confronta due valori per uguaglianza senza effettuare la conversione di tipo.
5 === '5'; // false perché uno è un numero e l'altro è una stringa
5 === 5;   // true perché entrambi sono numeri e uguali


// Diversità Debole (!=)
// Confronta due valori per diversità dopo aver effettuato la conversione di tipo.

5 != '5'; // false perché '5' viene convertito a numero

// Diversità Stretta (!==)
// Confronta due valori per diversità senza effettuare la conversione di tipo.
5 !== '5'; // true perché i tipi sono diversi

// ---> AND Logico (&&)
// Restituisce true se entrambe le condizioni sono vere.
(5 > 3) && (8 > 6); // true perché entrambe le condizioni sono vere

// ---> OR Logico (||)
// Restituisce true se almeno una delle condizioni è vera.
(5 > 3) || (8 < 6); // true perché una delle condizioni è vera


// ---> NOT Logico (!)
// Inverte il valore logico di una condizione.
!(5 > 3); // false perché 5 è maggiore di 3 e NOT di true è false


////////// ---> Differenza tra == e ===  <---////////////////

// == (Uguaglianza Debole):
// Converte i valori a un tipo comune prima di confrontarli.
0 == false; // true perché 0 viene convertito a booleano e 0 è equivalente a false

// === (Uguaglianza Stretta):
// Confronta i valori senza convertirli.
0 === false; // false perché i tipi sono diversi (numero e booleano)


////////////////  Esempi Combinati  ////////////////
// javascript
// Esempio con uguaglianza debole
console.log(5 == '5'); // true

// Esempio con uguaglianza stretta
console.log(5 === '5'); // false

// Esempio di operatore logico AND
console.log((5 > 3) && (8 > 6)); // true

// Esempio di operatore logico OR
console.log((5 > 3) || (8 < 6)); // true

// Esempio di operatore logico NOT
console.log(!(5 > 3)); // false


//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////   TIPI DI ERRORI   /////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// Tipo di Errore	Descrizione           	                Esempio
// SyntaxError	    Errore di sintassi	                    console.log("Hello world;
// ReferenceError	Variabile non definita	                console.log(x);
// TypeError	    Operazione su tipo sbagliato	        let num = 5; num.toUpperCase();
// RangeError	    Valore fuori dall'intervallo previsto	let num = 1; num.toFixed(100);
// EvalError	    Errore nell'uso di eval()	            eval("hello");
// URIError     	Errore nelle funzioni globali URI	    decodeURI("%");
// InternalError	Stato incoerente nell'interprete Js	    function loop() { loop(); } loop();
