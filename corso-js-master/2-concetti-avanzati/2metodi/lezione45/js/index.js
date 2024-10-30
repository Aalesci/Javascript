//Map  ---> MAP 
//Ritorna un nuovo Array

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


//const newArray = people.map(function (person)  {
//  return "map method";
//}); 

//console.log(newArray); 
//console.log(people);


// Prima opzione: 
//const yfr = people.map(function (person, index, array) {
//  let year = 0; 
//  year = 60 - person.age ;
//  return console.log(person.name + ' anni alla pensione  ' + year); 
//})


// Seconda opzione: 

// const yfr = people.map(function (person, index, array) {
//   let year = 65 - person.age;
//   return {
//     name: person.name,
//     retiresIn: year,
//   };
// })
// console.log(yfr);

// Simamo partiti da un array di persone
// e ne abbiamo creato uno nuovo. 


const Adv = people.map((person, index) =>{
  return `<h2 style="margin-top: 8px;"> ${index + 1} ${person.name}</h2>`;
});

console.log(Adv);

const div = document.createElement("div");

div.innerHTML = Adv.join("");
div.style.marginTop = "30px";

document
  .querySelectorAll(".container")[1]
  .insertAdjacentElement("beforeend", div);