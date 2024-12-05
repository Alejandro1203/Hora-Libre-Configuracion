const form = document.forms.pagoForm;

const nombre = form.txtNombre;

nombre.addEventListener("keydown", e => {
    if(!isNaN(e.key)) {
        e.preventDefault();
    }

    if(nombre.value.length < 6) {
        nombre.classList.add("bg-warning");
    } else {
        nombre.classList.remove("bg-warning");
    }
});

nombre.addEventListener("change", e => {
    nombre.value = nombre.value.toUpperCase()
});

const edad = form.txtEdad;

edad.addEventListener("input", e => {

    if(isNaN(edad.value)) {
        edad.value = "";
    }
});

const numeroCuenta = form.txtCuentaBanco;

numeroCuenta.addEventListener("input", e => {
    if(isNaN(numeroCuenta.value)) {
        numeroCuenta.value = "";
    }
});

numeroCuenta.addEventListener("change", e => {
    let texto = numeroCuenta.value;

    numeroCuenta.value = texto.replace(/(\d{4})/g, '$1 ');    
});

const cvv = form.txtCVV;

cvv.addEventListener("input", e => {

    if(isNaN(cvv.value)) {
        cvv.value = "";
    }
});
