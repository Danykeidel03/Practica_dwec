// document.querySelector('h1').textContent='Texto desde js';
// document.querySelector('h3')
// document.querySelector('.h3-danger')
// document.querySelector('#parrafo')
// document.getElementById('parrafo')
// document.querySelectorAll('.h3-danger')
// console.log(document.querySelectorAll('.h3-danger'));

const parrafo = document.querySelector('#parrafo');

//MODIFICAS EL CONTENIDO
parrafo.textContent = 'texto desde js'

//APARTE DE PODER MODIFICAR EL CONTENIDO PUEDES PONER ETIQUETAS
parrafo.innerHTML = '<b>texto con inner html</b>'

//COMO AGREGAR UNA CLASE
parrafo.classList.add('h3-danger');

// //CREAR ELEMENTOS
// const lista = document.querySelector('#lista')
// const li = document.createElement('li')
// //AGREGAR CONTENIDO
// li.textContent = ('primer elemento')
// //INTRODUCIR EN EL UL
// lista.appendChild(li)

// //LO MISMO PERO CON UN ARRAY
// const lista = document.querySelector('#lista')
// const arrayElement = ['primer elemento','segundo','tercero']
// //FUNCION FLECHA
// arrayElement.forEach(item => {
//     //CREAMOS UN LI PARA CADA ELEMENTO
//     const li = document.createElement('li')
//     //PARA CADA LI METEMOS UN ELEMENTO DEL ARRAY
//     li.textContent = item
//     //INTRODUCIMOS EN EL UL
//     lista.appendChild(li)
// })

//LO MISMO QUE ANTES PERO MAS CORTO
// const lista = document.querySelector('#lista')
// const arrayElement = ['primer elemento','segundo','tercero']
// arrayElement.forEach(item => {
//     //LAS COMILLAS SIRVEN PARA APARTE DE PONER ETIQUETAS AÑADAS ELEMENTOS COMO EL ITEM
//     lista.innerHTML += `<li>${item}</li>`
// })

//USO DEL FRAGMENT IGUAL QUE EL ANTERIOR SOLO QUE QUITAS EL REFLOW
// const lista = document.querySelector('#lista')
// const arrayElement = ['item1','item2','item3']
// const fragment = document.createDocumentFragment();

// arrayElement.forEach(item => {
//     const li = document.createElement('li')
//     li.textContent = item
//     // fragment.appendChild(li)º    

//     const childNode = fragment.firstChild
//     console.log(item,childNode);

//     fragment.insertBefore(li, childNode)
// })

// lista.appendChild(fragment);
