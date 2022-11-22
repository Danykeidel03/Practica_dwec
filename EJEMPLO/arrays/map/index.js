let almuerzos = [
    {principal : 'arepa', postre: 'helado'},
    {principal : 'tacos', postre: 'helado'},
    {principal : 'pizza', postre: 'galletas'},
    {principal : 'sushi', postre: 'quesillo'}
]

// let platosPrincipales = [];

// for (let i =0 ; i<almuerzos.length ; i++){
//     platosPrincipales.push(almuerzos[i].principal)
// }

let platosPrincipales = almuerzos.map( function(almuerzo) {
    if (almuerzo.postre == 'helado'){
        return almuerzo.principal
    }
    
})

console.log(platosPrincipales);