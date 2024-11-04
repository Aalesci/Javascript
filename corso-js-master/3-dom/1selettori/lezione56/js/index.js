// Permette di selezione uno o più elementi in base alla classe

//getElementsByClassName('class')
//HTMLCollections = array-link object
//stesse proprietà di un array ma non stessi metodi



// seleziono gli elementi in base alla loro classe: 

const list = document.getElementsByClassName('item');

const newArray = [...list];

newArray.forEach(el => (el.style.color = 'blue'));

