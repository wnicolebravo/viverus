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

let productosCarrito = ProductoCatalogo.map( el => ({...el, quantify:0}))
console.log (productosCarrito)

let contador = 0 
let subtotal = 0 
let total = 0
let cadena = ''

//Creamos la funcion para que al seleccionar la cantidad de productos,nos de una multiplicacion de ellos

function multi (a, b){
    return a*b
}

function comprarPlanta(id){
    x=id
    let q= prompt (` ${ProductoCatalogo[x].nombre} esta ${ProductoCatalogo[x].precio} pesos. Que cantidad te gustaria llevar?`);

    if ( !isNaN(q) && q>=0) {
        productosCarrito[x].quantify = q
        subtotal = multi ( q, productosCarrito[x].precio) 
        total+= multi ( q, productosCarrito[x].precio)
        
        
    }else { 
        alert ("Ingresaste un dato erroneo, por favor ingresa y realiza de nuevo la compra");
        contador++

            if (contador==3){
            alert("Recuerda, solo numeros!") 
            alert ("Okey comencemos de nuevo")
            location.reload ()
        }
    }

alert (`Tu compra final es de $${total} \n Gracias por tu compra y recuerda enviarnos el comprobante a nuestro whatsapp!`)

}


const boton= document.getElementById("botoncompra")
    boton.innerHTML = `Abonar ${total}`;
    
    
   
function onclickDecirProductoAdd(elemento){
    let indiceElemento=elemento.dataset.id
    let productoSeleccionado=ProductoCatalogo[indiceElemento]
    
    //alert(productoSeleccionado.toString())
   // alert(JSON.stringify(productoSeleccionado))
    
    productoSeleccionado.precio
    
    console.log (productoSeleccionado)
}

