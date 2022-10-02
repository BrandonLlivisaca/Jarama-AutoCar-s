let ubicacionPrincipal = window.pageYOffset;

/* OCULTAR MENU SEGUN DONDE ESTE EL SCROLL */
window.addEventListener("scroll",function(){
    let desplazamientoActual = window.pageYOffset;
    let about = document.getElementById('about-us');
    let title_services = document.getElementById('title_services');
    let position = about.getBoundingClientRect().top;
    let heightWindow = window.innerHeight;

    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;

    if(position < heightWindow){
        title_services.classList.add('titulo_servicios');
    }else{
        title_services.classList.remove('titulo_servicios');
    }
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

const mostrar = function(){
    let title_services = document.getElementById('title_services');
    title_services.classList.add('titulo_servicios');
}

/* Agregar imagenes a los ariculos */
let articulos = document.getElementsByClassName('fa-solid');
for(let i=0; i<articulos.length;i++){
    articulos[i].classList.add('img_article');
    let img = 'img/img_'+(i)+'.jpg';
    articulos[i].style.backgroundImage = `url(${img})`;
}