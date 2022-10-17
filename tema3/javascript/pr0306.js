
function convertBase( Str, BaseFrom, baseTo ) {
n1 = Str;
console.log("El numero ",n1," en base ", BaseFrom);
n1 = n1.toString(baseTo);
return n1;
}

let num = parseInt(prompt("Introduzca un número"));
let base = parseInt(prompt("Introduzca un número de base"));
let dev = parseInt(prompt("Introduzca a que lo quiere pasar"));

console.log(convertBase( num,base,dev ));