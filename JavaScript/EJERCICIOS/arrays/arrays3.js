const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(...lista);

const lista2 = [...lista];
console.log(lista2);

const lista3 = lista.map(e=>e);
console.log(lista3);

const students = [
    "ale vargas", 
    "juan pedro", 
    "miguel lopez vinuesa",
    "tony valero martin"
];

const st1 = students[0].split(' ');
console.log(st1);