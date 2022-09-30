let mayor=-Infinity;
let menor=Infinity;
for ( let i=1 ; i<=5; i++) {
    let numero=prompt("Di un numero");
    numero=Number(numero);
    mayor=Number(mayor)
    menor=Number(menor);
    if (i<6){
        if(numero>mayor){
            mayor=numero;
        }
        if(numero<menor){
            menor=numero;
        }
    }

    
    }





    console.log(`El numero mas grande es ${mayor} y el mas pequeño es ${menor}`)
