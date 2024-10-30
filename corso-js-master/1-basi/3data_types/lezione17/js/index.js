
// I SET !!! 

const prova = [1,2,3,4,4,4,4];
console.log(prova); //(7) [1, 2, 3, 4, 4, 4, 4]


const esempio = new Set(prova);
console.log(esempio); //Set(4) {1, 2, 3, 4}

esempio.add(45)
console.log(esempio.has(45)); // True.


const prova2 =[
    "a", 
    false, 
    [1,2,3],
    esempio, 
]

console.log(prova2);