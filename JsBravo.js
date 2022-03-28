class Productos{
    constructor( nombre , precio, tipo) {
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
    }
    
}

// Introducimos dentro del catalogo los productos del constructor 

const ProductoCatalogo = []
ProductoCatalogo.push (new Productos ("Monstera Deliciosa", 4500, "interior"))
ProductoCatalogo.push (new Productos ("Monstera Adansonii", 1800, "interior"))
ProductoCatalogo.push (new Productos ("Sanseviera", 800, "interior"))
ProductoCatalogo.push (new Productos ("Pilea", 2000, "interior"))
ProductoCatalogo.push (new Productos ("Euphorbia", 2500, "interior"))
ProductoCatalogo.push (new Productos ("Potus lemon", 890, "interior"))
ProductoCatalogo.push (new Productos ("Potus variegata", 1000, "interior"))
ProductoCatalogo.push (new Productos ("Peperomia Watermelon", 1750, "interior"))
ProductoCatalogo.push (new Productos ("Zamioculca", 5000, "interior"))
ProductoCatalogo.push (new Productos ("Jazmin de Leche", 1900, "exterior"))
ProductoCatalogo.push (new Productos ("Ojo de poeta", 3000, "exterior"))
ProductoCatalogo.push (new Productos ("Ravenala", 3600, "exterior"))
ProductoCatalogo.push (new Productos ("Ficus Arbusto", 5500, "exterior"))
ProductoCatalogo.push (new Productos ("Begonia de Angel", 1800, "exterior"))
ProductoCatalogo.push (new Productos ("Hiedra", 800, "exterior"))

console.log (ProductoCatalogo)


// Eventos con el DOM

const carrito = document.getElementById ('carrito');
const items = document.getElementById ('listaproductos');
const listadeproductos = document.querySelector ('#lista-carrito tbody');
const vaciarcarritoBtn = document.getElementById ('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners (){
 items.addEventListener('click', comprarProducto);
 carrito.addEventListener('click', eliminarProducto);
 vaciarcarritoBtn.addEventListener('click', vaciarCarrito)
 document.addEventListener('DOMContentLoaded', leerLocalStorage);

}

function comprarProducto (e){
    e.preventDefault ();
    if (e.target.classList.contains ('agregar-carrito')){
        const item = e.target.parentElement.parentElement;
        leerdatosProductos (item);
    }
}

function leerdatosProductos(item){
    const infoitem = {
        imagen : item.querySelector ('img').src,
        titulo : item.querySelector ('h3').textContent,
        precio : item.querySelector('.precio').textContent,
        id : item.querySelector('button').getAttribute('data-id')
    }

    insertarCarrito (infoitem);
}

function insertarCarrito (item){
    const row = document.createELement ('tr');
    row.innerHTML = `
        <td>
            <img src "${item.imagen}" width=100>
        </td>
        <td> ${item.titulo}</td>
        <td> ${item.precio}</td>
        <td>
            <a href ="" class= "borrar-item" data-id = "${item.id}>x</a>
        </td>
    `;
    listadeproductos.appendChild(row);
    guardarProductosLocalStorage(item);
}
  

function eliminarProducto(e) {
    e.preventDefault();

    let item,
        itemId;
    
    if (e.target.classList.contains("borrar-producto")){
        e.target.parentElement.parentElement.remove();
        item = e.target.parentElement.parentElement;
        itemId = platillo.querySelector('a').getAttribute('data-id');
    }
    eliminarProductosLocalStorage(itemId)
}

function vaciarCarrito(){
    while(listadeproductos.firstChild){
        listadeproductos.removeChild(listadeproductos.firstChild);
    }
    vaciarLocalStorage();

    return false;
}

function guardarProductosLocalStorage(item) {
    let Producter;

    Producter= obtenerProductosLocalStorage();
    Producter.push(item);

    localStorage.setItem('Producter', JSON.stringify(Producter));
}

function obtenerProductosLocalStorage() {
    let ProducterLS;

    if(localStorage.getItem('Producter') === null) {
        ProducterLS = [];
    }else {
        ProducterLS = JSON.parse(localStorage.getItem('Producter'));
    }
    return ProducterLS;
}

function leerLocalStorage() {
    let ProducterLS;

    ProducterLS = obtenerProductosLocalStorage();

    ProducterLS.forEach(function(item){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${item.imagen}" width=100>
            </td>
            <td>${item.titulo}</td>
            <td>${item.precio}</td>
            <td>
                <a href="#" class="borrar-platillo" data-id="${item.id}">X</a>
            </td>
        `;
        listadeproductos.appendChild(row);
    });
}

function eliminarProductosLocalStorage(item) {
    let ProducterLS;
    ProducterLS = obtenerProductosLocalStorage();

    ProducterLS.forEach(function(ProducterLS, index){
        if(ProducterLS.id === item) {
            ProducterLS.splice(index, 1);
        }
    });

    localStorage.setItem('items', JSON.stringify(ProductersLS));
}

function vaciarLocalStorage() {
    localStorage.clear();
}
