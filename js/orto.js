
let h2orto = document.querySelector("#h2orto");
let controllo2 = true;


navIcon.addEventListener("click", ()=>{
    if(controllo2 == true){
        controllo2=false;
        h2orto.classList.add("h2class");
    }
    else{
        controllo2=true;
        h2orto.classList.remove("h2class");
    }

})
// if (controllo2 == true){
//     h2orto.style.paddingTop="250px";
//     controllo2 = false;
// }
// else{
//     controllo2 = false;
//     h2orto.style.paddingTop="0";
// }



