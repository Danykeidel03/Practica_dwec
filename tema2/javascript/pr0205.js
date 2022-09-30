let n=prompt("Dime un un numero");
while (n!=Number) {
    if(n!=null && n>-1  && n!=""){
        break
    }
    n = prompt("Dime un un numero nuevo");
    }
console.log(`Has introducido el numero ${n}`);
