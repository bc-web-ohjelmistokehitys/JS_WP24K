// Luo ohjelma, joka pyytää jatkuvasti käyttäjää syöttämään 
//etäisyyden (kilometreinä) ja ajan (tunteina) ja laskee sitten keskinopeuden. 
//Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi. 
//Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä.

let etaisyys, aika;
while (etaisyys !== 0 ){
  etaisyys = Number(prompt("syötä etäisyys kilometreinä"))

  if (etaisyys === 0){
    console.log("Ei enempää keskinopeuksia")
    break;
  }
  aika = Number(prompt("Anna aika tunteina"))
  
  let keskinopeus = etaisyys / aika;
  let pyoristetty = keskinopeus.toFixed(1);
  console.log(`Kun ajetaan ${etaisyys} kilometriä ${aika} tunnin aikana, 
  keskinopeus on ${pyoristetty} km/h`)
}
