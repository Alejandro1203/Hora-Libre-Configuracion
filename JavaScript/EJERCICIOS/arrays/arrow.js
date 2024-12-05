const lista = [4,6,3,8,4,7,11];
console.log(lista);

/*
function double(dato) {
    for(indice = 0; indice < dato.length; indice++) {
        console.log(dato[indice]*2);
    }
}

double(lista);*/

lista.forEach(e=>console.log(e*2));
console.log(lista);

/*
const listaD = lista.map(e=>e*2);
console.log(listaD);

const lista3 = lista.map(e=>e);
console.log(lista3);

const mayor5 = lista.filter(e=>e>5);
console.log(mayor5);

const pares = lista.filter(e=>e%2==0);
console.log(pares);

const impares = lista.filter(e=>e%2);
console.log(impares);

const otros = lista.filter(e=>{
    let ee= e+5; 
    ee = ee-11; 
    ee = ee*3;
    return ee%2==0}
);
console.log(otros);

/*
let elem = lista.find(e=>e>5);
console.log(elem);

// Devuelve -1 si no encuentra
let index = lista.findIndex(e=>e>0);
console.log(index);

let indexExact = lista.indexOf(4);
console.log(indexExact);*/

//const frase = ['hola', 'hoy', 'es', 'miércoles'];
//console.log(frase.join('<br>'));

/*
const initialValue = 1;
const sumWithInitial = lista.reduce((accumulator, currentValue) => accumulator * currentValue, initialValue);

console.log(sumWithInitial);

[2,5, ,9].forEach(e=>console.log(e));

lista.push(100);
console.log(lista);

lista.unshift(500);
console.log(lista);

lista.pop();
console.log(lista);

lista.shift();
console.log(lista);*/