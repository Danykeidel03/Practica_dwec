function countVowel(str) { 
    let count = str.match(/[aeiou]/gi).length;
    return count;
}

let string = prompt('Introduce una palabra: ');

let result = countVowel(string);

console.log(result);