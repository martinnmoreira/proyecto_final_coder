// Clase 06 - Entrega

let serviceNameA = "Integración";
let serviceNameB = "Terapias";
let serviceNameC = "Acompañante terapéutico";
let iva = 21;
let precioPresupuesto;
let contador = 0;
let listadoIntegracionMenu = "Estos son los servicios de integracion ofrecidos. Por favor sellecione uno para obtener un presupuesto: ";
let listadoTerapiasMenu = "Estas son las terapias ofrecidas. Por favor sellecione una para obtener un presupuesto: ";
let listadoAcompananteMenu = "Estos son los servicios de acompañamiento terapéutico ofrecidos. Por favor sellecione una para obtener un presupuesto: ";
let resultadoBusqueda = "";
let contenedorCardsJavaScript;

//Integración

function Integracion (nombreValor, precioHoraValor, cantidadHorasValor){

    this.nombre = nombreValor;
    
    this.precio = precioHoraValor;
    
    this.cantidadHoras = cantidadHorasValor;
    
}

const listaIntegracion = [];

listaIntegracion.push (new Integracion('Integración - Jornada doble', 1000, 160));
listaIntegracion.push (new Integracion('Integración - Media jornada', 1200, 80));
listaIntegracion.push (new Integracion('Integración - Parcial', 1200, 1));


for(const integracion of listaIntegracion){
    contador++
    listadoIntegracionMenu += "\n" + contador + "- " + integracion.nombre;
}
contador = 0;

//Terapias

function Terapia (nombreValor, precioHoraValor, cantidadHorasValor){

    this.nombre = nombreValor;
    
    this.precio = precioHoraValor;
    
    this.cantidadHoras = cantidadHorasValor;
    
}

const listaTerapias = [];

listaTerapias.push (new Terapia("Terapia ocupacional", 1000, 8));
listaTerapias.push (new Terapia("Psicología", 1100, 8));
listaTerapias.push (new Terapia("Psicopedagogía", 900, 8));
listaTerapias.push (new Terapia("Fonoaudiología", 1000, 8));
listaTerapias.push (new Terapia("Kinesiología", 800, 8));
listaTerapias.push (new Terapia("Fisioterapia", 850, 8));
listaTerapias.push (new Terapia("Equinoterapia", 1400, 8));
listaTerapias.push (new Terapia("Hidroterapia", 1350, 8));

for(const terapia of listaTerapias){
    contador++;
    listadoTerapiasMenu +=  "\n" + contador + "- " + terapia.nombre;
}
contador = 0;

//Acompañante terapéutico

function Acompanante (nombreValor, precioHoraValor, cantidadHorasValor){

    this.nombre = nombreValor;
    
    this.precio = precioHoraValor;
    
    this.cantidadHoras = cantidadHorasValor;
    
}

const listaAcompanante = [];

listaAcompanante.push (new Acompanante("Acompañante Terapéutica - Jornada completa", 1000, 160));
listaAcompanante.push (new Acompanante("Acompañante Terapéutica - Jornada parcial", 1300, 80));
listaAcompanante.push (new Acompanante("Acompañante Terapéutica - Horario particular", 1500, 1));


for(const acompanante of listaAcompanante){
    contador++
    listadoAcompananteMenu += "\n" + contador + "- " + acompanante.nombre;
}
contador =0;


//DOM

let input1 = document.getElementById("nombre")

input1.addEventListener('change', () => {
 console.log(input1.value)
})


let opcion1 = document.querySelector(".opcion1");
opcion1.innerHTML = serviceNameA;
let opcion2 = document.querySelector(".opcion2");
opcion2.innerHTML = serviceNameB;
let opcion3 = document.querySelector(".opcion3");
opcion3.innerHTML = serviceNameC;

let checkbox1 = document.getElementById("check1");
checkbox1.addEventListener("change", respuestaClick);
    function respuestaClick(){
        contenedorCardsIntegracion = document.querySelector(".contenedorCardsIntegracion");
        contenedorCardsIntegracion.innerHTML = '';
        if (checkbox1.checked){
            for (const integracion of listaIntegracion) {
                let contenedorIntegracion = document.createElement("div");
                contenedorIntegracion.innerHTML = `<div class="cardServicio">
                                        <h3>${integracion.nombre}</h3>
                                        <p>Horas recomendadas: ${integracion.cantidadHoras}</p>
                                        <b> Valor Hora: $ ${integracion.precio}</b>
                                        <button>Solicitar</button>
                                        </div>`
                contenedorCardsIntegracion.appendChild(contenedorIntegracion);
                console.log(contenedorIntegracion.innerHTML);
            }
        }
    }


let checkbox2 = document.getElementById("check2");
checkbox2.addEventListener("click", respuestaClick2);
    function respuestaClick2(){
        contenedorCardsTerapias = document.querySelector(".contenedorCardsTerapias");
        contenedorCardsTerapias.innerHTML = '';
        if (checkbox2.checked){
            for (const terapia of listaTerapias) {
                let contenedorTerapias = document.createElement("div");
                contenedorTerapias.innerHTML = `<div class="cardServicio">
                                        <h3>${terapia.nombre}</h3>
                                        <p>Horas recomendadas: ${terapia.cantidadHoras}</p>
                                        <b> Valor Hora: $ ${terapia.precio}</b>
                                        <button>Solicitar</button>
                                        </div>`
                contenedorCardsTerapias.appendChild(contenedorTerapias);
                console.log(contenedorTerapias.innerHTML);
            }
        }
    }

let checkbox3 = document.getElementById("check3");
checkbox3.addEventListener("click", respuestaClick3);
    function respuestaClick3(){
        contenedorCardsAcompanante = document.querySelector(".contenedorCardsAcompanante");
        contenedorCardsAcompanante.innerHTML = '';
        if (checkbox3.checked){
            for (const acompanante of listaAcompanante) {
                let contenedorAcompanante = document.createElement("div");
                contenedorAcompanante.innerHTML = `<div class="cardServicio">
                                        <h3>${acompanante.nombre}</h3>
                                        <p>Horas recomendadas: ${acompanante.cantidadHoras}</p>
                                        <b> Valor Hora: $ ${acompanante.precio}</b>
                                        <button>Solicitar</button>
                                        </div>`
                contenedorCardsAcompanante.appendChild(contenedorAcompanante);
                console.log(contenedorAcompanante.innerHTML);
            }
        }
    }


/* let userName = prompt("Ingrese su nombre");

while(userName == ""){
    userName = prompt("Ingrese un nombre válido:");
}

alert("Buenos días " + userName); */

let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
let f = new Date();
let fecha = (f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

function calculadora(precioPresupuesto, cantidadHorasTerapia){
    precioTotal = ((precioPresupuesto*cantidadHorasTerapia) + ((precioPresupuesto*cantidadHorasTerapia) * iva / 100));
    presupuesto();
}

function presupuesto(){
    if (cantidadHorasValor != 1){
        alert("El presupuesto para el servicio se detalla a continuación: \n\nPrecio de la hora del servicio: $" + precioPresupuesto + "\nHoras mensuales recomendadas: " + cantidadHorasValor +"\nIVA: " + iva + "%" + "\n\nPrecio Total del modulo mensual: $" + precioTotal + "\n\nFecha del presupuesto: " + fecha);
    }
    else{
        alert("El presupuesto para el servicio se detalla a continuación: \n\nPrecio de la hora del servicio: $" + precioPresupuesto + "\nIVA: " + iva + "%" + "\n\nPrecio por hora: $" + precioTotal + "\n\nFecha del presupuesto: " + fecha);
    }
}

function buscar(){
    let busquedaUsuario = prompt("Ingrese su busqueda: ");
    if (busquedaUsuario == ""){
        alert("Ingrese una busqueda válida.");
        buscar();
    }
    console.log(busquedaUsuario);
    const newArrayBuscado = listaIntegracion.filter((x) => x.nombre.includes(busquedaUsuario));
    for (i = 0; i < newArrayBuscado.length; i++){
        resultadoBusqueda += "\n" + newArrayBuscado[i].nombre + "\nPrecio de la hora: " + newArrayBuscado[i].precio + "\nHoras recomendadas: " + newArrayBuscado[i].cantidadHoras + "\n--------------------------------\n";
    }
    const newArrayBuscado1 = listaTerapias.filter((x) => x.nombre.includes(busquedaUsuario));
    for (i = 0; i < newArrayBuscado1.length; i++){
        resultadoBusqueda += "\n" + newArrayBuscado1[i].nombre + "\nPrecio de la hora: " + newArrayBuscado1[i].precio + "\nHoras recomendadas: " + newArrayBuscado1[i].cantidadHoras + "\n--------------------------------\n";
    }
    const newArrayBuscado2 = listaAcompanante.filter((x) => x.nombre.includes(busquedaUsuario));
    for (i = 0; i < newArrayBuscado2.length; i++){
        resultadoBusqueda += "\n" + newArrayBuscado2[i].nombre + "\nPrecio de la hora: " + newArrayBuscado2[i].precio + "\nHoras recomendadas: " + newArrayBuscado2[i].cantidadHoras + "\n--------------------------------\n";
    }

    console.log(resultadoBusqueda)
    alert("El resultado de su busqueda se muestra a continuación: " + resultadoBusqueda);   
}


//menu();