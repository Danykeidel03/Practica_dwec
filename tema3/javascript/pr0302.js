let ciclo = {
    name:"daw",
    familia: "Informatica"
};
let alumno = {
    expediente: "128",
};


function mergeobjects (obj,obj1) {
    let user = {
        ...obj,
        ...obj1
    };
    return user;
}

console.log(mergeobjects(ciclo,alumno));

