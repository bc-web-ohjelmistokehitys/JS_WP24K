# Tietojen hakeminen ja rajapinnat - aloittelijalle

JavaScriptin `fetch`-rajapintaa käytetään HTTP-pyyntöjen tekemiseen palvelimille, mikä on olennaista vuorovaikutuksessa rajapintojen (API, Application Programming Interfaces) kanssa. API:n hyödyntäminen tarkoittaa, että kun osaat lähettää pyyntösi kyseisen rajapinnan haluamassa muodossa, saat sieltä pyytämäsi tiedon. Rajapintojen tiedot ja käyttöohjeet on kirjattu niiden dokumentaatioon. Tässä on joitain esimerkkejä ja suosituksia aloittelijoille:

## Perus Fetch-pyyntö

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Virhe:", error));
```

## Async/Awaitin käyttäminen

```javascript
async function haeTiedot() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Virhe:", error);
  }
}

haeTiedot();
```

## Ilmaisia ​​harjoittelurajapintoja

1. **JSONPlaceholder** - Väärennetty verkkopohjainen REST-rajapinta testaamiseen ja prototyyppaamiseen.

   - `https://jsonplaceholder.typicode.com/posts`

2. **Kissan API** - Saat satunnaisia kissakuvia.

   - `https://api.thecatapi.com/v1/images/search`

3. **OpenWeatherMap** - Pääsy nykyisen sään tietoihin missä tahansa sijainnissa.
   - `https://api.openweathermap.org/data/2.5/weather?q=London&appid=sinun_api_avaimesi`

## Suositukset aloittelijoille

- Aloita yksinkertaisilla GET-pyyynnöillä ymmärtääksesi, miten rajapinnat toimivat.
- Käytä JSONPlaceholderia tai Kissan API:a, koska ne eivät vaadi todennusta.
- Varmista virheiden käsittely `.catch()`-funktiolla tai try/catchin kanssa async/awaitin kanssa.
- Harjoittele API-dokumentaation lukemista ymmärtääksesi, miten rakennat pyyntösi oikein.
