
let ciclo = {
    name:"daw",
    familia: "Informatica",
    rama : undefined
};



function containsObject (a) {
   let newObj = {};
   for (let i in a){
    if(a[i] != undefined){
        newObj[i] = a[i];
    }
   }
   return newObj
}

console.log(containsObject (ciclo));