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
            elementoLista.classList.add("todo");
            elementoLista.setAttribute("id",i);

            let contenidoLista = document.createElement('span');
            contenidoLista.textContent = entradas[i];

            let borrar = document.createElement('span');
            borrar.textContent = "Borrar";
            borrar.setAttribute("data-id",i);
            borrar.classList.add("btn");

            let hecho = document.createElement('button');
            hecho.textContent = "X";
            hecho.setAttribute("data-id",i);

            elementoLista.prepend(hecho);
            elementoLista.append(contenidoLista);
            elementoLista.append(borrar);
            lista.append(elementoLista);

            borrar.addEventListener("click", (e) =>{
                let nodo = document.getElementById(borrar.getAttribute("data-id"));
                nodo.remove();
            });

            hecho.addEventListener("click", (e) =>{
                let nodo = document.getElementById(hecho.getAttribute("data-id"));
                elementoLista.classList.toggle('hecho');
                contenidoLista.classList.toggle('hecho');
            });
        }

        let botonEliminar = document.getElementById("eliminarTodo");
        botonEliminar.addEventListener("click", (e) =>{
            let lista = document.querySelectorAll('ul')[0];
            lista.remove();
            let listaNueva = document.createElement('ul');
            let contenedor = document.getElementById('todos');
            contenedor.append(listaNueva);
        });