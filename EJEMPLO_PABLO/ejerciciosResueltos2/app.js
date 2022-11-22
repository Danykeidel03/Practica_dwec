/*  // QUERY SELECTOR BASE
document.querySelector('h3');
console.log(document.querySelector('h3')); // Buscar por etiqueta
console.log(document.querySelector('.h3-danger')); // Buscar por clase
console.log(document.querySelector('#parrafo')); // Buscar por ID
console.log(document.getElementById('parrafo')); // Buscar por ID

console.log(document.querySelectorAll('.h3-danger')); // Buscar todos elementos con la misma clase
console.log(document.querySelectorAll('h3')); //Buscar todos elementos con la misma etiqueta 

let parrafo = document.querySelector('#parrafo');
parrafo.textContent = 'Texto desde JS'; // Cambia el texto de la etiqueta pero no se pueden añadir etiquetas
parrafo.innerHTML = '<b>Texto con innerHTML</b>'; // Cambia el texto pero se pueden añadir etiquetas
parrafo.classList.add('h3-danger', 'margin-2'); // Añadir una clase
*/

let lista = document.getElementById('lista');   // Seleccionar lista (ul)
//console.log(lista);
let arrayItem = ['Item 1', 'Item 2', 'Item 3'];

/* // Crear y colocar li dentro de ul con arrays y foreach (crea reFlow)

//Crear li con textContent

arrayElement.forEach(item => {
    let li = document.createElement('li');  // Crear li
    li.textContent = item;

    lista.appendChild(li);  // Colocar li dentro de la lista ul
    //console.log(item);
}); 

// Crear li con innerHTML

arrayElement.forEach(item => {
    lista.innerHTML += `<li>${item}</li>`;
}); */

/* // Crear estructura etiqueta li con nombre y span dentro, con createElement
arrayItem.forEach(item => {
    let li = document.createElement('li'); // Crear li
    li.classList.add('list');   // Dar clase a li
    let b = document.createElement('b'); // Crear etiqueta b
    b.textContent = 'Nombre: '; // Añadir texto a la etiqueta
    let span = document.createElement('span');
    span.classList.add('text-danger'); 
    span.textContent = item;
    li.appendChild(b);  //Añadir b dentro de li
    li.appendChild(span);
    lista.appendChild(li);
});
 */
// Crear estructura etiqueta li con nombre y span dentro, con innerHTML
let parte = '';
arrayItem.forEach(item => {
    parte += `
    <li class="list">
        <b>Nombre: </b><span class="text-danger">${item}</span>
    </li>`
})
lista.innerHTML = parte;