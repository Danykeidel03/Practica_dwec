let kM = prompt("Precio kilos de manzanas");
let pkm = prompt("Cantidad de manzanas");
kM=Number(kM);
pkm=Number(pkm);

let kn = prompt("Precio kilos de naranjas");
let pkn = prompt("Cantidad de naranjas");
kn=Number(kn);
pkn=Number(pkn);

let kp = prompt("Precio kilos de platanos");
let pkp = prompt("Cantidad de platanos");
kp=Number(kp);
pkp=Number(pkp);

console.log( `Hola comprado un total de ${(kp+kn+kM)} kilos de fruta y te ha costado ${(kM*pkm)+(kn*pkn)+(kp*pkp)}€` )