


// Variabile LOOKUP (dove javascript guarda per prendere le variabili)
// e CALLSTACK (= Pila delle azioni che vengono eseguite )


// Variable Lookup definisce la direzione univoca con cui 
//javascript "ricerca" il valore contenuto in una varibaile

// Si definisce Call stack l'insieme di processi/routine che sono state invocate ma la cui esecuzione non è terminata.



// JAVA SCRIPT va a pescare i valori delle variabili dall' interno della 
// funzione verso l'esterno. 

let nome = "Mario"; // viene pescato per terzo 

//Rischio di errore
function esempio() {

  console.trace("1");

  let nome = 'michele'; // viene pescato per secondo

  function inner() {
    console.trace("3");
    let nome = 'pippo'; // viene pescato per primo 

    console.log(nome);
  }
 
    inner();
}


console.trace("0");

esempio();





/// LOOKUP e CALL SATCK 