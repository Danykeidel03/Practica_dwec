let nombre = prompt("Dime tu nombre");
let nota1 = prompt("Dime tu nota del primer examen");
nota1=Number(nota1);
let nota2 = prompt("Dime tu nota del segundo examen");
nota2=Number(nota2);

console.log( `Hola ${nombre} y tu nota media ${(nota1+nota2)/2}` )