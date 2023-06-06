// carousel

var carosel = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    
});

//catturo incremento numeri

let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");


function createInterval(maxnum, element){
    let counter = 0;
    let interval = setInterval(()=>{
        if(counter < maxnum){

            counter++
            element.innerHTML = counter;
        }
        else{
            clearInterval(interval);
        }
    },1)
}
// createInterval(784, first);
// createInterval(1284, second);
// createInterval(551,third);

//richiamo h2 start

let h2start = document.querySelector("#h2start");

//funzione observer

let observed = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting && controllo == true){
            createInterval(484, first);
            createInterval(863, second);
            createInterval(551,third);
            controllo=false;
        }
    })
})

observed.observe(h2start);

// funzione linklampeggiante

let orto = document.querySelector("#orto");

function linkOn() {
    orto.style.visibility='visible';
    setTimeout('linkOff()',700);
}
    
function linkOff() {
    orto.style.visibility='hidden';
    setTimeout('linkOn()',700);
}
    
    linkOn();