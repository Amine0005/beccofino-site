//Richiamo delle Funzioni
window.addEventListener("load", (event) => {
    generatoreElementi();
    visualizzaPrimiTre();
    autoPlay();
});


const carousel__mainClass = document.querySelector('.carousel__mainClass')
const carousel__container = document.querySelector('.carousel__container');

const carouselItems = [
    {
        Item_Image: "img/MiglioriPiatti-1.png",
        Item_Title: "Insalata Greca",
        Item_Description: "Tomatoes, green bell pepper, sliced cucumber onion, olives...",
        Item_Price: 32.00
    },
    {
        Item_Image: "img/MiglioriPiatti-2.png",
        Item_Title: "Opu Fish",
        Item_Description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings...",
        Item_Price: 16.00
    },
    {
        Item_Image: "img/MiglioriPiatti-3.png",
        Item_Title: "Butternut Pumpkin",
        Item_Description: "Tomatoes, green bell pepper, sliced cucumber onion, olives...",
        Item_Price: 24.00
    },
    {
        Item_Image: "img/MiglioriPiatti-4.png",
        Item_Title: "lyo",
        Item_Description: "Riso acidulato, aceto di riso, pesce crudo, alghe, zenzero...",
        Item_Price: 37.00
    }
]

function generatoreElementi() {
    for(let i = 0; i < carouselItems.length; i++)
    {
        let carousel__item = document.createElement('div');
        carousel__item.classList.add('carousel__item');
        carousel__item.innerHTML = `
        <div class="carousel-item__container">
            <div class="carousel-item__container__box">
                <div class="carousel__image" style="background: url(${ carouselItems[i].Item_Image });"></div>
                <div class="carousel__title">
                    <h3>${ carouselItems[i].Item_Title }</h3>
                </div>
                <div class="carousel__description">
                    <p>${ carouselItems[i].Item_Description }</p>
                </div>
                <div class="carousel__price">
                    <h4>$${ carouselItems[i].Item_Price }</h4>
                </div>
            </div>
        </div>
        `;
        carousel__container.appendChild(carousel__item);
    }
}

function visualizzaPrimiTre()
{
    let elementsList = document.querySelectorAll('.carousel__item');
    for(let i = 3; i < elementsList.length; i++)
    {
        elementsList[i].style.opacity = "0";
    }
    elementsList[0].classList.add('carousel__item__position-left');
    elementsList[1].classList.add('carousel__item__position-center');
    elementsList[2].classList.add('carousel__item__position-right');
}

let currentItem = 0;

function getIndex (sliderElements, index) {
    if (index < 0)
        return sliderElements.length + index;
    if (index < sliderElements.length)
        return index;
    return index - sliderElements.length;
} 

function nextFunction () {
    let sliderElements = document.querySelectorAll('.carousel__item');
    let currentIndex = [ ...sliderElements[0].parentElement.children].indexOf(document.querySelector('.carousel__item__position-left'))

    sliderElements[getIndex(sliderElements, currentIndex)].style.opacity = "0";
    sliderElements[getIndex(sliderElements, currentIndex+3)].style.opacity = "1";
    
    sliderElements[getIndex(sliderElements, currentIndex)].classList.remove("carousel__item__position-left")
    sliderElements[getIndex(sliderElements, currentIndex+1)].classList.remove("carousel__item__position-center")
    sliderElements[getIndex(sliderElements, currentIndex+2)].classList.remove("carousel__item__position-right")

    sliderElements[getIndex(sliderElements, currentIndex+1)].classList.add("carousel__item__position-left")
    sliderElements[getIndex(sliderElements, currentIndex+2)].classList.add("carousel__item__position-center")
    sliderElements[getIndex(sliderElements, currentIndex+3)].classList.add("carousel__item__position-right")
    
    sliderElements[getIndex(sliderElements, currentIndex + 1)].classList.add("carousel__item--transition")
    sliderElements[getIndex(sliderElements, currentIndex + 2)].classList.add("carousel__item--transition")
    sliderElements[getIndex(sliderElements, currentIndex + 3)].classList.add("carousel__item--transition")
}
document.getElementById("next-button").addEventListener("click", nextFunction);

function prevFunction () {
    let sliderElements = document.querySelectorAll('.carousel__item');
    let currentIndex = [ ...sliderElements[2].parentElement.children].indexOf(document.querySelector('.carousel__item__position-right'))

    sliderElements[getIndex(sliderElements, currentIndex)].style.opacity = "0";
    sliderElements[getIndex(sliderElements, currentIndex-3)].style.opacity = "1";
    
    sliderElements[getIndex(sliderElements, currentIndex)].classList.remove("carousel__item__position-right")
    sliderElements[getIndex(sliderElements, currentIndex-1)].classList.remove("carousel__item__position-center")
    sliderElements[getIndex(sliderElements, currentIndex-2)].classList.remove("carousel__item__position-left")

    sliderElements[getIndex(sliderElements, currentIndex-1)].classList.add("carousel__item__position-right")
    sliderElements[getIndex(sliderElements, currentIndex-2)].classList.add("carousel__item__position-center")
    sliderElements[getIndex(sliderElements, currentIndex-3)].classList.add("carousel__item__position-left")
}
document.getElementById("prev-button").addEventListener("click", prevFunction);

function autoPlay () {
    if(carousel__mainClass.getAttribute('data-autoplay') == "true")
    {
       setInterval(nextFunction, 3000); 
    }
}