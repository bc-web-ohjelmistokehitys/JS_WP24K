# Taulukot

JavaScriptissä taulukot (eng. **_array_**) ovat tehokkaita ja joustavia rakenteita järjestettyjen tietokokoelmien tallentamiseen.

Taulukossa käytetään hakasulkeita [] ja elementit erotetaan toisistaan pilkulla.

## Taulukoiden luominen

```javascript
const tyhjäTaulukko = [];
const numerotTaulukko = [1, 2, 3, 4];
const merkkijonoTaulukko = ["a", "b", "c"];
const sekalainenTaulukko = [1, "a", true, null];
```

### Const vai let taulukkoa luodessa?

Kun käytät taulukon luomisessa `const`, JavaScript 'lukitsee' luomasi taulukon kyseiseen nimeen. `Let` ei tätä tee.

```js
let myArray = [1, 2, 3];
myArray = [4, 5, 6]; // Taulukon muuttaminen toiseksi taulukoksi onnistuu
```

```js
const myArray = [1, 2, 3];
myArray = [4, 5, 6]; // ERROR! taulukkoa ei saa vaihtaa toiseksi

// Voit vaihtaa kaikki arvot, mutta siihen tarvitaan metodia
```

Jos käytät `let` sanaa, nimeen liitetty arvo voi vaihtua myös muuksi kuin taulukoksi

```js
let myArray = [3, 5, 6];
myArray = "example string"; // Tämä toimii
```

```js
const myArray = [3, 5, 6];
myArray = "example string"; // ERROR! myArray voi olla vain alkuperäinen taulukko
```

**Vaikka käyttäisit `const` taulukkoa luodessa, voit edelleen muokata arvoja taulukon sisällä eli esimerkiksi lisätä ja poistaa sieltä arvoja.**

Yleisesti ottaen kannattaa käyttää `const` luodessaan taulukkoa, jotta ei vahingossa tee muutoksia tähän kyseiseen taulukkoon.

## Metodien kategoriat

### Elementtien lisääminen/poistaminen

#### .push() / .pop()

Lisää tai poista elementtejä taulukon **lopusta**.

```javascript
let hedelmät = ["omena", "banaani"];
hedelmät.push("appelsiini"); // ['omena', 'banaani', 'appelsiini']
hedelmät.pop(); // ['omena', 'banaani']
```

#### .unshift() / .shift()

Lisää tai poista elementtejä taulukon **alusta**.

```javascript
hedelmät.unshift("mansikka"); // ['mansikka', 'omena', 'banaani']
hedelmät.shift(); // ['omena', 'banaani']
```

#### .splice()

Lisää, poistaa tai korvaa elementtejä **missä tahansa indeksissä**. Sulkujen sisään määritellään ensin indeksipaikka, sitten kuinka monta poistetaan (valinnainen) ja lopuksi mitä lisätään (valinnainen).

```javascript
hedelmät.splice(1, 0, "mango"); // Lisää 'mango' indeksiin 1
```

### Elementtien etsiminen

#### .indexOf() / .lastIndexOf()

Etsii elementin indeksin.

```javascript
const numerot = [1, 2, 3, 2, 1];
numerot.indexOf(2); // 1
numerot.lastIndexOf(2); // 3
```

#### .find()

Palauttaa **ensimmäisen elementin**, joka täyttää ehdot.

```javascript
const löydetty = numerot.find((elementti) => elementti > 2);
console.log(löydetty); // 3
```

#### .filter()

Palauttaa uuden taulukon, joka sisältää **kaikki** ehdot täyttävät elementit.

```javascript
const suodatettu = numerot.filter((elementti) => elementti > 1);
console.log(suodatettu); // [2, 3, 2]
```

### Taulukon muuttaminen

#### .map()

Luo uuden taulukon ja käsittelee jokaisen elementti funktion avulla.
Alla luodaan uusi taulukko, jossa on numerot-taulukon kaikki arvot kahdella kerrottuna.

```javascript
const tuplattu = numerot.map((elementti) => elementti * 2);
console.log(tuplattu); // [2, 4, 6, 4, 2]
```

#### .reduce()

Pienentää taulukon kaikki elementit yhdeksi lopputulosarvoksi.
Tämän syntaksi on vähän outo, mutta sen avulla saat taulukon numerot vähennettyä toisistaan. Numero, alla 0, merkitsee indeksiä, josta muut vähennetään.

```javascript
const rahat = [175, 50, 25];
const erotus = rahat.reduce(
  (akkumulaattori, nykyinenArvo) => akkumulaattori + nykyinenArvo,
  0
);
console.log(summa); // 100
```

### Taulukoiden iterointi

#### .forEach()

Suorittaa funktion jokaiselle taulukon elementille.

```javascript
numerot.forEach((elementti) => console.log(elementti)); // Tulostaa jokaisen numeron
```

#### .some() / .every():

Tarkista, läpäisevätkö jotkut tai kaikki elementit testin. Palauttaa totuusarvon eli `true`tai `false`

```javascript
const taulukko = [1, 2, 3, 4, 5];

// Tarkista, sisältääkö taulukko elementtejä, jotka ovat suurempia kuin 3
const onkoSuurempiaKuinKolme = taulukko.some((elementti) => elementti > 3);

console.log(onkoElementtejaSuurempiaKuinKolme); // Tuloste: true
```

```javascript
const taulukko = [1, 2, 3, 4, 5];

// Tarkista, ovatko kaikki taulukon elementit alle kuusi
const ovatkoKaikkiElementitAlleKuusi = taulukko.every(
  (elementti) => elementti < 6
);

console.log(ovatkoKaikkiElementitAlleKuusi); // Tuloste: true
```

## Samantapaisten metodien vertailu

### .find() vs. .filter()

- **.find()** palauttaa **ensimmäisen** elementin, joka täyttää ehdon.

```javascript
const ensimmäinenYliYhden = numerot.find((n) => n > 1); // 2
```

- **.filter()** palauttaa **kaikki** ehtoa täyttävät elementit, **uutena taulukkona.**

```javascript
const kaikkiYliYhden = numerot.filter((n) => n > 1); // [2, 3, 2]
```

### .push() vs. .unshift()

- **.push()** lisää elementit loppuun.
- **.unshift()** lisää elementit alkuun.

## Yleisimmät virheet ja best practices

#### Palautuksen unohtaminen .map() ja .filter() -metodeissa

Sisällytä aina **return** kutsun `.map()` ja `.filter()` sisällä olevaan takaisinkutsufunktioon.

#### .splice() -metodin väärinkäyttö

Ole varovainen `.splice()` -metodin kanssa, koska se muuttaa alkuperäistä taulukkoa. Tarkista aina indeksi ja poistettavien tai lisättävien elementtien määrä.
