let ciclo = {
    name:"daw",
    familia: "Informatica"
};
let alumno = {
    name:"dam",
    familia: "Info"
};


function containsObject (obj,obj1) {
   let int = {}
   for(let key in obj1){
    if(!(key in obj)){
        return false
    }
}
return true

}

console.log(containsObject (ciclo,alumno));


