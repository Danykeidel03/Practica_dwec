let div = document.querySelector('div');

let contador = document.createElement('div');
contador.classList.add('cont');
div.append(contador);

let span = document.createElement('span')
span.classList.add('num');
number = 0;
span.innerHTML = (number);
contador.append(span)

let juego = document.createElement('div');
juego.classList.add('juego')
div.append(juego)

let rectangulo = document.createElement('div')
juego.append(rectangulo)
rectangulo.addEventListener('click',handleClick);

rectangulo.style.backgroundColor='red'
let altura = Math.floor(Math.random()*100+100);
rectangulo.style.height=altura+'px';
let ancho = Math.floor(Math.random()*100+100);
rectangulo.style.width=ancho+'px';
rectangulo.style.position='relative';
rectangulo.style.left=Math.floor(Math.random()*(juego.clientWidth-ancho))+'px';
rectangulo.style.top=Math.floor(Math.random()*(juego.clientHeight-altura))+'px';

function handleClick(event){
    number++
    span.innerHTML = (number);
    rectangulo.style.backgroundColor='red'
    let altura = Math.floor(Math.random()*100+100);
    rectangulo.style.height=altura+'px';
    let ancho = Math.floor(Math.random()*100+100);
    rectangulo.style.width=ancho+'px';
    rectangulo.style.position='relative';
    rectangulo.style.left=Math.floor(Math.random()*(zona.clientWidth-ancho))+'px';
    rectangulo.style.top=Math.floor(Math.random()*(zona.clientHeight-altura))+'px';
}

