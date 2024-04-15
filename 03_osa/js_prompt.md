# JavaScript Prompt

Prompt on JavaScriptin toiminto, joka näyttää käyttäjälle pienen ikkunan, jossa voi syöttää tekstiä tai numeroita. Kun käyttäjä syöttää jotain ja painaa OK-painiketta, prompt palauttaa sen syötetyn arvon. Tätä arvoa voi sitten käyttää ohjelmassa esimerkiksi laskemiseen, tallentamiseen tai näyttämiseen käyttäjälle.

### Prompt aukeaa selaimessa

Prompt ei toimi konsolissa, vaan selainikkunassa. Prompt-tehtäviä varten tarvitsee siis tehdä html-tiedosto ja liittää JavaScript koodi siihen. Näissä harjoituksissa voit tehdä scriptin html-tiedostoon, vaikka yleensä sitä ei suositella.

```htlm
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Esimerkki promptin käytöstä</title>
  <script src="script.js" defer></script>
</head>
<body>
  Toiminnot konsolissa
</body>
</html>
```

Näiden tehtävien testaamiseen käytetään Code Runnerin sijasta Live serveriä ja konsoli löytyy selaimen kehittäjätyökaluista eli devtoolseista. 

### Esimerkki promptin käytöstä

```js
let name = prompt("Anna nimesi:");
console.log("Hei vaan " + name + "!");
```

Tämä aukaisee ikkunan, joka pyytää käyttäjältä syötettä ja sisällyttää sen console.log tulosteeseen.
