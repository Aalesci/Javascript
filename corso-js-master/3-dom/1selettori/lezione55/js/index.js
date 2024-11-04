// Permette di selezione uno o più elementi in base al nome del loro tag

//getElementsByTagName('tagname')
//HTMLCollections = array-link object
//stesse proprietà di un array ma non stessi metodi



// SELETTORE CHE SI BASA SUL TAG NAME!

// ritorna una NODE LIST. 

// O nel nostro caso un --->>> HTMLCollection <<<----
const titoli = document.getElementsByTagName('h1')
console.log(titoli)

// Posso modificarli ovviamete 

titoli[0].style.color = "orange";
console.log('Numero dei titoli: ->', titoli.length);


// NON è possibile fare la seguente operazione: (NON E' UN ARRAY)

//titoli.forEach(function( titolo){
//    console.lot(titolo)
// })

const list = document.getElementsByTagName("li");
console.log(list);


//Da node list ad Array: 2 Modi: 
// primo modo: 
const newArray = Array.from(list);

// secondo modo:
//const newArray2 = [...list]; //Is next update 2015. 

newArray.forEach(function (item){
    item.style.color = "green";
})


