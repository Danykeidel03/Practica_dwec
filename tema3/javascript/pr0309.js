function noVowels(str) { 
    let resultado = "";
    const vocales = 'aeiouAEIOU'
    for (let char of str){
        if(!vocales.includes(char)){
            resultado = resultado + char;
        }
    };
    return resultado;
}

console.log(noVowels("Hola"));