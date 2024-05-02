var listaBevande = [
    {
        filtro:"Alcoliche",
        nomePiatto: "MARTINI DRY",
        descrizionePiatto: "Un classico cocktail a base di gin e vermouth, servito con una olive o una scorza di limone.",
        prezzoPiatto: "30.00",
        specialSpace: " "
    },
    {
        filtro:"Alcoliche",
        nomePiatto: "WHISKY SINGLE MALT 18 ANNI",
        descrizionePiatto: "Con burro all'aglio, serviti su un letto di riso venre ",
        prezzoPiatto: "30.00",
        specialSpace: " "
    },
    {
        filtro:"Alcoliche",
        nomePiatto: "CHAMPAGNE DOM PÉRIGNON BRUT",
        descrizionePiatto: "Una bottiglia di champagne Dom Pérignon Brut, perfetta per celebrare un'occasione speciale.",
        prezzoPiatto: "250.00",
        specialSpace: " "
    },
    {
        filtro:"Non Alcoliche",
        nomePiatto: "ACQUA MINERALE NATURALE",
        descrizionePiatto: "Una bottiglia di acqua minerale naturale proveniente da una sorgente di montagna.",
        prezzoPiatto: "5.00",
        specialSpace: " "
    },
    {
        filtro:"Non Alcoliche",
        nomePiatto: "MOCKTAIL MANGO BREEZE''",
        descrizionePiatto: "Una bevanda analcolica rinfrescante a base di succo di mango, succo d'arancia e soda.",
        prezzoPiatto: "10.00",
        specialSpace: " "
    },
    {
        filtro:"Vini Rossi",
        nomePiatto: "BAROLO DOCG 2015",
        descrizionePiatto: "Un vino rosso italiano pregiato, perfetto per accompagnare piatti di carne rossa.",
        prezzoPiatto: "80.00",
        specialSpace: " "
        
    },
    {
        filtro:"Vini Rossi",
        nomePiatto: "PINOT NOIR CALIFORNIANO",
        descrizionePiatto: "Un vino rosso californiano elegante e complesso, con note di frutti rossi.",
        prezzoPiatto: "60.00",
        specialSpace: " "
    },
    {
        filtro:"Vini Bianchi", 
        nomePiatto: "CHARDONNAY FRANCESE",
        descrizionePiatto: "Un vino bianco francese ricco e burroso, ideale per piatti a base di pesce e frutti di mare.",
        prezzoPiatto: "70.00",
        specialSpace: " "
    },
    {
        filtro:"Vini Bianchi",
        nomePiatto: "SAUVIGNON BLANC NEOZELANDESE",
        descrizionePiatto: "Un vino bianco neozelandese fresco e aromatico, con note di agrumi e erba tagliata.",
        prezzoPiatto: "50.00",
        specialSpace: " "
    },
    {
        filtro:"Amari",
        nomePiatto: "AMARO AVERNA",
        descrizionePiatto: "Un amaro italiano dal gusto equilibrato con note di erbe e agrumi.",
        prezzoPiatto: "12.00", 
        specialSpace: " ", 

    },
    {
        filtro:"Amari",
        nomePiatto: "FERNET-BRANCA",
        descrizionePiatto: "Un amaro argentino dall'aroma intenso e amarognolo.",
        prezzoPiatto: "15.00",
        specialSpace: "A bottiglia", 
    },
    {
        filtro: "Cocktail",
        nomePiatto: "MISTERIOSA SFUMATURA",
        descrizionePiatto: "Agrumato del pompelmo rosa con la dolcezza floreale della lavanda e il carattere distintivo dell'anice.",
        prezzoPiatto: "5.00", 
        specialSpace: " ",
    },
]

function createMenuElement(listaBevande, menuContainer)
{
    listaBevande.forEach(element => {
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
createMenuElement(listaBevande, document.querySelector(".thirdMenuSection__Container"));

function ordinamentofiltroBevande(listaBevande, filtro)
{
    let menuContainer = document.querySelector(".thirdMenuSection__Container");
    menuContainer.innerHTML = "";

    if(filtro == "tutti")
    {
        createMenuElement(listaBevande, menuContainer);
    } else {
    
    
        createMenuElement( listaBevande.filter(element => {
    
            if (filtro.toLowerCase() == element.filtro.toLowerCase())
                return true;
            else if (filtro.toLowerCase() == "nessuno")
            {
                return true;
            }
            
        }), menuContainer);
    }
}

const filtroBevandeAlcoliche = document.getElementById("filtroBevandeAlcoliche");
let filtroBevandeAlcolicheStatus = false;
const filtroBevandeNonAlcoliche = document.getElementById("filtroBevandeNonAlcoliche");
let filtroBevandeNonAlcolicheStatus = false;
const filtroBevandeViniRossi = document.getElementById("filtroBevandeViniRossi");
let filtroBevandeViniRossiStatus = false;
const filtroBevandeViniBianchi = document.getElementById("filtroBevandeViniBianchi");
let filtroBevandeViniBianchiStatus = false;
const filtroBevandeAmari = document.getElementById("filtroBevandeAmari");
let filtroBevandeAmariStatus = false;
const filtroBevandeCockTail = document.getElementById("filtroBevandeCockTail");
let filtroBevandeCockTailStatus = false;

filtroBevandeAlcoliche.addEventListener("click", function() {
    filtroBevandeAlcolicheStatus = !filtroBevandeAlcolicheStatus;
    if(filtroBevandeNonAlcolicheStatus)
    {
        filtroBevandeNonAlcolicheStatus = false;
    }
    if(filtroBevandeViniRossiStatus)
    {
        filtroBevandeViniRossiStatus = false;
    }
    if(filtroBevandeViniBianchiStatus)
    {
        filtroBevandeViniBianchiStatus = false;
    }
    if(filtroBevandeAmariStatus)
    {
        filtroBevandeAmariStatus = false;
    }
    if(filtroBevandeCockTail)
    {
        filtroBevandeCockTailStatus = false;
    }
    if(filtroBevandeAlcolicheStatus)
    {
        ordinamentofiltroBevande(listaBevande, "Alcoliche");
    } else
    {
        ordinamentofiltroBevande(listaBevande, "tutti")
    }
});

filtroBevandeNonAlcoliche.addEventListener("click", function() {
    filtroBevandeNonAlcolicheStatus = !filtroBevandeNonAlcolicheStatus;
    if(filtroBevandeAlcolicheStatus)
    {
        filtroBevandeAlcolicheStatus = false;
    }
    if(filtroBevandeViniRossiStatus)
    {
        filtroBevandeViniRossiStatus = false;
    }
    if(filtroBevandeViniBianchiStatus)
    {
        filtroBevandeViniBianchiStatus = false;
    }
    if(filtroBevandeAmariStatus)
    {
        filtroBevandeAmariStatus = false;
    }
    if(filtroBevandeCockTail)
    {
        filtroBevandeCockTailStatus = false;
    }
    if(filtroBevandeNonAlcolicheStatus)
    {
        ordinamentofiltroBevande(listaBevande, "Non Alcoliche");
    } else
    {
        ordinamentofiltroBevande(listaBevande, "tutti");
    }
});

filtroBevandeViniRossi.addEventListener("click", function() {
    filtroBevandeViniRossiStatus = !filtroBevandeViniRossiStatus;
    if(filtroBevandeAlcolicheStatus)
    {
        filtroBevandeAlcolicheStatus = false;
    }
    if(filtroBevandeNonAlcolicheStatus)
    {
        filtroBevandeNonAlcolicheStatus = false;
    }
    if(filtroBevandeViniBianchiStatus)
    {
        filtroBevandeViniBianchiStatus = false;
    }
    if(filtroBevandeAmariStatus)
    {
        filtroBevandeAmariStatus = false;
    }
    if(filtroBevandeCockTail)
    {
        filtroBevandeCockTailStatus = false;
    }
    if(filtroBevandeViniRossiStatus)
    {
        ordinamentofiltroBevande(listaBevande, "Vini Rossi");
    } else
    {
        ordinamentofiltroBevande(listaBevande, "tutti")
    }
});

filtroBevandeViniBianchi.addEventListener("click", function() {
    filtroBevandeViniBianchiStatus = !filtroBevandeViniBianchiStatus;
    if(filtroBevandeAlcolicheStatus)
    {
        filtroBevandeAlcolicheStatus = false;
    }
    if(filtroBevandeNonAlcolicheStatus)
    {
        filtroBevandeNonAlcolicheStatus = false;
    }
    if(filtroBevandeViniRossiStatus)
    {
        filtroBevandeViniRossiStatus = false;
    }
    if(filtroBevandeAmariStatus)
    {
        filtroBevandeAmariStatus = false;
    }
    if(filtroBevandeCockTail)
    {
        filtroBevandeCockTailStatus = false;
    }
    if(filtroBevandeViniBianchiStatus)
    {
        ordinamentofiltroBevande(listaBevande, "Vini Bianchi");
    } else
    {
        ordinamentofiltroBevande(listaBevande, "tutti")
    }
});

filtroBevandeAmari.addEventListener("click", function() {
    filtroBevandeAmariStatus = !filtroBevandeAmariStatus;
    if(filtroBevandeAlcolicheStatus)
    {
        filtroBevandeAlcolicheStatus = false;
    }
    if(filtroBevandeNonAlcolicheStatus)
    {
        filtroBevandeNonAlcolicheStatus = false;
    }
    if(filtroBevandeViniBianchiStatus)
    {
        filtroBevandeViniBianchiStatus = false;
    }
    if(filtroBevandeViniRossiStatus)
    {
        filtroBevandeViniRossiStatus = false;
    }
    if(filtroBevandeCockTailStatus)
    {
        filtroBevandeCockTailStatus = false;
    }
    if(filtroBevandeAmariStatus)
    {
        ordinamentofiltroBevande(listaBevande, "Amari");
    } else
    {
        ordinamentofiltroBevande(listaBevande, "tutti")
    }
});

filtroBevandeCockTail.addEventListener("click", function() {
    filtroBevandeCockTailStatus = !filtroBevandeCockTailStatus;
    if(filtroBevandeAlcolicheStatus)
    {
        filtroBevandeAlcolicheStatus = false;
    }
    if(filtroBevandeNonAlcolicheStatus)
    {
        filtroBevandeNonAlcolicheStatus = false;
    }
    if(filtroBevandeViniBianchiStatus)
    {
        filtroBevandeViniBianchiStatus = false;
    }
    if(filtroBevandeViniRossiStatus)
    {
        filtroBevandeViniRossiStatus = false;
    }
    if(filtroBevandeAmariStatus)
    {
        filtroBevandeAmariStatus = false;
    }
    if(filtroBevandeCockTailStatus)
    {
        ordinamentofiltroBevande(listaBevande, "Cocktail");
    } else
    {
        ordinamentofiltroBevande(listaBevande, "tutti")
    }
});

function activeFilterBox3()
{
    var menu = document.querySelector(".filterBox3__Container");
    if (menu.classList.contains("visible")) {
      menu.classList.remove("visible");
    } else {
      menu.classList.add("visible");
    }
}