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

function onclickDecirProductoAdd(elemento){
    let indiceElemento=elemento.dataset.id
    let productoSeleccionado=ProductoCatalogo[indiceElemento]
    
    //alert(productoSeleccionado.toString())
   // alert(JSON.stringify(productoSeleccionado))
    
    productoSeleccionado.precio
    
    console.log (productoSeleccionado)
}

const  boton =  document.getElementById ( "botoncompra" )
    boton.innerHTML  =  `Abonar ${productoSeleccionado} `;roduc
