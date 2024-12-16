


////////////////////////////////////////////////
////////// RECAP FUNZIONI E LOOP ///////////////
////////////////////////////////////////////////



///////  ++ e -- ///////////

let alfa = 10; 
console.log( alfa, '++ aumenta il numeor di uno: ', alfa++ ); 



// 0. Funzione normale + IF sentence: 

const esperessione = function () {
    console.log("sono un espressione");
  };

// 1. Arrow Functions

// ->Le arrow functions sono una sintassi più concisa per scrivere funzioni in JavaScript.
// Sono introdotte in ES6 e hanno alcune caratteristiche speciali:
// ->Sintassi Concisa: Usano la notazione => e possono omettere le parentesi graffe {} e
// la parola chiave return se il corpo della funzione è una singola espressione.
// -> Legame del this: Non legano il proprio this. Ereditano il this dal contesto in cui sono state definite.
// Migliore per Funzioni Brevi: Ideali per funzioni di breve durata e per evitare errori di scoping del this.

// Esempio A: 
let parametro = 'CIAO';  
const arrow = (parametro, param2) => {
    console.log("sono un arrow");
  };

// Esempio B: 
let a = 3 ; 
let b = 5 ;

const implicitArrow = (a, b) => a + b;

console.log(implicitArrow);


// 2. Callback Functions
//Le callback functions sono funzioni che vengono passate come argomento ad un'altra funzione e vengono eseguite dopo che quest'ultima ha completato il suo compito. Sono essenziali per la programmazione asincrona, come le operazioni con setTimeout, le chiamate API, o la gestione di eventi.

//Utilizzo Asincrono: Fondamentali per la gestione di operazioni asincrone, permettendo il proseguimento del codice dopo che un'operazione è completata.

// Design Pattern: Un design pattern utilizzato per eseguire una funzione dopo il completamento di un'altra funzione.

// Esempio di callback function:
