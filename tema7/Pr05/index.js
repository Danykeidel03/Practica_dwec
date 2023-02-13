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

fetch(`http://localhost/dwes/PROYECTO_2TRI/APIS/api.php`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: usuario
    })

        .then(response => {
            switch (response.status) {
                case 200:
                    console.log("Actualizado");
                    break;
                case 400:
                    console.log("Id error");
                    break;
                case 401:
                    console.log("Token no valido");
            }
            return response.json();
        })

        .then(data => {
            // let token = data.token;
            // let id = data.id;
            // console.log(token);
            // console.log(id);
            // localStorage.setItem('token', token);
        })


