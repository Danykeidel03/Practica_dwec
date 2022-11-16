let btn = document.getElementById('btn');

function handleClick(event){
    let images = document.querySelector('.images');
    // let lImg = document.querySelector('img:lastChild')
    // let IIImg = document.querySelector('img:nth-child(2)')
    let img = document.querySelectorAll('img');
    let lastImg=img[img.length-1]
    images.prepend(lastImg);
}

btn.addEventListener("click",handleClick)
