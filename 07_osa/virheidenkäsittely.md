# Virheidenkäsittely

Kun kyse on virheiden käsittelystä ja vianetsinnästä JavaScriptissä, erityisesti aloittelijoille, on tärkeää ymmärtää joitain peruskäsitteitä ja tekniikoita, jotka voivat merkittävästi helpottaa kehitysprosessia. Tässä opas aiemman esimerkin pohjalta, jossa suodatetaan parittomat vuodet taulukosta:

```javascript
function getOddYears(years) {
  return yeas.filter((year) => year % 2 !== 0); // Väärin kirjoitettu muuttujan nimi
}
```

Jos yrität ajaa tätä koodia, saat virhesanoman, joka osoittaa, että `yeas`-muuttujaa ei ole määritelty. Virhesanomien lukeminen ja ymmärtäminen on ensimmäinen askel vianetsinnässä.

## Konsoliin kirjoittaminen vianetsinnässä

Yksi yksinkertaisimmista ja samalla tehokkaimmista työkaluista vianetsinnässä on `console.log()`. Kirjoittamalla muuttujia tai lausekkeita konsoliin voit tarkistaa ohjelmasi tilan eri kohdissa.

```javascript
function getOddYears(years) {
  console.log("Years:", years); // Tarkista syöte
  const oddYears = years.filter((year) => year % 2 !== 0);
  console.log("Odd years:"; oddYears); // Tarkista tuloste
  return oddYears;
}
```

Monesti muuttujan arvo ei olekaan se, mitä sen luulee olevan.

## `debugger`-lausekkeen käyttö

`debugger`-lauseke voi pysäyttää suorituksen funktiossasi ja avata selaimen vianetsintätyökalut. Tämä mahdollistaa muuttujien tarkastelun, koodin vaiheittaisen läpikäynnin ja datan muutosten ymmärtämisen funktiossasi.

```javascript
function getOddYears(years) {
  debugger; // Suoritus pysähtyy tähän selaimessa
  return years.filter((year) => year % 2 !== 0);
}
```

Tämän avulla voit tarkistaa mihin asti ohjelmasti toimii kunnolla, ennen kuin se kaatuu virheeseen.

## Dokumentaation lukeminen

Sisäänrakennettujen metodien ymmärtäminen, niiden parametrit, paluuarvot ja mahdolliset sivuvaikutukset edellyttävät dokumentaation lukemista. Esimerkiksi tieto siitä, että `.filter()` ei muuta alkuperäistä taulukkoa vaan palauttaa uuden taulukon, on olennaista ja asia, joka voi vaikuttaa koodiin.

Joten ohjelmassa on ongelmia, tarkista dokumentaatiosta miten metodit toimivat.

## Virhetyypit JavaScriptissä

JavaScriptissä on useita sisäänrakennettuja virhetyyppejä, mukaan lukien `ReferenceError`, `TypeError`, `SyntaxError` ja muita. Näiden tunnistaminen voi auttaa sinua nopeasti diagnosoimaan ongelmia.

Erilaisten virhetyyppien ymmärtäminen JavaScriptissä voi merkittävästi auttaa virheiden diagnosoinnissa ja korjaamisessa koodissasi tehokkaammin. Tässä on muutamia yleisiä virhetyyppejä, joita kohtaat JavaScriptissä, yhdessä selitysten ja esimerkkien kanssa jokaisesta:

### SyntaxError

Ilmenee, kun koodisi syntaksissa on ongelma eli asiaa ei ilmaista oikeassa muodossa. Tämä voi johtua puuttuvista sulkeista, kirjoitusvirheistä tai kielen rakenteiden virheellisestä käytöstä.

```javascript
function myFunction() {
    console.log("Hello World";
}
// Puuttuva sulkeva kaarisulku aiheuttaa SyntaxError-virheen
```

### ReferenceError

Viittausvirhe näkyy, kun yrität viitata muuttujaan, jota ei ole määritelty.

```javascript
function showName() {
  console.log(name);
}
showName(); // Heittää ReferenceErrorin, jos 'name' ei ole määritelty
```

### TypeError

Tyyppivirhe ilmenee, kun operaatio suoritetaan väärän tyyppisellä arvolla. Esimerkiksi yritetään kutsua jotain, joka ei ole funktio, tai käyttää ominaisuutta `undefined`-arvolla.

```javascript
let someText = "Hei, maailma!";
someText.split(); // Toimii hyvin
someText = null;
someText.split(); // Heittää TypeErrorin, koska null-arvolle ei voi käyttää split-metodia
```

### RangeError

Tämä virhe heitetään, kun arvo ei ole odotetussa välissä. Esimerkiksi yritettäessä luoda taulukkoa negatiivisella pituudella.

```javascript
let numbers = new Array(-5); // Heittää RangeErrorin
```

### URIError

Tapaa, kun globaaleja URI-käsittelyfunktioita kuten `encodeURI()` tai `decodeURI()` käytetään virheellisesti välittämällä virheellisiä parametreja.

#### Esimerkki:

```javascript
decodeURI("%"); // Heittää URIErrorin, koska URI-komponentti on epätäydellinen
```

# Vianmääritysvinkit

- **Käytä `console.log`-tarkoituksenmukaisesti** koodin toiminnan ja ohjelman tilan tarkasteluun.
- **Hyödynnä katkaisupisteitä ja vianmääritystyökaluja** selaimen kehittäjäkonsolissa koodin suorituksen läpikäymiseen.
- **Lue virheviestit huolellisesti;** ne tarjoavat usein arvokkaita vihjeitä siitä, missä ja miksi virhe tapahtui.

## Try-Catch virheiden käsittelyssä

Joskus virheitä tapahtuu koodin suorituksen aikana, joita et ole ennakoineet. `try-catch`-lohkojen käyttäminen mahdollistaa näiden virheiden käsittelemisen sulavasti ilman skriptin kaatumista. Voit ottaa kiinni virheet ja päättää, miten niihin reagoidaan sen sijaan, että antaisit skriptin epäonnistua.

```javascript
function getOddYears(years) {
  try {
    return years.filter((year) => year % 2 !== 0);
  } catch (error) {
    console.error("Tapahtui virhe:", error);
  }
}
```

```javascript
try {
  // Yritä riskialtista toimintoa
  let result = riskyOperation();
  console.log("Toiminto onnistui:", result);
} catch (error) {
  // Käsittele tapahtuneet virheet
  console.error("Virhe tapahtui toiminnon aikana:", error);
} finally {
  // Puhdistuskoodi, joka suoritetaan riippumatta toiminnon tuloksesta
  console.log("Toimintayritys päättyi.");
}
```

## throw Error

`throw`-lauseke mahdollistaa mukautetun virheen luomisen ja sen "heittämisen" poikkeuksena. Kun `throw`-lausekkeella heitetään poikkeus käyttäen `throw`, nykyisen funktion suoritus keskeytyy, ja ohjaus siirtyy ensimmäiseen `catch`-lohkoon kutsupinossa. Jos mitään `catch`-lohkoa ei ole olemassa kutsujafunktioissa, ohjelma päättyy, ja näytetään virheviesti.

`new Error()`-rakentaja luo virheen objektiesimerkin. `Error`-objekti voi valinnaisesti sisältää viestin, joka kuvaa virhettä. Yhdistettynä `throw new Error()` on tapa luoda mukautettu virhe ja keskeyttää suorituksen, tarjoten mahdollisuuden käsitellä virhe siististi `try...catch`-rakenteilla.

```js
throw new Error("Virheviesti");
```

```js
function tarkistaNumero(num) {
  if (isNaN(num)) {
    throw new Error("Syötteen on oltava numero");
  }
  console.log("Numero on", num);
}

try {
  tarkistaNumero("test"); // Tämä ei ole numero, joten virhe heitetään
} catch (error) {
  console.error(error.message); // Lokittaa "Syötteen on oltava numero"
}
```
