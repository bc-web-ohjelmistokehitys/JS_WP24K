// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty, 
//ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta. 

let summa = 0;
let laskuri = 0;
let parillisetLuvut = 0;

do {
  let syote = Number(prompt('Syötä luku'));
  summa += syote;
  laskuri++;
  if (syote % 2 === 0) {
    parillisetLuvut++;
  }
} while (laskuri !== 20);

console.log(`Parillisia lukuja oli ${parillisetLuvut}`);
