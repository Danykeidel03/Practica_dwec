function fact(n1,n2,operador){
    n1=Number(n1);
    n2=Number(n2);
    operador=String(operador);
    if(operador=="+"){
        return n1+n2;
    }else if(operador=="-"){
        return n1-n2;
    }else if(operador=="*"){
        return n1*n2;
    }else if(operador=="/"){
        return n1/n2;
    }else if(operador=="%"){
        return n1%n2;
    }else if(operador=="pow"){
        return Math.pow(n1,n2);
    }
    else {
        console.log("Error de operacion");
    }
}

console.log(fact(2,2,"pow"));
