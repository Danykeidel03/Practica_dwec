let arr = ([ 2, 5, 8 ]);
let pow = 2;

function createPow(arr,pow){
    let pot = arr.map( item => item**pow );
   return (pot);
}

console.log(createPow(arr,pow));
