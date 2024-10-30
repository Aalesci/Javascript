//Conditional Statements

// >, >=, <, <=, ==, ===, !=, !==


// Aggiungo AND o OR
// if(a && b)  
// if(a || b) 

a = 10 

if (a % 2 > 0 ) {
    conosle.log(' A dispari ');
} else {
    console.log(' A pari ');
}


// sarebbe meglio scrivere così la funzione: 

const isDispari = numero % 2 > 0;

if (isDispari) {
  console.log("dispari");
} else {
  console.log("pari");
}
