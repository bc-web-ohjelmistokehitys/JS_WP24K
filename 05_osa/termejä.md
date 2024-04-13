## Iterointi (iteration)

Iterointi tarkoittaa prosessia, jossa käydään läpi sarja elementtejä yksi kerrallaan, yleensä suorittamalla tietty toiminto jokaiselle elementille. Tämä voi tapahtua esimerkiksi taulukossa olevien arvojen läpikäynnissä tai avain-arvo -pareja sisältävässä tietorakenteessa.

## Pistenotaatio (dot notation)

JS-pistenotaatio on tapa viitata tai käyttää objektien ominaisuuksia ja metodeita JavaScriptissä. Se koostuu objektin nimestä, pisteen (.) ja ominaisuuden tai metodin nimestä. Tämä antaa mahdollisuuden suoraan käyttää objektin ominaisuuksia tai kutsua sen metodeita.

Alla esimerkki, jossa numerot-taulukkoon viitataan suoraan pistenotaation avulla ja lisätään uusi elementti pop()-metodilla

```js
let numerot = [1, 3, 5, 7];
numerot.pop(9); //lisää numeron 9 taulukon loppuun
```

Myös vanha tuttumme console.log käyttää _console_-objektiin _log_-metodia.

## Takaisinkutsufunktio (call back funktion)

Takaisinkutsufunktio on funktio, joka **annetaan toiselle funktiolle parametrina**, ja sitä kutsutaan myöhemmin, yleensä kun tietyt ehdot tai tapahtumat ovat täyttyneet.

Takaisinkutsufunktioita käytetään usein asynkronisten toimintojen, kuten ajastettujen tehtävien tai verkko-pyyntöjen, käsittelyssä. Ne tarjoavat joustavan tavan suorittaa toimintoja eri ajoituksissa tai tapahtumissa.

## Asynkronisuus

Asynkronisuus viittaa ohjelmointitapaan, jossa tietyt tehtävät suoritetaan erillään toisistaan, "epäsynkassa". Sen sijaan, että ohjelma odottaisi yhden tehtävän valmistumista ennen kuin se siirtyy seuraavaan, asynkronisessa ohjelmoinnissa tehtävät voidaan suorittaa samanaikaisesti tai vuorotellen, jolloin ohjelman suoritus ei pysähdy odottamaan yksittäisten tehtävien valmistumista.

Tämä on erityisen hyödyllistä tehtävissä, jotka voivat kestää pitkään, kuten tiedon lataaminen verkosta tai suorittaminen monimutkaisten laskelmien kanssa. Sen sijaan että ohjelma pysähtyisi odottamaan tiedon lataamista tai laskelmien suorittamista, se voi jatkaa muiden tehtävien suorittamista samalla, kun odottaa toisten tehtävien valmistumista. Tämä parantaa ohjelman suorituskykyä ja käytettävyyttä, koska käyttäjä ei joudu odottamaan tehtävien valmistumista ennen kuin voi jatkaa toimintojaan. Näitä ei tehdä vielä tässä vaiheessa.

## Best Practice eli suositellut käytännöt

Koska koodatessa samaan lopputulokseen voi päätyä montaa eri kautta, on hyvä välillä miettiä mikä olisi paras tapa tietyn asian toteuttamiseen. _Best practices_ ovat käyttötapoja, jotka alalla on havaittu parhaiten toimiviksi. Ne eivät ole ainoita vaihtoehtoja, mutta yleensä toimivat paremmin ja varmemmin kuin muut.
