alert("¡Que bueno que nos hayas elegido!")

alert(" ¿Cuantas plantitas llevaras hoy? \n -Monstera deliciosa \n -Monstera Adansonii \n -Sanseviera \n -Pilea \n -Potus variegata \n -Zamioculca \n -Peperomia Watermelon \n -Euphorbia Trigona \n -Potus Lemon ")


const MonsteraDeliciosa = 4000
const MonsteraAdansonii = 1800
const Sanseviera = 850
const Pilea = 2000
const Euphorbia = 2500
const Potuslemon= 890
const Potusvariegata = 1000
const PeperomiaWatermelon = 1750
const Zamioculca = 5000


let contador= 0

function mult(a, b) {
    return a * b
}
while (contador != 9) {

    let MonsteraDeli_cant = prompt("Monsteras Deliciosa $4000 Pesos \n ¿Cuantas te gustaria?")
    let MonsteraAdan_cant= prompt("Monstera Adansonii $1800 \n ¿Cuantas te gustaria?")
    let Sanse_cant = prompt("Sanseviera $ 850 \n ¿Cuantas te gustaria?")
    let Pilea_cant = prompt("Pilea $2000 \n ¿Cuantas te gustaria?")
    let Euphor_cant = prompt("Euphorbia Trigona $2500 \n ¿Cuantas te gustaria?")
    let Potusle_cant = prompt("Potus lemon $890 \n ¿Cuantas te gustaria?")
    let PotusVar_cant = prompt("Potus Variegata $1000 \n ¿Cuantas te gustaria?")
    let Pepero_cant = prompt("Peperomia Watermelon $1750 \n ¿Cuantas te gustaria?")
    let Zamio_cant = prompt("Zamioculca $5000 \n ¿Cuantas te gustaria?")

    if (MonsteraDeli_cant >= 1 && MonsteraAdan_cant >= 1 && Sanse_cant >= 1 && Pilea_cant >=1 && Euphor_cant >=1 && Potusle_cant >=1 && PotusVar_cant >=1 && Pepero_cant>=1 && Zamio_cant >=1) {

        let resultado1 = mult(MonsteraDeliciosa, MonsteraDeli_cant);
        let resultado2 = mult(MonsteraAdansonii, MonsteraAdan_cant);
        let resultado3 = mult(Sanseviera, Sanse_cant);
        let resultado4 = mult(Pilea, Pilea_cant);
        let resultado5 = mult(Euphorbia, Euphor_cant);
        let resultado6 = mult(Potuslemon, Potusle_cant);
        let resultado7 = mult(Potusvariegata, PotusVar_cant);
        let resultado8 = mult(PeperomiaWatermelon, Pepero_cant);
        let resultado9 = mult(Zamioculca, Zamio_cant);
        let total = resultado1 + resultado2 + resultado3 + resultado4 + resultado5 + resultado6 + resultado7 + resultado8 + resultado9 

        alert(`\n  Tu carrito contiene:\n\n -Monstera Deliciosa = $ ${resultado1}\n -Monstera Adansonii = $ ${resultado2} \n -Sanseviera= $ ${resultado3}\n -Pilea = $ ${resultado4} \n -Euphorbia =$${resultado5} \n -Potus Lemon =$${resultado6} \n -Potus Variegata =$${resultado7} \n -Peperomia Watermelon =$ ${resultado8} \n -Zamioculca =$ ${resultado9} \n\n   #MONTO FINAL : $ ${total} \n Gracias por tu compra!` )
        break;

    } else if ((MonsteraDeli_cant == 0 ) && MonsteraAdan_cant >= 1 && Sanse_cant >= 1 && Pilea_cant >=1 && Euphor_cant >=1 && Potusle_cant >=1 && PotusVar_cant >=1 && Pepero_cant>=1 && Zamio_cant >=1){
        let resultado2 = mult(MonsteraAdansonii, MonsteraAdan_cant);
        let resultado3 = mult(Sanseviera, Sanse_cant);
        let resultado4 = mult(Pilea, Pilea_cant);
        let resultado5 = mult(Euphorbia, Euphor_cant);
        let resultado6 = mult(Potuslemon, Potusle_cant);
        let resultado7 = mult(Potusvariegata, PotusVar_cant);
        let resultado8 = mult(PeperomiaWatermelon, Pepero_cant);
        let resultado9 = mult(Zamioculca, Zamio_cant);
        let total = resultado2 + resultado3 + resultado4 + resultado5 + resultado6 + resultado7 + resultado8 + resultado9 ; 

        alert(`\n  Tu carrito contiene:\n\n -Monstera Adansonii = $ ${resultado2} \n -Sanseviera= $ ${resultado3}\n -Pilea = $ ${resultado4} \n -Euphorbia =$${resultado5} \n -Potus Lemon =$${resultado6} \n -Potus Variegata =$${resultado7} \n -Peperomia Watermelon =$ ${resultado8} \n -Zamioculca =$ ${resultado9} \n\n   #MONTO FINAL : $ ${total} \n Gracias por tu compra!` )
        break;
    } else if (MonsteraDeli_cant >= 1 && (MonsteraAdan_cant == 0) && Sanse_cant >= 1 && Pilea_cant >=1 && Euphor_cant >=1 && Potusle_cant >=1 && PotusVar_cant >=1 && Pepero_cant>=1 && Zamio_cant >=1) {

        let resultado1 = mult(MonsteraDeliciosa, MonsteraDeli_cant);
        let resultado3 = mult(Sanseviera, Sanse_cant);
        let resultado4 = mult(Pilea, Pilea_cant);
        let resultado5 = mult(Euphorbia, Euphor_cant);
        let resultado6 = mult(Potuslemon, Potusle_cant);
        let resultado7 = mult(Potusvariegata, PotusVar_cant);
        let resultado8 = mult(PeperomiaWatermelon, Pepero_cant);
        let resultado9 = mult(Zamioculca, Zamio_cant);
        let total = resultado1 + resultado3 + resultado4 + resultado5 + resultado6 + resultado7 + resultado8 + resultado9 

        alert(`\n  Tu carrito contiene:\n\n -Monstera Deliciosa = $ ${resultado1}\n -Sanseviera= $ ${resultado3}\n -Pilea = $ ${resultado4} \n -Euphorbia =$${resultado5} \n -Potus Lemon =$${resultado6} \n -Potus Variegata =$${resultado7} \n -Peperomia Watermelon =$ ${resultado8} \n -Zamioculca =$ ${resultado9} \n\n   #MONTO FINAL : $ ${total} \n Gracias por tu compra!` )
        break;
 
    } else if (MonsteraDeli_cant >= 1 && MonsteraAdan_cant >= 1 && (Sanse_cant == 0 ) && Pilea_cant >=1 && Euphor_cant >=1 && Potusle_cant >=1 && PotusVar_cant >=1 && Pepero_cant>=1 && Zamio_cant >=1) {

        let resultado1 = mult(MonsteraDeliciosa, MonsteraDeli_cant);
        let resultado2 = mult(MonsteraAdansonii, MonsteraAdan_cant);
        let resultado4 = mult(Pilea, Pilea_cant);
        let resultado5 = mult(Euphorbia, Euphor_cant);
        let resultado6 = mult(Potuslemon, Potusle_cant);
        let resultado7 = mult(Potusvariegata, PotusVar_cant);
        let resultado8 = mult(PeperomiaWatermelon, Pepero_cant);
        let resultado9 = mult(Zamioculca, Zamio_cant);
        let total = resultado1 + resultado2  + resultado4 + resultado5 + resultado6 + resultado7 + resultado8 + resultado9 

        alert(`\n  Tu carrito contiene:\n\n -Monstera Deliciosa = $ ${resultado1}\n -Monstera Adansonii = $ ${resultado2} \n -Pilea = $ ${resultado4} \n -Euphorbia =$${resultado5} \n -Potus Lemon =$${resultado6} \n -Potus Variegata =$${resultado7} \n -Peperomia Watermelon =$ ${resultado8} \n -Zamioculca =$ ${resultado9} \n\n   #MONTO FINAL : $ ${total} \n Gracias por tu compra!` )
        break;

    } else if (MonsteraDeli_cant >= 1 && MonsteraAdan_cant >= 1 && Sanse_cant >= 1 && (Pilea_cant == 0) && Euphor_cant >=1 && Potusle_cant >=1 && PotusVar_cant >=1 && Pepero_cant>=1 && Zamio_cant >=1) {

        let resultado1 = mult(MonsteraDeliciosa, MonsteraDeli_cant);
        let resultado2 = mult(MonsteraAdansonii, MonsteraAdan_cant);
        let resultado3 = mult(Sanseviera, Sanse_cant);       
        let resultado5 = mult(Euphorbia, Euphor_cant);
        let resultado6 = mult(Potuslemon, Potusle_cant);
        let resultado7 = mult(Potusvariegata, PotusVar_cant);
        let resultado8 = mult(PeperomiaWatermelon, Pepero_cant);
        let resultado9 = mult(Zamioculca, Zamio_cant);
        let total = resultado1 + resultado2 + resultado3 + resultado5 + resultado6 + resultado7 + resultado8 + resultado9 

        alert(`\n  Tu carrito contiene:\n\n -Monstera Deliciosa = $ ${resultado1}\n -Monstera Adansonii = $ ${resultado2} \n -Sanseviera= $ ${resultado3}\n -Euphorbia =$${resultado5} \n -Potus Lemon =$${resultado6} \n -Potus Variegata =$${resultado7} \n -Peperomia Watermelon =$ ${resultado8} \n -Zamioculca =$ ${resultado9} \n\n   #MONTO FINAL : $ ${total} \n Gracias por tu compra!` )
        break;

    } else if (MonsteraDeli_cant >= 1 && MonsteraAdan_cant >= 1 && Sanse_cant >= 1 && Pilea_cant >=1 && (Euphor_cant == 0) && Potusle_cant >=1 && PotusVar_cant >=1 && Pepero_cant>=1 && Zamio_cant >=1) {

        let resultado1 = mult(MonsteraDeliciosa, MonsteraDeli_cant);
        let resultado2 = mult(MonsteraAdansonii, MonsteraAdan_cant);
        let resultado3 = mult(Sanseviera, Sanse_cant);
        let resultado4 = mult(Pilea, Pilea_cant)     
        let resultado6 = mult(Potuslemon, Potusle_cant);
        let resultado7 = mult(Potusvariegata, PotusVar_cant);
        let resultado8 = mult(PeperomiaWatermelon, Pepero_cant);
        let resultado9 = mult(Zamioculca, Zamio_cant);
        let total = resultado1 + resultado2 + resultado3 + resultado4  + resultado6 + resultado7 + resultado8 + resultado9 

        alert(`\n  Tu carrito contiene:\n\n -Monstera Deliciosa = $ ${resultado1}\n -Monstera Adansonii = $ ${resultado2} \n -Sanseviera= $ ${resultado3}\n -Pilea = $ ${resultado4} \n -Potus Lemon =$${resultado6} \n -Potus Variegata =$${resultado7} \n -Peperomia Watermelon =$ ${resultado8} \n -Zamioculca =$ ${resultado9} \n\n   #MONTO FINAL : $ ${total} \n Gracias por tu compra!` )
        break;

    }else if (MonsteraDeli_cant >= 1 && MonsteraAdan_cant >= 1 && Sanse_cant >= 1 && Pilea_cant >=1 && Euphor_cant >=1 && (Potusle_cant == 0) && PotusVar_cant >=1 && Pepero_cant>=1 && Zamio_cant >=1) {

        let resultado1 = mult(MonsteraDeliciosa, MonsteraDeli_cant);
        let resultado2 = mult(MonsteraAdansonii, MonsteraAdan_cant);
        let resultado3 = mult(Sanseviera, Sanse_cant);
        let resultado4 = mult(Pilea, Pilea_cant);
        let resultado5 = mult(Euphorbia, Euphor_cant);        
        let resultado7 = mult(Potusvariegata, PotusVar_cant);
        let resultado8 = mult(PeperomiaWatermelon, Pepero_cant);
        let resultado9 = mult(Zamioculca, Zamio_cant);
        let total = resultado1 + resultado2 + resultado3 + resultado4 + resultado5 + resultado7 + resultado8 + resultado9 

        alert(`\n  Tu carrito contiene:\n\n -Monstera Deliciosa = $ ${resultado1}\n -Monstera Adansonii = $ ${resultado2} \n -Sanseviera= $ ${resultado3}\n -Pilea = $ ${resultado4} \n -Euphorbia =$${resultado5}  \n -Potus Variegata =$${resultado7} \n -Peperomia Watermelon =$ ${resultado8} \n -Zamioculca =$ ${resultado9} \n\n   #MONTO FINAL : $ ${total} \n Gracias por tu compra!` )
        break;

    } else if(MonsteraDeli_cant >= 1 && MonsteraAdan_cant >= 1 && Sanse_cant >= 1 && Pilea_cant >=1 && Euphor_cant >=1 && Potusle_cant >=1 && (PotusVar_cant == 0)&& Pepero_cant>=1 && Zamio_cant >=1) {

        let resultado1 = mult(MonsteraDeliciosa, MonsteraDeli_cant);
        let resultado2 = mult(MonsteraAdansonii, MonsteraAdan_cant);
        let resultado3 = mult(Sanseviera, Sanse_cant);
        let resultado4 = mult(Pilea, Pilea_cant);
        let resultado5 = mult(Euphorbia, Euphor_cant);
        let resultado6 = mult(Potuslemon, Potusle_cant)    
        let resultado8 = mult(PeperomiaWatermelon, Pepero_cant);
        let resultado9 = mult(Zamioculca, Zamio_cant);
        let total = resultado1 + resultado2 + resultado3 + resultado4 + resultado5 + resultado6  + resultado8 + resultado9 

        alert(`\n  Tu carrito contiene:\n\n -Monstera Deliciosa = $ ${resultado1}\n -Monstera Adansonii = $ ${resultado2} \n -Sanseviera= $ ${resultado3}\n -Pilea = $ ${resultado4} \n -Euphorbia =$${resultado5} \n -Potus Lemon =$${resultado6} \n -Peperomia Watermelon =$ ${resultado8} \n -Zamioculca =$ ${resultado9} \n\n   #MONTO FINAL : $ ${total} \n Gracias por tu compra!` )
        break;

    } else if (MonsteraDeli_cant >= 1 && MonsteraAdan_cant >= 1 && Sanse_cant >= 1 && Pilea_cant >=1 && Euphor_cant >=1 && Potusle_cant >=1 && PotusVar_cant >=1 && (Pepero_cant == 0 ) && Zamio_cant >=1) {

        let resultado1 = mult(MonsteraDeliciosa, MonsteraDeli_cant);
        let resultado2 = mult(MonsteraAdansonii, MonsteraAdan_cant);
        let resultado3 = mult(Sanseviera, Sanse_cant);
        let resultado4 = mult(Pilea, Pilea_cant);
        let resultado5 = mult(Euphorbia, Euphor_cant);
        let resultado6 = mult(Potuslemon, Potusle_cant);
        let resultado7 = mult(Potusvariegata, PotusVar_cant);        
        let resultado9 = mult(Zamioculca, Zamio_cant);
        let total = resultado1 + resultado2 + resultado3 + resultado4 + resultado5 + resultado6 + resultado7 + resultado9 

        alert(`\n  Tu carrito contiene:\n\n -Monstera Deliciosa = $ ${resultado1}\n -Monstera Adansonii = $ ${resultado2} \n -Sanseviera= $ ${resultado3}\n -Pilea = $ ${resultado4} \n -Euphorbia =$${resultado5} \n -Potus Lemon =$${resultado6} \n -Potus Variegata =$${resultado7} \n -Zamioculca =$ ${resultado9} \n\n   #MONTO FINAL : $ ${total} \n Gracias por tu compra!` )
        break;

    }else if (MonsteraDeli_cant >= 1 && MonsteraAdan_cant >= 1 && Sanse_cant >= 1 && Pilea_cant >=1 && Euphor_cant >=1 && Potusle_cant >=1 && PotusVar_cant >=1 && Pepero_cant>=1 && (Zamio_cant == 0)) {

        let resultado1 = mult(MonsteraDeliciosa, MonsteraDeli_cant);
        let resultado2 = mult(MonsteraAdansonii, MonsteraAdan_cant);
        let resultado3 = mult(Sanseviera, Sanse_cant);
        let resultado4 = mult(Pilea, Pilea_cant);
        let resultado5 = mult(Euphorbia, Euphor_cant);
        let resultado6 = mult(Potuslemon, Potusle_cant);
        let resultado7 = mult(Potusvariegata, PotusVar_cant);
        let resultado8 = mult(PeperomiaWatermelon, Pepero_cant);       
        let total = resultado1 + resultado2 + resultado3 + resultado4 + resultado5 + resultado6 + resultado7 + resultado8  

        alert(`\n  Tu carrito contiene:\n\n -Monstera Deliciosa = $ ${resultado1}\n -Monstera Adansonii = $ ${resultado2} \n -Sanseviera= $ ${resultado3}\n -Pilea = $ ${resultado4} \n -Euphorbia =$${resultado5} \n -Potus Lemon =$${resultado6} \n -Potus Variegata =$${resultado7} \n -Peperomia Watermelon =$ ${resultado8} \n\n   #MONTO FINAL : $ ${total} \n Gracias por tu compra!` )

    } else {

        alert("Ingresaste una cantidad erronea,por favor ingresa solamente numeros!");

        contador++

        if (contador == 3) {

            alert("Recuedes,solo numeros!")

            alert("Okey! Comencemos de nuevo,chequea muy bien los precios antes asi podemos darte un monto exacto. \n\n Muchas gracias!")

            location.reload()
        }
    }
}
