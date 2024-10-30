
// METODI DEGLI ARRAY 

const frontend = ["react", "javascript", "css", "html"];


console.log(frontend.length);


const backend = ['pippo', 'pluto', 'paperino'];
const developer = frontend.concat(backend);

console.log(developer);

console.log(developer.reverse()); // Inverte l'ordine

console.log(developer.unshift('draft')); 

console.log(developer.shift()); // elimina il primo elemanto


console.log(developer.push("swift")); // aggiunge l'elemento in testa

console.log(deleloper.pop()); 

developer.slice(2);  // Creo una copia del mio arrey partendo dal secondo elemento.
developer.splice(3); //MUTA IL NOSTRO ARREY PRINCIPALE,  rimuove una parte dell' arrey e ritorna quella parte.   



console.log(developer); 