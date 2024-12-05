const lista = [
    {name:'Juan', age:30},
    {name:'Jane', age:44},
    {name:'Jane', age:100},
    {name:'Jane', age:12},
    {name:'Angel', age:14},
    {name:'Zoe', age:23}
]

/*const lista2 = lista.sort((e1, e2)=>{
    if(e1.name===e2.name) {
        if(e1.age > e2.age) {
            return 1;
        } else {
            return -1;
        }
        return 0;
    } else if(e1.name>e2.name) {
        return +1;
    } else {
        return -1;
    }
    
});
lista.sort();
console.log(lista2);

const lista3 = lista.sort((e1, e2)=>{
    if(e1.age===e2.age) {
        return 0;
    } else if(e1.age>e2.age) {
        return +1;
    } else {
        return -1;
    }
    
});

console.log(lista3);*/

//Clonación 1
//const otraLista = Array.from(lista);

//Clonación 2
const otraLista = lista.slice();

lista.push(666);

console.log(lista);
console.log(otraLista);