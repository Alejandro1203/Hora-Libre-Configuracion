const aceptar = document.querySelector("#boton")
const textArea = document.querySelector("#textArea")
let intervalo;

aceptar.addEventListener("click", e => {
    let textValue = document.querySelector("#nombre").value;
    docCookies.setItem("nombre", encodeURIComponent(textValue), 10);

    console.log(docCookies.getItem("nombre"));

    document.querySelector("#divNombre").innerHTML = `<label>Hola ${textValue}!</label>`;

    intervalo = setInterval(resetCookie, 10000);
})

function resetCookie() {
    if(confirm("¿Sigues ahí?")) {
        docCookies.setItem("nombre", docCookies.getItem("nombre"), 10);
    } else {
        document.querySelector("div").innerHTML = `<input id="nombre" type="text" placeholder="Nombre"/><button id="boton">Aceptar</button>`;
        clearInterval(intervalo);
    }
}

function updateTextArea() {
    docCookies.setItem("textArea", encodeURIComponent(document.querySelector("#nombre").value), 60);

    textArea.value = docCookies.getItem("textArea");
}

setInterval(updateTextArea, 2000);