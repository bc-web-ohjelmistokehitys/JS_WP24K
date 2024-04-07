# Ehtolauseet

Ehtolauseet ovat olennainen osa JavaScript-ohjelmointia, mahdollistaen päätöksenteon tiettyjen ehtojen perusteella. Tässä on strukturoitu lähestymistapa näiden käsitteiden ymmärtämiseen.

## Perus if-lauseke

If-lauseke arvioi ehtoa ja suorittaa koodilohkot sen perusteella, onko ehto tosi:

```js
if (ehto) {
  // Koodi, joka suoritetaan, jos ehto on tosi
}
```

Esimerkiksi:

```js
const ikä = 20;

if (ikä >= 18) {
  console.log("Aikuinen");
}
```

Tämä koodi tulostaa "Aikuinen", jos ikä on 18 tai enemmän.

## Else-lohkon lisääminen

Käsitelläksesi tapaukset, joissa if-ehto ei ole tosi, käytä else-lohkoa:

```js
const pistemäärä = 65;

if (pistemäärä >= 75) {
  console.log("Läpäisty");
} else {
  console.log("Hylätty");
}
```

Tämä tulostaa "Hylätty" pistemäärille, jotka ovat alle 75.

## Useita vaihtoehtoja varten käytä else if

Jos mahdollisia lopputuloksia on enemmän kuin kaksi, käytä else if:

```js
const lämpötila = 30;

if (lämpötila > 30) {
  console.log("Ulkoa on kuuma");
} else if (lämpötila === 30) {
  console.log("Ulkoa on lämmin");
} else {
  console.log("Ulkoa on viileää");
}
```

Tämä esimerkki tarkistaa useita ehtoja säästä.

## Ligatuurien ymmärtäminen

Ligatuurit ovat visuaalinen parannus joissain koodieditoreissa, joissa tietyt merkkien yhdistelmät näytetään yhtenäisessä glyyfissä:

- `>=` (suurempi tai yhtä suuri kuin)
- `<=` (pienempi tai yhtä suuri kuin)
- `===` (tiukka yhtäsuuruus)
- `!==` (tiukka eriarvoisuus)

Katso näistä lisää täältä: [Font Ligatures in VS Code - Youtube short](https://www.youtube.com/watch?v=ToIjkT54jko&ab_channel=VisualStudioCode)

## Yksinkertaistaminen paluulauseilla

Funktioita voidaan yksinkertaistaa poistamalla else, jos paluulause lopettaa funktion:

```js
function onAikuinen(ikä) {
  if (ikä >= 18) {
    return true;
  }
  return false;
}
```

Tämä funktio palauttaa välittömästi arvon tosi, jos ikä on 18 tai enemmän; muussa tapauksessa se palauttaa epätosi.

## Boolean arvon palautuminen suoraan

Palautettaessa boolean-arvoa, voit yksinkertaistaa funktiota palauttamalla itse ehdon:

```js
function onÄänioikeutettu(ikä) {
  return ikä >= 18;
}
```

Tämä palauttaa tosi tai epätosi sen mukaan, täyttyykö ikä ehto.

## Parillisten ja parittomien numeroiden tunnistaminen

Parillisen tai parittoman numeron tunnistamiseksi käytä jakojäännösoperaattoria (%):

```js
// Tarkistetaan parilliset numerot
8 % 2; // 0, siis parillinen
10 % 2; // 0, siis parillinen

// Tarkistetaan parittomat numerot
7 % 2; // 1, siis pariton
9 % 2; // 1, siis pariton
```

Esimerkki tästä if-lauseessa:

```js
function testParillinen(pariton) {
  if (pariton % 2 === 0) {
    return "Luku on parillinen";
  } else {
    return "Luku on pariton";
  }
}

// Käyttöesimerkki
console.log(testParillinen(4)); // Tulostaa: Luku on parillinen
console.log(testParillinen(7)); // Tulostaa: Luku on pariton
```

Jakojäännös 0 ilmaisee parillisen numeron, kun taas 1 ilmaisee parittoman numeron.

## switch-lause

switch-lause on vaihtoehto if-lauseille, kun sinun on tarkistettava useita ehtoja. Se on erityisen hyödyllinen, kun vertaat samaa muuttujaa eri arvoihin.

```js
switch (ilmaisu) {
  case arvo1:
    // Koodi, joka suoritetaan, kun ilmaisu on yhtä kuin arvo1
    break;
  case arvo2:
    // Koodi, joka suoritetaan, kun ilmaisu on yhtä kuin arvo2
    break;
  // Lisää tapauksia tarvittaessa
  default:
  // Koodi, joka suoritetaan, jos mitään tapausta ei vastaa
}
```

```js
let päivä = 3;

switch (päivä) {
  case 1:
    console.log("Maanantai");
    break;
  case 2:
    console.log("Tiistai");
    break;
  case 3:
    console.log("Keskiviikko");
    break;
  case 4:
    console.log("Torstai");
    break;
  case 5:
    console.log("Perjantai");
    break;
  case 6:
    console.log("Lauantai");
    break;
  case 7:
    console.log("Sunnuntai");
    break;
  default:
    console.log("Virheellinen päivä");
}
```

## Milloin käyttää switchiä ja milloin if-lausetta?

- Käytä `switch`-lauseita vertailtaessa samaa muuttujaa tai ilmaisua useisiin vakioarvoihin. Esimerkiksi viikonpäiviä on rajallinen määrä.
- Käytä `if`-lauseita, kun arvioidaan erilaisia ehtoja tai arvojen välejä.
