const fotos = document.querySelectorAll(".foto");
const perfil = document.querySelector(".perfil");
const fechar = document.querySelector(".fecha");

fotos.forEach((foto)=>
    foto.addEventListener("click",()=>{
        perfil.classList.toggle("ativar");
    })
)


fechar.addEventListener("click",()=>{
    perfil.classList.toggle("ativar");
})