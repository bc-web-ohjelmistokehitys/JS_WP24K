## Työskentely JSON:n kanssa JavaScriptissä

JSON (_JavaScript Object Notation_) eli _JavaScript Olio Notaatio_ on kevyt tiedonvaihtomuoto, joka on ihmisille helppo lukea ja kirjoittaa sekä koneille helppo jäsentää ja generoida. Se perustuu JavaScriptin osajoukkoon, mutta on kieliriippumaton, mikä tekee siitä ihanteellisen datan vaihtoon eri ohjelmointiympäristöjen välillä.

### JSON:n perusteet

JSON edustaa dataa rakenteellisena tekstinä ja sitä käytetään yleisesti web-sovelluksissa datan siirtämiseen asiakas- ja palvelinsovellusten välillä. Tässä ovat JSON:ssa käytetyt datatyypit:

- Oliot edustetaan aaltosuluilla `{}` sisältäen avain-arvo -pareja.
- Taulukot edustetaan hakasuluilla `[]` sisältäen arvoja.
- Merkkijonot on oltava ympäröity kaksinkertaisilla lainausmerkeillä `""`.
- Numerot, boolean-arvot (true/false) ja null edustetaan samalla tavalla kuin JavaScriptissä.

### Muuntaminen JSON:n ja JavaScript-olioiden välillä

JSON datan hyödyllisyys on siinä, että se mahdollistaa tiedon helpon muuttamisen muodosta toiseen riippuen siitä, mihin sitä käytetään.

#### JSON.stringify()

Palvelimet eivät osaa käsitellä JavaScript-olioita, jotka ovat verkkosivulla todella käteviä. Lähettääksesi dataa web-clientiltä palvelimelle, sinun on muunnettava JavaScript-olio JSON-merkkijonoksi. Tämä tehdään käyttämällä `JSON.stringify()` -funktiota.

```js
const henkilö = {
  nimi: "Matti Meikäläinen",
  ikä: 30,
};

const jsonMerkkijono = JSON.stringify(henkilö);
console.log(jsonMerkkijono); // Tuloste: '{"nimi":"Matti Meikäläinen","ikä":30}'
```

#### JSON.parse()

Kun vastaanotat dataa web-palvelimelta, data on usein JSON-muodossa. Käyttääksesi tätä dataa JavaScriptissä, sinun on muunnettava JSON-merkkijono JavaScript-olioksi. Tämä tehdään käyttämällä `JSON.parse()` -funktiota.

```js
const jsonMerkkijono = '{"name":"Matti Meikäläinen","age":30}';
const henkilöOlio = JSON.parse(jsonMerkkijono);
console.log(henkilöObjekti); // Tuloste: { name: 'Matti Meikäläinen', age: 30 }
```

### JSON:n käyttötapaukset

- **APIt ja verkkopalvelut**: JSONia käytetään laajasti verkkoliittymissä ja palveluissa datan vaihtoon. Sen kevyt rakenne tekee siitä ihanteellisen mobiili- ja web-sovelluksille.
- **Konfiguraatiotiedostot**: Monet työkalut ja kehykset käyttävät JSON-tiedostoja konfiguraatioihin sen helpon ymmärrettävän muodon vuoksi.
- **Datan tallennus**: Jotkin tietokannat, kuten MongoDB, tallentavat datan JSON-muotoa vastaavalla tavalla, mikä tekee siitä saumattoman valinnan datan tallentamiseen ja noutamiseen web-sovelluksissa.

### JSON:n edut

- **Alustariippumaton**: JSON on tekstiä, ja sitä voidaan lukea ja käyttää datamuotona millä tahansa ohjelmointikielellä.
- **Luettavuus**: datan rakenne on helppolukuista ja ymmärrettävää.
- **Tehokkuus**: JSONin kevyt muoto mahdollistaa nopean jäsentämisen ja datan vaihdon, mikä tekee siitä tehokkaan verkkojen välitykseen.
