//Code Splitting
//Named Export
//Deafult Export
//React project type

//import { element } from "../../finale/js/utils/data";


import { data, element } from './utils/data.js' //Named Export

import showPeople from './utils/showPeople.js';



element.btn.addEventListener("click", () => showPeople(data));