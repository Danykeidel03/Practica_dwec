let entradas = [];

renderPage();
let i = 0;




function renderPage() {
    let characterNodes = results.map( createCharacterNode );


    let peopleListCharacters = document.getElementById('people-list-characters');
    peopleListCharacters.innerHTML = '';
    peopleListCharacters.append(...characterNodes);
    let buttons = document.querySelectorAll('.btn-add-product');
    buttons.forEach( (btn) => {
        console.log("Añadiendo listener")
        btn.addEventListener( 'click', mostrar );
    } )
}

function createCharacterNode( {name, birth_year, homeworld,height } ) {
    // Creamos el div del personaje
    let divCharacter = document.createElement('div');
    divCharacter.classList.add('character');
    
    divCharacter.innerHTML = `
        <div class="character-name">${ name }</div>
        <div class="character-birth-year">${ birth_year }</div>
        <div class="homeworld">${ homeworld.name}</div>
        <div class="btn btn-char"><button id='btn'>Detalle</button></div>
    `;




    divCharacter.append;

    return divCharacter;
}




let datos = results.filter(function(index){
    return index.name
}).map(function(index){
    return index
})

console.log(datos);

btn.addEventListener('click', () => {
    datos.forEach( item => {
        const nombre = document.querySelector('#detail-name')
        nombre.innerHTML = `${item.name}`
        const altura = document.querySelector('#height')
        altura.innerHTML = `${item.height}`
        const peso = document.querySelector('#mass')
        peso.innerHTML = `${item.mass}`
        const pelo = document.querySelector('#hair-color')
        pelo.innerHTML = `${item.hair_color}`
        const peloColor = document.querySelector('#hair-color-filled')
        peloColor.innerHTML = `${translate_colors.code}`
        const ojos = document.querySelector('#eye-color')
        peso.innerHTML = `${item.eye-color}`
        const planeta = document.querySelector('#homeworld')
        planeta.innerHTML = `${item.homeworld}`
        const poblacion = document.querySelector('#population')
        poblacion.innerHTML = `${item.population}`
    
    })
})



// btn.addEventListener('click', () => {
    
//     const peso = document.querySelector('#mass')
//     peso.innerHTML = (results.mass)
//     const pelo = document.querySelector('#hair-color')
//     pelo.innerHTML = (results.air_color)
//     const ojos = document.querySelector('#eye_color')
//     ojos.innerHTML = (results.eye_color)
//     const fecha = document.querySelector('#birth-year')
//     fecha.innerHTML = (results.birth-year)
//     const mundo = document.querySelector('#homeworld')
//     mundo.innerHTML = (results.homeworld)
//     const poblacion = document.querySelector('#population')
//     poblacion.innerHTML = (results.population)
// })



for(let i = 0; i<8 ; i++){
    let paginas = document.querySelector('#pages')
    paginas.innerHTML = (`
<span class="first"><a href=''>Primera</a></span>
<span class="prev"><a href=''>Siguente</a></span>
<span>Página ${i} de 7</span>
<span class="next"><a href=''>Anterior</a></span>
<span class="last"><a href=''>Ultima</a></span>
`)
}

