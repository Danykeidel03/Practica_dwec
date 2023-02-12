let imputLon = document.getElementById('lon')
let imputLat = document.getElementById('lat')
let imputKey = document.getElementById('key')

let btn = document.getElementById('enviar');
btn.addEventListener('click',mostrar)

function mostrar(){
    let lon= imputLon.value;
    let lat = imputLat.value;
    let key = imputKey.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=es `

    fecthWet(url)
    function fecthWet(url){
        fetch(url)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then( (json) => {
                console.log('Los datos que puedes utilizar');
                console.log(json);

                let tiempo = json.weather[0].description;

                console.log(`El tiempo es ${tiempo}`);
            })
    }
}

