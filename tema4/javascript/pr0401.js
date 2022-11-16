let lst = document.getElementById('numbers');

for(let i = 1;i<=30;i++){
    let span = document.createElement("span");
    span.className= "number";
    span.innerHTML= i;
    numbers.append(span);
} 

/**
    let lst = document.getElementById('numbers');
    let str="";
        for(let i = 1;i<=30;i++){
            st.innerHTML += `<span class='number'>${i}</span>`;
        } 
 */
