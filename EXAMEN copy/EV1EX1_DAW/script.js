let currentPage = 1;
let charactersPerPages = 5;
let numPages = Math.ceil(results.length / charactersPerPages);

renderCharacter();

// Renderiza el listado de personajes
function renderCharacter() {
    // Creamos la lista de personajes
    let characterList = results
                                .filter( (_, index) => {
                                   return (((index/charactersPerPages) >= currentPage-1) && ((index/charactersPerPages) < currentPage))
                                } )
                                .map( (character) => {
        return createCharacter(character);
    });

    let divPeopleList = document.querySelector('#people-list-characters');
    divPeopleList.replaceChildren(...characterList);

    // Añadir paginacion
    let divPages = document.getElementById('pages');

    let first = document.createElement('span');
    first.classList.add('first');
    first.textContent = 'Primera';
    first.addEventListener('click', () => {
        currentPage = 1;
        renderCharacter();
    });

    let prev = document.createElement('span');
    prev.classList.add('prev');
    prev.textContent = 'Anterior';
    prev.addEventListener('click', () => {
        currentPage = currentPage == 1 ? currentPage : currentPage-1;
        renderCharacter();
    });

    let number = document.createElement('span');
    number.textContent = `Pagina ${currentPage} de ${numPages}`;

    let next = document.createElement('span');
    next.classList.add('next');
    next.textContent = 'Siguiente';
    next.addEventListener('click', () => {
        currentPage = currentPage == numPages ? currentPage : currentPage+1;
        renderCharacter();
    });

    let last = document.createElement('span');
    last.classList.add('last');
    last.textContent = 'Ultima';
    last.addEventListener('click', () => {
        currentPage = numPages;
        renderCharacter();
    });

    divPages.replaceChildren(first, prev, number, next, last);
}

// Crea un personaje
function createCharacter({name, birth_year, homeworld}) {
    let divCharacter = document.createElement('div');
    divCharacter.classList.add('character');
    divCharacter.innerHTML = `
        <div class="character-name">${name}</div>
        <div class="character-birth-year">${birth_year || '-'}</div>
        <div class="character-homeworld">${homeworld.name ? homeworld.name: '-'}</div>
    `;

    let btn = document.createElement('div');
    btn.classList.add('btn', 'btn-char');
    btn.textContent = 'Detalle';
    btn.setAttribute('data-name', name);
    btn.addEventListener('click', renderDetail);
    divCharacter.append(btn);

    return divCharacter;
}

function renderDetail(e) {
    let character = results.find( (item) => item.name == e.target.dataset.name);

    let divHeight = document.getElementById('height');
    divHeight.textContent = `${character.height}cm.`;

    let divMass = document.getElementById('mass');
    divMass.textContent = `${character.mass}kg.` ;

    let divHair = document.getElementById('hair-color');
    divHair.textContent = character.hair_color ? translate_colors[character.hair_color].name : '-';

    let divHairFilled = document.getElementById('hair-color-filled');
    divHairFilled.style.background =  character.hair_color ? translate_colors[character.hair_color].code : '#FFF';

    let divEye = document.getElementById('eye-color');
    divEye.textContent = character.eye_color ? translate_colors[character.eye_color].name : '-';

    let divEyeFilled = document.getElementById('eye-color-filled');
    divEyeFilled.style.background = character.eye_color ? translate_colors[character.eye_color].code : '#FFF';

    let divBirth = document.getElementById('birth-year');
    divBirth.textContent = character.birth_year;

    let divHomeworld = document.getElementById('homeworld');
    divHomeworld.textContent = character.homeworld.name;

    let divPopulation = document.getElementById('population');
    divPopulation.textContent = character.homeworld.population;

    let divName = document.getElementById('detail-name');
    divName.textContent = character.name;
}