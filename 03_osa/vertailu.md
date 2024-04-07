## Vertailua

### = sijoittaa arvon

- Yksi yhtäsuuruusmerkki asettaa muuttujan arvon. Esimerkiksi `x = 5`, jossa muuttuja x saa arvon 5.
- Ehtolauseita kirjoittaessa onkin käytettävä useampaa yhtäsuuruusmerkkiä.

### == Yhtä suuri kuin:

- Vertailee kahden arvon samuutta, ohittaen tietotyypin.
- Esimerkiksi: `5 == '5'` palauttaa `true`, koska ne ovat samat arvot, vaikka tietotyyppi eroaa.

### === Täsmälleen yhtä suuri kuin:

- Vertailee kahden arvon samuutta sekä tietotyyppiä.
- Esimerkiksi: `5 === '5'` palauttaa `false`, koska arvojen lisäksi myös tietotyyppi pitää olla sama.

### ! Ei, looginen negaatio:

- Kääntää totuusarvon vastakkaiseksi.
- Esimerkiksi: `!(5 === 5)` palauttaa `false`, koska 5 todella on yhtä suuri kuin 5.
- Käytetään yleensä tarkistamaan onko jokin arvo epätosi:

```js
let raining = false;

if (!raining) {
  console.log("It's not raining, let's go for a walk!"); // Tämä tulostuu
} else {
  console.log("It's raining, better stay indoors.");
}
```

### != Ei yhtä suuri kuin:

- Vertailee kahden arvon epäsuuruutta, ohittaen tietotyypin.
- Esimerkiksi: `5 != '5'` palauttaa `false`, koska ne ovat samat arvot, vaikka tietotyyppi eroaa.

### !== Ei täsmälleen yhtä suuri kuin:

- Vertailee kahden arvon epäsuuruutta sekä tietotyyppiä.
- Esimerkiksi: `5 !== '5'` palauttaa `true`, koska vaikka arvot ovat samat, tietotyypit eroavat.
