let buscadores = ('Google Duckduckgo Bing Ecosia Wolframalpha');
let links = ('https://google.com https://duckduckgo.com https://www.bing.com https://www.ecosia.org/ https://www.wolframalpha.com/').split(' ');

buscadores = (buscadores.split(' '));

let li2 = document.querySelectorAll("li");

let number = 0;
li2.forEach(item => {
    
    item.innerHTML=`<a href "${links[number]}" >${buscadores[number]}</a>`;
    number++;
});