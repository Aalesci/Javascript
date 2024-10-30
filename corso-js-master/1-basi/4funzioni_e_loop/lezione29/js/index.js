// POCO USATO. 





// Ciclo infinito all'interno di una Pagina 

let contatore = 0;
let valore = 0;

// ciclo While
while (contatore < 10) { // Se il codice non termina la pagina non si carica!  
    valore++;
    contatore++;
    if (valore === 7) {
        break;
    } else if (valore < 5) {
           continue;
    }
    console.log(`Valore è  uguale a ${valore}`);
}


let cont2 = 0;
let val2 = 0;

// ciclo Do 

do {
    val2++;
    cont2++;
    console.log(cont2);
}while(cont2 < 3);


// combinazioni tasti 
//Ctrl + SHIFT + P menu ricerca 
// SHIFT + AlT + F  