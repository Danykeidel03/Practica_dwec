let enviar = document.querySelector('#boton')
enviar.addEventListener('click',comprobar)

function comprobar(){
    let form = document.forms.login;

    let inputMail = document.querySelector('#mail');
    let mail= inputMail.value;

    let contraseña = document.querySelector('#pass');
    let pass = contraseña.value;

    let contraseña1 = document.querySelector('#pass1');
    let pass1 = contraseña1.value;

    let letras = pass.split('');
    let numero = 0;
    let numLetters = 0;
    let mayusculas = 0;
    let simbolos = 0;


    letras.forEach(caracter => {
        if(caracter >=0 || caracter <=9){
            numero++
        }
        if('abcdefghijklmnñopqrstuvwxyz'.includes(caracter)){
            numLetters++
        }
        if('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.includes(caracter)){
            mayusculas++
        }
        if('-.,;._¡?¿º/&%$·)(/'.includes(caracter)){
            simbolos++
        }
    });


    if(pass != pass1){
        console.log("No es la misma contraseña");
    }
    else if (mail.includes('@') && mail.includes('.')){
        if(numero>0 && numLetters == 0 && mayusculas == 0 && simbolos == 0){
            if(letras.length < 12){
                console.log("inmediatly");
            }
            else if(letras.length > 12){
                console.log("Muy poco segura");
            }
        }
        else if(numero==0 && numLetters != 0 && mayusculas == 0 && simbolos == 0){
            if(letras.length < 9){
                console.log("inmediatly");
            }
            else if(letras.length > 8 && letras.length < 14 ){
                console.log("Muy poco segura");
            }
            else if(letras.length > 13 && letras.length < 18 ){
                console.log("Poco segura");
            }
            else{
                console.log("Segura");
            }
        }
        else if(numero==0 && numLetters != 0 && mayusculas != 0 && simbolos == 0){
            if(letras.length < 7){
                console.log("inmediatly");
            }
            else if(letras.length > 6 && letras.length < 12 ){
                console.log("Muy poco segura");
            }
            else if(letras.length > 11 && letras.length < 15 ){
                console.log("Poco segura");
            }
            else if(letras.length > 14 && letras.length < 18 ){
                console.log("Segura");
            }
            else{
                console.log("Muy seura");
            }
        }
        else if(numero!=0 && numLetters != 0 && mayusculas != 0 && simbolos == 0){
            if(letras.length < 7){
                console.log("inmediatly");
            }
            else if(letras.length > 6 && letras.length < 11 ){
                console.log("Muy poco segura");
            }
            else if(letras.length > 10 && letras.length < 14 ){
                console.log("Poco segura");
            }
            else if(letras.length > 13  && letras.length < 17 ){
                console.log("Muy Segura");
            }
            else{
                console.log("Muy seura");
            }
        }
        else if(numero!=0 && numLetters != 0 && mayusculas != 0 && simbolos != 0){
            if(letras.length < 7){
                console.log("inmediatly");
            }
            else if(letras.length > 6 && letras.length < 11 ){
                console.log("Muy poco segura");
            }
            else if(letras.length > 10 && letras.length < 13 ){
                console.log("Poco segura");
            }
            else if(letras.length > 12  && letras.length < 16 ){
                console.log("Muy Segura");
            }
            else{
                console.log("Muy seura");
            }
        }
        else{
            console.log("Muy poco segura");
        }
    }
    else{
       console.log("El usuario no es un email");
    }
}

