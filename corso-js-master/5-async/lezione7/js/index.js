// Interagire con un API
// metodo fetch

const container = document.getElementById("root");
const url = "https://jsonplaceholder.typicode.com/posts";
const errorurl = "https://jsonplaceholder.typicode.com/po";




////////////////////////////////////////////////
//////////////// PROMISE  //////////////////////
////////////////////////////////////////////////

// // CON ARROW FUNCTION 
// const getDate = () => {
//     fetch(url)
//         .then(function (result) {
//             return (result.json()); // di fatto qui sto trasformado quello che ricevo in un Json
//         })
//         .then((data) => console.log(data)); // data contente sempre i mieni dati. 
// };

// getDate();

// // SENZA ARROW FUNCTION
// function getDate() {
//     fetch(url)
//         .then(function(result) {
//             return result.json(); // Trasformo ciò che ricevo in JSON
//         })
//         .then(function(data) {
//             console.log(data); // Stampa i dati ottenuti
//         });
// }

// getDate();

////////////////////////////////////////////////
//////////////// ASYNC  //////////////////////
////////////////////////////////////////////////

function createListItem(text) {
    const li = document.createElement('li')
    li.classList.add('li-item')
    li.innerText = text
    return li
};

function showPost(posts) {
    if (posts && posts.length > 0) {
        const frist10 = posts.slice(0, 10);
        const ul = document.createElement('ul')
        const tempArray = frist10.map(function (el) {
            return createListItem(el.title)
        });
        tempArray.forEach((item) => {
            ul.appendChild(item)
        });
        container.appendChild(ul)
    }
}

function handleError(text) {
    const errorDiv = document.createElement('div')
    errorDiv.innerText = text || 'Sorry there was an errror'
    errorDiv.classList.add('paper', 'error')
    container.appendChild(errorDiv)
}

const getData = async () => {
    try {
        const response = await fetch(errorurl);
        if (response.status >= 400) {
            throw Error("Sorry, bad Request");
        }
        const data = await response.json();
        //console.log(data);
        showPost(data);
    } catch (error) {
        handleError(error)
    }
};

getData();