/*let cantidadDePersonas = parseInt(prompt("Sera un placer ayudarte, Porfavor dime cuantas personas viajan MAXIMO 5 PERSONAS POR TRANSACCION"));
function Persona(nombre,apellido,edad,dni){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = dni;

}

if(cantidadDePersonas==1){
    const persona1= new Persona(prompt("dame el nombre del primer pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
    console.log("Los datos del pasajero 1 son "+"\n")
    for(const propiedad in persona1){
        
        console.log(" "+propiedad+" :"+persona1[propiedad])
    }
}else if(cantidadDePersonas==2){
    const persona1= new Persona(prompt("dame el nombre del primer pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
    const persona2= new Persona(prompt("dame el nombre del segundo pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
    
    console.log("Los datos del pasajero 1 son "+"\n")
    for(const propiedad in persona1){
        console.log(" "+propiedad+" :"+persona1[propiedad])
    }
    console.log("Los datos del pasajero 2 son "+"\n")
    for(const propiedad in persona2){
        console.log(" "+propiedad+" :"+persona2[propiedad])
    }
}else if (cantidadDePersonas==3){ 
    const persona1= new Persona(prompt("dame el nombre del primer pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
    const persona2= new Persona(prompt("dame el nombre del segundo pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
    const persona3= new Persona(prompt("dame el nombre del tercer pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
   
    console.log("Los datos del pasajero 1 son "+"\n")
    for(const propiedad in persona1){
        console.log(" "+propiedad+" :"+persona1[propiedad])
    }

    console.log("Los datos del pasajero 2 son "+"\n")
    for(const propiedad in persona2){
        console.log(" "+propiedad+" :"+persona2[propiedad])
    }
    console.log("Los datos del pasajero 3 son "+"\n")
    for(const propiedad in persona3){
        console.log(" "+propiedad+" :"+persona3[propiedad])
    }
    
}else if(cantidadDePersonas==4){

    const persona1= new Persona(prompt("dame el nombre del primer pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
    const persona2= new Persona(prompt("dame el nombre del segundo pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
    const persona3= new Persona(prompt("dame el nombre del tercer pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
    const persona4= new Persona(prompt("dame el nombre del cuarto pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );

    console.log("Los datos del pasajero 1 son "+"\n")
    for(const propiedad in persona1){
        console.log(" "+propiedad+" :"+persona1[propiedad])
    }

    console.log("Los datos del pasajero 2 son "+"\n")
    for(const propiedad in persona2){
        console.log(" "+propiedad+" :"+persona2[propiedad])
    }
    console.log("Los datos del pasajero 3 son "+"\n")
    for(const propiedad in persona3){
        console.log(" "+propiedad+" :"+persona3[propiedad])
    }
    console.log("Los datos del pasajero 4 son "+"\n")
    for(const propiedad in persona4){
        console.log(" "+propiedad+" :"+persona4[propiedad])
    }

}else if(cantidadDePersonas==5){

    const persona1= new Persona(prompt("dame el nombre del primer pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
    const persona2= new Persona(prompt("dame el nombre del segundo pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
    const persona3= new Persona(prompt("dame el nombre del tercer pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
    const persona4= new Persona(prompt("dame el nombre del cuarto pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );
    const persona5= new Persona(prompt("dame el nombre del quinto pasajero"),prompt("Dame el apellido"),prompt("dame la edad"),prompt("Dame el dni") );

    console.log("Los datos del pasajero 1 son "+"\n")
    for(const propiedad in persona1){
        console.log(" "+propiedad+" :"+persona1[propiedad])
    }

    console.log("Los datos del pasajero 2 son "+"\n")
    for(const propiedad in persona2){
        console.log(" "+propiedad+" :"+persona2[propiedad])
    }
    console.log("Los datos del pasajero 3 son "+"\n")
    for(const propiedad in persona3){
        console.log(" "+propiedad+" :"+persona3[propiedad])
    }
    console.log("Los datos del pasajero 4 son "+"\n")
    for(const propiedad in persona4){
        console.log(" "+propiedad+" :"+persona4[propiedad])
    }
    console.log("Los datos del pasajero 5 son "+"\n")
    for(const propiedad in persona5){
        console.log(" "+propiedad+" :"+persona5[propiedad])
    }

}else alert("ERROR HAS SELECCIONADO MAS DE 5 PASAJEROS o Ningun Pasajero");

 

let cantidadDeDias= prompt("AHORA DIME CUANTOS DIAS QUIERES VACACIONAR");

console.log("\n"+"\n"+"OK Has Seleccionado "+"\n"+"Pasajeros :"+cantidadDePersonas+"\n"+"\n"+"Dias :"+cantidadDeDias)

console.log("------PAQUETE 1 : DELUXE ------"+"\n"+"\n")
console.log("Paquete Deluxe Tiene un costo de 8000 ARS por persona el Dia y cuenta con los siguientes servicios :"+"\n"+"\n"
+"--HOTEL 5 EXTRELLAS LA MANSION DELUXE--"+"\n"+"* Comidas Completas"+"\n"+"* Traslado Aeropuerto---Hotel"+"\n"+
"* Dia de Playa con todas las comodidades Incluidas"+"\n"+"* Servicios Varios"+"\n");



function paquete1(valorPaquete,pasajeros,dias){

resultado=valorPaquete*pasajeros*dias


}

function mostrar(mensaje){
    console.log(mensaje)
}

paquete1(8000,(cantidadDePersonas),(cantidadDeDias));
mostrar("\n"+"El Valor Total del PAQUETE DELUXE segun los pasajeros y Dias informados es : "+resultado+" ARS"+"\n"+"\n");

//
console.log("------PAQUETE 2 : PREMIUM ------"+"\n"+"\n")
console.log("Paquete Premium Tiene un costo de 5000 ARS por persona el Dia y cuenta con los siguientes servicios :"+"\n"+"\n"
+"--HOTEL 3 EXTRELLAS DOÑA BARBARA--"+"\n"+"* Almuerzo Incluido"+"\n"+"* Traslado Aeropuerto---Hotel"+"\n"+"* Servicios Varios"+"\n");



function paquete2(valorPaquete,pasajeros,dias){

resultado=valorPaquete*pasajeros*dias


}

function mostrar2(mensaje){
    console.log(mensaje)
}

paquete2(5000,(cantidadDePersonas),(cantidadDeDias));
mostrar2("\n"+"---El Valor Total del PAQUETE PREMIUM--- segun los pasajeros y Dias informados es : "+resultado+" ARS"+"\n"+"\n");

//
console.log("------PAQUETE 3 : LOW-COST ------"+"\n"+"\n")
console.log("Paquete Low-Cost Tiene un costo de 3000 ARS por persona el Dia y cuenta con los siguientes servicios :"+"\n"+"\n"
+"--Cabañas Coloniales Don Jesus--"+"\n"+"* Desayuno Incluido"+"\n"+"* Agua y Bloqueador Solar Incluido"+"\n")



function paquete3(valorPaquete,pasajeros,dias){

resultado=valorPaquete*pasajeros*dias


}

function mostrar3(mensaje){
    console.log(mensaje)
}

paquete3(3000,(cantidadDePersonas),(cantidadDeDias));
mostrar3("\n"+"El Valor Total del PAQUETE LOW-COST segun los pasajeros y Dias informados es : "+resultado+" ARS");*/


let pasajeros = [];
const formularioAgregarProducto = document.getElementById("formulario_agregar_pasajero");
formularioAgregarProducto.addEventListener("submit", (e) => {

    e.preventDefault();

    // Obtengo nombre y stock
    const inputStockProducto = document.getElementById("stock_producto");

    const stockProducto = inputStockProducto.value;
    pasajeros.push({
        stock: parseInt(stockProducto),



    });

    let mensaje = document.getElementById("menssage");


});

// AUN FALTA CONSTRUIR DEJO EL CODIGO DE ARRIBA COMENTADO DEBIDO A QUE NECESITO USAR PRONTO ALGUNAS COSAS