let n=prompt("Que numero multiplico?");
n=Number(n);
let r=prompt("Cuantas veces lo multiplico?");
r=Number(r);

let resultado=1
resultado=Number(resultado)


for ( let i=1 ; i<=r ; i++ ) {
    resultado=(n * i);
    console.log(`${n} * ${i} = ${resultado}`)
    }