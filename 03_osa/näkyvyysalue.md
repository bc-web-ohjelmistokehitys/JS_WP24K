# Scope eli näkyvyysalue

Scope JavaScriptissä viittaa muuttujien ja funktioiden saavutettavuuteen eri osissa koodiasi. Se määrittää, missä muuttujat ja funktiot voivat olla saatavilla tai viitattavissa.

## Scope-tyypit

- **`Globaali scope:`** Muuttujat, jotka on määritelty ilman minkään funktion tai lohkon sisällä, ovat globaalissa scope'ssa ja niihin pääsee käsiksi mistä tahansa koodissa.

- **`Paikallinen (funktion) scope`**: Funktion sisällä määritellyt muuttujat ovat paikallisessa scopessa ja niihin pääsee käsiksi vain kyseisen funktion sisällä.

- **`Lohko scope (ES6)`**: ES6:ssa esitellyt let- ja const-määrittelyt ovat lohkon scopessa, mikä tarkoittaa, että niihin pääsee käsiksi vain lohkossa, jossa ne on määritelty.

## Hoisting JavaScriptissä

Hoisting on JavaScriptin oletuskäyttäytymistapa, jossa määrittelyt siirretään nykyisen scopen alkuun. Se mahdollistaa funktioiden ja muuttujien käytön ennen niiden määrittelyä.

### Esimerkkejä scopesta ja hoistingista

Esimerkki globaalista näkyvyysalueesta eli scopesta:

```js
let globalVar = "Olen globaali muuttuja";

function exampleFunction() {
  console.log(globalVar); // Saatavilla täällä
}

console.log(globalVar); // Myös saatavilla täällä
```

### Paikallisen näkyvyysalueen eli scopen esimerkki:

```js
function exampleFunction() {
  let localVar = "Olen paikallinen muuttuja";
  console.log(localVar); // Saatavilla täällä
}

console.log(localVar); // Virhe: localVaria ei ole määritelty (ReferenceError: localVar is not defined)
```

### Lohkonäkyvyysalueen eli lohkoscopen esimerkki (ES6):

```js
if (true) {
  let blockVar = "Olen lohkoscope-muuttuja";
  console.log(blockVar); // Saatavilla täällä
}

console.log(blockVar); // Virhe: blockVaria ei ole määritelty (ReferenceError: blockVar is not defined)
```

### Hoisting-esimerkki:

```js
console.log(hoistedVar); // undefined
var hoistedVar = "Olen hoistattu";

function hoistedFunction() {
  console.log("Olen hoistattu");
}
hoistedFunction(); // Toimii hyvin
```

### Parhaat käytännöt

- Suosi let- ja const-muuttujia var-muuttijien sijaan välttääksesi hoistauksen aiheuttamia ei-toivottuja seurauksia.
- Määrittele muuttujat niiden scopen alussa selkeyden vuoksi.
- Pidä globaalit muuttujat minimissä välttääksesi globaalin nimiavaruuden sotkeutumisen.

### Yleiset sudenkuopat

- Et ymmärrä var-, let- ja const-muuttujien eroja.
- Vahingossa ylikirjoittaa globaalit muuttujat, kun ei hahmota niiden scopea.
- Olettaa, että lohkoscope-muuttujat (let ja const) käyttäytyvät samalla tavalla kuin funktioscope-muuttujat (var).
