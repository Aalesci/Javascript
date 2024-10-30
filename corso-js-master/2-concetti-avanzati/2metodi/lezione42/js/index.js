

// Lista della spesa. 
const crypto = [200, 500, 800, 600];
const sport = [12, 56, 12, 6, 22, 44, 55, 66, 77, 88];

const listaSpese = [];

// Calcolo Spese. 

function moneyManager(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        let element = array[i]
        total += element
        listaSpese.push(element)
    }
    return total;
}

const bilancio = {
    crypto: moneyManager(crypto),
    sport: moneyManager(sport)
}

console.log(bilancio);
console.log(listaSpese);