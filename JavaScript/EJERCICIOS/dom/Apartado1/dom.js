// ------------------ Ejercicio 1 ------------------ 
const elem = document.querySelector("#age-table");
elem.classList.add("bg-primary");


// ------------------ Ejercicio 2 ------------------ 
let labels = elem.querySelectorAll("label");

labels.forEach(l => l.classList.add("bg-warning"))
console.log(elem.querySelectorAll("label"));


// ------------------ Ejercicio 3 ------------------  
let td = elem.firstElementChild.firstElementChild;
td.classList.add("bg-danger");


// ------------------ Ejercicio 4 ------------------
const form = document.querySelector("form[name='search']");
form.classList.add("bg-secondary");


// ------------------ Ejercicio 5 ------------------
const input = form.querySelector("input");
input.classList.add("bg-success");


// ------------------ Ejercicio 6 ------------------ 
const lastInput = form.querySelectorAll("input");
lastInput[lastInput.length-1].classList.add("bg-primary-subtle"); 