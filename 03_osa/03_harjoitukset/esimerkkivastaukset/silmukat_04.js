// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty, 
// ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.

let parilliset = 0;

for (let kertalaskuri = 0; kertalaskuri < 6; kertalaskuri++) {
  let syote = Number(prompt("syötä numero"))
  console.log("syöte on:",syote);

  if (syote % 2 == 0){
    parilliset++
  }
}
console.log("parillisten määrä:",parilliset)



let laskuri = 0
let parillisetLuvut = 0

do {
  let input = Number(prompt("Anna lisää lukuja"))
  if (input % 2 == 0){
    parillisetLuvut++
  }
  laskuri++

} while (laskuri < 20)

console.log("Parillisia lukuja oli " + parillisetLuvut)


