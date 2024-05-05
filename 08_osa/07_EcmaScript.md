# EcmaScript

`JavaScript` on yksi toteutus `EcmaScript`-kielisestä määrityksestä, itse asiassa se on suosituin toteutus. EcmaScript on spesifikaatio skriptauskielien luomiseksi, ja sitä hallinnoi Ecma International Genevessä, Sveitsissä. Vaikka EcmaScript määrittelee spesifikaatiot, JavaScript on itse ohjelmointikieli, joka toteuttaa nämä spesifikaatiot.

## Vanilla JavaScript

Termi _Vanilla JavaScript_ viittaa pelkkään JavaScriptiin ilman kirjastoja tai kehyksiä, kuten jQueryä tai Reactia. Se tarkoittaa JavaScriptin käyttöä sen puhtaimmassa muodossa.

## EcmaScript-versiot

Kehittäjät käyttivät EcmaScript 5:ttä (ES5), joka julkaistiin vuonna 2009, ennen merkittävää päivitystä vuonna 2015, joka tunnetaan nimellä EcmaScript 6 (ES6) tai ES2015, mikä merkitsi vuotuisten versiopäivitysten alkamista.

### ES5 (2009)

Tunnetaan nimellä "vanha JavaScript", se on laajasti tuettu, mutta siitä puuttuu monia myöhemmissä versioissa esiteltyjä ominaisuuksia.

### ES6/ES2015

- Nuolifunktiot tiiviimpää funktiosyntaksia varten.

```js
const add = (x, y) => x + y;
console.log(add(10, 5)); // 15
```

- Template-merkkijonot helpompaa merkkijonon interpolointia, eli muuttujan sisällyttämistä merkkijonoon, varten.

```js
const greeting = `Hei, nimeni on ${name}!`;
console.log(greeting); // Hei, nimeni on John!
```

- Lupaukset asynkronisten operaatioiden hallintaan.

```js
// Luodaan uusi Promise eli lupaus
let promiseToCleanTheRoom = new Promise(function (resolve, reject) {
  // Simuloidaan huoneen siivoaminen
  let isClean = true; // Vaihda tämä epätodeksi nähdäksesi toisen polun (reject)

  if (isClean) {
    resolve("Huone on siisti.");
  } else {
    reject("Huone on edelleen likainen.");
  }
});

// Käytetään lupausta
promiseToCleanTheRoom
  .then(function (fromResolve) {
    console.log("Huoneen tila: " + fromResolve);
  })
  .catch(function (fromReject) {
    console.log("Huoneen tila: " + fromReject);
  });
```

- Luokat olio-ohjelmointia varten.

```js
class Auto {
  constructor(merkki, malli, vuosi) {
    this.merkki = merkki;
    this.malli = malli;
    this.vuosi = vuosi;
  }

  näytäAutoInfo() {
    console.log(`Auto: ${this.merkki} ${this.malli}, Vuosi: ${this.vuosi}`);
  }
}

const omaAuto = new Auto("Toyota", "Corolla", 2021);
omaAuto.näytäAutoInfo(); // Tuloste: Auto: Toyota Corolla, Vuosi: 2021

class Sähköauto extends Auto {
  constructor(merkki, malli, vuosi, akunKapasiteetti) {
    super(merkki, malli, vuosi); // Kutsuu yläluokan konstruktoria
    this.akunKapasiteetti = akunKapasiteetti;
  }

  näytäAkunKapasiteetti() {
    console.log(
      `Tällä autolla on akun kapasiteetti ${this.akunKapasiteetti} mailia.`
    );
  }
}

const omaSähköauto = new Sähköauto("Tesla", "Model S", 2020, 379);
omaSähköauto.näytäAutoInfo(); // Tuloste: Auto: Tesla Model S, Vuosi: 2020
omaSähköauto.näytäAkunKapasiteetti(); // Tuloste: Tällä autolla on akun kapasiteetti 379 mailia.
```

- Let- ja const-avainsanat lohkokohtaisten muuttujien määrittelyyn.

```js
let nimi = "Jussi"; // Lohkokohdassa määritelty muuttuja
const ikä = 30; // Lohkokohdassa määritelty vakio

nimi = "Sanni"; // Sallittu
// ikä = 35; // TypeError: Vakioon ei voi tehdä uutta määritystä.
```

- Purkamisattribuutio

```js
const { nimi, ikä } = henkilö;
console.log(nimi); // Jussi
console.log(ikä); // 30
```

### Vuosittaiset päivitykset (ES2016 eteenpäin)

Siitä lähtien kun ECMAScript 2015 (ES6) esiteltiin, ECMAScript-standardiin on tehty useita keskeisiä päivityksiä. Joka vuosi tuo mukanaan uusia ominaisuuksia ja parannuksia. Tässä on luettelo keskeisistä muutoksista ECMAScriptissa vuoden 2015 jälkeen:

#### ECMAScript 2016 (ES7)

- **Array.prototype.includes:** Tarkista, sisältääkö taulukko tietyn elementin.
- **Potenssin operaattori:** Lyhyempi syntaksi potenssin laskemiseen (`**`).

#### ECMAScript 2017 (ES8)

- **Async/Await:** Kirjoita asynkronista koodia synkronisenkaltaisella tavalla.
- **Object.values/Object.entries:** Palauta arvot tai avain-arvo -parit oliosta.
- **Stringin täyttö:** `padStart`- ja `padEnd`-metodit.
- **Object.getOwnPropertyDescriptors:** Palauttaa olion kaikki omat ominaisuuskuvaajat.

#### ECMAScript 2018 (ES9)

- **Asynkroninen iteroiminen:** Asynkroniset iterointi ja `for-await-of`-silmukka.
- **Rest/Spread-ominaisuudet:** spread ominaisuudet olioliteraaleille.
- **Promise.prototype.finally:** Takaisinkutus, joka suoritetaan sen jälkeen, kun lupaus on ratkaistu.
- **RegExp-parannukset:** Nimetyt vastaavat ryhmät, Unicode-ominaisuusesiintymät, taaksepäin suunnatut väitteet ja s (dotAll) -lippu.

#### ECMAScript 2019 (ES10)

- **Array.prototype.{flat, flatMap}:** Menetelmät taulukoiden litistämiseksi.
- **Object.fromEntries():** Muunna avain-arvo -parien lista olioksi.
- **String.prototype.{trimStart, trimEnd}:** Poista välilyönnit merkkijonon alusta tai lopusta.
- **Valinnainen catch-sitominen:** `catch`-lohkot voidaan käyttää ilman parametria.

#### ECMAScript 2020 (ES11)

- **BigInt:** Satunnaisen tarkkuuden kokonaislukutyyppi.
- **Dynaminen tuonti:** Tuo moduulit dynaamisesti käyttäen `import()`-funktiota.
- **Nullish-yhdistysoperaattori (`??`):** Palauta oikea käden operandi, kun vasen käden operandi on `null` tai `undefined`.
- **Valinnainen ketjuttaminen (`?.`):** Käytä syvästi sisäkkäisiä olion ominaisuuksia ilman, että erikseen tarkistetaan niiden mahdollista olemattomuutta.
- **Promise.allSettled():** Palauttaa lupauksen, joka ratkeaa sen jälkeen, kun kaikki annetut lupaukset ovat joko ratkenneet tai hylätty.

#### ECMAScript 2021 (ES12)

- **String.prototype.replaceAll:** Korvaa kaikki ali-merkkijonot merkkijonossa.
- **Loogiset sijoitusoperaattorit:** Yhdistä loogiset operaattorit sijoituksen kanssa (`&&=`, `||=`, `??=`).
- **Numeroiden erottimet:** Tee numeeriset kirjaimet luettavammiksi luomalla visuaalinen ero ryhmien välillä.
- **WeakRefs ja Finalizers:** Muisti- ja siivouksen hallinta WeakRef- ja FinalizationRegistry-objekteilla.

#### ECMAScript 2022 (ES13)

- **Luokan kentät (Julkinen ja Yksityinen):** Luokan esiintymiskentät ja yksityiset metodit.
- **Huipputason `await`:** Käytä `await`-avainsanaa asynkronisten funktioiden ulkopuolella.
- **Ergonominen merkkijärjestys tarkistaa Yksityiset kentät:** Tiiviimpi ja suoraviivaisempi syntaksi yksityisten kenttien olemassaolon tarkistamiseen.
- **RegExp-vastaavuusindeksit:** Anna alku- ja loppuindeksit tallennetulle merkkijonolle.

Nämä päivitykset heijastavat JavaScriptin kehittyvää luonnetta tarjoten kehittäjille kestäviä ja tehokkaita työkaluja modernien verkkosovellusten kirjoittamiseen. Jokainen versio rakentaa edellisen päälle varmistaen, että JavaScript säilyy kilpailukykyisenä ja kykenevänä kielenä verkkokehityksessä.
