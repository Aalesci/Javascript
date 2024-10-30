
// Tipi di funzione 



function funzione(parametro) { // Il $ sere per richimare il parametro. 
    //.... Fare Cose
    console.log(`Sono una funzione e questo è un ${parametro}`);
    return;
  }

  
// const Function expression 

const exp = function(){
    console.log('Sono una esperessione');
};

exp();


// arrow function 

const arrow = (param1, param2) => {
    console.log("Sono una arrow function")
};


//implicit return 
// Queste due scritture sono la stessa cosa 

const implicitArrow = () => "ciao";

const prova = function () {
    return "Ciao";
};


// Altro esempio, // deve essere messo tutto su una sola riga di codice.
const implicitArrow2 = (a , b) => a + b ;

