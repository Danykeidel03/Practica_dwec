const url = 'http://swapi.dev/api/planets/'
let nombre = document.getElementById('nombre')
let clima = document.getElementById('clima')
let terreno = document.getElementById('terreno')
let poblacion = document.getElementById('poblacion')

fecthPlanets(url)
    function fecthPlanets(url){
        fetch(url)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then( (json) => {
        console.log('Los datos que puedes utilizar');
        console.log(json);
        nombre.innerHTML = `<th>Nombre</th> <th>Clima</th><th>Terreno</th><th>Poblacion</th>`
        json.results.forEach(item => {
            let tr = document.createElement('tr')
            tr.innerHTML = `<td>${item.name}</td> <td>${item.climate}</td><td>${item.terrain}</td><td>${item.population}</td>`
            nombre.append(tr);
        });
        let btn = document.getElementById('btn')
        btn.addEventListener('click',pasaPag);
        function pasaPag(){
            if(json.next != null){
                fecthPlanets(json.next)
            }
        }
        let btn1 = document.getElementById('btn1')
        btn1.addEventListener('click',prevPag);
        function prevPag(){
            if(json.next != null){
                fecthPlanets(json.previous)
            }
        }


    })
       
    }