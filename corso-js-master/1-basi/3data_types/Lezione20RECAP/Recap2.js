////////////////////////////////////////////////////////////
//////////////////// Template String  ////////////////////
////////////////////////////////////////////////////////////
// backtick (`)  é questo accento particolare. 

//     Nota: Il layout delle tastiere italiane non prevede il backtick, 
//     per ottenerlo dovremo utilizzare la combinazione ALT + 96. In altre parole 
//     bisogna digitare il numero 96 tenendo premuto il tasto ALT.

//          ``
// NOTA: \n si usa per andare a capo. 
// 1 ESEMPIO :   //////////////////////////////////////////////////////////////////

let a = 2;
let b = 3; 
var somma = `La somma di ${a} e ${b} è ${a+b}`;

// 2 ESEMPIO più elaborato: ////////////////////////////////////////////////////////////
let c = 10 

function maiuscolo(strings, a, b, c) {
	return (`${strings[0]}${a}${strings[1]}${b}${strings[2]}${c}`).toUpperCase();
}

// 3 ESEMPIO COMPLESSO:  ////////////////////////////////////////////////////////////
// Encoding delle URL con le template string

// Variabili che desideriamo includere nella URL
const nome = "Mario Rossi";
const città = "Milano & Roma";

// Encoding delle variabili
const nomeEncoded = encodeURIComponent(nome);
const cittàEncoded = encodeURIComponent(città);

// Creazione della URL utilizzando template strings
const url = `https://esempio.com/search?name=${nomeEncoded}&city=${cittàEncoded}`;

console.log(url);
// Output: https://esempio.com/search?name=Mario%20Rossi&city=Milano%20%26%20Roma

// RISULTATO Nel caso in cui venga fatto il console log: 
// https://esempio.com/search?name=Mario%20Rossi&city=Milano%20%26%20Roma

/////////////////////////////////////////////////////////////////////
///////////////////////"percent encoding" //////////////////////////
/////////////////////////////////////////////////////////////////////

//  ---->> %20:
// Rappresenta uno spazio. Gli spazi non possono essere usati
// direttamente nelle URL, quindi vengono codificati come %20.
// Esempio: La stringa "Ciao Mondo" diventa "Ciao%20Mondo".

// ---->> %26:
// Rappresenta il carattere & (e commerciale). Il simbolo & è usato nelle URL per separare i parametri, 
// quindi deve essere codificato per evitare ambiguità.
// Esempio: La stringa "A & B" diventa "A%20%26%20B".

/////////////////////////////////////////////////////////////////////
/////////////////////// OPERATORI ++ e -- //////////////////////////
/////////////////////////////////////////////////////////////////////

let num1 = 10;
let num2 = 10;
num1++;  // Aumenta di uno. 
num2--;  // Diminuisce di uno. 
console.log('primo numero:',num1,',    Secondo numero:',num2);

/////////////////////////////////////////////////////////////////////
/////////////////////// TIPOLOGIA DI DATI //////////////////////////
/////////////////////////////////////////////////////////////////////

//Tipologia di dato  ----->>> Data types
// Primitivi --> string, number, boolean, undefined, null, symbol
// Object --> array, set, object, map, functions


console.log('------------- Tipi di variabili: ---------------------'); 

const parola = "Ciao";
const numero = 777;
const bool1 = true;
const bool2 = false;
let prova;            // Può essere riassegnata. 
const valore = null;  // Non può essere riassegnata. 

console.log(typeof parola);
console.log(typeof numero);
console.log(typeof bool1);
console.log(typeof bool2);
console.log(typeof prova);
console.log(typeof null);

/////////////////////////////////////////////////////////////////////
/////////////////////// ARRAY +  SET, Funzioni ADD; HAS ; DELETE //////////////////////////
/////////////////////////////////////////////////////////////////////

console.log('------------- ARRAY: -------------------'); 
const Arry = ["a", false, 3, 5, [1, 2, 3], true];
const mySet  = new Set(Arry);
console.log('il mio set è: ', mySet);
// consoel.log('il tipo del mio set è',typeof mySet); 


///// LOOP SUL SET /////
let index = 0; // Inizializziamo un contatore
mySet.forEach( value  => { 
	console.log(`Index: ${index}, Value: ${value}`); 
	index++; // Incrementiamo il contatore ad ogni iterazione
	});

const myArray = Array.from(mySet); 
console.log('DI nuovo il mio array: ', myArray); // Output: [1, 2, 3, 4, 6]

mySet.add(6);           // ADD! 
console.log(mySet);    
console.log(mySet.has(3)); // true   // HAS!
console.log(mySet.has(10)); // false


/////////////////////////////////////////////////////////////////////
/////////////////////// Object  /////////////////////////////////////
/////////////////////////////////////////////////////////////////////

console.log('------------- OGGETTI: -------------------'); 

const persona = { 
	nome: "Mario",
	cognome: "Rossi", 
	età: 30 };

const chiaviMappate = Object.keys(persona)
console.log(chiaviMappate); // Output: ["NOME", "COGNOME", "ETÀ"]

const valoriMappati = Object.values(persona);
console.log(valoriMappati); // Output: ["MARIO", "ROSSI", "30"]
   
const entrateMappate = Object.entries(persona);
console.log(entrateMappate); // Output: [["NOME", "MARIO"], ["COGNOME", "ROSSI"], ["ETÀ", "30"]]
//Restituisco tutti Array 

// loop sull' oggetto: 
for (let chiave in persona) {
	if (persona.hasOwnProperty(chiave)) {
	  console.log(chiave + ": " + persona[chiave]);
	}
  }
  