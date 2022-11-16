let btn = document.getElementById('btn');

function handleClick(event){
    let images = document.querySelector('.images');
    // let lImg = document.querySelector('img:lastChild')
    // let IIImg = document.querySelector('img:nth-child(2)')
    let img = document.querySelectorAll('img');
    var a = Math.random(0,4);
    let lastImg=img[a]
    images.replaceWith(lastImg);
}

btn.addEventListener("click",handleClick)
