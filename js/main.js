// Clase 06 - Entrega

let serviceNameA = "Integración";
let serviceNameB = "Terapias";
let serviceNameC = "Acompañante terapéutico";
let iva = 21;
let precioPresupuesto;
let contador = 0;
let listadoIntegracionMenu = "Estos son los servicios de integracion ofrecidos. Por favor sellecione uno para obtener un presupuesto: ";
let listadoTerapiasMenu = "Estas son las terapias ofrecidas. Por favor sellecione una para obtener un presupuesto: ";
let listadoAcompanyanteMenu = "Estos son los servicios de acompañamiento terapéutico ofrecidos. Por favor sellecione una para obtener un presupuesto: ";
let resultadoBusqueda = '';
let contenedorIntegracion = '';
let contenedorTerapias = '';
let contenedorAcompanyante = '';

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

function Acompanyante (nombreValor, precioHoraValor, cantidadHorasValor){

    this.nombre = nombreValor;
    
    this.precio = precioHoraValor;
    
    this.cantidadHoras = cantidadHorasValor;
    
}

const listaAcompanyante = [];

listaAcompanyante.push (new Acompanyante("Acompañante Terapéutica - Jornada completa", 1000, 160));
listaAcompanyante.push (new Acompanyante("Acompañante Terapéutica - Jornada parcial", 1300, 80));
listaAcompanyante.push (new Acompanyante("Acompañante Terapéutica - Horario particular", 1500, 1));


for(const acompanyante of listaAcompanyante){
    contador++
    listadoAcompanyanteMenu += "\n" + contador + "- " + acompanyante.nombre;
}
contador =0;


//DOM

const input1  = document.querySelector("#busqueda");
input1.addEventListener('keyup', buscar);


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
                //console.log(contenedorIntegracion.innerHTML);
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
                contenedorTerapias = document.createElement("div");
                contenedorTerapias.innerHTML = `<div class="cardServicio">
                                        <h3>${terapia.nombre}</h3>
                                        <p>Horas recomendadas: ${terapia.cantidadHoras}</p>
                                        <b> Valor Hora: $ ${terapia.precio}</b>
                                        <button>Solicitar</button>
                                        </div>`
                contenedorCardsTerapias.appendChild(contenedorTerapias);
                //console.log(contenedorTerapias.innerHTML);
            }
        }
    }

let checkbox3 = document.getElementById("check3");
checkbox3.addEventListener("click", respuestaClick3);
    function respuestaClick3(){
        contenedorCardsAcompanyante = document.querySelector(".contenedorCardsAcompanyante");
        contenedorCardsAcompanyante.innerHTML = '';
        if (checkbox3.checked){
            for (const acompanyante of listaAcompanyante) {
                contenedorAcompanyante = document.createElement("div");
                contenedorAcompanyante.innerHTML = `<div class="cardServicio">
                                        <h3>${acompanyante.nombre}</h3>
                                        <p>Horas recomendadas: ${acompanyante.cantidadHoras}</p>
                                        <b> Valor Hora: $ ${acompanyante.precio}</b>
                                        <button>Solicitar</button>
                                        </div>`
                contenedorCardsAcompanyante.appendChild(contenedorAcompanyante);
                //console.log(contenedorAcompanyante.innerHTML);
            }
        }
    }

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
    const texto = input1.value.toLowerCase();
    //BUSCADOR INTEGRACION
    contenedorCardsIntegracion = document.querySelector(".contenedorCardsIntegracion");
    contenedorCardsIntegracion.innerHTML = '';
    for(let integracion of listaIntegracion){
        let nombre = integracion.nombre.toLowerCase();
        if(nombre.indexOf(texto) != -1){
                contenedorIntegracion = document.createElement("div");
                contenedorIntegracion.innerHTML = `<div class="cardServicio">
                                        <h3>${integracion.nombre}</h3>
                                        <p>Horas recomendadas: ${integracion.cantidadHoras}</p>
                                        <b> Valor Hora: $ ${integracion.precio}</b>
                                        <button>Solicitar</button>
                                        </div>`
                contenedorCardsIntegracion.appendChild(contenedorIntegracion);
                //console.log(contenedorIntegracion.innerHTML);
        }
    }

    //BUSCADOR TERAPIAS
    contenedorCardsTerapias = document.querySelector(".contenedorCardsTerapias");
    contenedorCardsTerapias.innerHTML = '';
    for(let terapia of listaTerapias){
        let nombre = terapia.nombre.toLowerCase();
        if(nombre.indexOf(texto) != -1){
            contenedorTerapias = document.createElement("div");
            contenedorTerapias.innerHTML = `<div class="cardServicio">
                                    <h3>${terapia.nombre}</h3>
                                    <p>Horas recomendadas: ${terapia.cantidadHoras}</p>
                                    <b> Valor Hora: $ ${terapia.precio}</b>
                                    <button>Solicitar</button>
                                    </div>`
            contenedorCardsTerapias.appendChild(contenedorTerapias);
            //console.log(contenedorTerapias.innerHTML);
        }
    }
    
    //BUSCADOR ACOMPAÑANTE TERAPEUTICO
    contenedorCardsAcompanyante = document.querySelector(".contenedorCardsAcompanyante");
    contenedorCardsAcompanyante.innerHTML = '';
    for(let acompanyante of listaAcompanyante){
        let nombre = acompanyante.nombre.toLowerCase();
        if(nombre.indexOf(texto) != -1){
                contenedorAcompanyante = document.createElement("div");
                contenedorAcompanyante.innerHTML = `<div class="cardServicio">
                                        <h3>${acompanyante.nombre}</h3>
                                        <p>Horas recomendadas: ${acompanyante.cantidadHoras}</p>
                                        <b> Valor Hora: $ ${acompanyante.precio}</b>
                                        <button>Solicitar</button>
                                        </div>`
                contenedorCardsAcompanyante.appendChild(contenedorAcompanyante);
                //console.log(contenedorAcompanyante.innerHTML);
        }
    }

}