# Olio-metodit ja -prototyypit

Olioiden kontekstissa **metodit** ovat funktioita, jotka ovat osa oliota. Ne voivat käyttää `this`-avainsanaa muiden olioiden ominaisuuksien käyttämiseen.

```js
const person = {
  name: "Jane",
  tervehdi: function () {
    // tämä funktio on person-olion metodi
    console.log(`Hei, nimeni on ${this.name}.`);
  },
};

person.tervehdi(); // olio-metodin kutsuminen
```

### Mihin olio-metodeja käytetään?

Olio-metodeja käytetään suorittamaan toimintoja tai laskelmia olioiden sisällä. Niiden avulla voi:

- Manipuloida olioiden sisäisiä tietoja. Esimerkiksi voimme luoda metodin, joka lisää uuden kirjan kirjaston kokoelmaan tai päivittää olemassa olevan kirjan tiedot.

- Suorittaa toimintoja olioiden puolesta. Esimerkiksi voimme luoda metodin, joka laskee kirjan sivumäärän tai tarkistaa, onko kirja saatavilla lainattavaksi.

- Tarjota liitännän tai rajapinnan olioiden ja niitä käyttävien ohjelmien välillä.

## Prototyypit

Prototyyppi on olio, jolta toiset oliot perivät ominaisuuksia.

### Prototyypit ja periytyminen

Kun haluat käyttää ominaisuutta tai metodia oliosta, JavaScript tarkistaa ensin, onko kyseinen ominaisuus tai metodi suoraan oliolla itsellään. Jos sitä ei löydy, se etsii sen sijaan oliolle määritetyn prototyypin. Tämä mahdollistaa yhteisen toiminnallisuuden määrittämisen yhdessä paikassa ja sen jakamisen kaikkien niiden olioiden kesken, jotka perivät kyseisen prototyypin.

**Esimerkki käyttäen olion literaaleja**:

```javascript
// Määrittele prototyyppiolio
const personPrototype = {
  greet: function () {
    console.log(`Hei, nimeni on ${this.name}`);
  },
};

// Luo uusi olio, joka perii prototyypistä
const person = Object.create(personPrototype);
person.name = "Jussi";
person.greet(); // Tulostaa: Hei, nimeni on Jussi
```

Tässä esimerkissä `person`-olio perii `greet`-metodin `personPrototype`-oliosta.

**Esimerkki käyttäen luokkasyntaksia** (ES6):

```javascript
// Määrittele luokka
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hei, nimeni on ${this.name} ja olen ${this.age} vuotta.`);
  }
}

// Luo uusi olio käyttämällä luokkaa
const johanna = new Person("Johanna", 46);
johanna.greet(); // Tulostaa: Hei, nimeni on Johanna
```

Luokan nimi kirjoitetaan isolla alkukirjaimella. Uuden olion luomiseksi käytetään `new`-avainsanaa.

## `this`-avainsana

`this`-avainsanaa käytetään funktioissa, jotka ovat osa olion metodeja. Sana viittaa siihen olioon, johon funktio kuuluu. Sen arvo voi vaihdella sen mukaan, miten funktiota kutsutaan.

## JSON- ja oliomuunnokset

Olioiden muuntaminen JSON-muotoon ja takaisin on yleinen tehtävä web-kehityksessä.

```js
const jsonMerkkijono = JSON.stringify(person); // Olio JSON-muotoon
const jsonOlio = JSON.parse(jsonMerkkijono); // JSON takaisin olioksi
```

[Lisää JSONista.](04_json.md)
