
//numeros de parrafos
let ps = document.getElementsByTagName('p');
let parrafos = document.getElementById('parrafos');
parrafos.innerHTML= ps.length
//página a la que enlaza del segundo enlace
let linksList = document.getElementsByTagName('a');
let penultimoenlace = document.getElementById('segundo-enlace');
let index = linksList.length-2
penultimoenlace.innerHTML = linksList[index].href;
//cuantos enlaces redirigen a https://google.es/
let linksgoogle  = document.getElementById('links-google-es')
let suma = 0;
for (let i = 0; i<linksList.length; i++){
    //console.log(linksList[i].href);
     if(linksList[i].href =="https://www.google.es/"){
        suma = suma + 1;
    }
}
linksgoogle .innerHTML= suma
//cuantas palabras hay en el segundo parrafo
let palabrassegundoparrafo = document.getElementById('palabras-segundo-parrafo');
let ps1= ps[1];
let c = ps1.textContent.trim().split(' ')
palabrassegundoparrafo.innerHTML = c.length;








