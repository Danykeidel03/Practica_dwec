
        let boton = document.getElementById("add-button");
        let entradas = [];
        let i = 0;

        boton.addEventListener("click", (e) =>{
            let lista = document.querySelectorAll('ul')[0];
            let texto = document.getElementById("input-text").value;

            if(texto != ''){
                entradas[i] = texto;
                crearContenido(lista);
                i++;
                document.getElementById("input-text").value = '';
            }
        });

        function crearContenido(lista) {
            let elementoLista = document.createElement('li');
            elementoLista.textContent = entradas[i];
            elementoLista.classList.add("todo");
            elementoLista.setAttribute("id",i);
            let borrar = document.createElement('span');
            borrar.textContent = "Borrar";
            borrar.setAttribute("data-id",i);
            borrar.classList.add("btn");
            elementoLista.append(borrar);
            lista.append(elementoLista);

            borrar.addEventListener("click", (e) =>{
                let nodo = document.getElementById(borrar.getAttribute("data-id"));
                nodo.remove();
            });
        }