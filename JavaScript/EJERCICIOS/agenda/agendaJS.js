const form = document.forms.agendaForm;
console.log(form);

// En un form.elements solo se pillan los input
const elements = form.elements;
console.log(elements);

let contacto = new Set();

const recogerData = () => {

    let usuario = elements.txtUsuario.value;
    let nombre = elements.txtNombre.value;
    let apellidos = elements.txtApellidos.value.trim();
    let telefono = elements.txtTelefono.value;
    let dato = elements.inlineRadioOptions.value;

    let data = {usuario, nombre, apellidos, telefono, dato};
    contacto.add(data);

    return data;
}

const addData = () => {
    let table = document.querySelector("tbody");
    console.log(table);

    let cadena = "";
    cadena += `<tr>`;

    let data = recogerData();
    cadena += `<td>${data.usuario}</td>`;  
    cadena += `<td>${data.nombre}</td>`; 
    cadena += `<td>${data.apellidos}</td>`; 
    cadena += `<td>${data.telefono}</td>`; 
    cadena += `<td>${data.dato}</td>`; 

    cadena += `</tr>`;

    table.innerHTML += cadena;    
}

const button = form.btnAdd;

button.addEventListener('click', e => {

    if(form.chkSeguro.checked && form.txtUsuario.value.length > 0) {
        recogerData();
        addData();
    } else {

        if(!form.chkSeguro.checked) {
            alert("Marca la casilla de seguro");
            form.chkSeguro.focus();
        } 
        
        if(form.txtUsuario.value.length == 0) {
            alert("Introduce nombre de usuario");
            form.txtUsuario.focus();
        }
    }
    
});

const user = form.txtUsuario;

user.addEventListener("keydown", e => {

    if(isNaN(e.key)) {
        e.preventDefault();
    }
});