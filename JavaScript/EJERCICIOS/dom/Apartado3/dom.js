
const list = document.querySelector(".lista");

window.onload = () =>{
    document.querySelector(".btn").addEventListener("click", mostrar);
}

const mostrar = ()=> {
    const texto = document.querySelector(".text");

    if (texto.value !== "") {
        let li = document.createElement("li");
    
        li.appendChild(document.createTextNode(texto.value));
        list.prepend(li);
    }
} 