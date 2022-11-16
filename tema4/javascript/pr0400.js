// lo primero tenemos que seleccionar lo que queremos cambiar

let elem = document.getElementsByTagName('li');

//aqui lo que haces es elegir por lo que quieres cambiar
//pasas el elemento a array y lo recorres con el forecah, luego ya lo cambias con el textContent

Array.from(elem).forEach( (item) => {
    item.textContent = "aaaa";
} );


//esto sirve para quitar todo lo que hay en la lista y añadir lo que haya en el innerHTML
let lst = document.getElementById('lista');
lst.innerHTML = 
'<li>Daw</li> <li>Dam</li>'


let lst1 = document.getElementById('lista');
lst.outerHTML = 
'<li>Daw</li> <li>Dam</li>'
