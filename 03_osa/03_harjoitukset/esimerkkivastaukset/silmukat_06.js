/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/


let summa = 0;
let lukujenMaara = 0;

while (true) {
    let numero = parseFloat(prompt("Syötä numero:"));

    summa += numero;
    lukujenMaara++;
    let vastaus;
    
    do {
        vastaus = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");

        if (vastaus !== 'k' && vastaus !== 'e') {
            // Jos vastaus ei ole 'k' tai 'e', näytä ilmoitus ja pyydä uutta vastausta
            alert("Virheellinen syöte. Vastaa 'k' tai 'e'.");
        }
    } while (vastaus !== 'k' && vastaus !== 'e');

    // Jos vastaus on 'e', lopeta
    if (vastaus === 'e') {
        break;
    }
}

// Laske keskiarvo
let keskiarvo = summa / lukujenMaara;

// Näytä keskiarvo
console.log("Kaikkien syötettyjen numeroiden keskiarvo:", keskiarvo);
