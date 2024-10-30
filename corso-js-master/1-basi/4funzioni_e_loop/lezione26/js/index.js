// Uguaglianza
// == vs ===

const esempio = 20 == "20"; // Uguaglinaza senza confronto del tipo di dato. 
const esempio2 = 20 === "20"; // Viene valutata nche l'uguaglianza tra i tipi di dato.  


// === 

// != vs !==

const esempio3 = 20 != "20"; // NON sono uguali per lui. FALSE 
const esempio4 = 20 !== "20"; // sono diversi: qundi TRUE 


const prat = null == undefined; //true 
const prat2 = null === undefined; // false 

console.log(prat, prat2);