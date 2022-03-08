alert("¡Que bueno que nos hayas elegido!")

alert(" ¿Cuantas plantitas llevaras hoy? \n -Monstera deliciosa \n -Monstera Adansonii \n -Sanseviera \n -Pilea \n -Potus Lemon \n -Potus variegata \n -Zamioculca \n -Peperomia Watermelon \n -Euphorbia Trigona \n -Jazmin de leche \n -Ojo de poeta \n -Ravenala \n -Begonia de Angel \n -Hiedra \n -Ficus arbusto ")

//Planteamos el constructor para luego darles nombre,precio y que tipo de producto es//

function Producto ( nombre , precio, tipo) {
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
}

const planta1 = new Producto ("Monstera Deliciosa", 4500, "interior");
const planta2 = new Producto ("Monstera Adansonii", 1800, "interior");
const planta3 = new Producto ("Sanseviera", 800, "interior");
const planta4 = new Producto ("Pilea", 2000, "interior");
const planta5 = new Producto ("Euphorbia", 2500, "interior");
const planta6 = new Producto("Potus lemon", 890, "interior");
const planta7 = new Producto ("Potus variegata", 1000, "interior");
const planta8 = new Producto ("Peperomia Watermelon", 1750, "interior");
const planta9 = new Producto ("Zamioculca", 5000, "interior");
const planta10 = new Producto ("Jazmin de Leche", 1900, "exterior");
const plantas11 = new Producto ("Ojo de poeta", 3000, "exterior");
const plantas12 = new Producto ("Ravenala", 3600, "exterior");
const plantas13 = new Producto ("Ficus Arbusto", 5500, "exterior");
const plantas14 = new Producto ("Begonia de Angel", 1800, "exterior");
const plantas15 = new Producto ("Hiedra", 800, "exterior");




const ProductoCatalogo = []
ProductoCatalogo.push (planta1)
ProductoCatalogo.push (planta2)
ProductoCatalogo.push (planta3)
ProductoCatalogo.push (planta4)
ProductoCatalogo.push (planta5)
ProductoCatalogo.push (planta6)
ProductoCatalogo.push (planta7)
ProductoCatalogo.push (planta8)
ProductoCatalogo.push (planta9)
ProductoCatalogo.push (planta10)
ProductoCatalogo.push (plantas11)
ProductoCatalogo.push (plantas12)
ProductoCatalogo.push (plantas13)
ProductoCatalogo.push (plantas14)
ProductoCatalogo.push (plantas15)

console.log (ProductoCatalogo)

let productosCarrito = ProductoCatalogo.map( el => ({...el, quantify:0}))
console.log (productosCarrito)

let contador = 0 
let subtotal = 0 
let total = 0
let cadena = ''


function multi (a, b){
    return a*b
}

for ( x in ProductoCatalogo) {
    let q= prompt (` ${ProductoCatalogo[x].nombre} esta ${ProductoCatalogo[x].precio} pesos. Que cantidad te gustaria llevar?`);

    if ( !isNaN(q) && q>0) {
        productosCarrito[x].quantify = q
        subtotal += multi ( q, productosCarrito[x].precio) 
        total+=` ${multi} = ${subtotal} \n`
        alert = `Tu compra es de ${total}. \n Gracias por tu compra!`
        
    
    }else {
        alert ("Ingresaste un dato erroneo, por favor ingresa y realiza de nuevo la compra");
        contador++

            if (contador==3){
            alert("Recuerda, solo numeros!") 
            alert ("Okey comencemos de nuevo")
            location.reload ()
        }


    
    }
}
