let liTodos = document.querySelectorAll('li');

liTodos.forEach( (li) => {
    li.addEventListener('click',handleClick)
})

function handleClick(event){
    if(event.ctrlKey){
        event.target.classList.toggle('selected')
    }else{
        liTodos.forEach((li) => {
            li.classList.remove('selected')
        })
        event.target.classList.add('selected')
    }
}