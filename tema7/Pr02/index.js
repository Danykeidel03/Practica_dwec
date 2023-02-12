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
        json.results.forEach(item => {
            let td = document.createElement('tr')
            let td2 = document.createElement('tr')
            let td3 = document.createElement('tr')
            let td4 = document.createElement('tr')
            td.innerHTML = `<td>${item.name}</td> <td>${item.climate}</td><td>${item.terrain}</td><td>${item.population}</td>`
            // td2.innerHTML = `<td>${item.climate}</td></tr>`
            // td3.innerHTML = `<tr><td>${item.terrain}</td></tr>`
            // td4.innerHTML = `<tr><td>${item.population}</td></tr>`
            nombre.append(td);
            // clima.append(td2);
            // terreno.append(td3);
            // poblacion.append(td4);
        });
        if(json.next != null){
            fecthPlanets(json.next)
        }
    })
       
    }