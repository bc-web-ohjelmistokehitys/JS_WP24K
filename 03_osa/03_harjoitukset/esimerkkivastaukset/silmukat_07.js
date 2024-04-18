// Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä 
// tulostaa pienimmän ja suurimman numeron.
// Silmukoiden sisällä on monta "ylimääräistä" tulostusta, eli console.logia


let summa = 0;
let lukujenMaara = 0;
let maxLuku = -Infinity // ensimmäinen käyttäjän antama luku on isompi kuin tämä
let minLuku = Infinity // ensimmäinen käyttäjän antama luku on pienempi kuin tämä


for (let i = 0; i < 5; i++){
  console.log(`Tämä on ensimmäisen version kierros nro ${i+1}`)
  let syote = Number(prompt("Anna lukuja versioon, joka käyttää ääretöntä"))
    
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
        console.log("Isoin luku nyt:", maxLuku)
      }

      // katsotaan mikä annetuista luvuista on pienin
      if (syote < minLuku){
        minLuku = syote
        console.log("Pienin luku nyt:", minLuku)
      }
    }
}

let keskiarvo = summa/lukujenMaara;
console.log("Lopussa lukujen summa on:", summa)
console.log("Lopussa lukujen keskiarvo on:", keskiarvo)
console.log("Isoin annettu luku on:", maxLuku)
console.log("Pienin annettu luku on:", minLuku)


// tässä sama käyttäen taulukoita ja Math.min() sekä Math.max() metodeita


let summa2 = 0;
let lukujenMaara2 = 0;
let numerot = []


for (let i = 0; i < 5; i++){
  console.log(`Tämä on toisen version kierros nro ${i+1}`)
  let syote = Number(prompt("Anna lukuja versioon, joka käyttää taulukkoa"))
    
    // jos syöte ei ole luku, sitä ei huomioida
    if (isNaN(syote)){
      console.log(syote)
    // luvut otetaan mukaan laskuihin  
    } else {
      summa2 += syote
      lukujenMaara2 ++

      console.log("Summa nyt:", summa2)
      console.log("Lukujen määrä nyt:",lukujenMaara2)
      numerot.push(syote);
      console.log("Numerot nyt", numerot)
    }
}

let keskiarvo2 = summa2/lukujenMaara2;
console.log("Lopussa lukujen summa on:", summa2)
console.log("Lopussa lukujen keskiarvo on:", keskiarvo2)
console.log("Isoin annettu luku on:", Math.max(...numerot)) // huomaa 3 pistettä taulukon edessä!
console.log("Pienin annettu luku on:", Math.min(...numerot)) // huomaa 3 pistettä taulukon edessä!