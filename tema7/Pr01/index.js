const url = 'http://swapi.dev/api/planets/'
let tr = document.getElementById('nombre')
let clima = document.getElementById('clima')
let terreno = document.getElementById('terreno')
let poblacion = document.getElementById('poblacion')

console.log(url);
fetch(url)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then( (json) => {
        console.log('Los datos que puedes utilizar');
        console.log(json);
        json.results.forEach(item => {
            let td = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')
            let td4 = document.createElement('td')
            td.innerHTML = `<td>${item.name}</td>`
            td2.innerHTML = `<td>${item.climate}</td>`
            td3.innerHTML = `<td>${item.terrain}</td>`
            td4.innerHTML = `<td>${item.population}</td>`
            tr.append(td);
            clima.append(td2);
            terreno.append(td3);
            poblacion.append(td4);
        });

    })