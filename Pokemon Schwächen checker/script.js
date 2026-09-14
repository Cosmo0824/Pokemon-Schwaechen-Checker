const schwaechen= {
    normal: ["Kampf"],
    feuer: ["Wasser", "Boden", "Gestein"],
    wasser: ["Pflanze", "Elektro"],
    elektro: ["Boden"],
    pflanze: ["Feuer", "Eis", "Gift", "Käfer", "Flug"],
    eis: ["Feuer", "Gestein", "Kampf","Stahl"],
    kampf: ["Flug", "Psycho", "Fee"],
    gift: ["Boden", "Psycho"],
    boden: ["Wasser", "Pflanze", "Eis"],
    flug: ["Elektro", "Eis", "Gestein"],
    psycho: ["Käfer", "Geist", "Unlicht"],
    käfer: ["Feuer", "Flug", "Gestein"],
    gestein: ["Wasser", "Pflanze", "Kampf","Boden", "Stahl"],
    geist: ["Geist", "Unlicht"],
    drache: ["Eis", "Drache", "Fee"],
    unlicht: ["Kampf", "Käfer", "Fee"],
    stahl: ["Feuer", "Kampf", "Boden"],
    fee: ["Gift", "Stahl"]
};
const resistenzen= {
    normal: [],
    feuer: ["Feuer", "Pflanze", "Eis", "Käfer", "Stahl", "Fee"],
    wasser: ["Feuer", "Wasser", "Eis", "Stahl"],
    elektro: ["Elektro", "Flug", "Stahl"],
    pflanze: ["Wasser", "Elektro", "Pflanze", "Boden"],
    eis: ["Eis"],
    kampf: ["Käfer", "Gestein", "Unlicht"],
    gift: ["Pflanze", "Kampf", "Gift", "Fee"],
    boden: ["Gift", "Gestein"],
    flug: ["Pflanze", "Kampf", "Käfer"],
    psycho: ["Kampf", "Psycho"],
    käfer: ["Pflanze", "Kampf", "Boden"],
    gestein: ["Normal", "Feuer", "Gift", "Flug"],
    geist: ["Gift", "Käfer"],
    drache: ["Feuer", "Wasser", "Elektro", "Pflanze"],
    unlicht: ["Geist", "Unlicht"],
    stahl: ["Normal", "Pflanze", "Eis", "Flug", "Psycho", "Käfer", "Gestein", "Drache", "Stahl", "Fee"],
    fee: ["Kampf", "Käfer", "Unlicht"]
}
const immunitaeten= {
    normal: ["Geist"],
    feuer: [],
    wasser: [],
    elektro: [],
    pflanze: [],
    eis: [],
    kampf: [],
    gift: [],
    boden: ["Elektro"],
    flug: ["Boden"],
    psycho: [],
    käfer: [],
    gestein: [],
    geist: ["Normal", "Kampf"],
    drache: [],
    unlicht: ["Psycho"],
    stahl: ["Gift"],
    fee: ["Drache"]
}

function schwaechenBerechnung() {
    const typ1= document.getElementById("typ1").value;
    const typ2= document.getElementById("typ2").value;
    const ergebnis= document.getElementById("ergebnis");

    if (typ1 === "") {
        ergebnis.innerHTML = "BItte wähle mindestens einen Typen aus.";
        return;
    }
    let schwaechenDesPokemons = [];
    let resistenzenDesPokemons = [];
    let immunitaetenDesPokemons = [];
    let schwaechen2 = [];
    let schwaechenNurTyp1= [];
    let schwaechenNurTyp2= [];
    let resistenzenNurTyp1= [];
    let resistenzenNurTyp2= [];


    schwaechenDesPokemons.push(...schwaechen[typ1]);
    resistenzenDesPokemons.push(...resistenzen[typ1]);
    immunitaetenDesPokemons.push(...immunitaeten[typ1]);
    schwaechen2.push(...schwaechen[typ1]);
    schwaechenNurTyp1.push(...schwaechen[typ1]);
    resistenzenNurTyp1.push(...resistenzen[typ1]);
    if (typ2 !== "") {
         schwaechenDesPokemons.push(...schwaechen[typ2]);
            resistenzenDesPokemons.push(...resistenzen[typ2]);
            immunitaetenDesPokemons.push(...immunitaeten[typ2]);
            schwaechen2.push(...schwaechen[typ2]);
            schwaechenNurTyp2.push(...schwaechen[typ2]);
            resistenzenNurTyp2.push(...resistenzen[typ2]);
    }
    for (let i = 0; i < schwaechenDesPokemons.length; i++) {
        if (resistenzenDesPokemons.includes(schwaechenDesPokemons[i])) {
            schwaechenDesPokemons.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < schwaechenDesPokemons.length; i++) {
        if (immunitaetenDesPokemons.includes(schwaechenDesPokemons[i])) {
            schwaechenDesPokemons.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < resistenzenDesPokemons.length; i++) {
        if (immunitaetenDesPokemons.includes(resistenzenDesPokemons[i])) {
            resistenzenDesPokemons.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < resistenzenDesPokemons.length; i++) {
        if (schwaechen2.includes(resistenzenDesPokemons[i])) {
            resistenzenDesPokemons.splice(i, 1);
            i--;
        }
    }
     for (let i = 0; i < schwaechenDesPokemons.length; i++) {
    let index = i;
    for (let j = 0; j < schwaechenDesPokemons.length; j++) {
        if(j !== index && schwaechenDesPokemons[j] === schwaechenDesPokemons[index]) {
            schwaechenDesPokemons.splice(j, 1);
            j--;
        }
    }
}
    for (let i = 0; i < resistenzenDesPokemons.length; i++) {
    let index = i;
    for (let j = 0; j < resistenzenDesPokemons.length; j++) {
        if(j !== index && resistenzenDesPokemons[j] === resistenzenDesPokemons[index]) {
            resistenzenDesPokemons.splice(j, 1);
            j--;
        }
    }
}
    if (typ2 !== ""){
    for (let i = 0;i < schwaechenNurTyp2.length; i++) {
    if (schwaechenNurTyp1.includes(schwaechenNurTyp2[i])) {
     let index = i
     for (let j = 0; j < schwaechenDesPokemons.length; j++) {
        if (schwaechenDesPokemons[j] === schwaechenNurTyp2[index]) {
           let doopelteSchwäche = schwaechenDesPokemons[j];
           schwaechenDesPokemons.splice(j, 1);
           doopelteSchwäche +=" (doppelte Schwäche)";
           schwaechenDesPokemons.push(doopelteSchwäche);
        }
    }
}
    }
}
    if (typ2 !== ""){
    for (let i = 0;i < resistenzenNurTyp2.length; i++) {
    if (resistenzenNurTyp1.includes(resistenzenNurTyp2[i])) {
     let index = i
     for (let j = 0; j < resistenzenDesPokemons.length; j++) {
        if (resistenzenDesPokemons[j] === resistenzenNurTyp2[index]) {
           let doopelteResistenz = resistenzenDesPokemons[j];
           resistenzenDesPokemons.splice(j, 1);
           doopelteResistenz +=" (doppelte Resistenz)";
           resistenzenDesPokemons.push(doopelteResistenz);
        }
    }
    }
}
    }
    ergebnis.innerHTML = "<h2>Schwächen:</h2>"+"<p>" + schwaechenDesPokemons.join("<br>")+"</p>";
    ergebnis.innerHTML += "<h2>Resistenzen:</h2>"+"<p>" + resistenzenDesPokemons.join("<br>")+"</p>";
    ergebnis.innerHTML += "<h2>Immunitäten:</h2>"+"<p>" + immunitaetenDesPokemons.join("<br>")+"</p>";



}