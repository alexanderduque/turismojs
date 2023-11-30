//ARRAY PARA CARGAR DATOS EN LOCALSTORAGE
let usuarios = [];

//Inicar LocalStorage con lo que ya tenga guardado
const usuariosLocal= localStorage.getItem("usuarios")

if(usuariosLocal!==null){
    usuarios=JSON.parse(usuariosLocal);
}

const formulario = document.getElementById("formulario_cotizador");

//EVENTO SUBMIT DEL FORMULARIO
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputTitular = document.getElementById("agregar_titular");
    const inputSeleccion = document.getElementById("seleccion");
    const inputPasajeros = document.getElementById("cantidad_pasajero");
    const inputDias = document.getElementById("selec_dias");

    const nombreTitular = inputTitular.value;
    const seleccionDestino = inputSeleccion.value;
    const seleccionPasajero = inputPasajeros.value;
    const seleccionDias = inputDias.value;

    usuarios.push({
        nombre: nombreTitular,
        destino: seleccionDestino,
        pasajeros: seleccionPasajero,
        dias: seleccionDias,

    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    

});

// Consulta de reservas de distintos usuarios
const usuariosJSON = localStorage.getItem("usuarios");
const usuariosStorage = JSON.parse(usuariosJSON);
console.log(usuarios);


// FUNCION QUE IMPRIME EL VALOR DE LOS PAQUETES EN EL TEXTAREA
function resultado_paquete() {


    const operacion = (8000 * (valorInput1) * (valorInput2));
    const operacion2 = (5000 * (valorInput1) * (valorInput2));
    const operacion3 = (3000 * (valorInput1) * (valorInput2));
    document.getElementById("texto_compra").value = "Gracias por elegirnos los paquetes Disponibles Son los Siguientes: " + "\n" + "\n" + "------PAQUETE 1 : DELUXE ------" + "\n" +
        "Deluxe Tiene un costo de 8000 ARS por persona el Dia y cuenta con los siguientes servicios :" + "\n" + "\n"
        + "--HOTEL 5 EXTRELLAS LA MANSION DELUXE--" + "\n" + "* Comidas Completas" + "\n" + "* Traslado Aeropuerto---Hotel" + "\n" +
        "* Dia de Playa con todas las comodidades Incluidas" + "\n" + "* Servicios Varios" + "\n" +
        "EL TOTAL SEGUN LOS DIAS Y PASAJEROS INFORMADOS ES :" + operacion + "\n" + "\n" + "\n" + "------PAQUETE 2: PREMIUM------" + "\n" + " Tiene un costo de 5000 ARS por persona el Dia y cuenta con los siguientes servicios :" + "\n" + "\n"
        + "--HOTEL 3 EXTRELLAS DOÑA BARBARA--" + "\n" + "* Almuerzo Incluido" + "\n" + "* Traslado Aeropuerto---Hotel" + "\n" + "* Servicios Varios" + "\n" +
        "EL TOTAL SEGUN LOS DIAS Y PASAJEROS INFORMADOS ES :" + operacion2 + "\n" + "\n" + "\n" + "------Paquete Low-Cost------" + "\n" + "Tiene un costo de 3000 ARS por persona el Dia y cuenta con los siguientes servicios :" + "\n" + "\n"
        + "--Cabañas Coloniales Don Jesus--" + "\n" + "* Desayuno Incluido" + "\n" + "\n" +
        "EL TOTAL SEGUN LOS DIAS Y PASAJEROS INFORMADOS ES :" + operacion3;
}


let valorInput1 = 0;
let valorInput2 = 0;

const cantidad_pasajero = document.getElementById("cantidad_pasajero");
const selec_dias = document.getElementById("selec_dias");

cantidad_pasajero.addEventListener("change", () => {
    valorInput1 = cantidad_pasajero.value;

})
selec_dias.addEventListener("change", () => {
    valorInput2 = selec_dias.value;

})




// funciones para agregar  pasajeros y dias en cotizador


function seleccionTitular() {

    let titular = document.getElementById("agregar_titular").value;
    document.getElementById("imprimir_Titular").value = "Bienvenido: " + titular;
}

function seleccionOpcion() {

    let option = document.getElementById("seleccion").value;
    document.getElementById("imprimir_seleccion").value = "Ok has Eligido como Destino: " + option;
}


function enviarTexto() {

    let pasajeros = document.getElementById("cantidad_pasajero").value;
    document.getElementById("pasajero_resultado").value = "Ok Pasajeros seleccionados: " + pasajeros;
}

function enviarTexto2() {

    let dias = document.getElementById("selec_dias").value;
    document.getElementById("dia_resultado").value = "Ok Dias seleccionados: " + dias;

}

// reset de inputs
function limpiar_seleccion() {
    document.getElementById("imprimir_seleccion").value = ""
}
function limpiar_pasajeros() {
    document.getElementById("cantidad_pasajero").value = ""
    document.getElementById("pasajero_resultado").value = ""

}

function limpiar_dias() {
    document.getElementById("selec_dias").value = "";
    document.getElementById("dia_resultado").value = "";
}
function limpiar_todo() {
    document.getElementById("agregar_titular").value = ""
    document.getElementById("imprimir_Titular").value = ""
    document.getElementById("seleccion").value = ""
    document.getElementById("imprimir_seleccion").value = ""
    document.getElementById("cantidad_pasajero").value = ""
    document.getElementById("pasajero_resultado").value = ""
    document.getElementById("selec_dias").value = ""
    document.getElementById("dia_resultado").value = ""
    document.getElementById("texto_compra").value = ""

}

//eventos para llamar a las funciones
document.getElementById("compra_confirmar").onclick = function () {


    Swal.fire({
        title: 'Paquete Deluxe Comprado Con Exito!',
        text: 'Disfruta De Tu viaje',
        imageUrl: '../img/confirmar_compra.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })

}
document.getElementById("compra_confirmar2").onclick = function () {


    Swal.fire({
        title: 'Paquete Premium Comprado Con Exito!',
        text: 'Disfruta De Tu viaje',
        imageUrl: '../img/confirmar_compra.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })

}
document.getElementById("compra_confirmar3").onclick = function () {


    Swal.fire({
        title: 'Paquete Low-Cost Comprado Con Exito!',
        text: 'Disfruta De Tu viaje',
        imageUrl: '../img/confirmar_compra.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })

}

document.getElementById("titular").onclick = function () {
    seleccionTitular()

}
document.getElementById("confirmar").onclick = function () {
    seleccionOpcion()

}

document.getElementById("agregar_pasajero").onclick = function () {
    enviarTexto()
}
document.getElementById("agregar_dias").onclick = function () {
    enviarTexto2()
}

document.getElementById("resumen").onclick = function () {
    resultado_paquete()

}
//eventos para borrar campos
document.getElementById("reset_seleccion").onclick = function () {
    limpiar_seleccion()
}

document.getElementById("reset1").onclick = function () {
    limpiar_pasajeros()
}

document.getElementById("reset2").onclick = function () {
    limpiar_dias()
}
//Borrar Todo
document.getElementById("delete_all").onclick = function () {
    limpiar_todo()
}

  //ACOMODAR RESPONSIVE Y DETALLES  --falta una parte-- (sobre todo contenedor en index)
  //verificar funciones onclick de los videos iframe de todas las pages

  // MANEJO DE PROMESAS CON FECTH
  // UN OBJETO Y UN ARRAY Y METODOS

