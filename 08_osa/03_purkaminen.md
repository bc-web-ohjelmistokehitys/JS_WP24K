# Purkaminen (Destructuring)

Purkaminen on JavaScriptin ominaisuus, joka mahdollistaa arvojen purkamisen taulukoiden tai olioden ominaisuuksista erillisiksi muuttujiksi. Se yksinkertaistaa arvojen käyttöä ja voi tehdä koodistasi helpommin luettavan ja tiiviimmän. Purkaminen on laajalti käytetty sen luettavuuden ja tarjoamansa tiiviin syntaksin vuoksi, mikä helpottaa työskentelyä JavaScriptin tietorakenteiden kanssa.

## Taulukon purkaminen

```js
const [first, second] = ["omena", "banaani", "appelsiini"];
console.log(first); // 'omena'
console.log(second); // 'banaani'
```

Tässä esimerkissä puramme ensimmäisen ja toisen alkion taulukosta ja annamme ne muuttujiin `first` ja `second`. Sisäinen järjestys hakasulkujen `[ ]` sisällä on tärkeä taulukon purkamisessa, koska se määrittää, miten arvot taulukosta annetaan muuttujiin: ensimmäinen muuttuja saa ensimmäisen kohteen, toinen muuttuja saa toisen kohteen ja niin edelleen. Hakasulkujen `[ ]` läsnäolo taulukon määrittelyssä `=`-merkin vasemmalla puolella tarkoittaa purkamisen käyttöä.

## Olion purkaminen

```js
const { name, age } = { name: "Jouni", age: 30, profession: "kehittäjä" };
console.log(name); // 'Jouni'
console.log(age); // 30
```

Olion purkaminen mahdollistaa ominaisuuksien poimimisen olioista käyttäen samankaltaista syntaksia kuin taulukon purkamisessa, mutta aaltosulkeilla `{}`. Sovita ominaisuuksien nimet olion määrittelyn `=`-merkin vasemmalla puolella sijaitsevaan avainarvoon, jolloin purkaessa viittaat vastaaviin avaimiin oliossa.

### Sisäkkäinen purkaminen (nested destructuring)

Sisäkkäinen purkaminen eli "nested destructuring" mahdollistaa olioden sisällä olevien ominaisuuksien purkamisen. Kun käytetään olioita, jotka sisältävät toisia olioita tai taulukoita, sisäkkäinen purkaminen on hyödyllinen tapa käsitellä näitä monimutkaisia rakenteita.

```javascript
const user = {
  id: 101,
  info: { name: "Aliisa", email: "aliisa@example.com" },
};

const {
  info: { name, email }, // Sisäkkäinen purkaminen
} = user;

console.log(name); // Tulostaa: 'Aliisa'
console.log(email); // Tulostaa: 'aliisa@example.com'
```

Tässä esimerkissä `user`-olio sisältää sisäisen olion nimeltä `info`, joka puolestaan sisältää `name`- ja `email`-ominaisuudet. Käytämme sisäkkäistä purkamista purkamaan nämä ominaisuudet `user`-oliosta suoraan omiin muuttujiinsa `name` ja `email`.

## Oletusarvot

Määritä oletusarvot muuttujille, kun ominaisuus puuttuu tai on määrittelemätön.

```js
const { nimi, rooli = "käyttäjä" } = { nimi: "Jasmin" };
console.log(nimi); // Tulostaa: Jasmin
console.log(rooli); // Tulostaa: käyttäjä
```
