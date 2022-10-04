function IsPrime(n1){

    while(n1>-1){
     let cont = 0;
     if(n1==0) {
         break;
     } else {
         for(let I = 1; I <= n1; I++)  {
             if((n1 % I) == 0) {
                 cont++;
             }
         }
 
     if ((cont<=2)&&(cont!=1)) {
         return true;
         } else {
             return false;
         }
     }
         
     }
     
 }
 
 let numero=prompt("Dime un numero");
 let inter=1;
for (let a=3;a<numero;a++){
    if(IsPrime(a)){
        console.log(a);
    }
}

 