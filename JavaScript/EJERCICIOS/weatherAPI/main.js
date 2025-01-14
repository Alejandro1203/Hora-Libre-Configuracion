let apiURL = "http://api.weatherapi.com/v1/current.json?key=";
const apiKey = "ea5baa11d0574b31bcb101109251401";

let divLocation = document.querySelector("#divLocation");
let divWeather = document.querySelector("#divWeather");
let divIcon = document.querySelector("#divIcon");
let divTemp = document.querySelector("#divTemp");
let input = document.querySelector("#ciudad");
let search = document.querySelector("#boton");

search.addEventListener("click", async e => {
    cleanDiv(divLocation);
    cleanDiv(divWeather);

    if(input.value === "") {
        apiURL = apiURL + apiKey + "&q=Yucatan";  
    } else {
        apiURL = apiURL + apiKey + "&q=" + input.value.toLowerCase();    
    }    
    
    await fetch(apiURL).then( async (response) => {
        if(!response.ok) {
            throw new Error("Network response was not ok")
        }        

        return await response.json();
    }).then((dataCiudad) => {
        console.log(dataCiudad);

        let newH1 = document.createElement('h1');
        newH1.innerHTML = `${dataCiudad.location.name}`;
        divLocation.appendChild(newH1);

        divIcon.innerHTML = `<img src="${dataCiudad.current.condition.icon}"/>`
        
        let newH2 = document.createElement('h2');
        newH2.innerHTML = `${dataCiudad.current.condition.text}. ` + `Temp: ${dataCiudad.current.temp_c}ºC`;
        divTemp.appendChild(newH2);
        
    }).catch(error => {
        console.log(error);        
    });
})

function cleanDiv(div) {
    div.innerHTML = "";
}