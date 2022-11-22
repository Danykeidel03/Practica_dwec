const lista = document.querySelector('#lista')

const arrayLista = ['item1','item2','item3']

const fragment = document.createDocumentFragment()

arrayLista.forEach( item => {
    const li = document.createElement('li')
    li.classList.add('list')
    const b = document.createElement('b')
    b.textContent = 'Nombre:'
    const span = document.createElement('span')
    span.classList.add('text-danger')
    span.textContent = item
    li.appendChild(b);
    li.appendChild(span)
    fragment.appendChild(li)
})

lista.appendChild(fragment)

//HACEMOS LO MISMO PERO CON INNERHTML

// let fragment =''
// arrayLista.forEach(item => {
//     fragment += `
//         <li class="list">
//             <b>Nombre: </b> <span class="text-danger">${item}</span>
//         </li>
//     `
// })
// lista.innerHTML = fragment

// const template = document.querySelector('#template-li').content 
// const fragment = document.createDocumentFragment()

// arrayLista.forEach(item => {
//     template.querySelector('.list span').textContent = item

//     const clone = template.cloneNode(true)
//     fragment.appendChild(clone)
// })

// lista.appendChild(fragment)