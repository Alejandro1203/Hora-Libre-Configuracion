window.onload = ()=>{
    document.querySelector(".btn1").addEventListener("click", numberLinks);
    document.querySelector(".btn2").addEventListener("click", addressPenultimateLink);
    document.querySelector(".btn3").addEventListener("click", numberLinksInstitute);
    document.querySelector(".btn4").addEventListener("click", numberLinksThirdParagraph);
}


// ------------------ Ejercicio 1 ------------------ 
const numberLinks = ()=> {
    let number = 0;
    let links = document.querySelectorAll("a");

    links.forEach(l => number++);

    document.querySelector(".resultado").innerHTML = number;
}


// ------------------ Ejercicio 2 ------------------ 
const addressPenultimateLink = () => {
    let links = document.querySelectorAll("a");

    let penultimateLink = links[links.length - 2];

    document.querySelector(".resultado").innerHTML = "<a href='" + penultimateLink + "'>Penúltimo enlace</a>";
}


// ------------------ Ejercicio 3 ------------------ 
const numberLinksInstitute = () => {
    let links = document.querySelectorAll("a");
    let number = 0;

    links.forEach(l => {
        if(l.href === "https://iesbelen.org/") {
            number++;
        }
    });

    document.querySelector(".resultado").innerHTML = number;
}


// ------------------ Ejercicio 4 ------------------ 
const numberLinksThirdParagraph = () => {
    let number = 0;
    let paragraphs = document.querySelectorAll("p");

    let links = paragraphs[2].querySelectorAll("a").forEach(l=> number++);

    document.querySelector(".resultado").innerHTML = number;
}