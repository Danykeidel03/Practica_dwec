function countLetters(str) { 
    let obj={}
    for(let i=0; i<str.length;i++){
        let letra = str[i];
        if(letra in obj){
            obj[letra]++;
        }else {
            obj[letra]=1
        }
    }
    return obj;
}



console.log(countLetters("holaaa")); //{ a:1, o:1}

