const $contenedor = document.querySelector('#contenedor')
console.log($contenedor);

const h1 = document.createElement('h1')
h1.classList.add('titulo')
h1.innerHTML = ('Hola <b>mundo</b>')


// //PREPEND
// $contenedor.prepend(h1)

// //APEND
// $contenedor.append(h1)

// //APPENDCHILD
// $contenedor.appendChild(h1)

// random = Math.floor(Math.random()*100)
// console.log(random);

var min = 1;
var max = 3;

var x = Math.random()*(max - min)+min;
var y = Math.round(x)

let array = ["p1","p2","p3"]


//INSERT BEFORE
const p1 = document.querySelector('#uno')
$contenedor.insertBefore(h1, p1)
const p2 = document.querySelector('#dos')
// $contenedor.insertBefore(h1, p2)
const p3 = document.querySelector('#tres')
// $contenedor.insertBefore(h1, p3)
