# Oliot (eng. Object)

JavaScript-oliot ovat perusrakenteita, jotka mahdollistavat tietokokoelmien ja monimutkaisten kokonaisuuksien tallentamisen järjestäytyneellä tavalla. Ne ryhmittelevät datan ja funktiot yhteen, tarjoten joustavan mekanismin mallintaa todellisia maailman entiteettejä.

## Olioiden luominen

Olio voidaan luoda käyttämällä olion literaaleja, konstruktorifunktioita tai `class`-syntaksia, joka esiteltiin ES6:ssa.

### Olion literaalit

```js
const person = {
  firstName: "Jane",
  LastName: "Doe",
  age: 30,
};
```

### Konstruktorifunktiot

JavaScriptin konstruktorifunktiot ovat erityisiä funktioita, joita käytetään luomaan uusia olioita. Niitä käytetään määrittelemään olion alkutila ja toiminnallisuus.

```js
function Person1(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
```

Kun konstruktorifunktio suoritetaan `new`-avainsanan kanssa, se luo uuden olion ja asettaa sen alkutilan määrittelyjen mukaisesti.

```js
const person1 = new Person("Alice", "Johnson", 30);
```

### ES6-luokkasyntaksi

```js
class Person2 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
const person2 = new Person("Bertta", "Jääskeläinen", 28);
```

Molemmat tavat luovat JavaScript-olion, mutta luokkasyntaksi on näistä selkeämpi ja modernimpi tapa määritellä olion rakenne ja toiminnallisuudet. Lisäksi luokkasyntaksi helpottaa perinnän käyttöä ja tekee koodista yleensä helpommin ymmärrettävää ja ylläpidettävää.

## Tietojen käyttö ja muokkaaminen

Voit käyttää ominaisuuksia piste- tai hakasulun notaatiolla. Ominaisuuksia voidaan päivittää tai lisätä samalla tavalla.

```js
console.log(person.firstName); // Käyttö
person.lastName = "Doe"; // Muokkaus
```

## Esimerkkejä käytöstä

### Pistenotaatio

Pistenotaatio on suoraviivaista ja sitä käytetään yleisesti ominaisuuksiin pääsyssä, kun ominaisuuden nimi on tiedossa ja suoraan käytettävissä.

```javascript
const person = {
  name: "Alice",
  age: 30,
};

console.log(person.name); // Tulostaa: Alice
console.log(person.age); // Tulostaa: 30
```

### Hakasulku-notaatio

Hakasulku-notaatio on monipuolinen, sillä se mahdollistaa pääsyn ominaisuuksiin käyttäen muuttujia ja ottaa huomioon ominaisuuksien nimet, jotka sisältävät välilyöntejä tai erikoismerkkejä.

```javascript
const property = "name";
console.log(person[property]); // Tulostaa: Alice

const person = {
  "full name": "Alice Johnson",
};

console.log(person["full name"]); // Tulostaa: Alice Johnson
```

## Esimerkkejä muokkaamisesta

Olioiden ominaisuuksia voidaan päivittää sekä pistenotaatiolla että hakasulku-notaatiolla.

### Pistenotaatio

```javascript
person.age = 31;
console.log(person.age); // Tulostaa: 31
```

### Hakasulku-notaatio

```javascript
person["age"] = 32;
console.log(person.age); // Tulostaa: 32
```

## Tietojen lisääminen

Olioon voidaan lisätä uusia ominaisuuksia käyttäen sekä pistenotaatiota että hakasulku-notaatiota.

### Pistenotaatio

```javascript
person.email = "alice@esimerkki.com";
console.log(person.email); // Tulostaa: alice@esimerkki.com
```

### Hakasulku-notaatio

```javascript
person["phoneNumber"] = "123-456-7890";
console.log(person["phoneNumber"]); // Tulostaa: 123-456-7890
```

## Tietojen poistaminen

`delete`-operaattoria käytetään poistamaan ominaisuuksia oliosta, toimien sekä pistenotaation että hakasulku-notaation kanssa.

```javascript
delete person.age;
console.log(person.age); // Tulostaa: undefined

delete person["phoneNumber"];
console.log(person.phoneNumber); // Tulostaa: undefined
```

### Yhteenveto

- **Pistenotaatio** on yksinkertainen ja tiivis, ihanteellinen pääsyyn tai ominaisuuksien muokkaamiseen, joiden nimet ovat kelvollisia tunnisteita.
- **Hakasulku-notaatio** tarjoaa joustavuutta ominaisuuksien nimille, jotka määräytyvät dynaamisesti, sisältävät välilyöntejä tai alkavat numeroilla.
- Ominaisuuksia voidaan lisätä olioihin milloin tahansa käyttämällä kumpaakin notaatiota.
- `delete`-operaattori poistaa olemassa olevan ominaisuuden oliosta.
