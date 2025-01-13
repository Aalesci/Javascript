//import { element } from "./data.js"


const getElement = (el) => {
    const element = document.querySelector(el)
    if (element) {
        return element
    } else
        throw Error(`${el} Non esiste l'elemento`)
}


export default getElement; 