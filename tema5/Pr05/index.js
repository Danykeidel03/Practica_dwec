let zona = document.querySelector('#game-zone')

let rectangulo = document.createElement('div')
zona.append(rectangulo)


rectangulo.style.backgroundColor='red'
let altura = Math.floor(Math.random()*100+100);
rectangulo.style.height=altura+'px';
let ancho = Math.floor(Math.random()*100+100);
rectangulo.style.width=ancho+'px';
rectangulo.style.position='relative';
rectangulo.style.left=Math.floor(Math.random()*(zona.clientWidth-ancho))+'px';
rectangulo.style.top=Math.floor(Math.random()*(zona.clientHeight-altura))+'px';

let puntos = document.getElementById('score');
marca = 0;
puntos.innerHTML=(marca);


function handleClick(event){
    
    marca++;
    puntos.innerHTML = (marca);
    rectangulo.style.backgroundColor='red';
    let altura = Math.floor(Math.random()*100+100);
    rectangulo.style.height=altura+'px';
    let ancho = Math.floor(Math.random()*100+100);
    rectangulo.style.width=ancho+'px';
    rectangulo.style.position='relative';
    rectangulo.style.left=Math.floor(Math.random()*(zona.clientWidth-ancho))+'px';
    rectangulo.style.top=Math.floor(Math.random()*(zona.clientHeight-altura))+'px';
}



let start = document.querySelector('#btn-start');
start.addEventListener('click',empezar);

let crono = document.querySelector('#time');

let tiempo=0;
let intervalo;


let puestos = document.querySelectorAll('.ranking-item')
console.log(puestos);

let nombre = document.querySelector('#player')


function empezar(){
    intervalo = setInterval( () => {
        tiempo = tiempo + 0.1;
        crono.innerHTML = (tiempo.toFixed(1));
    }, 100)
    rectangulo.addEventListener('click',handleClick);
    start.removeEventListener("click",empezar);
    let primero = document.querySelector('#ranking-first')
    primero.innerHTML=(nombre)
};

let reinicio = document.querySelector('#btn-reset');
reinicio.addEventListener('click',reiniciar);

function reiniciar(){
    clearInterval(intervalo);
    crono.innerHTML = ('0.0')
    tiempo = 0;
    marca = 0;
    puntos.innerHTML = (marca);
    start.removeEventListener("click",reiniciar);
    start.addEventListener('click',empezar);
};


