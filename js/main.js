let ubicacionPrincipal = window.pageYOffset;

/* OCULTAR MENU SEGUN DONDE ESTE EL SCROLL */
window.addEventListener("scroll",function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;
})

/* MENU */
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

AOS.init();


document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
    if (semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo = true;
    }
    enlacesHeader.classList.toggle("menudos")
})