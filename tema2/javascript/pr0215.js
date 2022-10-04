function fact(n1,n2,operador){
    n1=Number(n1);
    n2=Number(n2);
    operador=String(operador);
    let resultado;
    resultado=Number(resultado);
    if(operador=="+"){
        resultado=n1+n2;
        console.log(resultado);
    }else if(operador=="-"){
        resultado=n1-n2;
        console.log(resultado);
    }else if(operador=="*"){
        resultado=n1*n2;
        console.log(resultado);
    }else if(operador=="/"){
        resultado=n1/n2;
        console.log(resultado);
    }else if(operador=="%"){
        resultado=n1%n2;
        console.log(resultado);
    }else if(operador=="pow"){
        resultado=Math.pow(n1,n2);
        console.log(resultado);
    }
    else {
        console.log("Error de operacion");
    }
}

console.log(fact(2,2,"pow"));
