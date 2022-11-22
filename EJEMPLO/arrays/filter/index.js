let almuerzos = [
    {principal : 'arepa', postre: 'helado'},
    {principal : 'tacos', postre: 'helado'},
    {principal : 'pizza', postre: 'galletas'},
    {principal : 'sushi', postre: 'quesillo'},
    {principal : 'arepa', postre: 'churros'},
    {principal : 'arepa', postre: 'golfeados'}
]

// let postresParaPlatosArepas = [];

// for (let i =0 ; i<almuerzos.length ; i++){
//     if(almuerzos[i].principal == 'arepa')
//     {
//         postresParaPlatosArepas.push(almuerzos[i].postre)
//     }
// }

let postresParaPlatosArepas = almuerzos.filter(function (almuerzo) {
    return almuerzo.principal == 'arepa';
})
.map(function (almuerzo){
    return almuerzo.postre
})


console.log(postresParaPlatosArepas);