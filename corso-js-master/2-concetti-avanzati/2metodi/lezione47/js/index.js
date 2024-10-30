//find, findIndex, indexOf
//Metodi di ricerca all'interno dell'array che ritonarno sempre un valore
//Ritorna un unico valore, il primo che corrisponde alla ricerca
//Find ritorna un elemento dell'array mentre findIndex e indexOf ritornano il suo indice oppure -1

const people = [
  {
    name: "Sandro",
    age: 20,
    position: "Frontend Developer",
  },
  {
    name: "Enzo",
    age: 35,
    position: "Backend Developer",
  },
  {
    name: "Sabrina",
    age: 28,
    position: "App Developer",
  },
  {
    name: "Saverio",
    age: 45,
    position: "Recruiter",
  },
];


//find, findIndex, indexOf

// const yunger30 = people.find(function (item, index, array) {
//   if (item.age < 30) {
//     return item;
//   }
// }); 

// console.log(yunger30);



// index of 
const ageArray = people.map((item) => item.age );

const ageIndex = ageArray.indexOf(28);

console.log(ageArray,'spazio >>', ageIndex); 