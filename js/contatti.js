
let pluswrappers = document.querySelector(".pluswrappers");
let moveddivs = document.querySelectorAll(".moved");
let activ = false;
// evento move
pluswrappers.addEventListener("click",()=>{
    if(activ == false){
        activ = true;
        moveddivs.forEach((moved, i)=>{
            let angle = (360 * i) / moveddivs.length;
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
            pluswrappers.innerHTML = `<i class="fa-solid fa-lock-open"></i>`;
        })
    }
    else{
        moveddivs.forEach((moved)=>{
            activ = false;
            moved.style.transform = `rotate(0deg) translate(0px)`;
            pluswrappers.innerHTML = `<i class="fa-solid fa-lock"></i>`;
            contentModalPhone.classList.add("d-none");
            contentMessage.classList.add("d-none");
            contentModalMail.classList.add("d-none");
        })
    }
})
// fine evento move
// inizio evento phone
let modalPhone = document.querySelector("#modalPhone");
let contentModalPhone = document.querySelector("#contentModalPhone");
let closeIdBtnPhone = document.querySelector("#closeIdBtnPhone");

modalPhone.addEventListener("click",() =>{
    contentModalPhone.classList.toggle("d-none");
})

closeIdBtnPhone.addEventListener("click",() =>{
    contentModalPhone.classList.add("d-none");
})
// fine evento phone
// inizio evento message
let contentMessage = document.querySelector("#contentMessage");
let modalMessage = document.querySelector("#modalMessage");
let closeidbtnMessage = document.querySelector("#closeidbtnMessage");

modalMessage.addEventListener("click",() =>{
    contentMessage.classList.toggle("d-none");
})

closeidbtnMessage.addEventListener("click",() =>{
    contentMessage.classList.add("d-none");
})
// fine evento message
// inizio evento mail
let modalMail = document.querySelector("#modalMail");
let contentModalMail = document.querySelector("#contentModalMail");
let closeIdBtnMail = document.querySelector("#closeIdBtnMail");

modalMail.addEventListener("click",() =>{
    contentModalMail.classList.toggle("d-none");
})

closeIdBtnMail.addEventListener("click",() =>{
    contentModalMail.classList.add("d-none");
})
