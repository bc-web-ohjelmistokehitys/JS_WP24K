Ohjelman käytettämät arvot voidaan JavaScriptissä tallentaa muuttujiin, taulukoihin ja olioihin, joilla kaikilla on omat käyttötarkoituksensa ja ominaisuutensa.

1. **Muuttujat:**

   - Englanniksi _variable_
   - Tallentavat yhden arvon kerrallaan.
   - Tieto voi olla numero, merkkijono tai totuusarvo.
   - Luodessa käytetään `let`, `const` ja `var` (vältä tätä viimeistä)
   - `Let` ja `var` muuttujan arvo voidaan muuttaa sen määrittämisen jälkeen.
   - `Const` vakiomuuttujan arvoa ei voi muuttaa.

   ```javascript
   let count = 25;
   count = 26;
   ```

2. **Taulukot:**

   - Englanniksi _array_
   - Kokoelma tiedoista, jotka tallennetaan järjestyksessä.
   - Tiedot voivat olla keskenään eri tyyppiä
   - Taulukossa olevilla tiedoilla on indeksinumero, jonka avulla niihin voidaan viitata. Indeksi alkaa nollasta.
   - Taulukon sisältöä voidaan muuttaa, kuten lisätä uusia alkioita, poistaa olemassa olevia tai muuttaa niiden arvoja.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const fruits = ["apple", "banana", "orange"];
   const misc = [15, "word", true, "multiple words"];

   console.log(fruits[1]); // tulostaa: banana
   ```

3. **Oliot:**

   - Englanniksi _object_
   - Niihin tallennetut tiedot ovat avain-arvo -pareina.
   - Olioita käytetään, kun halutaan edustaa ja käsitellä monimutkaisempia tietoja, kuten käyttäjätietoja tai sovelluksen komponentteja.
   - Olioiden ominaisuuksia voidaan muuttaa, ja niitä voidaan käyttää metodien avulla suorittamaan toimintoja niiden sisällön perusteella.

   ```javascript
   let person = {
     name: "John",
     age: 30,
     city: "New York",
   };

   console.log(person.city); // Tulostaa: New York
   ```

   - Lisää oliosta tässä osassa.
