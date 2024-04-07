# Silmukat

Silmukat ovat perustavanlaatuinen ohjelmointikäsite, joka mahdollistaa koodilohkon toistamisen useita kertoja. Ne ovat erityisen hyödyllisiä kokoelmien läpikäynnissä, tehtävien toistamisessa ja toistuvien prosessien automatisoinnissa.

## for-silmukka

`for`-silmukka on yksi yleisimmistä silmukoista. Sitä käytetään, kun tiedät etukäteen, kuinka monta kertaa haluat suorittaa lauseen.

```js
for (alustus; ehto; lisäys) {
  // Jokaisella iteraatiolla suoritettava koodi
}
```

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## while-silmukka

`while`-silmukka jatkaa koodilohkon suorittamista niin kauan kuin määritetty ehto on tosi.

```js
while (ehto) {
  // Koodi, joka suoritetaan niin kauan kuin ehto on tosi
}
```

While-silmukan kanssa on yleensä aina käytössä apumuuttuja, joka tulee jokaisella kierroksella lähemmäs ehtoa. Yleensä apumuuttujan arvoa vähennetään yhdellä (++) tai vähennetään yhdellä (--).

```js
let i = 0; // Apumuuttuja
while (i < 5) {
  console.log(i);
  i++; // Muutos, joka tuo apumuuttujan lähemmäksi ehtoa
}
```

## do-while-silmukka

`do-while`-silmukka on samanlainen kuin `while`-silmukka, mutta se varmistaa, että koodilohko suoritetaan ainakin kerran.

```js
do {
  // Suoritettava koodi
} while (ehto);
```

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## for...in-silmukka

`for...in`-silmukkaa käytetään olion ominaisuuksien läpikäyntiin.

```js
for (avain in objekti) {
  // Koodi, joka suoritetaan jokaiselle ominaisuudelle
}
```

```js
const henkilö = { nimi: "Alice", ikä: 25 };
for (let avain in henkilö) {
  console.log(`${avain}: ${henkilö[avain]}`);
}
```

## for...of-silmukka

`for...of`-silmukka luo silmukan iteroitavien objektien (kuten taulukoiden, merkkijonojen) yli.

```js
for (muuttuja of iteroitava) {
  // Koodi, joka suoritetaan jokaiselle elementille
}
```

```js
let hedelmät = ["omena", "banaani", "päärynä"];
for (let hedelmä of hedelmät) {
  console.log(hedelmä);
}
```

## Silmukan hallintalausunnot

- `**break**`: Lopettaa silmukan.
- `**continue**`: Ohittaa nykyisen iteraation ja jatkaa seuraavaan.

## Ikuiset silmukat

Joskus saattaa tehdä vahingossa ikuisen silmukan, joka rikkoo koodin toiminnan. Jos ohjelma kaatuu silmukan lisäämisen jälkeen, kannattaa tarkistaa onhan ehdon täyttyminen ylipäätään mahdollista. Ja että **>** sekä **<** ovat ehdolauseessa oikein päin.
