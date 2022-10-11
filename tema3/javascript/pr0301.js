let persona = {
    name:"daniel",
};

function cloneObject (obj) {
    let clone = Object.assign( {}, persona );
    console.log(clone); 
}

console.log(cloneObject (persona));
