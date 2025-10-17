const btnAceptar=document.querySelector(".btnAceptar");
const name=document.querySelector(".nombre");
const age=document.querySelector(".edad");
const mail=document.querySelector(".email");
const paises=document.querySelector(".paises");
const mensaje=document.querySelector(".mensaje");
const storage=document.querySelector(".storage");

const nombreLS=localStorage.getItem("nombre");
const edadLS=localStorage.getItem("edad");
const emailLS=localStorage.getItem("email");
const paisLS=localStorage.getItem("pais");
if(nombreLS!=""&&edadLS!=""&&emailLS!=""&&paisLS!=""){
    storage.textContent=`Hola ${nombreLS}, edad:${edadLS}, email:${emailLS}, pais:${paisLS}`
}

function aceptar(){
    const nombre=name.value
    const edad=age.value;
    const email=mail.value;
    const pais=paises.value;
    if(nombre===""){
        mensaje.innerHTML="<p>Error falta nombre</p>"
    } else{
        localStorage.setItem("nombre",nombre);
        mensaje.textContent="";
    }

    if(edad===""){
        mensaje.innerHTML="<p>Error falta edad</p>"
    } else{
        localStorage.setItem("edad",edad);
    }
    
    if(email===""){
        mensaje.innerHTML="<p>Error falta email</p>"
    } else{
        localStorage.setItem("email",email);
    }

    if(pais===""){
        mensaje.innerHTML="<p>Error falta pais</p>"
    } else{
        localStorage.setItem("pais",pais);
    }
}

btnAceptar.addEventListener("click",aceptar)