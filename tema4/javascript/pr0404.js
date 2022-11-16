let board = document.getElementById('board');

let table = document.createElement('table');
table.classList.add("tabla");

for (let number=0; number<=7; number++){
    let tr = document.createElement('tr');
    if(number==0){
        for(let i = 0;i<=7;i++){
            let td = document.createElement('td');
            if(i==0){
                td.classList.add("cero");
                td.textContent="0"
            }
            else{
                td.classList.add("celda");
                let vocals =["A","B","C","D","E","F","G"]
                td.textContent=vocals[i-1];
            }
            
            tr.append(td);
        }
        table.append(tr);
    }
    else{
        for(let f = 0;f<=7;f++){
            
            let td = document.createElement('td');
            if(f==0){
                td.classList.add("celda");
                td.textContent= number
            }
            else{
                if(number==1 || number==5 ||number==3 ||number==7 ){
                    if(f==1 || f==3 || f==5 || f==7){
                        td.classList.add("blancas");
                        let vocals1 =["A","C","E","G"]
                        
                    }else{
                        td.classList.add("negras");
                    }
                }else{
                    if(f==2 || f==4 || f==6 || f==8){
                        td.classList.add("blancas");
                    }else{
                        td.classList.add("negras");
                    }
                }
                
            }
            
            tr.append(td);
        }
        table.append(tr);
    }
    
}

board.append(table);




 
