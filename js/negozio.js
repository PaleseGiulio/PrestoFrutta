// funzione link lampeggiante

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
    // fine link lampeggiante

// catalogo

fetch("/annunci.json").then((response)=>response.json()).then((data)=>{

    // cattura wrapper category
    let categorywrapper = document.querySelector("#categorywrapper");

        // cattura del cardswrapper

    let cardswrapper = document.querySelector("#cardswrapper");
    
    function categoryFilters(){

        let categories = data.map((annuncio)=> annuncio.category);
        let uniquecategories = [];

        categories.forEach((category) => {
            if( !uniquecategories.includes(category)){
                uniquecategories.push(category)
            }
        });
    
        uniquecategories.forEach((category)=>{
            let div = document.createElement("div");
            div.classList.add("form-check");
            div.innerHTML = `<input class="form-check-input" type="radio" name="flexRadioDefault"
                            id="${category}">
                            <label class="form-check-label" for="${category}">
                            ${category}
                            </label>`;            
            categorywrapper.appendChild(div);        
        })
    }
    
    categoryFilters();


    function createcards(array){
        cardswrapper.innerHTML = "";
        array.sort((a,b)=> Number( a.price - b.price ));

        array.forEach((element, i)=>{        
            let div = document.createElement("div");        
            div.classList.add("col-12", "col-md-3", "my-5", "d-flex", "justify-content-between");        
            div.innerHTML = `
                        <div class="announcementcard">
                        <img class="imgannuncio" src="https://picsum.photos/${200 + i}" alt="img prodotto">
                        <h3 class="text-center">${element.name}</h3>
                        <h3 class="text-center">${element.category}</h3>
                        <h3 class="text-center">${element.price} €</h3>
                        <div class="d-flex flex-row">
                            <p class="add"><i class="fa-solid fa-inbox"></i> Aggiungi alla tua cassetta</p>
                        </div>

                        </div>
                    `;    
            cardswrapper.appendChild(div);
        });
    }
    
    createcards(data);

    // funzione filtracard

    function filtercards(array){
        let categoria = Array.from(checkinput).find((button) => button.checked).id;

        // let arrayNodlist = Array.from(checkinput);
        // let button = arrayNodlist.find((bottone) => bottone.checked);
        // let categoria = button.id;

        if (categoria != "All") 
            // svuotamento wrapper            
            return array.filter((annuncio)=> annuncio.category == categoria);
        else
            return data;
    }
    // cattura radiobutton
    let checkinput = document.querySelectorAll('.form-check-input');

    checkinput.forEach((checkinput)=>{

        checkinput.addEventListener("click", ()=>{

            finalfilter();

        })

    })


    // cattura range input prices
    
    let inputprices = document.querySelector("#inputprices");
    let incrementnumber = document.querySelector("#incrementnumber");

    // funzione filtro per prezzo e settaggio valore max

    function setinputprices (){
        let prices = data.map((annuncio)=> Number(annuncio.price));
        let maxPrice = Math.max(...prices);

        inputprices.max = Math.ceil(maxPrice);        
        inputprices.value = Math.ceil(maxPrice);
        incrementnumber.innerHTML = Math.ceil(maxPrice);
    }
    
    setinputprices();

    // funzione filtra prezzo

    function filterprice(array){

        let filtered = array.filter((annuncio) => annuncio.price <= +(inputprices.value));
        // console.log(filtered);
        
        return filtered;

    }
    //  evento cambio input
    inputprices.addEventListener("input",()=> {
        incrementnumber.innerHTML = inputprices.value;
        finalfilter();
    });

    // cattura di nameinput

    let nameinput = document.querySelector("#nameinput");

    function filtername(array){
        let nome = nameinput.value;
        return array.filter((annuncio)=> annuncio.name.toLowerCase().includes(nome.toLowerCase()));
    }
    // evento su digitazione parola

    nameinput.addEventListener("input", () => { finalfilter(); });

    function finalfilter(){
        let filterCategory = filtercards(data);
        let filterByPrice = filterprice(filterCategory);
        let filtern = filtername(filterByPrice);
        
        createcards(filtern);
    }
})