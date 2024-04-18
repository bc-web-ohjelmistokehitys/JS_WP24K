// Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä 
// tulostaa pienimmän ja suurimman numeron.
let summa = 0;
let lukujenMaara = 0;
let maxLuku = -Infinity
let minLuku = Infinity


for (let i = 0; i < 5; i++){
  let syote = Number(prompt("Anna lukuja laskuihini, kiitos kaunis!"))
    
    if (isNaN(syote)){
      console.log(syote)
    } else {
      summa += syote
      lukujenMaara ++

      console.log("Summa nyt:", summa)
      console.log("Lukujen määrä nyt:",lukujenMaara)
      
      if (syote > maxLuku){
        maxLuku = syote
      }

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