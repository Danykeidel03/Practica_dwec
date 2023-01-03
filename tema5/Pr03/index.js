let tabla = document.querySelector('table');

for(let i = 0; i<10;i++){
    let tr = document.createElement('tr')
    tabla.append(tr);
    for(let y = 0; y<10;y++){
        let td = document.createElement('td');
        td.textContent = i+''+y;
        td.setAttribute('data-coord',i+''+y)
        tr.append(td)
        td.addEventListener('click',handleClick)
        td.addEventListener('contextmenu',handleClick)
        td.onmousedown = () => false;
    }
}


function handleClick(event){
    if(event.type == 'click'){
        if(event.target.classList.contains('selected')){
            event.target.classList.remove('selected')
        }else{
            event.target.classList.add('selected')
        }
    }else{
        event.preventDefault();
        event.target.classList.add('selectedR')
        event.target.classList.remove('selected')

    }
    console.log("has selecionado la casilla "+ event.target.dataset.coord);
}


