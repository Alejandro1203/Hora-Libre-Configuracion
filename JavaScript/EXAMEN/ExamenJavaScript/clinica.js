const form = document.forms.formHistoria;

window.onload = () => {
    mostrarAnimales();
}

const peso = form.txtPeso;

peso.addEventListener("keydown", e => {
    const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

    if(keys.indexOf(e.key) == -1) {
        e.preventDefault();
    }
})


function mostrarAnimales() {
    let table = document.querySelector("tbody");
    let cadena = "";

    for(let index = 0; index < animals.length; index++) {        
        cadena += `<tr>`;
        cadena += `<td>${animals[index].name}</td>`;
        cadena += `<td>${animals[index].species}</td>`;
        cadena += `<td>${animals[index].foods[0]}</td>`;
        cadena += `<td>${animals[index].foods[1]}</td>`;
        cadena += `<td><button id="btnEditar${animals[index].name}" onclick="editarAnimal('${index}')">Editar</button></td>`; 
        cadena += `</tr>`;       
    }

    table.innerHTML = cadena;
}

function editarAnimal(index) {
    const filas = document.querySelector("tbody").querySelectorAll("tr");
    filas[index].classList.add("table-success");

    const txtNombre = form.txtNombre;
    txtNombre.value = animals[index].name;

    const raza = form.selectRaza;

    if(animals[index].species === "cat") {
        raza.innerHTML = `<option>Persa</option><option>Siames</option><option>Naranja</option>`;
    } else {
        raza.innerHTML = `<option>Pastor Alemán</option><option>BullDog</option><option>Chihuahua</option>`;
    }

    const datos = form.datosAnimal;

    datos = `<pre>${JSON.stringify(animals[index], null, 2)}</pre>`
}

function guardarDatos(index) {
    if(form.sexOptions.value == "") {
        return alert("Indique el sexo del animal")
    }

    if(form.txtPeso.value == "") {
        return alert("Indique el peso del animal")
    }

    if(!form.oidos.checked && !form.nariz.checked && !form.bocaPico.checked && !form.ojos.checked) {
        return alert("Indique una revisión")
    }

    if(form.txtDiagnostico.value == "") {
        return alert("Indique un diagnóstico")
    }

    let sexo = form.sexOptions.value;
    let peso = form.txtPeso.value;
    let revision = {"oidos" : form.oidos.checked, "nariz" : form.nariz.checked, "Boca/Pico" : form.bocaPico.checked, "ojos" : form.ojos.checked};
    let diagnostico = form.txtDiagnostico.value;

    let data = {sexo, peso, revision, diagnostico};

    animals[index].add(data);
}

const guardar = form.btnGuardar;

guardar.addEventListener("click", e => {
    guardarDatos();
})
