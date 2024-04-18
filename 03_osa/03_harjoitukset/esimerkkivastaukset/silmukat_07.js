// Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä 
// tulostaa pienimmän ja suurimman numeron.
let summa = 0;
let lukujenMaara = 0;
let maxLuku = -Infinity // ensimmäinen käyttäjän antama luku on isompi kuin tämä
let minLuku = Infinity // ensimmäinen käyttäjän antama luku on pienempi kuin tämä


for (let i = 0; i < 5; i++){
  let syote = Number(prompt("Anna lukuja laskuihini, kiitos kaunis!"))
    
    // jos syöte ei ole luku, sitä ei huomioida
    if (isNaN(syote)){
      console.log(syote)
    // luvut otetaan mukaan laskuihin  
    } else {
      summa += syote
      lukujenMaara ++

      console.log("Summa nyt:", summa)
      console.log("Lukujen määrä nyt:",lukujenMaara)
      
      // katsotaan mikä annetuista luvuista on suurin
      if (syote > maxLuku){
        maxLuku = syote
      }

      // katsotaan mikä annetuista luvuista on pienin
      if (syote < minLuku){
        minLuku = syote
      }
    }
}

let keskiarvo = summa/lukujenMaara;
console.log("Lopussa lukujen summa on:", summa)
console.log("Lopussa lukujen keskiarvo on:", keskiarvo)
console.log("Isoin annettu luku on:", maxLuku)
console.log("Pienin annettu luku on:", minLuku)