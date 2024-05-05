# Ketjutus

Ketjuttaminen on voimakas työkalu JavaScriptissä, erityisesti taulukoiden kanssa, mikä mahdollistaa useiden metodien yhdistämisen yhteen lausekkeeseen. Käytännössä pistenotaation avulla lisätään metodeja peräkkäin. Tämä lähestymistapa on tehokas ja tiivis, mikä mahdollistaa monimutkaisten operaatioiden suorittamisen minimaalisella koodilla.

```js
const users = [
  { id: 1, name: "Sam Doe" },
  { id: 2, name: "Alex Blue" },
];

const csv = users.map((user) => user.name).join(", ");
console.log(csv); // "Sam Doe, Alex Blue"
```

Usein ketjutus jaetaan pisteen kohdalta uudelle riville, jotta kokonaisuus on helpompi lukea:

```js
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter((num) => num % 2 === 0) // suodatetaan parilliset numerot
  .map((num) => num * 2); // kerrotaan jäljelle jääneet numerot kahdella

console.log(result); // tulostaa: [4, 8]
```

## Valinnainen ketjuttaminen

Valinnainen ketjuttaminen `?.` eli kysymysmerkin lisääminen pistenotaation eteen yksinkertaistaa pääsyä sisäkkäisiin ominaisuuksiin. Se estää virheet palauttamalla `undefined`, jos viittaus on nollankaltainen eli _nullish_ (`null` tai `undefined`) sen sijaan, että se aiheuttaisi virheen.

```js
const user = {
  details: { name: { firstName: "Sam" } },
};

console.log(user.details?.name?.firstName); // "Sam"
```

### Ketjutus taulukoissa

Valinnainen ketjutus toimii myös taulukoihin, mikä tekee tietojen noutamisesta turvallisempaa:

```js
const data = { temperatures: [-3, 14, 4] };
const firstValue = data.temperatures?.[0]; // -3
```

### Ketjutus funktiokutsuissa

Funktioita kutsuessa ketjutus varmistaa, että funktiota kutsutaan vain, jos se on olemassa. Näin vältetään ajonaikaisia virheitä:

```js
const person = { name: "Sam" };
const upperCasedName = person.name?.toUpperCase(); // "SAM"
```
