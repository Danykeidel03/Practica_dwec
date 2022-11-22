const btnAumentar = document.querySelector('.btn1')
const btnDisminuir = document.querySelector('.btn2')
const span = document.querySelector('span')
let contador = 0

btnAumentar.addEventListener('click', () => {
    console.log("click aumentar"); 
    contador ++
    span.textContent = contador
})


btnDisminuir.addEventListener('click', () => {
    contador --
    span.textContent = contador
})

