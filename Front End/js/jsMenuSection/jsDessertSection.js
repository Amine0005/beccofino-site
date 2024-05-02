var listaDessert = [
    {
        filtro: "Vegetariano",
        nomePiatto: "TORTA AL CIOCCOLATO FONDENTE E LAMPONE",
        descrizionePiatto: "Torta al cioccolato fondente e lampone",
        prezzoPiatto: "20.00",
        specialSpace: " "
    },
    {
        filtro: "Vegetariano",
        nomePiatto: "PANNA COTTA ALLA VANIGLIA CON FRUTTI DI BOSCO",
        descrizionePiatto: "Una panna cotta cremosa alla vaniglia, accompagnata da una composta di frutti di bosco e foglioline di menta.",
        prezzoPiatto: "25.00",
        specialSpace: " "
    },
    { 
        filtro: "Vegano",
        nomePiatto: "TIRAMISÙ VEGANO",
        descrizionePiatto: "Uno strato di biscotti Savoiardi inzuppati nel caffè, alternati a uno strato di crema al mascarpone vegana e cacao amaro.",
        prezzoPiatto: "18.00",
        specialSpace: " "
    },
    {
        filtro: "Vegano",
        nomePiatto: "TORTA AL CIOCCOLATO E AVOCADO",
        descrizionePiatto: "Una torta al cioccolato umida e decadente preparata con avocado, servita con una salsa al cioccolato e fragole fresche.",
        prezzoPiatto: "30.00",
        specialSpace: " "
    },
    {
        filtro: "Senza lattosio", 
        nomePiatto: "CHEESECAKE SENZA LATTOSIO CON SALSA ALLE FRAGOLE",
        descrizionePiatto: "Una cheesecake cremosa senza lattosio su una crosta di biscotti senza lattosio, servita con una salsa alle fragole.",
        prezzoPiatto: "22.00",
        specialSpace: " "
    },
    {
        filtro: "Senza glutine", 
        nomePiatto: "TORTA DI MANDORLE SENZA GLUTINE CON GELATO ALLA VANIGLIA",
        descrizionePiatto: "Una torta alle mandorle senza glutine, servita con una pallina di gelato alla vaniglia senza glutine.",
        prezzoPiatto: "28.00",
        specialSpace: " "
        
    },
    {
        filtro: "Senza frutta secca",
        nomePiatto: "TORTA AL LIMONE SENZA FRUTTA SECCA",
        descrizionePiatto: "Una delicata torta al limone senza frutta secca, glassata con una glassa al limone e decorata con scorza di limone candita.",
        prezzoPiatto: "15.00",
        specialSpace: " "
    },
    {
        filtro: "Nessuno",
        nomePiatto: "TARTUFO AL CIOCCOLATO CON NOCCIOLE TOSTATE",
        descrizionePiatto: "Un tartufo al cioccolato fondente, ricoperto di nocciole tostate e servito con una salsa al cioccolato calda.",
        prezzoPiatto: "9.00",
        specialSpace: " "
    },
    {
        filtro: "Nessuno", 
        nomePiatto: "PANNA COTTA ALLA VANIGLIA CON COULIS DI FRUTTI DI BOSCO",
        descrizionePiatto: "Una panna cotta classica alla vaniglia, accompagnata da un coulis di frutti di bosco freschi.",
        prezzoPiatto: "9.00",
        specialSpace: " "
    },
    {
        filtro: "Nessuno",
        nomePiatto: "TORTA ALLE MELE CON GELATO ALLA CANNELLA",
        descrizionePiatto: "Una torta alle mele appena sfornata, servita calda con una pallina di gelato alla cannella e una spolverata di cannella in polvere.",
        prezzoPiatto: "15.00", 
        specialSpace: " ", 
    },
    {
        filtro: "Nessuno",
        nomePiatto: "SOUFFLÉ AL CIOCCOLATO CON GELATO ALLA VANIGLIA",
        descrizionePiatto: "Un soufflé al cioccolato appena sfornato, servito con una pallina di gelato alla vaniglia e una spolverata di zucchero a velo.",
        prezzoPiatto: "150.00",
        specialSpace: "A bottiglia", 
    },
    {
        filtro: "Nessuno",
        nomePiatto: "MOUSSE AL CIOCCOLATO BIANCO CON FRUTTI ROSSI",
        descrizionePiatto: "Una mousse leggera e cremosa al cioccolato bianco, servita con una selezione di frutti rossi freschi, come fragole, lamponi e mirtilli, per un contrasto di sapori e colori.",
        prezzoPiatto: "5.90", 
        specialSpace: " ",
    },
]

function createMenuElement(listaDessert, menuContainer)
{
    listaDessert.forEach(element => {
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
createMenuElement(listaDessert, document.querySelector(".secondMenuSection__Container"));

function ordinamentofiltroDessert(listaDessert, filtro)
{
    let menuContainer = document.querySelector(".secondMenuSection__Container");
    menuContainer.innerHTML = "";

    if(filtro == "tutti")
    {
        createMenuElement(listaDessert, menuContainer);
    } else {
    
    
        createMenuElement( listaDessert.filter(element => {
    
            if (filtro.toLowerCase() == element.filtro.toLowerCase())
                return true;
            else if (filtro.toLowerCase() == "nessuno")
            {
                return true;
            }
            
        }), menuContainer);
    }
}

const filtroDessertVegetariano = document.getElementById("filtroDessertVegetariano");
let filtroDessertVegetarianoStatus = false;
const filtroDessertVegano = document.getElementById("filtroDessertVegano");
let filtroDessertVeganoStatus = false;
const filtroDessertGlutine = document.getElementById("filtroDessertGlutine");
let filtroDessertGlutineStatus = false;
const filtroDessertLattosio = document.getElementById("filtroDessertLattosio");
let filtroDessertLattosioStatus = false;
const filtroDessertFruttaSecca = document.getElementById("filtroDessertFruttaSecca");
let filtroDessertFruttaSeccaStatus = false;

filtroDessertVegetariano.addEventListener("click", function() {
    filtroDessertVegetarianoStatus = !filtroDessertVegetarianoStatus;
    if(filtroDessertVeganoStatus)
    {
        filtroDessertVeganoStatus = false;
    }
    if(filtroDessertGlutineStatus)
    {
        filtroDessertGlutineStatus = false;
    }
    if(filtroDessertLattosioStatus)
    {
        filtroDessertLattosioStatus = false;
    }
    if(filtroDessertFruttaSeccaStatus)
    {
        filtroDessertFruttaSeccaStatus = false;
    }
    if(filtroDessertVegetarianoStatus)
    {
        ordinamentofiltroDessert(listaDessert, "vegetariano");
    } else
    {
        ordinamentofiltroDessert(listaDessert, "tutti")
    }
});

filtroDessertVegano.addEventListener("click", function() {
    filtroDessertVeganoStatus = !filtroDessertVeganoStatus;
    if(filtroDessertVegetarianoStatus)
    {
        filtroDessertVegetarianoStatus = false;
    }
    if(filtroDessertGlutineStatus)
    {
        filtroDessertGlutineStatus = false;
    }
    if(filtroDessertLattosioStatus)
    {
        filtroDessertLattosioStatus = false;
    }
    if(filtroDessertFruttaSeccaStatus)
    {
        filtroDessertFruttaSeccaStatus = false;
    }
    if(filtroDessertVeganoStatus)
    {
        ordinamentofiltroDessert(listaDessert, "vegano");
    } else
    {
        ordinamentofiltroDessert(listaDessert, "tutti");
    }
});

filtroDessertGlutine.addEventListener("click", function() {
    filtroDessertGlutineStatus = !filtroDessertGlutineStatus;
    if(filtroDessertVegetarianoStatus)
    {
        filtroDessertVegetarianoStatus = false;
    }
    if(filtroDessertVeganoStatus)
    {
        filtroDessertVeganoStatus = false;
    }
    if(filtroDessertLattosioStatus)
    {
        filtroDessertLattosioStatus = false;
    }
    if(filtroDessertFruttaSeccaStatus)
    {
        filtroDessertFruttaSeccaStatus = false;
    }
    if(filtroDessertGlutineStatus)
    {
        ordinamentofiltroDessert(listaDessert, "Senza glutine");
    } else
    {
        ordinamentofiltroDessert(listaDessert, "tutti")
    }
});

filtroDessertLattosio.addEventListener("click", function() {
    filtroDessertLattosioStatus = !filtroDessertLattosioStatus;
    if(filtroDessertVegetarianoStatus)
    {
        filtroDessertVegetarianoStatus = false;
    }
    if(filtroDessertVeganoStatus)
    {
        filtroDessertVeganoStatus = false;
    }
    if(filtroDessertGlutineStatus)
    {
        filtroDessertGlutineStatus = false;
    }
    if(filtroDessertFruttaSeccaStatus)
    {
        filtroDessertFruttaSeccaStatus = false;
    }
    if(filtroDessertLattosioStatus)
    {
        ordinamentofiltroDessert(listaDessert, "Senza lattosio");
    } else
    {
        ordinamentofiltroDessert(listaDessert, "tutti")
    }
});

filtroDessertFruttaSecca.addEventListener("click", function() {
    filtroDessertFruttaSeccaStatus = !filtroDessertFruttaSeccaStatus;
    if(filtroDessertVegetarianoStatus)
    {
        filtroDessertVegetarianoStatus = false;
    }
    if(filtroDessertVeganoStatus)
    {
        filtroDessertVeganoStatus = false;
    }
    if(filtroDessertLattosioStatus)
    {
        filtroDessertLattosioStatus = false;
    }
    if(filtroDessertGlutineStatus)
    {
        filtroDessertGlutineStatus = false;
    }
    if(filtroDessertFruttaSeccaStatus)
    {
        ordinamentofiltroDessert(listaDessert, "Senza Frutta Secca");
    } else
    {
        ordinamentofiltroDessert(listaDessert, "tutti")
    }
});

function activeFilterBox2()
{
    var menu = document.querySelector(".filterBox2__Container");
    if (menu.classList.contains("visible")) {
      menu.classList.remove("visible");
    } else {
      menu.classList.add("visible");
    }
}