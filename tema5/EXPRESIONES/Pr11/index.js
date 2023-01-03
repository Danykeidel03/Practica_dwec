let btn = document.querySelector('#boton')
let texto = document.querySelector('#expresion')
let body = document.querySelector('body')
let text= texto.value;

btn.addEventListener('click',mostrar)

function mostrar(){
    let prueba = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(0[1-9][1-9][1-9]|1[1-9][1-9][1-9]|20([0-1][0-9]|2[0-2]))$/.test(text);
    if(prueba){
        console.log('La fecha es correcta');
        let fecha1 = (text.split('/'));
        console.log(fecha1);
        // let dia = fecha1[0]
        // let mes = fecha1[1]
        // let ano = fecha1[2]

        // let parrafo = document.createElement('p')
        // parrafo.innerHTML = (`Dia ${dia} del mes ${mes} y del año ${ano}`)
        body.append(parrafo);
    }else{
        console.log('La fecha no es valida');
    }
}