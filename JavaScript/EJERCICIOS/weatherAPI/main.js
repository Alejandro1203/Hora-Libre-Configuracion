let url = "";
let apiURL = "http://api.weatherapi.com/v1/current.json?key=";
const apiKey = "ea5baa11d0574b31bcb101109251401";

let divLocation = document.querySelector("#divLocation");
let divWeather = document.querySelector("#divWeather");
let input = document.querySelector("#ciudad");
let search = document.querySelector("#boton");

search.addEventListener("click", async e => {
    cleanDiv(divLocation);
    cleanDiv(divWeather);
    
    url = apiURL + apiKey;

    if(input.value === "") {
        url += "&q=Yucatan";  
    } else {
        url += "&q=" + input.value.toLowerCase();    
    }   
    
    await fetch(url).then( async (response) => {
        if(!response.ok) {
            throw new Error("Network response was not ok")
        }        

        return await response.json();
    }).then((dataCiudad) => {
        console.log(dataCiudad);

        let newH1 = document.createElement('h1');
        newH1.innerHTML = `${dataCiudad.location.name}`;
        divLocation.appendChild(newH1);

        divWeather.innerHTML = `<img src="${dataCiudad.current.condition.icon}"/>`
        
        let newH2 = document.createElement('h2');
        newH2.innerHTML = `${dataCiudad.current.condition.text}. Temp: ${dataCiudad.current.temp_c}ºC`;
        divWeather.appendChild(newH2);
        
    }).catch(error => {
        divWeather.innerHTML = `<h3>¡WAOOOO! Esa ciudad te la inventaste mi lidel</h3>`
        console.log(error);        
    });
})

function cleanDiv(div) {
    div.innerHTML = "";
}