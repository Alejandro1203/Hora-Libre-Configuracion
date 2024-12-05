//Ejercicio 2
const grades = [4, 7, 2, 9];

let suma = grades.reduce((a, b) => a + b, 0);
console.log("La media de las notas es: " + suma/grades.length);

// EJERCICIO 3
const listPeople = [{name: 'Nicki Nicole', age: 22}, {name: 'Alejandro Magno', age: 28}, {name: 'Bobby', age: 16}, 
                    {name: 'Lupita', age: 14}, {name: 'Jason Derulo', age: 33}, {name: 'Juan', age: 21}];

const peopleAdult = listPeople.filter(e=>e.age>=18);
peopleAdult.forEach(element => {
    console.log(element.name);
});

//EJERCICIO 4
const months = [{name: 'January', number: 1, numDays: 31}, {name: 'February', number: 2, numDays: 28}, 
                {name: 'March', number: 3, numDays: 31}, {name: 'April', number: 4, numDays: 30},
                {name: 'May', number: 5, numDays: 31}, {name: 'June', number: 6, numDays: 30}, 
                {name: 'July', number: 7, numDays: 31}, {name: 'August', number: 8, numDays: 31}, 
                {name: 'September', number: 9, numDays: 30}, {name: 'October', number: 10, numDays: 31}, 
                {name: 'November', number: 11, numDays: 30}, {name: 'December', number: 12, numDays: 31}];

const month30Days = months.filter(e=>e.numDays==30);
console.log("\nMeses con 30 días: ");
month30Days.forEach(element => {
    console.log(element.name);
});

const monthEvenNumb = months.filter(e=>e.number%2==0);
console.log("\nMeses pares: ");
monthEvenNumb.forEach(element => {
    console.log(element.name);
})

let totalDays = 0;
months.forEach(element => {
    totalDays += element.numDays;
})
console.log("\nEl total de días es de: " + totalDays);


