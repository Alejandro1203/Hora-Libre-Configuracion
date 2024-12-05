
// ------------------ Ejercicio 1 ------------------
const elem = document.querySelector("#age-table");
elem.classList.add("bg-primary");

// ------------------ Ejercicio 2 ------------------
// const elem = document.querySelector("#age-table");
let labels = elem.querySelectorAll("label");
// let labels = document.querySelectorAll("table label");

labels.forEach(l => l.classList.add("bg-warning"))
console.log(elem.querySelectorAll("label"));

// ------------------ Ejercicio 3 ------------------
// const elem = document.querySelector("#age-table");

// Opción 1
let td = elem.firstElementChild.firstElementChild;
td.classList.add("bg-danger");

// Opción 2
// let td = elem.querySelector("td");
// td.forEach(t => t.has) 

// ------------------ Ejercicio 4 ------------------
const form = document.querySelector("form[name='search']");
form.classList.add("bg-secondary");

// ------------------ Ejercicio 5 ------------------
const input = form.querySelector("input");
input.classList.add("bg-success");

// ------------------ Ejercicio 6 ------------------
const lastInput = form.lastElementChild("input");
lastInput.classList.add("bg-info"); 