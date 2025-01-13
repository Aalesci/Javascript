// Fare un zuppa
// Bollire Acqua 10 min
// Tagliare le Carote
// Buttare Carote per 5 minuti
// Tagliare le Cipolle
// Buttare Cipolle per 5 minuti

//Promises - Pending, Resolved, Rejected
// then & cacth methods



const promise = new Promise((resolve, reject) => {

  // Qui dentro parlerò con il servere.

  let value = "Test Prima Promise ";
  //let value; 
  if (value) {
    resolve(value);
  } else {
    reject("C'è un problema");
  }
});

////////////////////////////////////
////// METODI THEN E CACH //////////
////////////////////////////////////

promise
  .then(function (result) {
    console.log(result);
  })
  .cacth((err) => console.log(err)); 


////////////////////////////////////////////////
////// TEORIA SULLE PROMISE ////////////////////
////////////////////////////////////////////////

// Le Promise in JavaScript sono oggetti utilizzati per gestire operazioni asincrone.
// Permettono di scrivere codice asincrono in modo più leggibile e organizzato, evitando il cosiddetto "callback hell" (la nidificazione di funzioni callback).

// Stati di una Promise:

// -> Pending: La Promise è in attesa di essere completata o rigettata.
// -> Fulfilled: La Promise è stata completata con successo e ha restituito un valore.
// -> Rejected: La Promise è stata rigettata e ha restituito un motivo (errore).

// Metodi Principali:

// -> then(): Viene eseguito quando la Promise è completata con successo.
// -> catch(): Viene eseguito quando la Promise viene rigettata.
// -> finally(): Viene eseguito indipendentemente dal fatto che la Promise sia stata completata con successo o rigettata.


