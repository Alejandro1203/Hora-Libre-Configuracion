// Crear y pedir dos números
let num1 = Number(prompt("Introduce un número: "));
let num2 = Number(prompt("Introduce otro número: "));

// Crear
let output = `Sumando ${num1} y ${num2} 
    Resultado ${(+num1)+(+num2)}`;

alert(output);

document.getElementById("Parrafo").innerText = output;

// Crea elemento p(párrafo)
let element = document.createElement('p');

// Crea el texto
let textNode = document.createTextNode(output);

// Se le añade al elemento creado el textNode
element.append(textNode);

// Se añade el elemento a uno ya creado del index
document.getElementById("answers").append(element);

// Mismo procedimiento pero indicando el texto 
let element2 = document.createElement('p');
element2.innerText = "hola";
document.getElementById("answers").append(element2);

// Mismo procedimiento pero sin crear elemento añadiendo una estructura HTML directamente
document.getElementById("answers").innerHTML += "<p>otro párrafo <br> de dos líneas</p>";
