let ciclo = {
    name:"daw",
    familia: "Informatica"
};
let alumno = {
    name:"dam",
    expediente: "128"
};


function intersectObjects (obj,obj1) {
   let int = {}
   for(let key in obj){
    if(key in obj1){
        int[key]=0;
    }
   }
   return int;
}

console.log(intersectObjects(ciclo,alumno));
