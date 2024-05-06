# Asynkroninen JavaScript

Yleensä JavaScript ohjelma ajetaan ylhäältä alas rivi kerraallaan valmiiksi asti. Joskus ohjelman prosessit saattavat kuitenkin viedä huomattavan paljon aikaa, jolloin on hyvä, että ohjelma ei pysähdy odottaessaan niiden valmistumista. JavaScriptin asynkronisuus mahdollistaa ohjelman muiden koodien suorittamisen sillä aikaa, kun odotetaan asynkronisten toimintojen (kuten HTTP-pyyntöjen, tiedoston Input/Output jne.) valmistumista.

Koodissa on kerrottava mikä osa on asynkronista ja sen jälkeen miten näihin tapahtumiin tulee reagoida. Alla kuvataan kaksi päätapaa, miten tämä hieman monimutkainen hässäkkä voidaan toteuttaa niin, että koodi pysyy edelleen mahdollisimman selkeänä.

## Lupaukset (Promises)

Lupaukset edustavat asynkronisen toiminnon lopullista valmistumista tai epäonnistumista. Ne mahdollistavat takaisinkutsujen (_call back_, näistä lisää alempana) liittämisen, sen sijaan että takaisinkutsut annettaisiin funktiolle sisään.

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => resolve("Tulos"), 1000);
});
```

Lupat ovat asynkronisten toimintojen lopullista valmistumista tai epäonnistumista edustavia olioita. Ne mahdollistavat asynkronisten toimintojen käsittelemisen sulavasti, tarjoten siistimmän vaihtoehdon perinteisille takaisinkutsufunktioille. Lupauksella on kolme tilaa:

- **Odottava:** Alkutila, ei toteutunut eikä hylätty.
- **Toteutunut:** Toiminto valmistui onnistuneesti.
- **Hylätty:** Toiminto epäonnistui.

Voit liittää tapahtumakäsittelijöitä lupauksiin käyttämällä `.then()`-metodia toteutumiseen, `.catch()`-metodia hylkäämiseen ja `.finally()`-metodia koodille, joka tulisi suorittaa lupauksen lopputuloksesta riippumatta. Tämä rakenne tarjoaa helpommin luettavan ja hallittavan lähestymistavan asynkronisen logiikan käsittelyyn. Esimerkki tästä hieman alempana.

## Async/Await

`async/await`-syntaksi tarjoaa siistimmän ja luettavamman tavan työskennellä lupauksien kanssa. `async`-funktio palauttaa aina lupauksen, ja `await` keskeyttää suorituksen, kunnes lupaus on toteutunut.

```javascript
async function haeData() {
  let data = await fetch("https://api.example.com/data");
  let json = await data.json();
  console.log(json);
}
```

## Takaisinkutsufunktiot (Callbacks)

Takaisinkutsufunktio on funktio, joka annetaan argumenttina toiseen funktioon suoritettavaksi myöhemmin, ja sitä käytetään usein vanhemmissa asynkronisissa JavaScript-ratkaisuissa.

```javascript
function haeData(takaisinkutsu) {
  setTimeout(() => {
    takaisinkutsu("Tiedot haettu");
  }, 1000);
}

haeData((data) => console.log(data));
```

### Takaisinkutsuhelvetti

Takaisinkutsuhelvetti, tunnetaan myös nimellä "Perikadon pyramidi", on tilanne, jossa takaisinkutsut ovat upotettu toisten takaisinkutsujen sisään useiden tasojen syvyyteen, mikä tekee koodista vaikeasti luettavan, ylläpidettävän ja debuggattavan. Se tapahtuu usein ketjumaisessa asynkronisessa JavaScript-koodissa, jossa useat toiminnot riippuvat edellisten suorittamisesta. Tässä yksinkertaistettu esimerkki käsitteen havainnollistamiseksi:

```javascript
getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        getMoreData(d, function (e) {
          // ...ja niin edelleen
        });
      });
    });
  });
});
```

Jokainen funktio vaatii edellisen takaisinkutsun tuloksen, mikä johtaa syvästi upotettuihin rakenteisiin, jotka ovat vaikeita ymmärtää ja ylläpitää. Tämä kaava voi johtaa koodiin, jota on vaikea seurata, erityisesti virheenkäsittelyn ja vianjäljityksen osalta.

Takaisinkutsuhelvetin ratkaisemiseksi annetussa esimerkissä voit käyttää lupauksia tai async/await-kaavaa, joka tekee koodista siistimmän ja helpommin seurattavan.

Sama rakenne **lupauksia** käyttämällä näyttää paremmalta:

```js
function getData() {
  return new Promise((resolve, reject) => {
    // Simuloi asynkroninen toiminto
    setTimeout(() => resolve("data"), 1000);
  });
}

function getMoreData(input) {
  return new Promise((resolve, reject) => {
    // Simuloi asynkroninen toiminto
    setTimeout(() => resolve(input + " lisää dataa"), 1000);
  });
}

getData()
  .then((result) => getMoreData(result))
  .then((result) => getMoreData(result))
  .then((result) => getMoreData(result))
  .then((result) => getMoreData(result))
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

Sama rakenne **async/awaitia** käyttämällä näyttää vieläkin paremmalta:

```js
async function processData() {
  try {
    let result = await getData();
    result = await getMoreData(result);
    result = await getMoreData(result);
    result = await getMoreData(result);
    result = await getMoreData(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

processData();
```

## Datan nouto (Fetch)

Usein asynkronista koodia käytetään tiedon hakemiseen jostain muualta. Joskus tässä prosessissa kestää kauan, koska nettiyhteys on hidas tai kohde toimii hitaasti. Usein nouto saattaa myös epäonnistua. Siksi on hyvä käyttää asynkronista koodia, jotta ohjelmasi ei pysähdy tai kaadu tiedon noutamiseen.

### Käyttäen lupauksia

```js
function fetchData() {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Virhe:", error));
}

fetchData();
```

### Käyttäen async/awaitia

```js
async function fetchDataAsync() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Virhe:", error);
  }
}

fetchDataAsync();
```

Molemmissa esimerkeissä haemme tietoja esimerkkirajapinnasta eli APIsta ja kirjaamme vastauksen. `async/await` -versio tarjoaa tutummallta näyttävän tavan käsitellä asynkronista hakupyyntöä.

Valinta lupausten ja `async/await`in käytön välillä JavaScriptissä riippuu tarpeistasi ja koodausmieltymyksistäsi:

**Lupaukset**

- Ovat loistava vaihtoehto yksinkertaisille tapauksille asynkronisissa toiminnoissa
- kun sinun on ketjutettava useita toimintoja peräkkäin
- tai käsiteltävä monimutkaisia yhdistelmiä rinnakkaisia asynkronisia tehtäviä.

**Async/await**

- Tekee asynkronisesta koodistasi synkronisen koodin näköistä, mikä voi olla helpompi ymmärtää ja ylläpitää.
- Lupauksiin verrattuna syntaksi on miellyttävämäpää, joten se toimii hyvin monimutkaisemmissa skenaarioissa, joissa on useita loogisia tai virheidenkäsittelyvaiheita.

Molemmat ovat tehokkaita ja niitä voidaan käyttää hyvin; valinta riippuu usein luettavuudesta ja koodisi kontekstista. Async/await voi johtaa puhtaampaan koodiin, erityisesti kun käsitellään upotettuja lupauksia tai monimutkaista virheenkäsittelyä.
