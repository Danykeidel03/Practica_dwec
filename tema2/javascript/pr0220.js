var getFibonacciAt = function(n) {
    if (n <= 1) return n;

    return getFibonacciAt(n-1) + getFibonacciAt(n-2);
}

let num = parseInt(prompt("Introduzca un número"));
console.log(getFibonacciAt(num));