## Tietojen tallentaminen selaimeen

### LocalStorage

LocalStorage on verkkotallennusominaisuus, jonka avulla voit tallentaa tietoja avain-arvopareina suoraan selaimeen. Se tarjoaa tavan säilyttää tietoja paikallisesti, säilyttäen ne jopa selaimen sulkemisen jälkeen, eri selainistuntojen välillä.

- **Kokorajoitus**: Jopa 5 MB tai enemmän (vaihtelee selaimen mukaan).
- **Elinikä**: Säilyy, kunnes se nimenomaisesti poistetaan.
- **Saavutettavuus**: Saavutettavissa mistä tahansa selainikkunasta, jolla on sama alkuperä.

#### Kuinka käytetään

- **Set Item**: Tallenna tietoja käyttäen `localStorage.setItem(key, value)`.
- **Get Item**: Hae tietoja käyttäen `localStorage.getItem(key)`.
- **Remove Item**: Poista tietoja käyttäen `localStorage.removeItem(key)`.
- **Clear**: Tyhjennä kaikki LocalStorage-tiedot käyttäen `localStorage.clear()`.

```javascript
// Tietojen tallentaminen
localStorage.setItem("username", "JoniPoika");

// Tietojen hakeminen
const userName = localStorage.getItem("username");
console.log(userName); // Tulostaa: JoniPoika

// Tietojen poistaminen
localStorage.removeItem("username");

// Kaikkien tietojen tyhjentäminen
localStorage.clear();
```

LocalStorage sopii erinomaisesti asetusten, preferenssien ja muiden tietojen tallentamiseen, jotka tarvitsevat pysyvyyttä ilman jatkuvaa palvelinviestintää. Tämä parantaa käyttäjäkokemusta nopeammilla latausajoilla ja mahdollistaa tietojen käytön ilman verkkoyhteyttä.

### Evästeet

Evästeet (eng. cookies) ovat asiakkaan puolella tallennettuja tietoja, jotka lähetetään HTTP-pyyntöjen mukana palvelimelle. Niitä käytetään pääasiassa istunnon seurantaan, personointiin ja käyttäjän tunnistamiseen.

- **Kokorajoitus**: Yleensä noin 4 KB.
- **Elinikä**: Voidaan asettaa vanhenemaan (istunto tai määritetty kesto).
- **HTTP-otsikot**: Lähetetään automaattisesti jokaisen HTTP-pyynnön mukana, mikä voi vaikuttaa suorituskykyyn.

#### Esimerkki evästeestä

```javascript
document.cookie = "username=JoniPoika; expires=Fri, 31 Dec 2024 23:59:59 GMT";
```

### LocalStorage ja evästeet vertailu

- **Tietojen lähettäminen**: Evästeet lähetetään palvelimelle jokaisen HTTP-pyynnön mukana, kun taas LocalStorage-tietoja ei lähetetä.
- **Tallennuskapasiteetti**: LocalStorage tarjoaa yleensä enemmän tilaa kuin evästeet.
- **Helppokäyttöisyys**: LocalStorage tarjoaa yksinkertaisemman API:n asiakaspuolen skriptaukseen.
- **Tietoturva**: Molempia tulisi käyttää huolellisesti, erityisesti arkaluonteisten tietojen kanssa, koska ne ovat saavutettavissa asiakaspuolen skripteillä.

Kun ymmärrät molempien menetelmien mahdollisuudet ja rajoitukset, voit tehdä verkkosovelluksen, joka hallitsee pysyviä tietoja tehokkaasti, on käyttökokemukseltaan miellyttävä ja suorituskyvyltään optimoitu.
