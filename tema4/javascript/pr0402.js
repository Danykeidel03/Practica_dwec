let lst = document.getElementById('months');
let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

for(let i = 1;i<=12;i++){
        let div = document.createElement("div");
        let div1 = document.createElement("div1");
        let div2 = document.createElement("div2");
        div.classList.add('month');
        div1.classList.add('month-number');
        div2.classList.add('month-name');
        div1.textContent= i;
        div2.textContent= meses[i-1];
        months.append(div);
        div.append(div1);
        div.append(div2);
     }

// let lst = document.getElementById('months');
// let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

// for(let i = 1;i<=12;i++){
//     lst.innerHTML += `<div class="month">
//                             <div class='month-number'>${i}</div>
//                             <div class='month-name'>${meses[i-1]}</div>
//                       </div>`;
// }



        