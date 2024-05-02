


function createMenuElementBevande(listaBevande)
{
    listaBevande.forEach(element => {
        var menuContainer = document.querySelector(".thirdMenuSection__Container");

        const el = document.createElement("div");
        el.classList.add("food__container");
        el.innerHTML = `              <div class="foodContainer__title">
        <h2>${element.nomePiatto}</h2>
      </div>
      <h3 class="foodContainer__prezzoPiatto">€${element.prezzoPiatto}</h3>
      <span class="foodContainer__lineSpan"></span>
      <h2 class="foodContainer__freeSpace">${element.specialSpace}</h2>
      <div class="foodContainer__subTitle">
        <p>${element.descrizionePiatto}</p>
      </div>`;
        menuContainer.appendChild(el);
    });
}

createMenuElementBevande(listaBevande)

function activeFilterBox2()
{
    var menu = document.querySelector(".filterBox2__Container");
    if (menu.style.visibility === "hidden") {
      menu.style.visibility = "visible";
    } else {
      menu.style.visibility = "hidden";
    }
}