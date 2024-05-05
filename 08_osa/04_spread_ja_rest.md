# Spread ja rest -operaattorit

Spread ja rest eli levitä- ja kerääoperaattorit, jotka esiteltiin ECMAScript 2015:ssa (ES6), merkitään kolmella pisteellä `...`. Vaikka niiden syntaksi on aivan sama, ne palvelevat erilaisia tarkoituksia riippuen siitä yhteydestä, jossa niitä käytetään.

## Spread-operaattori

- **Laajentaa iteroitavat objektit:** Käytetään laajentamaan iteroitavan objektin (kuten taulukon tai olion) elementit yksittäisiksi elementeiksi paikoissa kuten funktiokutsuissa tai taulukkoliteraaleissa.

```js
// Laajentaa taulukon yksittäisiksi argumenteiksi, joita Math.max-metodi voi tarkastella
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // Tulostaa: 3
```

- **Taulukoiden kloonaus:** Mahdollistaa taulukoiden tehokkaan pinnallisen kopioinnin.

```js
const alkuperäinen = ["a", "b", "c"];
const kopio = [...alkuperäinen]; // ['a', 'b', 'c']
```

- **Taulukoiden yhdistäminen:** Helpottaa useiden taulukoiden yhdistämistä yhdeksi taulukoksi.

```js
const ensimmäinen = [1, 2];
const toinen = [3, 4];
const yhdistetty = [...ensimmäinen, ...toinen]; // [1, 2, 3, 4]
```

- **Työskentely olioiden kanssa:** Auttaa yhdistämään ominaisuuksia eri olioiden välillä yhdeksi olioksi (vain olion literaalit).

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

## Rest-operaattori

- **Kerää funktioargumentit:** Kerää vaihtelevan määrän argumentteja, jotka on välitetty funktiolle, yhteen taulukkoon.

```js
function yhdista(erotin, ...args) {
  return args.join(erotin);
}
console.log(yhdista(".", "a", "b", "c")); // "a.b.c"
```

- **Käytetään funktiomäärityksissä:** Auttaa funktioita hyväksymään määrittelemättömän määrän argumentteja taulukkona.

```js
function laskeKaikki(...numerot) {
  return numerot.reduce((akku, nykyinen) => akku + nykyinen, 0);
}

console.log(laskeKaikki(1, 2, 3)); // Tuloste: 6
console.log(laskeKaikki(10, 20, 30, 40, 50)); // Tuloste: 150
```

- **Taulukoiden ja olioiden purkaminen:** Mahdollistaa useiden elementtien tai ominaisuuksien purkamisen yhteen taulukkoon tai olioon.

```js
const [ensimmäinen, ...loput] = [10, 20, 30, 40];
console.log(ensimmäinen); // 10
console.log(loput); // [20, 30, 40]
```

```js
const { x, ...y } = { x: 1, y: 2, z: 3 };
console.log(x); // 1
console.log(y); // { y: 2, z: 3 }
```
