// // Metodi e proprietà


// Metodi esempio generico
const obj = {
    nome: 'Sandro',
    saluta(momento){
        console.log(`${momento}, sono Sandro Petruzzi`)
    }
}

//Proprietà
//console.log(obj.nome)
//Metodo
//console.log(obj.saluta('BuonGiorno'))




// Metodi delle stringhe
const stringa = " Sono una Stringa";

console.log(stringa.length);
console.log(stringa.toLowerCase());
console.log(stringa.toUpperCase());
console.log(stringa.charAt(stringa.length -1));
console.log(stringa.indexOf('Sono')); // -1 false +1 true 
console.log(stringa.split("")); 
console.log(stringa.trim());
console.log(stringa.startsWith("sono")); //False  true 