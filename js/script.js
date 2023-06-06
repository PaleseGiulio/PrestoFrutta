let controllo = true;
// catturo icona
let navIcon = document.querySelector("#navIcon");
// evento toggler
// animazione freccia collapse

navIcon.addEventListener("click", ()=>{
    if(controllo == true){
        navIcon.classList.add("fa-rotate-180");
        controllo = false;
    }
    else{
        navIcon.classList.remove("fa-rotate-180");
        controllo = true;
    }
})
//catturo navbar //catturo logo

let mainNavbar = document.querySelector("#mainNavbar");
let loghetto1 = document.querySelector("#loghetto1");
let loghetto2 = document.querySelector("#loghetto2");
//evento bg navbar //evento logo

window.addEventListener("scroll",()=>{
    let scroll = window.scrollY

    if(scroll > 0){
        
        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('bgcolorBlackTransparent', 'py-5');
        loghetto1.classList.add("d-none");
        loghetto2.classList.remove("d-none");
    }
    else{

        mainNavbar.classList.remove('bgcolorBlackTransparent', 'py-5');
        mainNavbar.classList.add('bg-transparent');
        loghetto1.classList.remove("d-none");
        loghetto2.classList.add("d-none");
}

})

