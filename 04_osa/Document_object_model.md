![DOM-kuva](../kuvat/DOM-model.svg)

lähde: [wikipedia](https://en.wikipedia.org/wiki/Document_Object_Model)

**DOM eli _Document Object Model_** on tapa, jolla selain esittää HTML-dokumentin rakenteen ja sisällön JavaScript-koodin avulla. Se muodostaa hierarkisen puurakenteen, jossa jokainen HTML-elementti, kuten otsikko, kappale tai linkki, on esitetty "solmuna". JavaScript voi sitten käyttää DOMia näiden solmujen kautta, mikä mahdollistaa HTML-sisällön dynaamisen muokkaamisen ja vuorovaikutuksen käyttäjän kanssa.

Kuvittele DOMia kuin puumaisena hierarkiana, jossa juurisolmuna on `document`, ja siitä haarautuvat erilaiset elementtisolmut, kuten `div`, `p`, `a` jne. Jokaisella näistä solmuista voi olla lapsisolmuja, jotka edustavat sen sisältöä, kuten tekstiä, muita elementtejä tai jopa skriptejä. JavaScript voi etsiä, lisätä, poistaa tai muuttaa näitä solmuja ja niiden ominaisuuksia, mikä mahdollistaa interaktiivisten verkkosivujen luomisen.

Yleisiä käyttötapauksia ovat:

**Sivurakenteen manipulointi:** DOMin avulla voit muuttaa verkkosivun rakennetta ja sisältöä dynaamisesti JavaScriptin avulla. Voit lisätä, poistaa tai muokata HTML-elementtejä ja niiden ominaisuuksia, kuten tekstiä, tyyliä ja tapahtumakuuntelijoita.

**Käyttäjävuorovaikutuksen hallinta:** DOM mahdollistaa käyttäjien toiminnan seuraamisen ja niihin reagoimisen. Voit esimerkiksi kiinnittää tapahtumakuuntelijoita eri käyttäjätoimille, kuten klikkauksille, hiiren liikkeille ja näppäinpainalluksille, ja toteuttaa niihin vastaavat toiminnot.

**Dynaamisen sisällön luominen:** DOMin avulla voit luoda ja lisätä dynaamisesti sisältöä verkkosivuille. Tämä voi sisältää esimerkiksi uusien elementtien luomisen ja lisäämisen, tekstin tai kuvien päivittämisen ilman sivun uudelleenlatausta ja sisällön haku AJAX:lla.

**Käyttöliittymän päivitys:** DOMin avulla voit päivittää käyttöliittymän tilaa ja ulkoasua dynaamisesti käyttäjän toimien perusteella. Voit esimerkiksi muuttaa elementtien tyyliä, näyttää tai piilottaa elementtejä ja päivittää käyttöliittymän tilaa sovelluksen tilan mukaan.

**Tietojen lataaminen ja tallentaminen:** DOMin avulla voit käsitellä ja muokata verkkosivulla olevia tietoja, kuten lomakkeiden syöttöjä ja verkkopalvelun vastauksia. Voit myös tallentaa paikalliseen muistiin tietoja käyttäjän selainta varten.
