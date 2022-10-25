let arr = [ 1,2,3,4,5,54 ];


   let suma = arr.reduce( (acum, item, index, arr) => {
        return Math.max(item);
        }, 0 );
        


console.log((suma));