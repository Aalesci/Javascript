/**
 * FIRST-CLASS FUNCTIONS - Un linguaggio di programmazione dice di 
 * avere First-class function quando queste possono essere trattate 
 * come ogni altro tipo di dato: possono essere passate come 
 * parametro (High-Order && Callback), possono essere ritornate da
 *  una funzione (Closure) oppure essere assegnate ad una variabile 
 * (function expression)
 */

/**
 * HIGH-ORDER-FUNCTIONS
 * Sono funzioni che accettano tra i loro parametri anche delle 
 * funzioni (richiamabili poi al loro interno), oppure funzioni
 *  che returnano delle funzioni (CLOSURE)
 */

/**
 * CALLBACK FUNCTION
 * Funzioni che vengono passate come parametro ad un'altra
 * funzione per essere richiamate all'interno
 */


function validator(a,b) {
    return typeof a === 'number' &&  typeof b === 'number'; 
};

function absolute(n){
    if(n < 0 ){
        return Math.abs(n);
    }
    else{
        return n;
    };
}


// quaesta è la mia // HIGH-ORDER-FUNCTIONS
function highOrderF(a,b,callFunction1, callFunction2){
    const areNumbers =  callFunction1(a,b)
    if(areNumbers) {
        return callFunction2(a-b);
    }
    return "Spiacente non sono numeri";
}

let ris = highOrderF(5, 29, validator, absolute );
console.log(ris)