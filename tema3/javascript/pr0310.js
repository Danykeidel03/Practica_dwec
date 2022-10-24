 function replaceWithPosition(str) { 
        let abc = '-abcdefghijklmnopqrstuvwxyz';
        let pos = '';

        for(let char of str){
            if(abc.includes(char)){
                pos = pos.concat(abc.indexOf(char), ' ')
            }
        }
        return pos;
    }

    console.log(replaceWithPosition("hola"));
    

    /*
    function replaceWithPosition(str) { 

        for (let l of str){
            let base = parseInt(l,36) - 9;
            console.log(l + ': '+ base);
        }
        return base;
    }

    console.log(replaceWithPosition("a"));
    */