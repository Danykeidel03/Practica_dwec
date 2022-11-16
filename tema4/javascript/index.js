let childs = document.body.childNodes;
console.log(childs);


let lista = document.body.childNodes[0];
console.log(lista.hasChildNodes);


let lista1 = document.body.childNodes[0];
let primerNodo = lista1.firstChild;
console.log(primerNodo.textContent);
let segundoNodo = lista1.nextSibling;
console.log(segundoNodo.textContent);


let lista2= document.getElementsByClassName('item')
console.log(lista2);

let lista3= document.getElementById('list');
console.log(lista3);



