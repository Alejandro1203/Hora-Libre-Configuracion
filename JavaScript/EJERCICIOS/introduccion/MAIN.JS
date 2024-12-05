/*
let num1 = 1;
console.log(typeof num1);

let num2 = "1";
console.log(typeof num2);
*/

//console.log(num1 == num2);
//console.log(num1 === num2);

//console.log(num1 != num2);
//console.log(num1 !== num2);

/*
let hoy = new Date();
console.log(hoy);
console.log("today is: " + hoy);

console.log(hoy.getTime());

var name = "my name";
var myAge = 22;

if(myAge > 18) {
    var name = "another name";
}

console.log(name);
*/

/*
const SALARY = 1000;
console.log(SALARY);
SALARY = 1001; //Error
*/

/* const person = {name: 'Jon',
              age: 30
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

person.name = "Jane";
console.log(person.name);
person.children = 4;
console.log("Hijos: " + person.children); */

/* let name = "nuria";
let city = "málaga";
let str = "Hi " + name + " in " + city;
console.log(str);

let age = 4;

let strLit = `hi ${name} 
in ${city}, ${age + 100}`;

let strLit2 = `hi ${name} 
in ${city}, ${age + "100"}`;

console.log(strLit);
console.log(strLit2); */

 let sum =(a, b) => {
    return a+b;
   }

console.log(sum(2,3));
   
let sum2 = (a,b) => a+b;
console.log(sum(2,3));

(function(a, b) {
    console.log(a+b);
})(8,9); 
