var listaPiatti = [
    {
        filtro: "Vegetariano", 
        nomePiatto: "RAVIOLO AL TARTUFO NERO E RICOTTA",
        descrizionePiatto: "Ravioli fatti in casa ripieni di ricotta fresca e tartufo nero, serviti con una delicata salsa al burro e salvia e guarniti con scaglie di tartufo.",
        prezzoPiatto: "10.00",
        specialSpace: " "
    },
    {
        filtro: "Vegano", 
        nomePiatto: "INSALATA DI BARBABIETOLE",
        descrizionePiatto: "Barbabietole rosse e gialle arrosto, servite con formaggio vegano a base di anacardi, noci candite, rucola fresca e riduzione di aceto balsamico invecchiato.",
        prezzoPiatto: "16.50",
        specialSpace: " "
    },
    {
        filtro: "Senza lattosio", 
        nomePiatto: "RISOTTO AI FUNGHI PORCINI E ZAFFERANO",
        descrizionePiatto: "Risotto al dente con funghi porcini freschi, zafferano di alta qualità, prezzemolo e una spruzzata di burro vegano senza lattosio per un sapore ricco e cremoso.",
        prezzoPiatto: "25.00",
        specialSpace: " "
    },
    {
        filtro: "Vegano",
        nomePiatto: "CRESPELLE AI FUNGHI E CREMA DI NOCI CREMOSA",
        descrizionePiatto: "Crespelle sottili ripiene di funghi misti in una delicata crema di noci vegana, servite con erbe fresche e una spolverata di lievito nutrizionale per un tocco di formaggio vegan-friendly.",
        prezzoPiatto: "18.00",
        specialSpace: " "
    },
    {
        filtro: "Senza glutine",
        nomePiatto: "LASAGNA DI VERDURE",
        descrizionePiatto: "Strati di pasta senza glutine ripieni di verdure grigliate, spinaci, pomodoro, e una salsa bechamel senza glutine, il tutto gratinato al forno.",
        prezzoPiatto: "30.00",
        specialSpace: " "
    },
    {
        filtro: "Senza frutta secca",
        nomePiatto: "RISOTTO AGLI ASPARAGI E LIMONE",
        descrizionePiatto: "Risotto al dente con asparagi freschi, scorza di limone grattugiata, erbe aromatiche e un tocco di olio d'oliva extra vergine.",
        prezzoPiatto: "22.00",
        specialSpace: " "
    },
    {
        filtro: "Vegano",
        nomePiatto: "TARTARE DI BARBABIETOLA E AVOCADO",
        descrizionePiatto: "Barbabietole rosse e avocado finemente tritati, conditi con olio d'oliva, succo di limone fresco, erbe aromatiche e serviti con crostini di pane senza glutine.",
        prezzoPiatto: "29.00",
        specialSpace: " "
    },
    {
        filtro: "Senza frutta secca",
        nomePiatto: "LASAGNA DI MELANZANE",
        descrizionePiatto: "Strati di melanzane grigliate, besciamella vegana, pomodoro e una miscela di formaggi vegani, il tutto senza l'aggiunta di frutta secca.",
        prezzoPiatto: "28.00",
        specialSpace: " "
        
    },
    {
        filtro:"Senza glutine",
        nomePiatto: "ZUPPA DI LETINCCHIE ROSA E CURRY",
        descrizionePiatto: "Una zuppa cremosa di lenticchie rosse al curry con cocco, carote e cipolla, servita con pane senza glutine.",
        prezzoPiatto: "15.00",
        specialSpace: " "
    }, 
    {
        filtro:"Vegano",
        nomePiatto: "RISOTTO AL CURRY CON VERDURE TOSTATE",
        descrizionePiatto: "Risotto cremoso al curry con una varietà di verdure tostate, tra cui carote, zucchine e peperoni, garnito con anacardi tritati per una croccantezza extra.",
        prezzoPiatto: "20.00",
        specialSpace: " "
    },
    {   
        filtro:"senza glutine",
        nomePiatto: "PASTA DI RISO CON PESTO DI BASILICO",
        descrizionePiatto: "Pasta di riso senza glutine condita con un pesto di basilico fresco, pinoli tostati, e pomodori secchi, il tutto senza glutine.",
        prezzoPiatto: "9.00",
        specialSpace: " "
    }, 
    {
        filtro:"vegetariano",
        nomePiatto: "GNOCCHI DI PATATE GORGONZOLA NOCI",
        descrizionePiatto: "Gnocchi fatti in casa serviti con una cremosa salsa al gorgonzola, noci tostate e un tocco di miele per un contrasto dolce-salato.",
        prezzoPiatto: "18.00",
        specialSpace: " "
    }
    

    
]

function createMenuElement(listaPiatti, menuContainer)
{
    listaPiatti.forEach(element => {
        //const el = document.createElement("div");
        //el.innerHTML = "pippo ";
        //el.classList.add()
        //el.appendChild(el);


        const el = document.createElement("div");
        el.classList.add("foodMenuGourmetActive");
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
createMenuElement(listaPiatti, document.querySelector(".menuSection__Container"))

function ordinamentoFiltro(listaPiatti, filtro)
{
    let menuContainer = document.querySelector(".menuSection__Container");
    menuContainer.innerHTML = "";

    if(filtro == "tutti")
    {
        createMenuElement(listaPiatti, menuContainer);
    } else {
    
    
        createMenuElement( listaPiatti.filter(element => {
    
            if (filtro.toLowerCase() == element.filtro.toLowerCase())
                return true;
            else if (filtro.toLowerCase() == "nessuno")
            {
                return true;
            }
            
        }), menuContainer);
    }
}

const filtroVegetariano = document.getElementById("filtroPiattiVegetariano");
let filtroVegetarianoStatus = false;
const filtroVegano = document.getElementById("filtroPiattiVegano");
let filtroVeganoStatus = false;
const filtroGlutine = document.getElementById("filtroPiattiGlutine");
let filtroGlutineStatus = false;
const filtroLattosio = document.getElementById("filtroPiattiLattosio");
let filtroLattosioStatus = false;
const filtroFruttaSecca = document.getElementById("filtroPiattiFruttaSecca");
let filtroFruttaSeccaStatus = false;

filtroVegetariano.addEventListener("click", function() {
    filtroVegetarianoStatus = !filtroVegetarianoStatus;
    if(filtroVeganoStatus)
    {
        filtroVeganoStatus = false;
    }
    if(filtroGlutineStatus)
    {
        filtroGlutineStatus = false;
    }
    if(filtroLattosioStatus)
    {
        filtroLattosioStatus = false;
    }
    if(filtroFruttaSeccaStatus)
    {
        filtroFruttaSeccaStatus = false;
    }
    if(filtroVegetarianoStatus)
    {
        ordinamentoFiltro(listaPiatti, "vegetariano");
    } else
    {
        ordinamentoFiltro(listaPiatti, "tutti")
    }
});

filtroVegano.addEventListener("click", function() {
    filtroVeganoStatus = !filtroVeganoStatus;
    if(filtroVegetarianoStatus)
    {
        filtroVegetarianoStatus = false;
    }
    if(filtroGlutineStatus)
    {
        filtroGlutineStatus = false;
    }
    if(filtroLattosioStatus)
    {
        filtroLattosioStatus = false;
    }
    if(filtroFruttaSeccaStatus)
    {
        filtroFruttaSeccaStatus = false;
    }
    if(filtroVeganoStatus)
    {
        ordinamentoFiltro(listaPiatti, "vegano");
    } else
    {
        ordinamentoFiltro(listaPiatti, "tutti")
    }
});

filtroGlutine.addEventListener("click", function() {
    filtroGlutineStatus = !filtroGlutineStatus;
    if(filtroVegetarianoStatus)
    {
        filtroVegetarianoStatus = false;
    }
    if(filtroVeganoStatus)
    {
        filtroVeganoStatus = false;
    }
    if(filtroLattosioStatus)
    {
        filtroLattosioStatus = false;
    }
    if(filtroFruttaSeccaStatus)
    {
        filtroFruttaSeccaStatus = false;
    }
    if(filtroGlutineStatus)
    {
        ordinamentoFiltro(listaPiatti, "Senza glutine");
    } else
    {
        ordinamentoFiltro(listaPiatti, "tutti")
    }
});

filtroLattosio.addEventListener("click", function() {
    filtroLattosioStatus = !filtroLattosioStatus;
    if(filtroVegetarianoStatus)
    {
        filtroVegetarianoStatus = false;
    }
    if(filtroVeganoStatus)
    {
        filtroVeganoStatus = false;
    }
    if(filtroGlutineStatus)
    {
        filtroGlutineStatus = false;
    }
    if(filtroFruttaSeccaStatus)
    {
        filtroFruttaSeccaStatus = false;
    }
    if(filtroLattosioStatus)
    {
        ordinamentoFiltro(listaPiatti, "Senza lattosio");
    } else
    {
        ordinamentoFiltro(listaPiatti, "tutti")
    }
});

filtroFruttaSecca.addEventListener("click", function() {
    filtroFruttaSeccaStatus = !filtroFruttaSeccaStatus;
    if(filtroVegetarianoStatus)
    {
        filtroVegetarianoStatus = false;
    }
    if(filtroVeganoStatus)
    {
        filtroVeganoStatus = false;
    }
    if(filtroLattosioStatus)
    {
        filtroLattosioStatus = false;
    }
    if(filtroGlutineStatus)
    {
        filtroGlutineStatus = false;
    }
    if(filtroFruttaSeccaStatus)
    {
        ordinamentoFiltro(listaPiatti, "Senza Frutta Secca");
    } else
    {
        ordinamentoFiltro(listaPiatti, "tutti")
    }
});

function activeFilterBox1()
{
    var menu = document.querySelector(".filterBox1__Container");
    if (menu.classList.contains("visible")) {
      menu.classList.remove("visible");
    } else {
      menu.classList.add("visible");
    }
}
