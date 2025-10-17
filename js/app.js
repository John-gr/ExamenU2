const btnAceptar=document.querySelector(".btnAceptar");
const name=document.querySelector(".nombre");
const age=document.querySelector(".edad");
const email=document.querySelector(".email");
const paises=document.querySelector(".paises");
const mensaje=document.querySelector(".mensaje");

function aceptar(){
    const nombre=name.value
    if(nombre===""){
        mensaje.innerHTML="<p>Error</p>"
    }
}

btnAceptar.addEventListener("click",aceptar)