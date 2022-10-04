function fact(n1){
    let fact=n1;
    n1=n1-1;
    while(n1>=1){
    fact*=n1;
    n1--;
    }
    console.log (fact);

     
 }
 
 console.log(fact(5));