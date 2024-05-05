# DOM:n muokkaaminen

DOM:n muokkaaminen on olennainen osa JavaScriptin käyttöä verkkosivujen vuorovaikutteisuuden ja toiminnallisuuden parantamisessa. Ymmärtämällä, miten muuttaa DOM:ia, voit dynaamisesti lisätä, poistaa ja muokata elementtejä sekä niiden tyylejä verkkosivullasi.

## `classList`-olio

`classList` on read-only -ominaisuus, joka palauttaa elementin luokka-attribuuttien ajankohtaisen DOMTokenList-kokoelman. Sitä käyttömällä voidaan lisätä, poistaa ja kytkeä CSS-luokkia elementtiin.

### Luokan lisääminen

Voit lisätä luokan elementtiin käyttämällä `add`-metodia:

```javascript
document.getElementById("myElement").classList.add("myClass");
```

Tämä koodi lisää luokan `myClass` elementtiin, jolla on ID `myElement`.

### Luokan poistaminen

Vastaavasti voit poistaa luokan elementistä:

```javascript
document.getElementById("myElement").classList.remove("myClass");
```

Tämä poistaa `myClass`:n elementistä, muuttaen sen tyyliä, jos `myClass` oli sovellettu CSS:ssä.

### Luokan vaihtelu

`toggle`-metodi joko lisää luokan, jos sitä ei ole, tai poistaa sen, jos se on:

```javascript
document.getElementById("myElement").classList.toggle("myClass");
```

Tämä on erityisen hyödyllinen interaktiivisten ominaisuuksien, kuten pudotusvalikoiden tai night/day mode -teemojen toteuttamisessa.

## `window.onscroll` -tapahtumien käsittely

`window.onscroll` -tapahtuma laukeaa aina, kun ikkunaa vieritetään, ja sitä voidaan käyttää luomaan dynaamisia efektejä, kuten navigointipalkin piilottaminen tai näyttäminen:

```javascript
window.onscroll = function () {
  // Logiikkasi tähän
};
```

Esimerkiksi voit muuttaa navigointipalkin tyyliä vieritysaseman perusteella:

```javascript
window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
```

## Tyylien muokkaaminen JavaScriptillä

JavaScript mahdollistaa HTML-elementtien tyylimääritysten suoran muokkaamisen. Tämä tapahtuu käyttämällä elementin `style` -ominaisuutta:

```javascript
document.getElementById("myElement").style.backgroundColor = "blue";
```

Tämä koodirivi muuttaa elementin, jolla on tunniste `myElement`, taustavärin siniseksi. Tämä on voimakas ominaisuus, jota tulisi käyttää harkiten, sillä JavaScriptin lisäämät tyylit voivat korvata CSS-tiedostossa määritellyt tyylit.

### Useiden tyylimääritysten asettaminen

Voit myös asettaa useita tyylimäärityksiä ketjuttamalla ne yhteen:

```javascript
var myElement = document.getElementById("myElement");
myElement.style.color = "white";
myElement.style.backgroundColor = "black";
myElement.style.padding = "10px";
```

Tämä muuttaa `myElement`:in tekstivärin, taustavärin ja täytön.

## Hidastaminen ja hillitseminen

Hidastamisen ja hillitsemisen ymmärtäminen on olennaista verkkosovellusten optimoinnissa, erityisesti käsiteltäessä tapahtumia, jotka voivat laueta usein, kuten vieritys-, koonmuutos- tai näppäinpainallustapahtumat. Näiden tekniikoiden käyttö voi merkittävästi parantaa verkkosovelluksen suorituskykyä ja käyttäjäkokemusta.

### Hidastaminen (Throttling)

Hidastaminen on tekniikka, jota käytetään rajoittamaan funktion suorituskertojen määrää tietyn ajanjakson aikana. Tämä on erityisen hyödyllistä kontrolloitaessa sitä vauhtia, jolla funktio suoritetaan vastauksena tapahtumaan.

Hidastaminen varmistaa, että funktio suoritetaan enintään kerran määritellyn millisekuntimäärän välein. Tämä tarkoittaa, että funktio suoritetaan säännöllisesti, mutta ei useammin kuin hidastuskynnys sallii.

#### Käyttötapaukset

- **Vieritystapahtumat:** Estä vieritystapahtumien liiallista käsittelyä toimintoihin, kuten elementtien näyttämiseen tai piilottamiseen vieritysaseman perusteella.
- **Ikkunan koonmuutos:** Rajoita ikkunan koonmuutostapahtuman takaisinkutsun suoritusnopeutta välttääksesi suorituskyvyn pullonkauloja selaimen ikkunan koonmuutosten aikana.

```javascript
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
```

Tämä funktio varmistaa, että `func` suoritetaan enintään kerran `limit` millisekunnin välein.

[Lue lisää dev.to:sta](https://dev.to/jeetvora331/throttling-in-javascript-easiest-explanation-1081)

### Hillitseminen (Debouncing)

Hillitseminen on tekniikka, joka lykkää funktion suoritusta tietyn ajan kuluttua siitä, kun se on viimeksi kutsuttu. Tämä on erityisen hyödyllistä tapahtumille, joita haluat käsitellä vasta jonkin hiljaisen ajan kuluttua, kuten kirjoittamisen tauon jälkeen.

Hillitseminen varmistaa, että funktiota ei kutsuta uudelleen, ennen kuin tietty aika on kulunut ilman sen kutsua. Tämän seurauksena funktio kutsutaan vasta tapahtuman pysähtymisen jälkeen määritellyn keston kuluttua.

### Käyttötapaukset

- **Hakupalkin syöte:** Odota, että käyttäjä lopettaa kirjoittamisen ennen kuin teet AJAX-pyyntöä ehdotusten automaattista täydennystä varten.
- **Ikkunan koonmuutos:** Viivästä takaisinkutsufunktion suoritusta, kunnes koonmuutokset ovat loppuneet, välttääksesi tarpeettomia laskelmia tai päivityksiä.

```javascript
function debounce(func, delay) {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
}
```

Tämä funktio varmistaa, että `func` suoritetaan vasta sen jälkeen, kun on kulunut määritelty `delay` aika viimeisestä kerrasta, kun jarrutettu funktio kutsuttiin.

[Lue lisää dev.to:sta](https://dev.to/jeetvora331/javascript-debounce-easiest-explanation--29hc)

Sekä hidastaminen että hillitseminen ovat olennaisia tekniikoita tapahtumapohjaisen koodin optimoinnissa JavaScriptissä. Ymmärtämällä ja soveltamalla näitä käsitteitä kehittäjät voivat parantaa verkkosovellusten suorituskykyä ja reagointikykyä, varmistaen sujuvan ja tehokkaan käyttäjäkokemuksen. Valitse tekniikka, joka parhaiten sopii tilanteeseesi. Joskus molempien yhdistelmä voi olla tehokkain ratkaisu.
