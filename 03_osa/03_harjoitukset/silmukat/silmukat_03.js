// Luo ohjelma, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä) ja ajan (tunteina) ja laskee sitten keskinopeuden. 
//Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi. Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä.

let etaisyys, aika;

while (etaisyys !== 0) {
  etaisyys = Number(prompt('Syötä etäisyys kilometreinä'));

  if (etaisyys === 0) {
    console.log('Etäisyys on 0 - peli päättyy');
    break;
  }

  aika = Number(prompt('Syötä aika tunteina'));
  let keskinopeus = etaisyys / aika;
  console.log('Keskinopeus on:', keskinopeus);
}
