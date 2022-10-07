function sumOfMults( n, k ){
    n=Number(n);
    k=Number(k);
    suma=0;
        for (p=1; p<=k; p++){
            suma=n*p+suma;
        }
    
        return suma;
    };
    
    console.log(sumOfMults(3,5));