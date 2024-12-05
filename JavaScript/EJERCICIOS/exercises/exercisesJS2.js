//----------------------------------------- EJERCICIO 1 -----------------------------------------
/*const numbers = [1, 2, 3, 4, 5];

// Apartado 1
const squareNumbers = [];
for(index = 0; index < numbers.length; index++) {
    squareNumbers[index] = Math.pow(numbers[index], 2);
}

// Apartado 2
const squareNumbers = numbers.map(e=> e*e);

console.log(squareNumbers);*/


//----------------------------------------- EJERCICIO 2 -----------------------------------------
//const numbers = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];

// Apartado 1
//const positiveNumbers = [];
/*for (index = 0; index < numbers.length; index++) {
    if (numbers[index] > 0) {
        positiveNumbers.push(numbers[index]);
    }
}*/

// Apartado 2
//const positiveNumbers = numbers.filter(e=>e>0);

//console.log(positiveNumbers);


// ----------------------------------------- EJERCICIO 3 -----------------------------------------
const numbers = [23, 205, 7, -1, 5];

//let greatestNumber = numbers.reduce(e=> Math.max(...numbers)); // sin el math.max
let greatestNumber = numbers.reduce((e1, e2) => {
    if(e1 > e2) {
        greatestNumber = e1;
    } else {
        greatestNumber = greatestNumber;
    }
}, numbers[0]);

console.log(greatestNumber);


// ----------------------------------------- EJERCICIO 4 -----------------------------------------
/*const students = [
    {name: "Alejandro", lastName1: "Fernandez", lastName2: "Abarca"},
    {name: "Oday", lastName: "Al Khelaifi"},
    {name: "Ursula", lastName1: "Gertrud", lastName2: "Albrecht"},
    {name: "Ritchie", lastName: "Valens"},
    {name: "Letizia", lastName1: "Ortiz", lastName2: "Rocasolano"},
];

const sortStudents = students.sort((e1, e2)=> {
    if((e1.lastName1 > e2.lastName1) || (e1.lastName1 > e2.lastName) || (e1.lastName > e2.lastName1) || (e1.lastName > e2.lastName)) {
        return 1;
    } else if ((e1.lastName1 < e2.lastName1) || (e1.lastName1 < e2.lastName) || (e1.lastName < e2.lastName1) || (e1.lastName < e2.lastName)){
        return -1;
    } else {
        return 0;
    }
});

console.log(sortStudents);*/




// ----------------------------------------- EJERCICIO 5 -----------------------------------------
/*const numbers = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 5];

function equals(array1, array2) {
    if (Array.isArray(array1) && Array.isArray(array2)) {
        if (array1.every((value, index) => value === array2[index])) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(equals(numbers, numbers2));*/