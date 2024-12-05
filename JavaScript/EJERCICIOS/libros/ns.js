let table = "";

for(let index = 0; index < books.length; index++) {
    table += "<tr>";
    table += "<td>" + books[index].title + "</td>";
    table += "<td>" + books[index].genre + "</td>";
    table += "<td>" + books[index].author + "</td>";
    table += "<td>" + books[index].pages + "</td>";
    //class="bg-primary"
    table += "<td>" + books[index].datePublished + "</td>";
    table += "<td>" + books[index].read + "</td>";
    table += "<td><a href=\"" + books[index].website + "\">" + books[index].title + "</td>";
    table += "</tr>";
}

const list = document.querySelector(".body");
list.innerHTML = table;

window.onload = ()=>{
    document.querySelector(".generos").addEventListener("click", getGeneros);
    document.querySelector(".leidos").addEventListener("click", getLeidos);
}

const getGeneros = ()=> {
    let conjuntoGeneros = new Set();
    let generos = "";

    books.forEach(b=> conjuntoGeneros.add(b.genre));

    conjuntoGeneros.forEach(g=> generos += `${g}<br>`);
    
    document.querySelector(".resultado").innerHTML = generos;
}


/*
const getAutores = ()=> {

    let autoresStr = "";

    books.forEach(b=> {
        b.author.forEach(a=> autores += `${a}<br>`)
    })

    document.querySelector(".results").innerHTML =autores;

    const autoresSet = [{author:"Reverte", cont = 0}];
    
    autoresSet.forEach(a=> {
        books.forEach(b => {
            b.author.find(a)? a.cont++
        })
    })
    
}*/

const getLeidos = () => {
    let leidos = "";

    books.filter(b => b.read).sort((a, b) => 
    a.pages > b.pages ? 1 : -1).forEach(b => leidos += `${b.title} ${b.pages}<br>`)

    document.querySelector(".resultado").innerHTML = leidos;
}