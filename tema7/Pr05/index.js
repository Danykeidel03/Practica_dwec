let imputLat = document.getElementById('lat')
let imputApi = document.getElementById('key')

let btn = document.getElementById('enviar');
btn.addEventListener('click',mostrar)

function mostrar(){
    let lat = imputLat.value;
    let api = imputApi.value;

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${lat}&limit=1&appid=${api}&lang=es`

    fecthWet(url)
    function fecthWet(url){
        console.log(url);
        fetch(url)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then( (json) => {
                console.log('Los datos que puedes utilizar');
                console.log(json);
            })
    }
}

