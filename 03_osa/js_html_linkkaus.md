## JavaScriptin yhdistäminen html-tiedostoon

Kun skripti on omassa tiedostossaan (suositus), se pitää linkittää html-tiedostoon. Tähän on kaksi suositusta:

### Tiedoston lopussa

Linkitä tiedosto html-tiedoston loppuun, viimeisenä elementtinä bodyn sisällä

```html
  <body>
    <p>Ipsam accusantium atque quisquam beatae quos fuga vitae laudantium laborum. Architecto, perspiciatis obcaecati. Commodi, nostrum.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Headissä + defer

Toinen nykyään suosittu vaihtoehto on laittaa linkitys jo html-tiedoston headin sisälle. Silloin yleensä tarvitaan myös määrite **defer**. Ilman sitä skripti tapahtuu sivun latautuessa, eikä enää reagoi käyttäjän toimiin kuten klikkauksiin.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="script.js" defer></script>
  <title>Scriptin paikka esimerkki</title>
</head>
```

Kumpi vain käy, kunhan muistaa linkityksen. Jos sivusi scripti ei toimi ollenkaan, varmista tämä asia!
