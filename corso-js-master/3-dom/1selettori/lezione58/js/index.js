// NodeList di element figli rispetto a quello selezionato

//childNodes - Ritorna tutti gli elementi, anche gli spazi che sono contati come text node

//children - Ritorna tutti gli elementi senza spazi

//firstChild - primo elemento (spazi inclusi)
//lastChild - ultimo elemento (spazi inclusi)


const list = document.querySelector('#list');

console.log(list.childNodes); // restituisce 11 ELEMENTI.  // NODE LIST  
// Se non metti .childNodes ti restituisce il codice Html così come è.  

// otteniamo una node list. 

// per eliminare gli spazzi vuoti che si manifestano sotto 
// forma di spazzi usiamo   .children 

console.log(list.children);  // Restituisce 5 ELEMNTI.  //HTML COLLECTION.


// poi abbiamo: (meno usati)

console.log(list.firstChild); // testo
console.log(list.lastChild); // testo 

console.log(list.firstElementChild); // Elemento
console.log(list.lastElementChild); // Elemento