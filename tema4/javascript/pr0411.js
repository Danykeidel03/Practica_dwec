let btn = document.getElementById('add-button');

function handleClick(event){
    let inputText = document.getElementById("input-text");
    let text = inputText.value;

    let ul = document.querySelector("ul");

    let li = document.createElement('li');
    li.classList.add('li');
    li.innerHTML = `${text}`;
    ul.prepend (li);
    
     
}
    
btn.addEventListener("click",handleClick);