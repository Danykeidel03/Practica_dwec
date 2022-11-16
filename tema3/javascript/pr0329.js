let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWEC: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
]
function getAverages(alumnos){
    let arr2 = alumnos.map( (item,index,arr) => {
        let notas = Object.values(item.notas)
        return{
            nombre: item.nombre,
            expediente: item.expediente,
            nota_media: notas.reduce((acum,nota,index,arr) => acum += nota ,0)/notas.length 
        }
    });

    return arr2;
}


console.log(getAverages(arr));