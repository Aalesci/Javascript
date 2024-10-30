
// Funzioni e parametri


let numero = 0;

function AddVal(num){
    num = num + 4; 
    console.log(num);

};

AddVal(numero);


function somma(n,n1){
    let ris = n+n1;

    return ris  // Ritorno il valore
    // tutto quello che c'è qui non vinene eseguito. 
}

console.log("Somma:", somma(5,5));