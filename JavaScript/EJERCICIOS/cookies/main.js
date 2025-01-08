const aceptar = document.querySelector("#boton")
const textArea = document.querySelector("#textArea")
let intervalo;

window.onload = () =>{
    setInterval(updateCookieTextArea, 2000);

    if(!docCookies.getItem("nombre")) {
        alert("Bienvenido")
    }

    textArea.value = docCookies.getItem("textArea");
}

aceptar.addEventListener("click", e => {
    e.preventDefault();

    let textValue = document.querySelector("#nombre").value;
    docCookies.setItem("nombre", encodeURIComponent(textValue), 1000);

    document.querySelector("#divNombre").innerHTML = `<label>Hola ${textValue}!</label>`;

    intervalo = setInterval(resetCookie, 5000);
})

function resetCookie() {
    if(confirm("¿Sigues ahí?")) {
        docCookies.setItem("nombre", docCookies.getItem("nombre"), 1000);
    } else {
        document.querySelector("div").innerHTML = `<input id="nombre" type="text" placeholder="Nombre"/><button id="boton">Aceptar</button>`;
        docCookies.removeItem("nombre");
        clearInterval(intervalo);
    }
}

function updateCookieTextArea() {
    docCookies.setItem("textArea", textArea.value, 5);
}