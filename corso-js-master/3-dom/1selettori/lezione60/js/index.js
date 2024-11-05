//sibling - E' ilrapport tra figli di un determinato contenitore

//nextSibling - Successivo (incluso di spazi)
//nextElementSibling - Successivo (spazi esclusi)
//previousSibling - Successivo (incluso di spazi)
//previousElementSibling - Successivo (spazi esclusi)



// Navighimo tra "fratelli". 


const first = document.querySelector(".first");

console.log(first.nextSibling);
console.log(first.nextElementSibling.nextElementSibling); // Ecc Ecc

const last = document.querySelector(".last");

console.log(last.previousSibling);
console.log(last.previousElementSibling);

