# Funktiot - kertausta ja vähän uutta

Funktiot ovat yksi JavaScriptin peruspalikoista. Funktio on joukko lauseita, jotka suorittavat tehtävän tai laskevat jonkin arvon.

## Funktion Määrittäminen

Funktio määritellään käyttämällä `function`-avainsanaa, perään nimi, parametrien lista sulkujen sisällä `()`, ja koodilohko aaltosulkeiden sisällä `{}`.

```js
function tervehdi() {
  console.log("Hei, maailma!");
}
tervehdi(); // Kutsuu funktiota
```

## Funktioilmaisut

Funktioilmaisut mahdollistavat nimettömien funktioiden (=funktio ilman nimeä) luomisen ja niiden asettamisen muuttujiin.

```js
const neliö = function (luku) {
  return luku * luku;
};
console.log(neliö(4)); // 16
```

## Nuolifunktiot (ES6)

ES6 esitteli nuolifunktiot, tarjoten tiiviimmän syntaksin funktioiden kirjoittamiseen.

```js
const lisää = (a, b) => a + b;
console.log(lisää(2, 3)); // 5
```

### Mitä eroa?

Kirjoitusasun lisäksi yllä esitetyt kolme tapaa eroavat yhdellä tavalla: Funktiot, jotka on määritelty, voidaan hoistata. Eli niitä voidaan kutsua ennen niiden määrittelyä. Funktioilmaisuja ja nuolifunktioita ei voi hoistata. Kuten jo aiemmin on todettu, hoistaaminen ei yleensä ole järkevää.

Käytä sitä tapaa, josta tykkäät eniten.

## Parametrit ja argumentit

Funktiot voivat ottaa parametreja, jotka toimivat paikkamerkkeinä arvoille, jotka välitetään funktiolle, kun sitä kutsutaan.

```js
// a ja b ovat parametreja
function summa(a, b) {
  return a + b;
}

// 5 ja 7 ovat argumentteja
console.log(summa(5, 7)); // 12
```

#### Entä jos parametri jää antamatta?

Mieti hetki seuraavaa funktiota:

```js
function addOne(number) {
  return number + 1;
}
addOne(2); // Palauttaa 3
addOne(5); // Palauttaa 6
addOne(); // Mitä tämä palauttaa?
```

Joissakin ohjelmointikielissä addOne()-funktion kutsuminen ilman argumentteja voisi johtaa virheeseen. Kuitenkin JavaScript käsittelee tämän sulavasti ja jatkaa suoritusta ilman epäonnistumista.

Kun argumenttia ei anneta, `number` tulee määrittelemättömäksi (undefined), ja funktio palauttaa `undefined + 1`, joka on `NaN` (ei-luku). Tämän välttämiseksi voit käyttää `if`-ehtolauseita tai oletusarvoisia parametreja.

### Oletusarvot parametreille

Oletusarvot mahdollistavat oletusarvon määrittämisen yhdelle tai useammalle parametrille, kun niitä ei anneta funktion kutsussa. Tämä voi estää ei-toivotut tulokset, kuten `NaN`:

```js
function lisääYksi(numero = 0) {
  return numero + 1;
}
lisääYksi(2); // Palauttaa 3
lisääYksi(5); // Palauttaa 6
lisääYksi(); // Palauttaa 1
```

`lisääYksi()` -funktiota kutsuttaessa ilman argumentteja `numero` oletetaan arvoksi `0`, mikä estää `NaN`:n ja yksinkertaistaa funktion toimintaa.

Samanlainen esimerkki on tervetuloafunktio:

```js
function tervetuloaKäyttäjä(nimi = "käyttäjä") {
  return `Hei ${nimi}`;
}

tervetuloaKäyttäjä("Sam"); // Tuottaa "Hei Sam"
tervetuloaKäyttäjä(); // Tuottaa "Hei käyttäjä"
```

Käytä oletusarvoparametreja lisäämään funktion joustavuutta ja luotettavuutta.

## Return-lause

`return`-lauseella palautetaan arvo funktiosta.

```js
function suurin(a, b) {
  return a > b ? a : b;
}
console.log(suurin(10, 20)); // 20
```

## Käyttöalue (Scope) funktioissa

Funktiossa määritellyt muuttujat eivät ole käytettävissä funktion ulkopuolelta. Näitä muuttujia kutsutaan funktion käyttöalueeksi.

```js
function omaFunktio() {
  let omaMuuttuja = "paikallinen";
  console.log(omaMuuttuja); // Saavutettavissa tässä
}
omaFunktio();
console.log(omaMuuttuja); // Virhe: omaMuuttuja ei ole määritelty
```

## Korkeamman asteen funktiot

Korkeamman asteen funktio on funktio, joka ottaa toisen funktion argumenttina, palauttaa funktion tai molemmat.

```js
function tervehdi(nimi) {
  return function (viesti) {
    console.log(`${viesti}, ${nimi}`);
  };
}
const tervehdiJohn = tervehdi("John");
tervehdiJohn("Hei"); // "Hei, John"
```

Yksi yleinen tapa käyttää korkeamman asteen funktioita on ottaa yksi tai useampi funktio argumentteina. Tätä lähestymistapaa nähdään usein taulukkomenetelmissä, kuten `.map()`, `.filter()` ja `.reduce()`. Esimerkiksi `.map()` ottaa funktion ja soveltaa sitä jokaiseen taulukon elementtiin, palauttaen uuden taulukon muunnettujen elementtien kanssa.

```js
const numerot = [1, 2, 3, 4];
const tuplattu = numerot.map((numero) => numero * 2);
// tuplattu on nyt [2, 4, 6, 8]
```

### Käyttö takaisinkutsuissa ja tapahtumankäsittelijöissä

Korkeamman asteen funktioita käytetään myös yleisesti takaisinkutsuissa, erityisesti asynkronisten toimintojen ja tapahtumankäsittelyn yhteydessä. JavaScriptissä funktiot voidaan siirtää takaisinkutsuiksi suoritettavaksi myöhemmin tapahtuman tai asynkronisen toiminnon suorittamisen jälkeen.

```js
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Nappia klikattiin!");
});
```

## Paluuarvottomat funktiot

Funktiot, jotka eivät palauta arvoa eksplisiittisesti, tai jotka lopettavat suorituksen kohtaamatta `return`-lauseketta, kutsutaan usein "paluuarvottomiksi" funktioiksi. On kuitenkin huomioitava, että termiä "paluuarvoton" ei käytetä virallisessa JavaScript-määrityksessä kuvaamaan tällaisia funktioita; sen sijaan ne ovat yksinkertaisesti funktioita ilman paluuarvoa.

Tässä mitä tapahtuu näiden funktioiden kanssa:

- Jos JavaScript-funktioilla ei ole paluulauseketta, se suorittaa koodin sisällä, mutta palauttaa oletusarvoisesti `undefined`.
- Jos funktiolla on paluulauseke, mutta se ei palauta mitään arvoa, tai jos paluulauseke on tyhjä, funktio palauttaa myös `undefined`.

```js
// Funktio ilman paluulauseketta
function tulostaViesti(viesti) {
  console.log(viesti);
  // palauttaa epäsuorasti undefined
}

// Funktio paluulausekkeella, mutta ilman palautusarvoa
function teeJotain() {
  // jotain koodia...
  return; // palauttaa silti undefinedin
}

let tulos1 = tulostaViesti("Hei, maailma!");
let tulos2 = teeJotain();

console.log(tulos1); // undefined
console.log(tulos2); // undefined
```

## Best practices

- Käytä selkeitä ja kuvaavia nimiä funktioille.
- Funktioiden tulisi olla pieniä ja keskittyä tiettyyn tehtävään.
- Käytä oletusparametreja asettamaan oletusarvot funktioparametreille.
- Vältä globaaleja muuttujia.
- Käytä nuolifunktioita tiiviisiin yksirivisiin ilmaisuihin.
