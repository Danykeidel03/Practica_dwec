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
function getAverages(arr){
    return arr.map( (item) => {
        let min = ['abcdefghijklmnopqrstuvwxyz'];
        let max = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
        let num = ['1234567890'];
        if(item.pass.includes(min) && item.pass.includes(max) && item.pass.includes(num)){
                return item.nombre;
        }
    });
}


console.log(getAverages(arr));