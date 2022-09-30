let n1 = prompt("Dime un numero");
n1=Number(n1);
console.log(n1);
while( n1!=Number ){
    prompt("Dime un numero");
}

if (n1%2==0){
    console.log(`Tu número es par`);
    }else if (n1%2==1) {
    console.log(`Tu número es impar`);
    }else{
        console.log(`Tu numero es 0`);
    };

    

   