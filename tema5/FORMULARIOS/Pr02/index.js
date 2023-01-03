
let coms = {
    'Castilla Y Leon' : {
        "Leon" : [
            "Leon",
            "Astorga"
        ],
        "Palencia" : [
            "Carrion",
            "Palencia"
        ]
    },
    "Asturias" : {
        "Asturias" : [
            "Aviles",
            "Oviedo"
        ]
    }
}

let comunidad = document.querySelector('#comunidad')
let provincia = document.querySelector('#provincia')
let localidad = document.querySelector('#localidad')

for (let key in coms){
    comunidad.innerHTML += (`<option>${key}</option>`);
}

comunidad.addEventListener('input',provincias)
function provincias(event){
    provincia.innerHTML = ('<option>Selecciona</option>')
    for (let key in coms[event.target.value]){
        provincia.innerHTML += (`<option>${key}</option>`);
    }
}

provincia.addEventListener('input',localidades)
function localidades(e){

    let a;
    for (let key in coms){
        localidad.innerHTML = ('<option>Selecciona</option>')
        //primero con el for buscas cada objeto en el coms
        //luego con el coms[key] haces como coms.asturias
        //con el siguiente pones coms.asturias.[e.target.value] haces coms.asturias.provincia y aqui sale lo que hay en cada provincia
        //igualas a una variable y lo muestras
        if (coms[key][e.target.value]) {
            a=coms[key][e.target.value]
        }
        a.forEach(item => {
            localidad.innerHTML += (`<option>${item}</option>`);
        });
        
    }
    
    
}



