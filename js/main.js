//PROYECTO FINAL JAVASCRIPT

// import Toastify from '../node_modules/toastify-js/src/toastify-es.js';
// import Swal from '../node_modules/sweetalert2/src/sweetalert2.js';

let serviceNameA = "Integración";
let serviceNameB = "Terapias";
let serviceNameC = "Acompañante terapéutico";
let iva = 0.21;
let precioPresupuesto;
let resultadoBusqueda = '';
let contenedorCardsServicios = '';
let contenedorServicio = '';
const divisa = '$';
let presupuesto = [];
const DOMpresupuesto = document.querySelector('#presupuesto');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const miLocalStorage = window.localStorage;
let checkbox1;
let checkbox2;
let checkbox3;
let flagVaciarPresupuesto = false;

//Integración

function Servicio (idValor, nombreValor, precioHoraValor, cantidadHorasValor, categoriaValor, imagenValor){

    this.id = idValor;

    this.nombre = nombreValor;
    
    this.precio = precioHoraValor;
    
    this.cantidadHoras = cantidadHorasValor;

    this.categoria = categoriaValor;

    this.imagen = imagenValor;
    
}

const listaServicios = [];

//DOM

const input1  = document.querySelector("#busqueda");
input1.value = "";
input1.addEventListener('keyup', buscar);


let opcion1 = document.querySelector(".opcion1");
opcion1.innerHTML = serviceNameA;
let opcion2 = document.querySelector(".opcion2");
opcion2.innerHTML = serviceNameB;
let opcion3 = document.querySelector(".opcion3");
opcion3.innerHTML = serviceNameC;

checkbox1 = document.getElementById("check1");
checkbox1.checked = false;
checkbox1.addEventListener("change", respuestaClick);
checkbox2 = document.getElementById("check2");
checkbox2.checked = false;
checkbox2.addEventListener("change", respuestaClick);
checkbox3 = document.getElementById("check3");
checkbox3.checked = false;
checkbox3.addEventListener("change", respuestaClick);
    function respuestaClick(){
        contenedorCardsServicios = document.querySelector(".contenedorCardsServicios");
        contenedorCardsServicios.innerHTML = '';
        //Operadores avanzados
        checkbox1.checked && renderizarCards("Integración");
        checkbox2.checked && renderizarCards("Terapías");
        checkbox3.checked && renderizarCards("Acompañante Terapéutico");
    }

function renderizarCards(categoria) {
    //Petición a JSON local para traer la información
    fetch('../data/data.json')
        .then( (res) => res.json())
        .then( (data) => {
            data.forEach((servicio) => {
                listaServicios.push(servicio);
                if (servicio.categoria == categoria){
                    const contenedorServicio = document.createElement("div");
                    contenedorServicio.innerHTML = `<div class="cardServicio">
                                            <h3>${servicio.nombre}</h3>
                                            <p>Horas recomendadas: ${servicio.cantidadHoras}</p>
                                            <b> Valor Hora: $ ${servicio.precio}</b>
                                            </div>`
                                            //Línea por si quiero agregar imagen a la card<img src ="${servicio.imagen}"/>
                    const miNodoBoton = document.createElement('button');
                    miNodoBoton.setAttribute("id","boton-solicitar");
                    miNodoBoton.classList.add('btn', 'btn-primary', 'boton--verde');
                    miNodoBoton.textContent = 'Solicitar';
                    miNodoBoton.setAttribute('marcador', servicio.id);
                    miNodoBoton.addEventListener('click', anyadirServicioAlPresupuesto);
                    contenedorCardsServicios.appendChild(contenedorServicio);
                    contenedorCardsServicios.appendChild(miNodoBoton);
                    miNodoBoton.disabled = false; 
                    if (servicio.cantidadHoras > 1){
                        miNodoBoton.addEventListener('click', bloquearBoton);
                        function bloquearBoton(){
                            miNodoBoton.classList.add('boton--disabled')
                        }
                    }
                }
            })
        })  
}

/* BUSCADOR / RENDERIZADOR SERVICIO */
function buscar(){
    const texto = input1.value.toLowerCase();
    contenedorCardsServicios = document.querySelector(".contenedorCardsServicios");
    contenedorCardsServicios.innerHTML = '';
    //Petición a JSON local para traer la información
    fetch('../data/data.json')
        .then( (res) => res.json())
        .then( (data) => {
            data.forEach((servicio) => {
                listaServicios.push(servicio);
                let nombre = servicio.nombre.toLowerCase();
                if(nombre.indexOf(texto) != -1){
                        contenedorServicio = document.createElement("div");
                        contenedorServicio.innerHTML = `<div class="cardServicio">
                                                        <h3>${servicio.nombre}</h3>
                                                        <p>Horas recomendadas: ${servicio.cantidadHoras}</p>
                                                        <b> Valor Hora: $ ${servicio.precio}</b>
                                                        </div>`
                                                        //Línea por si quiero agregar imagen a la card <img src ="${servicio.imagen}"/>
                        const miNodoBoton = document.createElement('button');
                        miNodoBoton.classList.add('btn', 'btn-primary', 'boton--verde');
                        miNodoBoton.textContent = 'Solicitar';
                        miNodoBoton.setAttribute('marcador', servicio.id);
                        miNodoBoton.setAttribute("id","boton-solicitar");
                        miNodoBoton.addEventListener('click', anyadirServicioAlPresupuesto);
                        contenedorCardsServicios.appendChild(contenedorServicio);
                        contenedorCardsServicios.appendChild(miNodoBoton);
                        miNodoBoton.disabled = false;
                        if (servicio.cantidadHoras > 1){
                            miNodoBoton.addEventListener('click', bloquearBoton);
                            function bloquearBoton(){
                                miNodoBoton.classList.add('boton--disabled');
                            }
                        }
                }
            });
        });
}

function renderizarDOM () {
    
}

/**
* Evento para añadir un servicio al presupuesto a realizar
*/
function anyadirServicioAlPresupuesto(e) {
    // Anyadimos el Nodo a nuestro presupuesto
    presupuesto.push(e.target.getAttribute('marcador'));
    // Actualizamos el presupuesto
    renderizarPresupuesto();    
    Toastify({
    text: "Se agregó el servicio al presupuesto!",
    duration: 1500,
    gravity: 'top',
    position: 'right',
    style: {
        background: 
        'linear-gradient(to right, #00b09b, #63B945)'
        }
    }).showToast();
    // Actualizamos el LocalStorage
    guardarPresupuestoEnLocalStorage();
}

/**
 * Dibuja todos los servicios guardados en el Presupuesto
*/
function renderizarPresupuesto() {
    // Vaciamos todo el html
    DOMpresupuesto.textContent = '';
    // Quitamos los duplicados
    const presupuestoSinDuplicados = [...new Set(presupuesto)];
    // Generamos los Nodos a partir de presupuesto
    presupuestoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = listaServicios.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el servicio
        const numeroUnidadesItem = presupuesto.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario lo mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del presupuesto
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} Módulo(s) de ${miItem[0].cantidadHoras} hora(s)  x ${miItem[0].nombre} - Valor hora: ${miItem[0].precio}${divisa} + IVA`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'boton--verde', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemPresupuesto);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMpresupuesto.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**
* Evento para borrar un elemento del Presupuesto
*/
function borrarItemPresupuesto(e) {
    // Obtenemos el ID del servicio que hay en el boton pulsado
    const id = e.target.dataset.item;
    // Borramos todo el servicio seleccionado
    presupuesto = presupuesto.filter((servicioId) => {
        return servicioId !== id;
    });
    // volvemos a renderizar
    renderizarPresupuesto();

    // Actualizamos el LocalStorage
    guardarPresupuestoEnLocalStorage();

}

/**
 * Calcula el precio total teniendo en cuenta los servicios repetidos
 */
function calcularTotal() {
    // Recorremos el array del presupuesto 
    return presupuesto.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = listaServicios.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + ((miItem[0].precio + miItem[0].precio * iva) * miItem[0].cantidadHoras);
    }, 0).toFixed(2);
}

/**
* Varia el Presupuesto y vuelve a dibujarlo
*/
function vaciarPresupuesto() {
    // Limpiamos los productos guardados
    presupuesto = [];
    // Renderizamos los cambios
    renderizarPresupuesto();
    // Borra LocalStorage
    localStorage.clear();
    buscar();
}

function guardarPresupuestoEnLocalStorage () {
    miLocalStorage.setItem('presupuesto', JSON.stringify(presupuesto));
}

function cargarPresupuestoDeLocalStorage () {
    // ¿Existe un presupuesto previo guardado en LocalStorage?
    if (miLocalStorage.getItem('presupuesto') !== null) {
        // Carga la información
        presupuesto = JSON.parse(miLocalStorage.getItem('presupuesto'));
    }
}

// Eventos

DOMbotonVaciar.addEventListener('click', () => {    
    Swal.fire({
        title: '¿Está seguro que desea eliminar el presupuesto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
        }).then((result) => {
            if (result.isConfirmed) {
                vaciarPresupuesto();
                Swal.fire({
                    title: 'Borrado!',
                    icon: 'success',
                    text: 'El presupuesto ha sido borrado.',
                    }) 
            }
    }) 
})

// Inicio
cargarPresupuestoDeLocalStorage();
buscar()
renderizarPresupuesto();