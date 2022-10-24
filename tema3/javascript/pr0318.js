let arr = [
    {   name: 'Victor',
        surname: 'González',
    },
    {
        name: 'Pepe',
        surname: 'Pérez',
    }]

let generateUsername = ( arr ) => {
    arr.forEach(item => {
        item.nickname = item.name.slice(0, 1).toLowerCase()+item.surname.toLowerCase()

    });
        console.log(arr);
    };

    console.log(generateUsername = ( arr ));
