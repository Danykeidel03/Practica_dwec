let products = [
    {
      id: '1000',
      product: 'Fresas de Huelva',
      price: 410,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
    },
    {
      id: '1001',
      product: 'Kiwi amarillo',
      price: 245,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/kiwis.jpg',
    },
    {
      id: '1002',
      product: 'Manzana roja',
      price: 195,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_rojas.jpg',
    },
    {
      id: '1003',
      product: 'Manzana verde',
      price: 170,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_verdes.jpg',
    },
    {
      id: '1004',
      product: 'Melón',
      price: 135,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/melones.jpg',
    },
    {
      id: '1005',
      product: 'Naranja valenciana',
      price: 160,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/naranjas.jpg',
    },
    {
      id: '1006',
      product: 'Pera conferencia',
      price: 210,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/peras.jpg',
    },
    {
      id: '1007',
      product: 'Plátano',
      price: 260,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/platanos.jpg',
    },
    {
      id: '1008',
      product: 'Sandía',
      price: 115,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/sandias.jpg',
    },
    {
      id: '1009',
      product: 'Uva',
      price: 195,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/uvas.jpg',
    },
    {
      id: '1010',
      product: 'Aguacate',
      price: 415,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/aguacate.jpg',
    },
    {
      id: '1011',
      product: 'Cereza del Bierzo',
      price: 520,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/cereza.jpg',
    },
    {
      id: '1012',
      product: 'Granada',
      price: 310,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/granada.jpg',
    },
    {
      id: '1013',
      product: 'Limón',
      price: 155,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/limon.jpg',
    },
    {
      id: '1014',
      product: 'Nectarina',
      price: 180,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/nectarina.jpg',
    },
    {
      id: '1015',
      product: 'Piña',
      price: 320,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/pineapple.jpg',
    },
  
  ]

renderProducts();

// primero creas una funcion para coger cada producto del Array, y recorres el array con un forecah
// y haces una funcion flecha en la que pones dentro cada objeto dentro del array
// entonces creas un nodo para cada objeto del array y lo muestras dentro de donde tenga que ir
// para crear el nodo se hace otra funcion donde recoges cada objeto del array , le creas un div , a este div le añades una clase 
// y por ultimo a cada div le haces un innerhtml para introducir el contenido



function renderProducts(){
    let btn = document.createElement('button')
    let productos = document.getElementById('products-section');
    products.forEach( (fruit) => {
        let node = createNode(fruit);
        productos.append(node);
    } )
}

function createNode(fruit){
    let div = document.createElement('div');
    div.className = "producto";
    div.innerHTML=`<img src="${fruit.image}" ><br>
    <table>
        <tr>
            <td>${fruit.product}</td>
        </tr>
        <tr>
            <td id="uno">${fruit.price/100}€/Kg  <button data-id="${fruit.id}">Agregar</button>
            </td>
        </tr>
    </table>`
    let btn = div.querySelector("button");
    btn.addEventListener("click",handleClick)
    return div;

}

function handleClick(event){
  let productos = document.getElementById('products-section');
  console.log("hola");
}

// products.forEach(index => {
//   let divProductos = document.getElementById('products-section');

//   // DIV GLOBAL DE PRODUCTOS
//   let divProducto = document.createElement('div');
//   divProducto.classList.add("product");

//   // DIV IMAGEN
//   let divImagen = document.createElement('div');
//   divImagen.classList.add("product-foto");

//   // DIV INFO PRODUCTO
//   let divInfo = document.createElement('div');
//   divInfo.classList.add("product-data");

//   // DIV NOMBRE PRODUCTO
//   let divName = document.createElement('div');
//   divName.classList.add("fruit-name");

//   // DIV PRECIO PRODUCTO
//   let divPrecio = document.createElement('div');
//   divPrecio.classList.add("price");

//   // DIV BOTON COMPRA
//   let divBoton = document.createElement('div');
//   divBoton.classList.add("btn", "btn-add-product");

//   // INSERCION DE DIV
//   divProductos.append(divProducto);
//   divProducto.append(divImagen);
//   divProducto.append(divInfo);
//   divInfo.append(divName);
//   divInfo.append(divPrecio);
//   divInfo.append(divBoton);

//   // AÑADIR IMAGEN
//   let imagen = document.createElement('img');
//   imagen.setAttribute('src', ${index['image']});
//   divImagen.append(imagen);

//   // AÑADIR NOMBRE
//   let nombre = document.createElement('b');
//   nombre.textContent = ${index['product']};
//   divName.append(nombre);

//   let precio = document.createElement('p');
//   precio.textContent = ${index['price']} + '€/Kg';
//   divPrecio.append(precio);

//   let boton = document.createElement('button');
//   boton.textContent = 'Añadir';
//   divBoton.append(boton);
//   });


