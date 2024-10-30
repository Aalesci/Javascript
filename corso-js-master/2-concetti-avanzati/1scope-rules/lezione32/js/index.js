



// VALORE VS RIFERIMENTO 

let num = 5. 
let num2 = num 

num2 += 5;

console.log(num);
console.log(num2);


let obj = {name:'Gianni'};
let obj2 = obj; 


// Voglio fare una copia:

let obj3 = {...obj};
console.log(obj3);

// NON STO FACENDO una copia:

obj2.eta = 34;

console.log(obj); // {name: 'Gianni', eta: 34}
console.log(obj2); // {name: 'Gianni', eta: 34}
