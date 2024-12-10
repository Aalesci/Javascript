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

 const yunger30 = people.find(function (item, index, array) {
   if (item.age == 20 ) {
     return item;
   }
}); 

console.log('Yung than 30', yunger30);

console.log('----------------');
console.log('----------------');

const yunger30Index = people.findIndex(function ( e ) {
  if (e.age == 20 ) {
    return e;
  }
}); 

console.log('Yung than 30 INDEX: ', yunger30Index);
console.log('----------------');
console.log('----------------');


// index of 

// Creo un array che contiene le età
const ageArray = people.map((item) => item.age );

const ageIndex = ageArray.indexOf(28);  // Se non trovo il valor mi restituisce -1

console.log(ageArray,'spazio >>', ageIndex); 

console.log('Altro modo per visualizzare il tutto:', people[ageIndex]); 




console.log('--------------------------------------------');
console.log('--------------------------------------------');

// Altro modo ancora:

const CustomFindMethod = function () {
  const ageArray = people.map((item) => item.age );
  const ageIndex = ageArray.indexOf(45);
  if (ageIndex > -1){
    console.log('Esiste un elemento !'); 
    return; 
  }; 
  console.log('Non esiste elemento !');
}; 


CustomFindMethod(); 