/**
 * let arr = [
    {nombre : 'Victor', curso: 2 , ciclo: 'DAW'},
    {nombre : 'Pepe', curso: 2 , ciclo: 'SMR'},
    {nombre : 'Luis', curso: 1 , ciclo: 'DAW'},
    {nombre : 'Andres', curso: 3 , ciclo: 'ASIR'},
];

let a = arr.filter(item  => item.ciclo == 'SMR' , item => item.curso == 2);
    
console.log(a);
*/
/**
let cadena = prompt("Introduce una frase");
let arr = cadena.split
                .filter( (item,index,array) => {
                    return  !'aeiouAEIOU',includes(item)
                })
                .join('')

 */
/** 
    let arr = [2,6,65,789,098,65];

    let arr2 = arr.map ( (item,index,arr) => {
        return item**2;
    }        
    );

    console.log(arr);
    console.log(arr2);


    let arr3 = [
        {nombre: 'Victor', ap: 'Gonzalez'},
        {nombre: 'Pepe', ap: 'Gonzalez'}
    ];

    let arr4 = arr.map ( (item,index,arr3) => {
        return `${item.nombre} ${item.ap}`;
    }        
    );

    console.log(arr3);
    console.log(arr4);
*/

let arr = [2,58,4,19];

arr.sort((a,b)=>{
    if (parseInt(a) < parseInt(b)){
        return -1;
    }else {
        return 1;
    }
    // 1 si a>b
    // 0 si a=b
    //-1 si a<b
    return 
})
console.log(arr);

