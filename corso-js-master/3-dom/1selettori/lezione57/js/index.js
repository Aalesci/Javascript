//Permette di utilizzare qualsiasi selettore CSS

// querySelector("css selector") - Primo elemento corrispondente
// querySelectorAll("css selector") - Tutte le corrispondenze in una NodeList = array like object


// Query SELECTOR  stimo usando i selettori del CSS



const eth =document.querySelector('#eth');  // item 
eth.style.backgroundColor = "tomato";

const item = document.querySelector(".item"); // classe 
item.style.backgroundColor = 'blue';

const lastItem = document.querySelector("li:last-child");
lastItem.style.backgroundColor = "green";
console.log(lastItem);


// voglio prenderli tutti: 
const list = document.querySelectorAll(".item");
console.log(list); // qui ottengo una node list. 


// Le node list mi permettono di usare il metodo forEach 

list.forEach(function (item){
item.style.color = "orange";
}); // sono tre valori. 


// PER USARE I METODI DEGLI ARRAY: 
// devo trasformare la mia node list in un array: 


const newList = Array.from(list);

const filterList = newList.filter(function (item){
    return item.classList.contains("last");
    }); // sono tre valori. 

console.log(filterList);    