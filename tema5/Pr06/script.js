let palabraAleatoria = words[Math.floor(Math.random() * words.length)];
let espacios = document.getElementById('spaces');
let fallos = 0;
let letrasPalabra = [];
console.log(palabraAleatoria);
esp(palabraAleatoria);
teclado1();




function teclado1() {
    let teclado = document.getElementById('keyboard');
    letras.forEach(letra => {
        let letra2 = document.createElement("span");
        letra2.textContent = letra;
        letra2.classList.add("key");
        letra2.id = letra;
        teclado.append(letra2);
        letra2.addEventListener("click", () => {
            updateWord(letra);
        });
    });

    document.getElementsByTagName("body")[0].addEventListener("keyup", (e) => {
        updateWord(e.key);
        
    });
}

function img() {
    let hanged = document.getElementById('hanged');
    hanged.innerHTML = `<img src="img/hangman_0${fallos}.bmp" />`;
}

function updateWord(letra) {
    if (fallos < 8) {
        let letra2 = document.getElementById(letra);
        let palabra = false;

        if (palabraAleatoria.includes(letra) && !Array.from(letra2.classList).includes("succced")) {
            letra2.classList.add("succeed");
            letrasPalabra.push(letra);
            palabra = true;
            for (let i = 0; i < palabraAleatoria.length; i++) {
                if (palabraAleatoria.charAt(i) == letra) {
                    espacios.children[i].textContent = letra;
                }

                if (!letrasPalabra.includes(palabraAleatoria.charAt(i))) {
                    palabra = false;
                }
            }
        } else if (!Array.from(letra2.classList).includes("fail")) {
            letra2.classList.add("fail");
            fallos++;
            updateImg();
        }

        if (palabra) {
            console.log("GANASTE");
        }
    } else {
        fallos++;
        img();
        console.log("PERDISTE");
        for (let i = 0; i < palabraAleatoria.length; i++) {
            espacios.children[i].textContent = palabraAleatoria.charAt(i);
        }
    }

}

function esp(palabraAleatoria) {
    for (let i = 0; i < palabraAleatoria.length; i++) {
        espacios.innerHTML += '<span class="space"></span>';
    }
}

